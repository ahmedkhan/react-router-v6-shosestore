import React from 'react';
import { GitHubIcon} from '../components/icons';

const About = () => {
    
    return (        
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This project was built for practice purposes using <strong>Context API & Contentful</strong> by Ahmed Khan.</p>

                <a className="btn btn-primary" href="https://github.com/ahmedkhan/react-router-v6-shosestore" target= "blank">
                    <GitHubIcon width={"15px"}/> <span className="ml-2 mr-4">Visit Repo</span></a>
            </div>
        
     );
}
 
export default About;