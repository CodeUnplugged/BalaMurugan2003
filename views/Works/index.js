import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'

const TabListItem = ({ text }) => (
    
    <div
    className="ai-works-tab-right-list-item"
    dangerouslySetInnerHTML={{ __html: text }}
  ></div>
)

const Tabs = ({ list }) => {
    const [selectedItemIndex, handleSelectItemIndex] = useState(0);
    const seletedItem = list[selectedItemIndex]
    return (
        <div>
            <div className='ai-works-tab'>
                <div
                    className='ai-works-left-border'>
                    <div
                        style={{
                            transform: `translateY(${selectedItemIndex * 42}px)`
                        }} className='ai-works-left-border-selection' />
                </div>
                <div className='ai-works-tab-left'>
                    {(list || []).map((item, i) => (
                        <div key={i} data-aos="zoom-in-left">
                            <div onClick={() => handleSelectItemIndex(i)}
                                className={`ai-works-tab-left-button ${selectedItemIndex === i ? 'ai-works-tab-left-button-selected' : ''}`}
                            >{item.company}</div>
                        </div>
                    ))}
                </div>
                <div className='ai-works-tab-right'>
                    {seletedItem && seletedItem.jobs.map(selectedItem => (
                        <>
                            <div
                                data-aos="zoom-in-right"
                                className='ai-works-tab-right-title'>
                                {`${selectedItem.role} @ ${seletedItem.company}`}
                            </div>
                            <div
                                data-aos="zoom-in-right" className='ai-works-tab-right-duration'>{selectedItem.duration}</div>
                            <div
                                data-aos="zoom-in-right" className='ai-works-tab-right-list tab-list-item'>
                                {(selectedItem.points || []).map((text, i) => (
                                     <TabListItem
                                     key={i}
                                     text={text.replace(
                                       /(VIT College|Saveetha Engineering College|SRM Chennai|Siemens Gamesa|Technical Speaker)/g,
                                       "<strong>$1</strong>"
                                     )}
                                   />
                                ))}
                            </div>
                        </>
                   ))}
                </div>
                
            </div>
            
        </div>
    )
}


const Works = ({ data: {
    heading,
    experiences,
} }) => {
    return (
        <div
            className='ai-works'>
            <div className='container h100per-min50vh d-flex justify-content-center'>
                <div

                    data-aos="fade-down-left"
                    className='ai-works-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <Tabs
                        list={experiences}
                    />
                </div>
            </div>
            <center>
                <div className="Jags-empty">
                    <div className="content">
                        <h2>Explore More</h2>
                        <p>Connect with me on LinkedIn to explore my professional journey, skills, and the exciting projects I'm working on. Let's network and collaborate!</p>
                        <a href="https://www.linkedin.com/in/bala-murugan-ganesan/">Explore My Network</a>
                    </div>
                </div>
            </center>
        </div>
    )
}

Works.propTypes = {}

export default Works


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import ViewsTitle from '../../components/ViewsTitle';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles-engine';

// const ParticleAnimation = () => {
//     const particlesInit = async (main) => {
//         await loadFull(main);
//     };

//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             options={{
//                 fullScreen: { enable: false },
//                 particles: {
//                     number: { value: 80 },
//                     size: { value: 3 },
//                     move: { enable: true, speed: 1 },
//                     lineLinked: { enable: true, distance: 150 },
//                 },
//             }}
//             crossOrigin="anonymous"
//             style={{ position: 'absolute', width: '100%', height: '100%' }}
//         />
//     );
// };

// const TabListItem = ({ text }) => (
//     <div
//         className="ai-works-tab-right-list-item"
//         dangerouslySetInnerHTML={{ __html: text }}
//     ></div>
// );

// const Tabs = ({ list }) => {
//     const [selectedItemIndex, handleSelectItemIndex] = useState(0);
//     const seletedItem = list[selectedItemIndex];
//     return (
//         <div>
//             <div className='ai-works-tab'>
//                 <div className='ai-works-left-border'>
//                     <div
//                         style={{
//                             transform: `translateY(${selectedItemIndex * 42}px)`
//                         }} className='ai-works-left-border-selection' />
//                 </div>
//                 <div className='ai-works-tab-left'>
//                     {(list || []).map((item, i) => (
//                         <div key={i} data-aos="zoom-in-left">
//                             <div onClick={() => handleSelectItemIndex(i)}
//                                 className={`ai-works-tab-left-button ${selectedItemIndex === i ? 'ai-works-tab-left-button-selected' : ''}`}
//                             >{item.company}</div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='ai-works-tab-right'>
//                     {seletedItem && seletedItem.jobs.map((selectedItem, index) => (
//                         <React.Fragment key={`job-${index}`}>
//                             <div
//                                 data-aos="zoom-in-right"
//                                 className='ai-works-tab-right-title'>
//                                 {`${selectedItem.role} @ ${seletedItem.company}`}
//                             </div>
//                             <div
//                                 data-aos="zoom-in-right" className='ai-works-tab-right-duration'>{selectedItem.duration}</div>
//                             <div
//                                 data-aos="zoom-in-right" className='ai-works-tab-right-list tab-list-item'>
//                                 {(selectedItem.points || []).map((text, i) => (
//                                     <TabListItem
//                                         key={`point-${i}`}
//                                         text={text.replace(
//                                             /(VIT College|Saveetha Engineering College|SRM Chennai|Siemens Gamesa|Technical Speaker)/g,
//                                             "<strong>$1</strong>"
//                                         )}
//                                     />
//                                 ))}
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Works = ({ data: { heading, experiences } }) => {
//     return (
//         <div className='ai-works'>
//             <ParticleAnimation />
//             <div className='container h100per-min50vh d-flex justify-content-center'>
//                 <div data-aos="fade-down-left" className='ai-works-container'>
//                     <ViewsTitle text={heading} />
//                     <Tabs list={experiences} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// Works.propTypes = {};

// export default Works;

