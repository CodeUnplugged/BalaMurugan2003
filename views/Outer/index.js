import React from 'react'
import Gooery from '../../components/GooeryAnimation'
import DecryptText from '../../components/DecryptText'
import PropTypes from 'prop-types'


const Outer = ({ data: {
    title1,
    title2,
    decrypTexts,
    desciption,
    button
} }) => {
    return (
        <div className='ai-outer'>
            <div className='container'>
                <div className='ai-outer-container d-flex justify-content-between align-items-center'>
                    <div className='ai-outer-text'>
                        <div className='ai-outer-heading'>
                            {title1}
                        </div>
                        <div className='ai-outer-heading'>
                            {title2}
                        </div>
                        <div className='ai-outer-heading2'>
                            <DecryptText
                                values={decrypTexts}
                            />
                        </div>
                        <div className='ai-outer-description'>
                            {desciption}
                        </div>
                        <div className='ai-outer-contact'>
                            <button onClick={button?.onClick} className='ai-button'>
                                {button?.label}
                            </button>
                        </div>
                    </div>
                    <div className='ai-outer-image'>
                        <img src={"/assets/profile_pic.jpeg"} alt="Illustration" className="ai-image" />
                   </div>
                    <div className='ai-outer-gooery'>
                        <Gooery />
                    </div>
                </div>
            </div>
        </div>
    )
}

Outer.propTypes = {}

export default Outer


// import React from 'react'
// import Gooery from '../../components/GooeryAnimation'
// import DecryptText from '../../components/DecryptText'
// import PropTypes from 'prop-types'

// const Outer = ({ data: { title1, title2, decrypTexts, description, button, image } }) => {
//     return (
//         <div className='ai-outer'>
//             <div className='container'>
//                 <div className='ai-outer-container d-flex justify-content-between align-items-center'>
//                     {/* Left Side - Text Content */}
//                     <div className='ai-outer-text'>
//                         <div className='ai-outer-heading'>{title1}</div>
//                         <div className='ai-outer-heading'>{title2}</div>
//                         <div className='ai-outer-heading2'>
//                             <DecryptText values={decrypTexts} />
//                         </div>
//                         <div className='ai-outer-description'>{description}</div>
//                         <div className='ai-outer-contact'>
//                             <button onClick={button?.onClick} className='ai-button'>
//                                 {button?.label}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Side - Image */}
//                     <div className='ai-outer-image'>
//                     <img src={"/assets/profile_pic.jpeg"} alt="Illustration" className="ai-image" />

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// Outer.propTypes = {
//     data: PropTypes.shape({
//         title1: PropTypes.string,
//         title2: PropTypes.string,
//         decrypTexts: PropTypes.arrayOf(PropTypes.string),
//         description: PropTypes.string,
//         button: PropTypes.shape({
//             label: PropTypes.string,
//             onClick: PropTypes.func
//         }),
//         image: PropTypes.string // URL for the image
//     })
// }

// export default Outer
