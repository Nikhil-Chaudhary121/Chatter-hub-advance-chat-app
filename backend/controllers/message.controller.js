import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const sendMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const { message } = req.body;
    const senderId = req.user._id;

    const senderUser = await User.findById(senderId);
    const receiverUser = await User.findById(receiverId);

    if (!senderUser || !receiverUser) {
      return res.status(404).json({ error: "User not found" });
    }

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    // console.log(newMessage);
    let editedMessage = {
      createdAt: newMessage.createdAt,
      message: newMessage.message,
      receiverId: newMessage.receiverId,
      senderId: newMessage.senderId,
      updatedAt: newMessage.updatedAt,
      _id: newMessage._id,
      users: {
        sender: senderUser.fullName,
        receiver: receiverUser.fullName,
      },
    };
    // console.log(newMessage);

    //Socket.io
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", editedMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in Send Message", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const userToChatId = req.params.id;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getMessages : ", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export { sendMessage, getMessages };
