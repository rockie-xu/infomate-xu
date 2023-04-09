import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import RssFead from "./RssFead";
import Header from "./Header";
import RssFeadDw from "./RssFeadDw";

function App() {
    const urlMeduza = 'http://localhost:3002/meduza';
    const urlDw = 'http://localhost:3002/dw';

    return (
        <div className="container">
            <Header/>
            <div class="card-collection">
                <RssFead feedUrl={urlMeduza}/>
                <RssFeadDw/>
            </div>
        </div>
    );
}

export default App;