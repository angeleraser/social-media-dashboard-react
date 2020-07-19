import React from "react";
import "../css/TotalFollowers.css";
import SocialCard from "./SocialCard";
import ToggleButton from "./ToggleButton";
class TotalFollowers extends React.Component {
  constructor(props) {
    super(props);
    this._userData = props.userData;
    this.toggleTheme = props.toggleFn;
  }
  render() {
    const CARDS = this._userData.map((data, i) => (
      <SocialCard darkMode={this.props.darkMode} user={data} key={i} />
    ));
    const totalFollowers = this._userData
      .map((data) => data.followers)
      .reduce((a, b) => a + b);
    return (
      <section
        className={`total-followers ${
          this.props.darkMode ? "dark-theme" : "light-theme"
        }`}>
        {/* Top Bg Pattern  */}
        <div className="background"></div>
        {/* Content  */}
        <div className="content-wrapper">
          <div className="header">
            <div className="content">
              <h1>Social Media Dashboard</h1>
              <div className="total-count">{`Total Followers: ${totalFollowers}`}</div>
            </div>
            {/* Toggle  */}
            <div className="toggle-wrapper">
              Dark Mode
              <ToggleButton toggleFn={this.toggleTheme} />
            </div>
          </div>
          <div className="cards-wrapper">{CARDS}</div>
        </div>
      </section>
    );
  }
}

export default TotalFollowers;
