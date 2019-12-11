import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
        <footer className="container">
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
    );
  }
}
