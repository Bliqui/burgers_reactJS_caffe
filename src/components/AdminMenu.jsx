import React from "react";
import AddBurgerForm from "./AddBurgerForm";

class AdminMenu extends React.Component {
    render() {
        return(
            <div className={'menu-admin'}>
                <h2>Menu Settings</h2>
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.uploadSampleBurgers}>Upload burgers</button>
            </div>
        )
    }
}

export default AdminMenu;