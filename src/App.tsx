import { useState } from "react";
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { FeaturedCard } from "./components/FeatureCard"
import "./App.css"

function App() {
  const [georges, setGeorges] = useState(0);
  const [registered, setRegistered] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const currentCard = activeCard % 3;

  return (
    <>
      <Navbar />
      <HeroSection />
  
      <div className="carousel-scene">
          <div
             className="carousel"
             style={{
               transform: `rotateY(${-activeCard * 120}deg)`,
             }}
           >  
          
          <div className="carousel-card">
            <FeaturedCard
              title="Speed"
              description="Push your limits and master the road"
              image="/speed.png"
            />
        </div>

          <div className="carousel-card">
            <FeaturedCard
              title="Earn Georges"
              description="Race, compete, and earn Georges, the digital currency of Artega"
              image="/georges.png"
            />
          </div>

          <div className="carousel-card">
            <FeaturedCard
              title="World Ranking"
              description="Race to compete on the world stage and serve your nation!"
              badge="Copper Status Required"
              image="ranking.png"
            />
          </div>
        </div>    
      </div>  
        
        <button onClick={() => setActiveCard((prev) => prev + 1)}>
          ❯
        </button>

        <div className="carousel-dots">
          <span className={currentCard === 0 ? "dot active" : "dot"}></span>
          <span className={currentCard === 1 ? "dot active" : "dot"}></span>
          <span className={currentCard === 2 ? "dot active" : "dot"}></span>
        </div>
        

        

        <p>Georges Balance: {georges}</p>

        <button
          title="Enter - minus 1 George"
          onClick={() => {
            if (!registered) {
              setGeorges(georges - 1);
              setRegistered(true);

              const warningVoice = new SpeechSynthesisUtterance(
                "Warning. Failure to place in the top ten will result in deportation."
              );

              warningVoice.rate = 0.85;
              warningVoice.pitch = 0.8;

              window.speechSynthesis.speak(warningVoice);

            }
          }}
        >
          Register for Race
        </button>

        {georges < 0 && (
          <p>
            WARNING: Failure to place in the Top ten will result in deportation.
          </p>
        )}

        
      </>
    )
  }

export default App