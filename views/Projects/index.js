import React from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle';

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='ai-image'
        src={src}
    />
    
)

const getSide = (index) => index % 2 ? 'left' : 'right'

const SingleProject = (props) => {
    const { image, index } = props
    const side = getSide(index);
    
    return (
        <div className='ai-projects-single'>
            <div className='row'>
                <div className='col-6 d-none d-lg-block'>
                    <div className='Jags'>
                        <img src={image} alt="Project" className="ai-projects-image-container ai-projects-image-container-right" />
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ProjectTextSide {...props} />
                </div>
            </div>
        </div>
    )
}

const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, image } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`ai-projects-text-side ai-projects-text-side-${side}`}>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-featured'
                dangerouslySetInnerHTML={{ __html: label }}
                ></div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-title'>{title}</div>
            {/* <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-description'>
                {description} */}
                
                <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-description'
                dangerouslySetInnerHTML={{ __html: description }} // HTML rendering
            />
            <div className='mt-4 d-block d-lg-none'>
                <WindowScreen containerClassName={`ai-text-image-container`}>
                    <WindowImage src={image} />
                </WindowScreen>
                {/* <div className="ai-text-image-container">
                    <img src={image} alt="Project Image" className="ai-image" />
                </div> */}
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-tecs'>
                {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
        </div>
    )
}

const Projects = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='ai-projects'>
            <div className='container'>
                <div className='ai-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(list || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {}

export default Projects

// import React from 'react';
// import PropTypes from 'prop-types';
// import HoverImage from '../../components/HoverImage';
// import ViewsTitle from '../../components/ViewsTitle';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ImageCarousel = ({ images = [] }) => {
//     if (!Array.isArray(images) || images.length === 0) {
//         return <p>No images available</p>; // Handle empty or undefined images gracefully
//     }

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//     return (
//         <Slider {...settings} className='ai-carousel'>
//             {images.map((src, i) => (
//                 <div key={i} className='ai-carousel-slide'>
//                    <HoverImage showFilter imageClassName='ai-image' src={src} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
//                 </div>
//             ))}
//         </Slider>
//     );
// };


// const getSide = (index) => index % 2 ? 'left' : 'right';

// const SingleProject = (props) => {
//     const { images, index } = props;
//     const side = getSide(index);
    
//     return (
//         <div className='ai-projects-single'>
//             <div className='row'>
//                 <div className='col-12 col-lg-6 d-flex align-items-center order-first'>
//                     <ProjectTextSide {...props} />
//                 </div>
//                 <div className='col-12 col-lg-6'>
//                     <ImageCarousel images={images} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const ProjectTextSide = (props) => {
//     const { label, title, description, techs, index } = props;
//     const side = getSide(index);
//     return (
//         <div data-aos={`fade-down-${side}`} className={`ai-projects-text-side ai-projects-text-side-${side}`}>
//             <div data-aos={`zoom-in-${side}`} className='ai-projects-text-featured' dangerouslySetInnerHTML={{ __html: label }}></div>
//             <div data-aos={`zoom-in-${side}`} className='ai-projects-text-title'>{title}</div>
//             <div data-aos={`zoom-in-${side}`} className='ai-projects-text-description' dangerouslySetInnerHTML={{ __html: description }}></div>
//             <div data-aos={`zoom-in-${side}`} className='ai-projects-text-tecs'>
//                 {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
//             </div>
//         </div>
//     );
// };

// const Projects = ({ data: { heading, list } }) => {
//     return (
//         <div className='ai-projects'>
//             <div className='container'>
//                 <div className='ai-projects-container'>
//                     <ViewsTitle text={heading} />
//                     <div className='row justify-content-center'>
//                         {(list || []).map((project, i) => (
//                             <SingleProject key={i} index={i} {...project} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// Projects.propTypes = {};

// export default Projects;
