import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import myVideo from '../../assets/Wildlife of Nepal.mp4';

const VideoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 600px) {
    height: 200px; /* Mobile */
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    height: 300px; /* Tablet */
  }

  @media (min-width: 1025px) {
    height: 400px; /* Desktop */
  }
`;

const StyledVideo = styled.video`
  width: 100vw;
  object-fit: cover;
  // display: block;
  background-color: white;

  @media (max-width: 600px) {
    height: 200px; /* Mobile */
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    height: 300px; /* Tablet */
  }

  @media (min-width: 1025px) {
    height: 400px; /* Desktop */
  }
`;

const VideoComponent = ({ src = myVideo, type = 'video/mp4' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    let observer;

    if (videoElement) {
      videoElement.volume = 0.3;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoElement.play().catch((error) => {
                console.error('Error attempting to play:', error);
              });
            } else {
              videoElement.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(videoElement);

      return () => {
        if (observer) {
          observer.unobserve(videoElement);
        }
      };
    }
  }, []);

  return (
    <VideoContainer style={{backgroundColor:"white"}} >
      <StyledVideo ref={videoRef} style={{backgroundColor:"white"}}>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoContainer>
  );
};

export default VideoComponent;
