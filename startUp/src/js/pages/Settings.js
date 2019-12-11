import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
/*import MainCarousel  from "../components/MainCarousel";*/
import NavBar  from "../components/NavBar";
import Featurette  from "../components/Featurette";


export default class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
        title: "Title Sample",

        text: "GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together" +
        "GitHub is home to sdfsdf sd fsd fsd fsdfsdfsdfsdfhost and review code, manage projects, and build software together" +
        "GitHub is home to over 36 mfsdfsdfsdfsdfhostw code, manage projects, and build software together" +
        "GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together"
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {

  /*  setTimeout(()=>{
          this.setState({title:"Welcome Will!"})
        }
    , 2000);
*/
    return (
      <div>
          <NavBar></NavBar>
          <main role="main">
              <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
              <Featurette/>
              <Footer />
          </main>
      </div>
    );
  }
}
