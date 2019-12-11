import React from "react";

import Title from "./Header/Title";
import Title2 from "./Header/Title2";
import FooterText from "./Footer/FooterText";

export default class Header extends React.Component {

    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

  render() {

      return (

      <div  class="Header container jumbotron" >

            <h1> THIS IS THE   HARD-CODED </h1>
            <h3>calculation HARD-CODED: {1+2} it's - > {(function(){return 1+2;})()} </h3>
            <Title title={this.props.title} />
            <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            <Title2 title={this.props.title} />

      </div>
    );
  }
}
