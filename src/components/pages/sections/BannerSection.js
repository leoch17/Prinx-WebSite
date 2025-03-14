import React, { useState, useEffect, useRef } from "react";
import '../sections/BannerSection.css';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import video1 from './videos/home-1.webm';
import video2 from './videos/videoprinxcarrosdetalle.webm';
import video3 from './videos/videoprinxcorto.webm';
import video4 from './videos/videoprinxcontitulos.mp4';
import video5 from './videos/logocentrocaucho.webm';

const BannerSection = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videos = [
        video1,
        video2,
        video3,
        video4,
        video5,

    ];
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setCurrentVideo((currentVideo + 1) % videos.length);
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        const restartPlayback = () => {
            setCurrentVideo((currentVideo + 1) % videos.length);
        };

        videoElement.addEventListener('ended', restartPlayback);

        return () => {
            videoElement.removeEventListener('ended', restartPlayback);
        };
    }, [currentVideo, videos.length]);

    return (
        <>
            <div className="banner-principal">
                <Carousel className="video-section">
                    <Carousel.Item>
                        <video ref={videoRef} className="video-home" src={videos[currentVideo]} onEnded={handleVideoEnd} autoPlay muted />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default BannerSection;