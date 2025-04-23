import { useEffect } from 'react';
import sound from '../../public/sound/horrorSound.mp3'

export default function BackgroundMusic() {
    useEffect(() => {
        const audio = new Audio(sound);
        audio.loop = true;
        audio.volume = 0.4;

        const playAudio = () => {
            audio.play();
            document.removeEventListener('click', playAudio);
        };

        document.addEventListener('click', playAudio);

        return () => {
            audio.pause();
            audio.currentTime = 0; // Resetta il suono
        };
    }, []);

    return null;
}