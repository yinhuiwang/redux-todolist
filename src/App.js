import React, { Component } from 'react';

import Header from './components/Header'
import ContentList from './components/ContentList'
import Footed from './components/Footed'

class App extends Component {
    render() {
        return (
          <div className="App">
            <Header />
            <ContentList />
            <Footed />
          </div>
        );
    };
}





export default App;











