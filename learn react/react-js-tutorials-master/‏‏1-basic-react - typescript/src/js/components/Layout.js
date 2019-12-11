import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Footer2 from "./Footer2";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
          title: "title1  333333 11"
        };
     }

    changeTitle(title) {
        this.setState({title});
    }

    render() {

 /*   setTimeout(()=>{
      this.setState({title:"New and Improved Title !!"})
    },4000)
*/
    const footerText = "footerText11  ";
    const footerText2 = "footerText22  ";

    return (
      <div>

          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />

          <Footer name="footer-A" title={footerText}/>
          <Footer2 name="footer-B" title={footerText2}/>

      </div>
    );
  }
}
