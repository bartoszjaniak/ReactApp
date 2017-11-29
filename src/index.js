import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD6_vwe4Cg16doHe4d7BziPMQVnqyF4O60';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] }    
    }

    render(){
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
};

ReactDOM.render(<App />,document.querySelector('.container')); 