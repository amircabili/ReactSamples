import React from "react";

export default class Title2 extends React.Component {
    render() {

        console.log(this.props,"title1-Component");

        return (

            <h1 class="text-danger container">{this.props.title} </h1>

        );
    }
}
