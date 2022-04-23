import React from "react";
import Header from "./Header";
import Order from "./Order";
import AdminMenu from "./AdminMenu";
import sampleBurgers from '../sample-burgers'

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    };

    addBurger = (burger) => {
        const burgers = {...this.state.burgers};
        burgers[`burger${Date.now()}`] = burger;
        this.setState({burgers});
    };

    uploadSampleBurgers = (burgers) => {
        this.setState({ burgers: sampleBurgers })
    }

    render() {
        return(
            <div className={'burger-paradise'}>
                <div className={'menu'}>
                    <Header title={'Very Hot Burger'}/>
                </div>
                <Order/>
                <AdminMenu
                    uploadSampleBurgers={this.uploadSampleBurgers}
                    addBurger={this.addBurger}
                />
            </div>
        )
    }
}

export default App;