import React from 'react';
// import Slide from '../node_modules';

import './Home.css';

// import data from './data.json';


const Home = (props) => {
    return (
        <div className="Home">
        <h1>
          To Unite and To Converse
        </h1>
            <p>Connect with the World</p>
            <p>One Sign at a time</p>
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