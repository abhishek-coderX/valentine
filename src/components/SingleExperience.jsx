import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SingleExperience.css'
const SingleExperience = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isChanging, setIsChanging] = useState(false);

  const funnyMessages = [
    // Classic funny messages
    "Valentine's Day? More like Treat-Yourself Day! 🍕😂",
    "Being single means no drama, just trauma! 🎭",
    "My relationship status: Currently in a committed relationship with my bed 🛏️",
    "Single? Nah, I'm just saving myself for someone who deserves my memes 😌",
    
    // Food-related humor
    "The only date I need is the one in my cookie 🍪",
    "My true soulmate is pizza. At least it never lets me down 🍕",
    "I'm not single, I'm in a committed relationship with food delivery apps 📱",
    "Who needs chocolates when you can have the whole cake? 🎂",
    
    // Dark humor
    "My love life is like my coffee - dark, bitter, and keeps me up at night ☕",
    "Relationships are like algebra. Have you ever looked at your X and wondered Y? 📚",
    "My love life is so dark, Batman asks ME for advice 🦇",
    "They say there's plenty of fish in the sea, but I'm finding Nemo harder than expected 🐠",
    
    // Sarcastic
    "Single status: Built different, but mostly just alone 💪",
    "Not single, just extremely good at being alone 😎",
    "My friend got me a Valentine's card. It said 'Get well soon' 🤒",
    "Currently accepting applications for a fake relationship to post about online 📝",
    
    // Pop culture references
    "My relationship status is longer than a CVS receipt 🧾",
    "Single by choice... not my choice, but somebody's 🤷‍♂️",
    "Plot twist: The love of my life is actually my WiFi connection 📶",
    "My love life is like Game of Thrones - everyone I like dies 📺",
    
    // Self-deprecating
    "I'm not saying I'm Wonder Woman, but no one has ever seen me and a lonely person in the same room 🦸‍♀️",
    "I put the 'sin' in single 😈",
    "My love life is like my phone battery - always at 1% 🔋",
    "I'm not single, I'm just romantically challenged 🎯"
  ];

  const generateNewMessage = () => {
    setIsChanging(true);
    setTimeout(() => {
      setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
      setIsChanging(false);
    }, 500);
  };

  useEffect(() => {
    generateNewMessage();
  }, []);

  return (
    <div className="single-container">
      <div className="animation-wrapper">
        <div className="heartbreak-animation">💔</div>
        <div className="floating-emojis">
          {['🍕', '😂', '💔', '🍷', '🐱', '🎮'].map((emoji, index) => (
            <span 
              key={index} 
              className="floating-emoji"
              style={{
                animationDelay: `${index * 0.5}s`,
                left: `${Math.random() * 100}%`
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      <div className="content-box">
        <h1 className="single-title">
          Forever Alone Club
          <span className="membership-badge">VIP Member</span>
        </h1>
        
        <div className={`message-box ${isChanging ? 'fade-out' : 'fade-in'}`}>
          <p className="single-message">{message}</p>
        </div>

        <div className="button-group">
          <button className="btn new-quote" onClick={generateNewMessage}>
            🎲 Another Truth Bomb
          </button>
          <button className="btn try-again" onClick={() => navigate("/")}>
            🔄 Try Again
          </button>
        </div>

        <div className="fun-fact">
          <p>Did you know? Being single saves you an average of $2,340 per year on Valentine's Day gifts! 💰</p>
        </div>
      </div>
    </div>
  );
};

export default SingleExperience;