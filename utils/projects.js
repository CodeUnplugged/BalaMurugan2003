const link = "https://youth.ictacademy.in/talk2023/en/Regionalresults.aspx?Region=Chennai";
const MSME_link = "https://www.youtube.com/watch?v=-LhiasS3Ol8";

const projects = { 
    heading: `Things I've Worked on`,
    list: [
        {
            image: '/assets/projects/PIAIC-3.jpg',
            images: [
                '/assets/projects/PIAIC-1.jpg',
                '/assets/projects/PIAIC-2.jpg',
                '/assets/projects/PIAIC-3.jpg',
                '/assets/projects/PIAIC-4.jpg',
                '/assets/projects/PIAIC-5.jpg',
            ],
            label: 'Workshop',
            title: 'VIT College',
            description: 'I led an engaging seminar at VIT College on AWS Cloud Computing, delivering transformative insights and practical strategies for mastering cloud technologies.',
            techs: [
                `AWS`,
                'Cloud Computing',
            ]
        },
        {
            image: '/assets/projects/digitalplattform-2.jpg',
            images: [
                '/assets/projects/digitalplattform-1.jpg',
                '/assets/projects/digitalplattform-2.jpg',
                '/assets/projects/digitalplattform-3.jpg',
                '/assets/projects/digitalplattform-4.jpg',
            ],
            label: 'Workshop',
            title: 'SRM Chennai',
            description: 'Conducted a dynamic cybersecurity workshop at SRM IST Chennai, featuring hands-on demos with Wireshark, Metasploit, Kali Linux, and Python scripting to explore ethical hacking and defense strategies.',
            techs: [
                'AWS IAM',
                'Linux',
                'Ethical Hacking',
                'Python',
            ]
        },
        {
            image: '/assets/projects/declinica-2.jpg',
            images: [
                '/assets/projects/declinica-1.jpg',
                '/assets/projects/declinica-2.jpg',
                '/assets/projects/declinica-3.jpg',
            ],
            label: 'Workshop',
            title: 'Saveetha Engineering College',
            description: 'Led an engaging AWS Cloud Computing workshop at Saveetha Engineering College, where students successfully hosted their own websites, gaining hands-on experience with cloud technologies.',
            techs: [
                'AWS',
                'Cloud Computing'
            ]
        },
        {
            image: '/assets/projects/ICT.png',
            images: [
                '/assets/projects/ICT.png',
                // '/assets/projects/rolazdoro-2.png'
            ],
            label: 'Honors & Awards',
            title: `ICT Academy YouthTalk 2023`,
            description: `Recognized as a Regional Finalist in the ICT Academy YouthTalk 2023, a prestigious student speech competition, in association with Kings Engineering College. <a href=${link} target="_blank" rel="noopener noreferrer"
            style="text-decoration: underline; color: rgb(238 168 45); font-weight: bold; transition: color 0.3s ease;" 
   onmouseenter="this.style.color='#0056b3'" 
   onmouseleave="this.style.color='#007bff'"
            >
  View here
</a>`,
            techs: [
                'Public Speaking',
                'Critical Thinking',
                'Time Management'
            ]
        },
        {
            image: '/assets/projects/msme-logo.png',
            images: [
                '/assets/projects/msme.jpeg',
            ],
            label: 'Central Government Funded Project <br/>(Ministry of Micro, Small & Medium Enterprises)',
            title: `Hydroponic Monitoring System `,
            description: `The MSME Hydroponic Monitoring System is a Central Government of India-funded project that uses IoT technology to optimize and monitor hydroponic farming conditions, promoting sustainable agriculture practices.<a href=${MSME_link} target="_blank" rel="noopener noreferrer"
            style="text-decoration: underline; color:rgb(238 168 45); font-weight: bold; transition: color 0.3s ease;" 
   onmouseenter="this.style.color='#0056b3'" 
   onmouseleave="this.style.color='#007bff'"
            >
  View My Work
</a>`,
            techs: [
                'Internet of Things (IoT)',
                'Project Management',
                'Agile Development',
            ]
        }
    ]
}

export default projects;
