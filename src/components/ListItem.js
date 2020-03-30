import React from "react";
import Button from "../components/Button";

const ListItem = props => {
    return (
        <li>
            {props.item}
            <Button 
            handleRemove={props.handleRemove}
            />
        </li>
    );
};

export default ListItem;