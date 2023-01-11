import FE1 from '../../images/FE/tesla-website-clone.jpg'
import FE2 from '../../images/FE/data-management.jpg'
import FE3 from '../../images/FE/zuri-website-cloning.png'
import BE1 from '../../images/BE/team-vulture2-backend.png'
// import BE2 from '../../images/BE/team-vulture2-backend.png'
// import BE3 from '../../images/BE/team-vulture2-backend.png'



// const FEProjects = [project1, project2, project3, project4, project5]
const FEProjects = [
    {
        id: 1,
        image: FE1,
        name: 'Tesla Website Cloning',
        github: 'http://github.com/Tolulophey/Tesla-Website-Clone',
        deployed_link: 'https://tesla-website-clone-tolulophey.vercel.app/'
    },
    {
        id: 2,
        image: FE2,
        name: 'Data Management Agency',
        github: 'https://github.com/Tolulophey/Data-Management-Agency',
        deployed_link: 'https://data-management-agency.netlify.app/'
    },
    {
        id: 3,
        image: FE3,
        name: 'sample2',
        github: 'https://github.com/Tolulophey/zuri-website-cloning',
        deployed_link: 'https://tolulophey.github.io/zuri-website-cloning/'
    }

]

const BEProjects = [
    {   
        id: 1,
        image: BE1,
        name: 'Terms and Conditions Generator',
        github: 'https://team-vulture2-backend.vercel.app/',
        deployed_link: 'https://team-vulture2-backend.vercel.app/'
    },
    // {
    //     id: 2,
    //     image: BE2,
    //     name: 'Todo API',
    //     github: 'https://sample.com',
    //     deployed_link: 'https://deployedlink.com'
    // },
    // {
    //     id: 3,
    //     image: BE3,
    //     name: 'Todo API',
    //     github: 'https://sample.com',
    //     deployed_link: 'https://deployedlink.com'
    // }

]

const FSProjects = []

const data = {FEProjects, BEProjects, FSProjects}


export default data