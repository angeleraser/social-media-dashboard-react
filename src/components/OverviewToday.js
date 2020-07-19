import React from "react";
import "../css/OverviewToday.css";
import OverviewCard from "./OverviewCard";
import { UserOverviews } from "../user-data";
class OverviewToday extends React.Component {
  constructor(props) {
    super(props);
    this._data = props.userData;
  }
  render() {
    const CARDS = this._data.map((data, i) => (
      <OverviewCard darkMode = {this.props.darkMode} userData={data} key={i} />
    ));
    return (
      <section
        className={`overview-today ${
          this.props.darkMode ? "dark-theme" : "light-theme"
        }`}>
        <div className="content-wrapper">
          <h2>Overview - Today</h2>
          <div className="cards-wrapper">{CARDS}</div>
        </div>
      </section>
    );
  }
}

export default OverviewToday;
