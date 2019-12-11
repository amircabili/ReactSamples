import React from "react";

export default class FooterText extends React.Component {
  render() {

    console.log(this.props,"footer-Component");

    return (

      <h1 class="container">{this.props.title}</h1>

    );
  }
}
