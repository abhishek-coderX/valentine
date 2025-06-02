import { useState } from 'react';
import '../styles/LoveTest.css';

const LoveCalculator = () => {
  const [step, setStep] = useState('input');
  const [formData, setFormData] = useState({
    name1: '',
    name2: '',
    birthDate1: '',
    birthDate2: '',
    favoriteColor1: '',
    favoriteColor2: ''
  });
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const colors = [
    'Red', 'Blue', 'Green', 'Purple', 'Pink', 
    'Yellow', 'Orange', 'Black', 'White'
  ];

  const calculateLoveScore = () => {
    const { name1, name2, birthDate1, birthDate2, favoriteColor1, favoriteColor2 } = formData;
    
    const combined = (name1 + name2 + birthDate1 + birthDate2 + favoriteColor1 + favoriteColor2).toLowerCase();
    let hash = 0;
    
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash = hash & hash;
    }

    const percentage = Math.abs(hash % 101);
    const nameMatch = name1.length === name2.length ? 10 : 0;
    const colorMatch = favoriteColor1 === favoriteColor2 ? 10 : 0;
    let finalScore = (percentage + nameMatch + colorMatch) % 101;
    
    return {
      score: finalScore,
      message: getLoveMessage(finalScore),
      compatibility: getCompatibilityFactors(formData)
    };
  };

  const getLoveMessage = (score) => {
    if (score >= 80) return "Perfect Match! 🔥 You were meant to be together!";
    if (score >= 60) return "Strong Connection! 💕 There's definitely potential here!";
    if (score >= 40) return "Moderate Match 💫 Give it a chance!";
    return "Keep Looking! 🌟 Sometimes friendship is better!";
  };

  const getCompatibilityFactors = (data) => {
    const factors = [];
    if (data.name1[0]?.toLowerCase() === data.name2[0]?.toLowerCase()) {
      factors.push("Same initial letters - a sign of harmony!");
    }
    if (data.favoriteColor1 === data.favoriteColor2 && data.favoriteColor1 !== '') {
      factors.push("Matching favorite colors - great minds think alike!");
    }
    if (data.birthDate1 && data.birthDate2) {
      const date1 = new Date(data.birthDate1);
      const date2 = new Date(data.birthDate2);
      if (date1.getMonth() === date2.getMonth()) {
        factors.push("Born in the same month - cosmic connection!");
      }
    }
    if (factors.length === 0) {
      factors.push("Opposites attract - your differences make you unique!");
    }
    return factors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate calculation time for better UX
    setTimeout(() => {
      const loveResult = calculateLoveScore();
      setResult(loveResult);
      setStep('result');
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setStep('input');
    setFormData({
      name1: '',
      name2: '',
      birthDate1: '',
      birthDate2: '',
      favoriteColor1: '',
      favoriteColor2: ''
    });
    setResult(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (step === 'input') {
    return (
      <div className="love-calculator-container">
        <div className="love-card">
          <h1 className="love-title">❤️ Love Calculator ❤️</h1>
          <p className="love-subtitle">Find out if you're truly meant to be!</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  required
                  type="text"
                  name="name1"
                  value={formData.name1}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Their Name</label>
                <input
                  required
                  type="text"
                  name="name2"
                  value={formData.name2}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter their name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Birth Date</label>
                <input
                  type="date"
                  name="birthDate1"
                  value={formData.birthDate1}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Their Birth Date</label>
                <input
                  type="date"
                  name="birthDate2"
                  value={formData.birthDate2}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Favorite Color</label>
                <select
                  name="favoriteColor1"
                  value={formData.favoriteColor1}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select a color</option>
                  {colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Their Favorite Color</label>
                <select
                  name="favoriteColor2"
                  value={formData.favoriteColor2}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select a color</option>
                  {colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="love-button" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-hearts">
                  <span className="loading-heart">❤️</span>
                  <span className="loading-heart">❤️</span>
                  <span className="loading-heart">❤️</span>
                </div>
              ) : (
                'Calculate Love Match 💘'
              )}
            </button>
          </form>
        </div>
        
        <div className="floating-hearts">
          {[...Array(10)].map((_, i) => (
            <span 
              key={i} 
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="love-calculator-container">
      <div className="love-card">
        <h2 className="love-title">Love Results! 💝</h2>
        
        <div className="results-container">
          <div className="love-score success-animation">
            {result.score}%
          </div>
          
          <div className="love-message">
            {result.message}
          </div>

          <div className="compatibility-factors">
            {result.compatibility.map((factor, index) => (
              <div key={index} className="factor-item">
                ✨ {factor}
              </div>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="try-again-button"
          >
            Try Again with Different Names ↺
          </button>
        </div>
      </div>
      
      <div className="floating-hearts">
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoveCalculator;