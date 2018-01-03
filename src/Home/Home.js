import React from 'react';
// import Slide from '../node_modules';

import './Home.css';

// import data from './data.json';


const Home = (props) => {
    return (
        <div className="Home">
        <h1>Welcome to Surdi</h1>
        <p>
          Connect with the World, one sign at a time
        </p>
            <p>Where you can</p>
            <p>Learn</p>
            <p>Educate</p>
            <p>or Connect</p>
        </div>
    )
}

// class Home extends Component {
//     renderSlides() {
//         return data.map((state)=>{
//             return 
//                 <Slide
//                     video={state.video}
//                     signWord={state.signWord}
//                     subtitle={state.subtitle}
//                 />
//         })
//     }
//     render() {
//         return (
//             <div className="Home">
//                 <button className="Home-nav carousel-left-nav"></button>
//                     <div className="Home-viewport">
//                         {this.renderSlides()}
//                     </div>
//                 <button className="Home-nav carousel-right-nav"></button>
//             </div>
//         );
//     }
// }

export default Home;