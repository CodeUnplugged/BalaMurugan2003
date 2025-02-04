import { image } from "framer-motion/client"
import { openLink } from "./methods"
// import image from "../public/assets/snapedit_1738166968922.png"

const outer = {
    title1:  `Hello, I'm`,
    title2: 'Bala Murugan,',
    decrypTexts: [
        'An Expert in Cloud Computing',
        'A Voice in Cybersecurity Excellence',
        'A Lifelong Learner and Innovator',
        'Central Govt funded Project Grantee',
        'Speaker at Youth Talk \'23',
        'A Trailblazer & Storyteller!',
    ],
    desciption: `A dedicated and disciplined public speaker with a passion for inspiring and empowering audiences. With over 4 years of experience delivering impactful talks, I have addressed diverse topics ranging from technology and innovation to personal growth and leadership. My goal is to create meaningful connections and leave lasting impressions on my audience.`,
    button: {
        label: 'Say Hello!',
        onClick: () => openLink('mailto:balajarvis143@gmail.com?subject=Hello')
    },
    image:"../public/assets/snapedit_1738166968922.png"
}

export default outer
