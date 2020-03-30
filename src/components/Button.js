import React from "react";

const Button = props => {
    return (
        <button className="action" onClick={props.handleRemove}>
            X
        </button>
    );
};

export default Button;