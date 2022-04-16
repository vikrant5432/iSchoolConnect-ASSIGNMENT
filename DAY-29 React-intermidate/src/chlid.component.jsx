import { Component } from "react";
import { PropTypes } from "prop-types";

class ChildComp extends Component {
  //   static defaultProps = {
  //     version: 10,
  //     title: "default Child Title",
  //   };

  static propTypes = {
    title: PropTypes.string.isRequired,
    version: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div>
        {/* Fall back */}
        <h2>Version: {this.props.version}</h2>
        <h2>Title: {this.props.title}</h2>
      </div>
    );
  }
}

export default ChildComp;
