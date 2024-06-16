import React from "react";


const ColorButton = ({ color, handleColorChange }) => {
    const styles = {
        backgroundColor: color,
        width: '40px',
        height: '40px',
        border: '1px solid var(--building-color4)',
        borderRadius: '100%',
        cursor: 'pointer'
    };

    return (
        <button style={styles} onClick={handleColorChange}></button>
    );
}

export default ColorButton;