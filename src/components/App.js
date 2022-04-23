import React from "react";
import Header from './Header';

class App extends React.Component {
    render() {
        return(
            <div className={'burger-paradise'}>
                <div className={'menu-burger'}>
                    <Header />
                </div>
            </div>
        )
    }
}

export default App;