import React from "react";
import ReactDOM from "react-dom";
import TotalFollowers from "./components/TotalFollowers";
import { UserFollowers, UserOverviews } from "./user-data";
import OverviewToday from "./components/OverviewToday";
import "./css/Dashboard.css";

const container = document.querySelector("#content");

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }
  render() {
    return (
      <main
        className={`main-wrapper ${
          this.state.darkMode ? "dark-theme" : "light-theme"
        }`}>
        <TotalFollowers
          darkMode={this.state.darkMode}
          toggleFn={this.switchTheme}
          userData={UserFollowers}
        />
        <OverviewToday
          darkMode={this.state.darkMode}
          userData={UserOverviews}
        />
      </main>
    );
  }
  switchTheme = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };
}

ReactDOM.render(<Dashboard />, container);
