import React from "react";
import "./ErrorMessage.css";

export default function ErrorMessage(props) {
  return <div className="errorMessage">{props.text}</div>;
}
