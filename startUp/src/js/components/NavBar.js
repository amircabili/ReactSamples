import React from "react";


export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <header>

                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <a className="navbar-brand" href="#">React Website</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                                    <link  className="nav-link"  to="Home">
                                        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span>
                                            </a>
                                    </link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#information">information</a>
                                    <link  className="nav-link"  to="information">
                                        <a className="nav-link" href="#information">information</a>
                                    </link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#archives">archives</a>
                                    <link  className="nav-link"  to="archives">
                                        <a className="nav-link" href="#archives">archives</a>
                                    </link>
                                </li>
                            </ul>
                            <form className="form-inline mt-2 mt-md-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                    </button>
                            </form>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
