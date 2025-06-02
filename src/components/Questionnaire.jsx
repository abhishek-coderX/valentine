import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Questionaire.css";

const Questionnaire = () => {
  const navigate = useNavigate();
  const [showQuestion, setShowQuestion] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelection = (status) => {
    setIsAnimating(true);
    setShowQuestion(false);
    
    setTimeout(() => {
      if (status === "single") {
        navigate("/single");
      } else {
        navigate("/love-test");
      }
    }, 1000); // Wait for animation to complete
  };

  const questions = [
    {
      id: "relationship",
      text: "Are you single or in a relationship?",
      options: [
        { value: "single", emoji: "💔", text: "I'm Single" },
        { value: "couple", emoji: "❤️", text: "I'm in Love" }
      ]
    }
  ];

  return (
    <div className={`questionnaire-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      <div className="hearts-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="floating-heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}>
{ i % 6 === 0 ? '💝💘💖' : i % 5 === 0 ? '💜💛💚' : i % 4 === 0 ? '💞💕' : i % 3 === 0 ? '💗💓' : i % 2 === 0 ? '❤️✨' : '💖🌟'}
</div>
        ))}
      </div>

      <div className="content-wrapper">
        <h1 className="title">
          <span className="emoji">💘</span>
          Valentine's Day Special
          <span className="emoji">💘</span>
        </h1>
        
        {showQuestion && (
          <div className="question-section">
            <p className="question-text">{questions[0].text}</p>
            <div className="buttons-container">
              {questions[0].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelection(option.value)}
                  className={`btn ${option.value}`}
                >
                  <span className="btn-emoji">{option.emoji}</span>
                  <span className="btn-text">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;