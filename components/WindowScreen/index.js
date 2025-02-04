import React from 'react'

const WindowScreen = ({ children, containerClassName }) => {
    return (
        <div className={`ai-window-screen ${containerClassName}`}>
            <div className='ai-taskbar'>
                {/* <div className='ai-circles'>
                    <div className='ai-circle ai-circle1' />
                    <div className='ai-circle ai-circle2' />
                    <div className='ai-circle ai-circle3' />
                </div> */}
                <div className='ai-url'>
                    {/* <div className='ai-url-box'>
                        Vellore Institute of Technology, Chennai
                    </div> */}
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

WindowScreen.propTypes = {}

export default WindowScreen