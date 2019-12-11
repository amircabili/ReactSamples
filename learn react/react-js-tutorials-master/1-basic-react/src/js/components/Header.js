import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {


    return (
      <div  class="container jumbotron" >

          <h1>THIS IS THE HEADER </h1>

            <h3>calculation : {1+2} it's - > {(function(){return 3;})()} </h3>

            <Title title={this.props.title} />
            <input value={this.props.title} onChange={this.handleChange.bind(this)} />

      </div>
    );


  }
}
