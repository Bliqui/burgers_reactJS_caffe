import React from "react";
import Header from './Header';
import Order from "./Order";
import AdminMenu from "./AdminMenu";

class App extends React.Component {
    render() {
        return(
            <div className={'burger-paradise'}>
                <div className={'menu'}>
                    <Header title={'Very Hot Burger'}/>
                </div>
                <Order/>
                <AdminMenu />
            </div>
        )
    }
}

export default App;