import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Footer2 from "./Footer2";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Default Title ",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header  changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
          <Footer2 />
      </div>
    );
  }
}
