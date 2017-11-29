import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD6_vwe4Cg16doHe4d7BziPMQVnqyF4O60';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };


        YTSearch({ key: API_KEY, term: 'surfboards' },  (videos)  => {
            this.setState({ videos });
            //same like : this.setState({ videos: videos});
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector('.container')); 