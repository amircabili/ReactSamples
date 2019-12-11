import React from "react";

import Title from "./Header/Title";
import Title2 from "./Header/Title2";

import FooterText from "./Footer/FooterText";

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <Title title={this.props.title}/>
            </div>
        );
    }
}
