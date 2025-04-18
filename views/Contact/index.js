
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParallax } from 'react-scroll-parallax';
import Star from '../../components/SVGs/Star';
import GitFork from '../../components/SVGs/GitFork';

const Contact = ({ data: {
    label,
    heading,
    description,
    button,
    handleBuiltByClick,
    designAndBuiltBy,
} }) => {
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        fetch('https://api.github.com/repos/afzalimdad9/animated-portfolio')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    const { ref } = useParallax({
        easing: 'easeIn',
        translateX: [-50, 0],
    });

    return (
        <div className='ai-contact'>
            <div
                ref={ref}
                className='ai-contact-zebra-img'
                style={{
                    backgroundImage: `url(${'/assets/arrow-sample.svg'})`,
                }}>
            </div>
            <div className='ai-contact-box'>
                <div className='container flex-center flex-column'>
                    <div className='ai-contact-box-width'>
                        <div className='ai-contact-label'>{label}</div>
                        <div className='ai-contact-title'>{heading}</div>
                        <div className='ai-contact-text'>{description}</div>
                        
                        {/* Public Speaker Website Content Form */}
                        <form className='ai-contact-form form-highlight' id="ai-contact-form"  action="https://formspree.io/f/mnnjdevp" method="POST">
                            <div className='form-group'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' id='name' name='name' placeholder='Enter your name' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' name='email' placeholder='Enter your email' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='topic'>Preferred Topics</label>
                                <input type='text' id='topic' name='topic' placeholder='Enter topics of interest' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' name='message' rows='4' placeholder='Share details about the event or requirements'></textarea>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='ai-button'>Submit</button>
                            </div>
                        </form>

                        <div className='ai-contact-button'>
                            <button onClick={button?.onClick} className='ai-button'>
                                {button?.label}
                            </button>
                        </div>
                        <div onClick={handleBuiltByClick} className='ai-contact-git-section'>
                            <div>{designAndBuiltBy}</div>
                            {!!(githubInfo.stars && githubInfo.forks) && (
                                <div>
                                    <span>
                                        <Star />
                                        <>{' '}{githubInfo.stars.toLocaleString()}</>
                                    </span>
                                    {' '}
                                    <span>
                                        <GitFork />
                                        <>{' '}{githubInfo.forks.toLocaleString()}</>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Contact.propTypes = {};

export default Contact;
