import React from "react";
import { SliderPicker } from "react-color";

const ColorPicker = props => (
  <div style={{ marginBottom: "20px" }}>
    <div className="label" style={{ marginBottom: "10px" }}>
      Pick your favorite color
    </div>
    <div style={{ padding: "10px 0px" }}>
      <SliderPicker
        color={props.color}
        onChangeComplete={props.handleChangeComplete}
      />
    </div>
  </div>
);

export default ColorPicker;
