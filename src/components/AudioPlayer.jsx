import React, { useState, useEffect, useRef } from 'react';
import playIcon from '../assets/img/dtsp.jpg';
import pauseIcon from '../assets/img/dtsp.jpg';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize audio object on component mount    
        // const audioRef = useRef(new Audio('https://www.dropbox.com/scl/fi/lu9kj8k7lxinvsqlqd6kg/davidtaosp.mp3?rlkey=hrrcdtr5bcqud3fmjqfrggpy3&dl=1'));

        audioRef.current = new Audio('https://www.dropbox.com/scl/fi/lu9kj8k7lxinvsqlqd6kg/davidtaosp.mp3?rlkey=hrrcdtr5bcqud3fmjqfrggpy3&dl=1');
        // Event listeners for the audio to manage play/pause state
        const audio = audioRef.current;
        audio.onplay = () => setIsPlaying(true);
        audio.onpause = () => setIsPlaying(false);

        return () => {
            audio.pause(); // Pause audio on component unmount
            audio.onplay = null; // Cleanup event listeners
            audio.onpause = null;
        };
    }, []);

    const togglePlay = async () => {
        if (audioRef.current) {
            try {
                if (audioRef.current.paused) {
                    await audioRef.current.play();
                } else {
                    audioRef.current.pause();
                }
            } catch (error) {
                console.error("Error attempting to toggle audio play state:", error);
            }
        }
    };

    return (
        <div className="audio-player">
            <button className="audio-control" onClick={togglePlay}>
                <img
                    src={isPlaying ? pauseIcon : playIcon}
                    className={`audio-icon ${isPlaying ? 'rotating' : 'paused'}`}
                    alt={isPlaying ? 'Pause' : 'Play'}
                />
            </button>
        </div>
    );
};

export default AudioPlayer;
