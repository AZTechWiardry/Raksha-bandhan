import React, { useEffect, useRef, useState } from 'react';
import './GreetingCard.css';

const fullMessage = `
Dear Apoorva & Amruta Didi,

On this special occasion of Raksha Bandhan, I want to express how much you both mean to me. Your love, your support, and your constant encouragement brighten my life every day.

Thank you for all the laughter, care, and countless beautiful memories we’ve shared. I promise to always be there to protect and support you both through every step of life.

With all my love,
Your Brother ❤️
`;

const GreetingCard = () => {
  const audioRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.6; // Set volume to 50%
    audio.play().catch((e) => {
      console.warn('Autoplay blocked. Music will play on user interaction.', e);
    });
  }, []);

  useEffect(() => {
    if (index < fullMessage.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullMessage[index]);
        setIndex(index + 1);
      }, 30); // Typing speed in ms
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="card-fullscreen">
      <audio ref={audioRef} src="/rakhi-music.mp3" loop />
      <div className="letter-box">
        <pre className="typed-message">{typedText}</pre>
      </div>
    </div>
  );
};

export default GreetingCard;
