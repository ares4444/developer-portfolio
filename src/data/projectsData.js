// import one from '../assets/svg/projects/one.svg'
// import two from '../assets/svg/projects/two.svg'
// import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'
import FrontEnd from '../assets/img/front-end-app.jpeg'
import BackEnd from '../assets/img/back-end-app.jpeg'
import React from '../assets/img/react-project.jpeg'
import Capstone from '../assets/img/video1191467841.mp4'
import YapYap from '../assets/img/yapyapchat.jpeg'

export const projectsData = [
    {
        id: 1,
        projectName: 'YApYapChat',
        projectDesc: 'Through the use of Socket.io and WebRTC my team and I created a simple to use messaging and video chatting application. At the moment some features are not available such as: following other users. We do ask that you stay tuned for future updates. We encourage new users to try out one of the pre-registered accounts: (Usr:Simba pw:simba123) or (Usr:Mufasa pw:mufasa123)',
        tags: ['React', 'CSS','Javascript', 'JSX', 'Socket.io', 'WebRTC', 'MongoDB'],
        code: 'https://github.com/Pranotisavadi/yapyapchat',
        demo: 'https://yapyapchat.herokuapp.com/',
        image: YapYap
    },
    {
        id: 2,
        projectName: 'GitErDone',
        projectDesc: 'Users are able to login/register their own profiles. Once logged in the user can create lists (i.e. Groceries, Chores, Items), once created the lists gets added to the users profile and saved into the Mongo database. From there they can update their lists (add/delete items in the lists). Every edit will update the database that is registered to that user.',
        tags: ['Mongoose', 'EJS','Javascript', 'Node.js'],
        code: 'https://github.com/ares4444/BackendGiterdun',
        demo: 'Demo not available. Please visit the github link for code',
        image: BackEnd
    },
    {
        id: 3,
        projectName: 'MusicalCrafts',
        projectDesc: 'Search by artist or songs and get a list of all the available songs with their respective lyrics. Each song will be contained within their own cards, and the user can press on the dropdown button to show the lyrics',
        tags: ['HTML', 'CSS', "JavaScript"],
        code: 'https://github.com/ares4444/front-end-project',
        demo: 'https://musical-crafts.netlify.app',
        image: FrontEnd
    },
    {
        id: 4,
        projectName: 'Pics Gallery App',
        projectDesc: 'Pexels API clone application. Search for images by either typing a word or phrase. Some features such as: User register/login, save or download favorite images into profile, and upload personal images will be coming in a later update. Please stay tuned...',
        tags: ['React, MUI',],
        code: 'https://github.com/ares4444/pexels-clone-app',
        demo: 'https://pics-gallery-app.netlify.app',
        image: React
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/