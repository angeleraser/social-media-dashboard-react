import React from "react";
import PropTypes from "prop-types";
import { SOCIAL_LOGOS } from "../svg-logos";
import OverviewPercentaje from "./OverviewPercentaje";
import "../css/OverviewCard.css";
class OverviewCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, count, percentaje, socialNetwork } = this.props.userData;
    return (
      <article
        className={`overview-card ${
          this.props.darkMode ? "dark-theme" : "light-theme"
        }`}>
        {/* Views  */}
        <div className="pages-views">
          <h2>{label}</h2>
          <p className="views-count">{this.getFormatedCount(count)}</p>
        </div>
        <div className="percentaje">
          {this.getSocialLogo(socialNetwork)}
          <OverviewPercentaje num={percentaje} />
        </div>
      </article>
    );
  }
  getSocialLogo(name) {
    return SOCIAL_LOGOS.find((site) => site.name === name).logo;
  }
  getFormatedCount(n) {
    let number = n;
    if (n >= 10000) {
      number = `${(number + "").slice(0, 2)}k`;
    }
    return number;
  }
}
OverviewCard.propTypes = {
  userData: PropTypes.object,
  darkMode:PropTypes.bool
};
export default OverviewCard;
