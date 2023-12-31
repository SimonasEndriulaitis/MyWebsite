import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-5.mp4' autoPlay loop muted />
            <h1>Mysteries Of The Universe Await!</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Bio
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    Projects <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;