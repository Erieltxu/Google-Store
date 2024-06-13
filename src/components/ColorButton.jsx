import React from "react";

const ColorButton = ({ color, handleColorChange }) => {
    return (
        <button onClick={() => handleColorChange(color)}></button>
    );
};

export default ColorButton;