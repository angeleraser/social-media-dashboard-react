import "../css/SocialCard.css";
import PropTypes from "prop-types";
import React from "react";
import TodayFollowersCount from "./TodayFollowersCount";
import { SOCIAL_LOGOS } from "../svg-logos";

class SocialCard extends React.Component {
  constructor(props) {
    super(props);
    this._userData = props.user;
  }
  render() {
    const {
      socialNetwork,
      username,
      followers,
      followersToday,
    } = this._userData;
    return (
      <article
        className={`social-card ${
          this.props.darkMode ? "dark-theme" : "light-theme"
        }`}>
        <div className={`border ${this.getBorderColor(socialNetwork)}`}></div>
        {/* User & Icon  */}
        <div className="user">
          <div className="icon">{this.getSocialLogo(socialNetwork)}</div>
          <h2>{`${username}`}</h2>
        </div>
        {/* Followers Count  */}
        <div className="followers-count">
          <h2>{this.getFormatedCount(followers)}</h2>
          <p>{`${socialNetwork === "Youtube" ? "SUSCRIBERS" : "FOLLOWERS"}`}</p>
          <TodayFollowersCount count={followersToday} />
        </div>
      </article>
    );
  }
  getSocialLogo(name) {
    return SOCIAL_LOGOS.find((site) => site.name === name).logo;
  }
  getBorderColor(name) {
    return `${name.toLowerCase()}-color`;
  }
  getFormatedCount(n) {
    let number = n;
    if (n >= 10000) {
      number = `${(number + "").slice(0, 2)}k`;
    }
    return number;
  }
}
SocialCard.propTypes = {
  user: PropTypes.object,
  darkMode: PropTypes.bool,
};

export default SocialCard;
