import React from "react";

export class ChangeInput extends React.Component {
  render() {
    return (
      <input 
        onBlur={this.props.handleOnBlur} 
        className="set-value-li" 
        defaultValue={this.props.value} autoFocus 
      />
    );
  }
}
