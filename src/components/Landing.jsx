import React from "react";
import cafes from "../sample-cafes";
import * as Path from "path";

class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: ''
    };

    displayList = () => {
        const {display} = this.state;
        this.setState({display: !display});
    };

    getTitle = (cafe) => {
        const { title, url } = cafe;
        this.setState({title: title, url: url, display: false})
    };

    goToCafe = () => {
        console.log('go to cafe')
    };

    render() {
        let cafesList = cafes
            .map((cafe) => <li onClick={() => this.getTitle(cafe)} key={cafe.id}>{cafe.title}</li>);

        return (
            <div className={"restaurant_select"}>
                <div className={'restaurant_select_top'}>
                    <div onClick={this.displayList} className={'restaurant_select_top-header font-effect-outline'}>
                        {this.state.title ? this.state.title : 'Choose Caffe'}
                    </div>
                    <div className={'arrow_picker'}>
                        <div className={'arrow_picker-up'}></div>
                        <div className={'arrow_picker-down'}></div>
                    </div>
                </div>

                {this.state.display ? <div className={'restaurant_select_bottom'}>
                    <ul>
                        {cafesList}
                    </ul>
                </div> : null}
                {this.state.title && !this.state.display ?
                    <button onClick={this.goToCafe}>Go to caffe menu</button>
                    : null}
            </div>
        );
    };
};

export default Landing;