import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/TheDeveloperOps',
        'instagram': 'https://www.instagram.com/inemesis_bxla/',
        'twitter': 'https://twitter.com/',
        'linkedin': 'https://www.linkedin.com/in/bala-murugan-ganesan/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'balajarvis143@gmail.com',
        onClick: () => openLink('mailto:balajarvis143@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements