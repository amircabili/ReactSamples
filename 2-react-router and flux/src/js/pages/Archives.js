import React from "react";
import { IndexLink, Link } from "react-router";

import Article from "../components/Article";
 
export default class Archives extends React.Component {

  
navigate(){
 
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

    console.log( this.props);

    return (
      <div>
       
        <h1>Archives ({article})</h1>
        <h4>Date:{date}, filter: {filter}</h4>

        article: {article}, date: {date}, filter: {filter}

        <br/>
        <p></p>
        <br/>

        <p> <Link to="/">Featured</Link></p>
        <p> <Link to="archive">archive</Link>:</p>
        <p><Link to="settings">Settings</Link>:</p>

        <p> <button onClick={this.navigate.bind(this)}>Featured</button> </p>

        <div class="row">{Articles}</div>

      </div>
    );
  }
}
