import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/TheDeveloperOps',
        'instagram': 'https://www.instagram.com/inemesis_bxla/',
        'Facebook': 'https://www.facebook.com/profile.php?id=100027542168214',
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