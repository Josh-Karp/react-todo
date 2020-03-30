import React from "react";

const ListItem = props => {
    return (
        <li>
            {props.item}
            <button className="delete" onClick={() => { props.handleRemove(props.itemIndex) }}>
                x
            </button>
        </li>
    );
};

export default ListItem;