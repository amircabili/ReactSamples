import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MainCarousel  from "../components/MainCarousel";
import NavBar  from "../components/NavBar";
import Featurette  from "../components/Featurette";
import Article from "../components/Article";

export default class Information extends React.Component {



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

      const { query } = this.props.location;
      const { params } = this.props;
      const { article } = params;
      const { date, filter } = query;

      const Articles = [
          "Some Article",
          "Some Other Article",
          "Yet Another Article",
          "Still More",
          "Fake Article",
          "Partial Article",
          "American Article",
          "Mexican Article",
      ].map((title, i) => <Article key={i} title={title}/> );


  /*  setTimeout(()=>{
          this.setState({title:"Welcome Will!"})
        }
    , 2000);
*/
    return (

      <div>

          <div>
              <h1>Archives</h1>
              article: {article}, date: {date}, filter: {filter}
              <div className="row">{Articles}</div>
          </div>

          <NavBar></NavBar>

          <main role="main">
              <MainCarousel title={this.state.title} text={this.state.text}/>
              <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
              <Featurette/>
              <Footer />
          </main>
      </div>
    );
  }
}
