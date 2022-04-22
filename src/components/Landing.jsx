import React from "react";
import cafes from "../sample-cafes";

class Landing extends React.Component {
    render() {

        let cafesList = cafes
            .map((cafe) => <li key={cafe.id}>{ cafe.title }</li>);

        return (
            <div className={"restaurant_select"}>
                <div className={'restaurant_select_top'}>
                    <div className={'restaurant_select_top-header font-effect-outline'}>Choose Caffe</div>

                    <div className={'arrow_picker'}>
                        <div className={'arrow_picker-up'}></div>
                        <div className={'arrow_picker-down'}></div>
                    </div>
                </div>

                <div className={'restaurant_select_bottom'}>
                    <ul>
                        {cafesList}
                    </ul>
                </div>
                <button>Go to caffe menu</button>
            </div>
        );
    };
};

export default Landing;