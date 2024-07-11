import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Chatting from "../../../public/img/chat.png";
import './ChatAI.css'; 

export const ChatAI = () => {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "Đại học FPT",
    "Ngành bán dẫn của đại học FPT",
    "Ưu điểm khi học AI tại đại học FPT"
  ]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);

  useEffect(() => {
    if (isChatOpen && conversation.length === 0) {
      setConversation([
        { sender: "ai", text: "Xin chào, tôi là chatbot của Ổ kiến lửa, tôi có thể giúp gì được cho bạn?" }
      ]);
    }
  }, [isChatOpen]);

  async function generateAnswer(e, selectedSuggestion) {
    e.preventDefault();
    const userQuestion = selectedSuggestion || question;
    if (!userQuestion.trim()) return;

    const newConversation = [...conversation, { sender: "user", text: userQuestion }];
    setConversation(newConversation);
    setQuestion("");
    setGeneratingAnswer(true);
    setSuggestionsVisible(false); // Ẩn các đề xuất sau khi chọn

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: userQuestion }] }],
        },
      });

      const answer = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      setConversation([...newConversation, { sender: "ai", text: answer }]);
    } catch (error) {
      console.log(error);
      setConversation([...newConversation, { sender: "ai", text: "Sorry - Something went wrong. Please try again!" }]);
    } finally {
      setGeneratingAnswer(false);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer(e);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-50 to-orange-100 z-21">
      <div
        className={`fixed bottom-4 right-4 bg-white shadow-lg rounded-lg ${isChatOpen ? "w-96 h-3/4" : "w-16 h-16"
          } transition-all duration-300 overflow-hidden`}
      >
        <div
          className="w-full h-full flex flex-col"
          onClick={() => !isChatOpen && setIsChatOpen(true)}
        >
          {isChatOpen && (
            <>
              <div className="flex justify-between items-center p-2 border-b">
                <h2 className="text-lg font-bold" style={{ color: '#D97706' }}>Chat AI</h2>
                <button
                  className="hover:text-gray-700"
                  style={{ color: '#6B7280' }}
                  onClick={() => setIsChatOpen(false)}
                >
                  &times;
                </button>
              </div>
              <div className="flex-grow p-4 overflow-y-auto">
                <div className="chat-container">
                  {conversation.map((msg, index) => (
                    <div
                      key={index}
                      className={msg.sender === "user" ? "user-message" : "ai-message"}
                    >
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ))}
                </div>
                {generatingAnswer && (
                  <div
                    className="ai-message"
                    style={{ backgroundColor: '#F3F4F6', color: '#1F2937' }}
                  >
                    <ReactMarkdown>...</ReactMarkdown>
                  </div>
                )}
              </div>
              {suggestionsVisible && (
                <div className="p-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="suggestion-button"
                      onClick={(e) => generateAnswer(e, suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <form
                onSubmit={generateAnswer}
                className="flex items-center p-2"
              >
                <input
                  type="text"
                  required
                  className="border rounded w-full min-h-fit p-2 transition-all duration-300 focus:shadow-lg"
                  style={{ borderColor: '#D1D5DB', focusBorderColor: '#F97316' }}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message"
                ></input>
                <button
                  type="submit"
                  className={`ml-2 p-2 rounded-md transition-all duration-300 ${generatingAnswer ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
                    }`}
                  style={{ backgroundColor: '#F97316', color: '#FFFFFF' }}
                  disabled={generatingAnswer}
                >
                  Send
                </button>
              </form>
            </>
          )}
          {!isChatOpen && (
            <button
              className="w-full h-full flex items-center justify-center p-0 m-0 bg-transparent border-none"
              onClick={() => setIsChatOpen(true)}
            >
              <img src={Chatting} alt="Chat Icon" className="w-10 h-10" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatAI;
