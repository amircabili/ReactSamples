import React from "react";
import Title from "../Header/Title";
import Text from "../Header/Text";

export default class MainCarousel extends React.Component {

    render() {
        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="first-slide"
                                 src=""
                                 alt="First slide"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <Title title={this.props.title}> 22</Title>
                                    <Text text={this.props.text}> </Text>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up
                                        today</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="first-slide"
                                 src=""
                                 alt="second slide"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <Title title={this.props.title}> 22</Title>
                                    <Text text={this.props.text}> </Text>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up
                                        today</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="first-slide"
                                 src=""
                                 alt="third slide"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <Title title={this.props.title}> 22</Title>
                                    <Text text={this.props.text}> </Text>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up
                                        today</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}
