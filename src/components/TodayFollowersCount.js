import React from "react";
import PropTypes from "prop-types";

class TodayFollowersCount extends React.Component {
  constructor(props) {
    super(props);
    this._count = props.count;
  }
  render() {
    let className = this._count > 0 ? "today up" : "today down";
    return (
      <div className={className}>
        {this.icon()} {`${Math.abs(this._count)} Today`}
      </div>
    );
  }
  icon() {
    const plusIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
      </svg>
    );
    const downIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
      </svg>
    );
    return this._count > 0 ? plusIcon : downIcon;
  }
}

TodayFollowersCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default TodayFollowersCount;
