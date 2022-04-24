import React from "react";
import Header from "./Header";
import Order from "./Order";
import AdminMenu from "./AdminMenu";
import sampleBurgers from '../sample-burgers';
import Burger from "./Burger";

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

    uploadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers })
    }

    render() {
        return(
            <div className={'burger-paradise'}>
                <div className={'menu'}>
                    <Header title={'Very Hot Burger'}/>
                    <ul className={'burgers'}>
                        {Object.keys(this.state.burgers).map( (key) => {
                            return <Burger
                                key={key}
                                index={key}
                                details={this.state.burgers[key]}
                            />;
                        } )}
                    </ul>
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