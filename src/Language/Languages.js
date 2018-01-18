import React, { Component } from 'react';
import axios from 'axios';
import Language from './Language';

import './Language.css';

class Languages extends Component {
   constructor() {
       super();
       this.state = {
           languages: []
       };

   }

componentDidMount() {
    //const self = this;
        // event.preventDefault();
        axios.get('http://localhost:3001/questions')
            // .then(function(response) {
            //     console.log(response);
            //     this.setState({ questions: response.data });
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
            
            .then((response) => {
                //console.log(response);
                this.setState({languages: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
        }

   render() {
    return (
        <div className="Language">
                <h1>All the Languages!</h1>
                {this.state.languages.map((lang, index) => {
                return (
                    <Language LangData={lang} key={index}/>
                )
            })}
            </div>
       );
   }
}

export default Languages;