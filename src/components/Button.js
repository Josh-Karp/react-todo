import React from "react";

const Button = props => {
    return (
        <button className="delete" onClick={props.handleRemove}>
            X
        </button>
    );
};

export default Button;