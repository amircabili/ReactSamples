import React from "react";

export default class Footer extends React.Component {
    render() {

        console.log(this.props,"title-Component");

        return (

            <h1 class="container">{this.props.footerText}</h1>

        );
    }
}

