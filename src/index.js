import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyD6_vwe4Cg16doHe4d7BziPMQVnqyF4O60';


//create component 
const App = () => {
    return( 
    <div>
        <SearchBar />
    </div>
    )
}


//pur component into page 

ReactDOM.render(<App />,document.querySelector('.container')); 