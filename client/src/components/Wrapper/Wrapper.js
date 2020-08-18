import React from "react";
import "./Wrapper.css";

// Spacing for the Pokemon Cards on the page so the there's 4 per row when full screen
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;
