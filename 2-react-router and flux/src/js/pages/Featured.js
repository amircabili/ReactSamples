import React from "react";
import Article from "../components/Article";
import MainCarousel from "../components/layout/MainCarousel";

export default class Featured extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Title Sample1",

            text: "GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together" +
            "GitHub is home to sdfsdf sd fsd fsd   and review code, manage projects, and build software together" +
            "GitHub is home to over 36   code, manage projects, and build software together" +
            "GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together"
        };
    }
    changeTitle(title) {
        this.setState({title});
    }

  render() {

    const Articles = [
      "Some Article111111111111111",
      "Some Other Article222222222",
      "Yet Another Article333333333333333",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Articles}</div>
          <MainCarousel />
        </div>
    );
  }
}
