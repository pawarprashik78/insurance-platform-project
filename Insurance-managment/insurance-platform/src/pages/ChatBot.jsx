import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';

const GEMINI_API_KEY = "AIzaSyBZaxagVd3T-POafJz1DkEX6toP_DBrmTQ"; // 🔥 Hardcoded API Key

const ChatBot = () => {
  const [userPolicies, setUserPolicies] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const aadhaar = localStorage.getItem("userAadhaar") || ""; 

  useEffect(() => {
    if (!aadhaar) {
      setError('User Aadhaar not found. Please log in again.');
      return;
    }

    const fetchPolicies = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/policies/user-policies/${aadhaar}`);
        if (response.status === 200 && response.data.length > 0) {
          setUserPolicies(response.data);
        } else {
          setError('No policies found for this user.');
        }
      } catch (err) {
        setError('Failed to fetch policies. Please try again.');
      }
    };

    fetchPolicies();
  }, [aadhaar]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newMessage = { text: message, sender: 'user' };
    setMessages([...messages, newMessage]);
    setMessage('');

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY); // 🔥 Using Hardcoded API Key
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      User **Policies**:
    ${userPolicies.map((policy) => `
🔹 **Policy Name:** ${policy.policyName}  
   **Type:** ${policy.type}  
   **Provider:** ${policy.provider}  
   **Premium Amount:** ₹${policy.premiumAmount}  
   **Status:** ${policy.status}  
   **Coverage:** ${policy.coverage}  
   **Coverage Date:** ${policy.coverageDate}
`).join("\n")}

User Query: "${message}"  
 Act as a insurance portal chatbot , chat like professional chatbots.
      Please answer the question based on the above policies.please tell user about latest policies with their name and required details also mention their offical links (you can give dunny links associated with their names if not avaliable) to know more if user ask for suggestion.
      try to involve realtime policies present in markets.
      Provide a **clear and structured response** based on the above user profile and policies.
    `;
     

    try {
      const result = await model.generateContent(prompt);
      const botResponse = await result.response.text(); 

      const botMessage = { text: botResponse, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (err) {
      console.error("Error interacting with Gemini API:", err);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error occurred. Please try again later.', sender: 'bot' },
      ]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AI ChatBot</h1>
      </div>

      <div className="flex justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="h-96 overflow-y-auto mb-4">
  {messages.map((msg, index) => (
    <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
      <p
        className={`inline-block p-2 rounded-lg ${
          msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        dangerouslySetInnerHTML={{
          __html: msg.text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **bold** to <strong>bold</strong>
            .replace(/\n/g, "<br>") // Convert new lines to <br>
        }}
      />
    </div>
  ))}
</div>


          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-l-lg"
              placeholder="Ask me anything about your policies..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <center><a href='/buy-policy'>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Go Back</button>
            </a></center>
    </div>
  );
};

export default ChatBot;


/*
import { useState, useEffect } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiAPIKey = "AIzaSyBZaxagVd3T-POafJz1DkEX6toP_DBrmTQ"; // Add your Gemini API Key

const ChatBot = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userPolicies, setUserPolicies] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const aadhaar = localStorage.getItem("userAadhaar") || "";

  useEffect(() => {
    /*if (!aadhaar) {
      setError("User Aadhaar not found. Please log in again.");
      return;
    }*/

    // Fetch user profile
    /*const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/profile/${aadhaar}`
        );
        if (response.status === 200) {
          setUserProfile(response.data);
        } else {
          setError("User profile not found.");
        }
      } catch (err) {
        setError("Failed to fetch user profile.");
      }
    };

    // Fetch user policies
    const fetchPolicies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/policies/user-policies/${aadhaar}`
        );
        if (response.status === 200 && response.data.length > 0) {
          setUserPolicies(response.data);
        } else {
          setError("No policies found.");
        }
      } catch (err) {
        setError("Failed to fetch policies.");
      }
    };

    fetchUserProfile();
    fetchPolicies();
  }, [aadhaar]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newMessage = { text: message, sender: "user" };
    setMessages([...messages, newMessage]);
    setMessage("");

    // Google AI
    const genAI = new GoogleGenerativeAI(geminiAPIKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = 
      /*User Profile:
      - Age: ${userProfile?.age}
      - Gender: ${userProfile?.gender}
      - Occupation: ${userProfile?.occupation}
      - Annual Income: ${userProfile?.annualIncome}
      - Marital Status: ${userProfile?.maritalStatus}
      - Dependents: ${userProfile?.dependents}

      `User has the following insurance policies:
      ${userPolicies
        .map(
          (policy) =>
            `Policy Name: ${policy.policyName}, Type: ${policy.type}, Premium: ${policy.premiumAmount}`
        )
        .join(", ")}

      The user asked: "${message}"
        Give user answer as a professional chatbot.And provide lastest policies information with their offical links also give access to use them, when user ask for new policy suggestion.
      Please answer the question based on the user's profile and policies.
    `;

    try {
      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });

      const botMessage = {
        text: result.response.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't understand that.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (err) {
      console.error("Error interacting with Gemini API:", err);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error occurred. Please try again later.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AI ChatBot</h1>
      </div>

      <div className="flex justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className="h-96 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <p
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-l-lg"
              placeholder="Ask me anything about your policies..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;*/
 