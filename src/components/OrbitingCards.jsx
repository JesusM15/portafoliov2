import React, { useState, useRef, useEffect } from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaDatabase, FaMobileAlt, FaJs, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiSocketdotio,  SiMongodb, SiPostgresql, SiTensorflow, SiArduino, SiRedux, SiNextdotjs, SiExpress } from 'react-icons/si';
import './OrbitingCards.css';
import { IoHardwareChip } from "react-icons/io5";

const OrbitingCards = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const carouselRef = useRef(null);

  const cards = [
    {
      id: 1,
      icon: <FaDocker className="text-4xl text-blue-500" />,
      title: "Docker",
      description: "Containerization",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      icon: <FaAws className="text-4xl text-orange-500" />,
      title: "AWS",
      description: "Cloud Services",
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 3,
      icon: <FaJs className="text-4xl text-yellow-400" />,
      title: "JavaScript",
      description: "Frontend & Backend",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 4,
      icon: <FaDatabase className="text-4xl text-green-500" />,
      title: "Databases",
      description: "SQL & NoSQL",
      color: "from-green-500 to-green-700"
    },
    {
      id: 5,
      icon: <SiSocketdotio className="text-4xl text-purple-500" />,
      title: "Real-time",
      description: "WebSockets",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 6,
      icon: <IoHardwareChip className="text-4xl text-gray-400" />,
      title: "Hardware",
      description: "IoT & Embedded",
      color: "from-gray-400 to-gray-600"
    },
    {
      id: 7,
      icon: <FaPython className="text-4xl text-blue-600" />,
      title: "Python",
      description: "Backend & AI",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 8,
      icon: <FaMobileAlt className="text-4xl text-pink-500" />,
      title: "Mobile Apps",
      description: "React Native",
      color: "from-pink-500 to-pink-700"
    },
    {
      id: 9,
      icon: <FaGitAlt className="text-4xl text-red-500" />,
      title: "Git",
      description: "Version Control",
      color: "from-red-500 to-red-700"
    }
  ];

  const handleCardClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
      setIsPaused(false);
    } else {
      setSelectedCard(cardId);
      setIsPaused(true);
    }
  };

  useEffect(() => {
    if (!isPaused && carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    } else if (isPaused && carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'paused';
    }
  }, [isPaused]);

  return (
    <div className="carousel-3d-container">
      <div 
        ref={carouselRef}
        className={`carousel-3d ${isPaused ? 'paused' : ''}`}
        style={{ '--total-cards': cards.length }}
      >
        {/* Sun in the center of carousel */}
        <div className={`sun-in-carousel ${isPaused ? 'paused' : ''}`}>
          <div className="sun-core">
            <div className="sun-surface">
              <div className="sun-glow"></div>
              <div className="sun-pulse"></div>
            </div>
          </div>
        </div>

        {cards.map((card, index) => {
          // Calculate z-factor based on rotation angle
          const rotationAngle = (360 / cards.length) * index;
          const zFactor = Math.sin((rotationAngle * Math.PI) / 180) * 20;
          
          return (
            <div
              key={card.id}
              className={`carousel-card ${selectedCard === card.id ? 'selected' : ''}`}
              style={{
                '--card-index': index,
                '--rotation-angle': `${rotationAngle}deg`,
                '--z-factor': zFactor
              }}
              onClick={() => handleCardClick(card.id)}
            >
            <div className={`card-gradient ${card.color}`}>
              <div className="card-content">
                <div className="card-icon">
                  {card.icon}
                </div>
                <div className="card-text">
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
              {selectedCard === card.id && (
                <div className="card-selected-indicator">
                  <span>✓</span>
                </div>
              )}
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitingCards;
