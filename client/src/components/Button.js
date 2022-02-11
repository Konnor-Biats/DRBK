import React from 'react'
import './Button.css';

{/* Setting classes to buttons to wherever it is we can update w/out updating every class */}
const STYLES = ['btn--primary', 'btn--outline']

{/* Setting classes to buttons sizes */}
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

{/* Setting classes to buttons primary color code */}
const COLOR = ['primary', 'blue', 'red', 'green']

{/* Exporting button; passing in values */}
export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {
    {/* Functions to showcase specific style; if it has specific thing then it uses it; 
        if not it uses the primary default style */}
    const checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(buttonSize) ? 
    buttonSize : SIZES[0]

    const checkButtonColor = STYLES.includes(buttonColor) ? 
    buttonColor : COLOR[0]

    {/* Returning the button matching class */}
    return(
        <button className={`btn ${checkButtonStyle}
         ${checkButtonSize} ${checkButtonColor}`} onClick={onClick}
         type={type}>{children}</button>
    )
}
