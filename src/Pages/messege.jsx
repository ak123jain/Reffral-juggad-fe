import React, { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const socket = io("http://localhost:8000")

const Messege = () => {

    const { receiverId } = useParams()
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

     

    useEffect(()=>{
        socket.emit("join" , receiverId)// join the room of backend

        socket.on("messege" , (data)=>{
            setMessages((prev) => [...prev , data])
        })

        return () => {
            socket.off("messege"); // Cleanup listener
        };
    } , [receiverId])


    const sendmessege = async () =>{
        
        if (!newMessage.trim()) return;

        const token = localStorage.getItem("accessToken"); // Assuming you store it in localStorage

        try {
            const response = await axios.post(`http://localhost:8000/messege/${receiverId}/sendmessege` , {
                content: newMessage,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            console.log(response.data);
            
        } catch (error) {
            console.error("Error sending message:", error);
            
        }

    }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <div className="w-full max-w-2xl p-4 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Chat with Mentor</h2>

        {/* Message Box */}
        <div className="h-80 overflow-y-auto bg-gray-700 p-3 rounded-lg">
            {messages.length === 0 ? (
                <p className="text-gray-400">No messages yet</p>
            ) : (
                messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 my-2 rounded-md max-w-xs ${
                            msg.sender === receiverId ? "bg-teal-600 self-start" : "bg-blue-600 self-end"
                        }`}
                    >
                        {msg.content}
                    </div>
                ))
            )}
        </div>

        {/* Input Box */}
        <div className="mt-4 flex">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow p-2 rounded-l-lg bg-gray-600 text-white border-none outline-none"
            />
            <button
                onClick={sendmessege}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
            >
                Send
            </button>
        </div>
    </div>
</div>
  )
}

export default Messege