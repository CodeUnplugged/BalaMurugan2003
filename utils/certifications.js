import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'AWS Cloud Technical Essentials',
            platform: 'Coursera',
            link: 'https://www.coursera.org/account/accomplishments/verify/LNU87M8UWP7S',
            date: 'Issued Oct 4, 2024 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Networking Essentials',
            platform: 'CISCO',
            link: 'https://www.credly.com/badges/632c4ff4-7f08-4e18-8e49-051fcf577bb4?source=linked_in_profile',
            date: 'Issued Feb 10, 2022 · No Expiration Date',
            logo: '/assets/CISCO_.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'AWS Cloud Quest: Cloud Practitioner',
            platform: 'Amazon Web Services Training and Certification',
            link: 'https://www.credly.com/badges/31497f9c-2eea-41f8-a70e-038a04dc11f9/linked_in_profile',
            date: 'Issued Jan 07, 2024 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Ethical Hacking CEH-v10 Training',
            platform: 'Besant Technologies (Oracle Workforce Development Program Partner, Microsoft Silver Learning Partner)',
            link: 'https://drive.google.com/file/d/12maawvSpy4_WEy7wisLrGQjM7HJzBqel/view',
            date: 'Issued Apr 2021 · No Expiration DateIssued',
            logo: '/assets/CEH.jpg',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: '(ISC)2',
            platform: 'Official (ISC)2 Certified in Cybersecurity (CC) Self-Paced Training',
            link: 'https://drive.google.com/file/d/1Ufx2JkGydXGyj2Kb2jr7FqklZuIXoM4i/view',
            date: 'Issued Oct 4, 2022 · No Expiration Date',
            logo: '/assets/ISC2.jpeg',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications