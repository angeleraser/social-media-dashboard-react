import React from "react";
import PropTypes from "prop-types";
import "../css/ToggleButton.css";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggleFn
    this.state = {
      darkMode: props.darkMode,
    };
  }
  render() {
    const { darkMode } = this.state;
    return (
      <button
        onClick={this.switchStyles}
        id="toggle"
        className={`toggle ${darkMode ? "dark-theme" : "light-theme"}`}>
        <div className="circle"></div>
      </button>
    );
  }
  switchStyles = () => {
    this.toggle()
    this.setState({
      darkMode: !this.state.darkMode,
    });
  }
}
ToggleButton.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
ToggleButton.defaultProps = {
  darkMode: false,
};
export default ToggleButton;
