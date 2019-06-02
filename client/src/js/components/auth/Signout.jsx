import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <main>
        <section className="farewell">
          <div>
            <div>
              <h3>See you next time!</h3>
            </div>
            <div>
              <div>
                <p>Save money and build better spending habits with J$X!</p>
              </div>
              <div>
                <div>
                  <Link to="/signin">Sign in</Link>
                </div>
              </div>
              <div>
                <p>
                  Visualize finance with integrated charts and cutting edge data
                  extraction!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
