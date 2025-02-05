import { openLink } from "./methods"

const contact = {
    label: `Get in touch`,
    heading: `Let’s Work Together`,
    description: `Excited to connect and create something amazing together! Whether you're organizing a dynamic event, have a thought-provoking topic in mind, or just want to share an idea, I’m all in. Fill out the form below—I can’t wait to hear from you and collaborate on something extraordinary!`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:balajarvis143@gmail.com?subject=Hello')
    },
    designAndBuiltBy: 'Designed & Built By G Bala Murugan',
    handleBuiltByClick: () => openLink('https://github.com/TheDeveloperOps')
}

export default contact
