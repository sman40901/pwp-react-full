import React, { useState } from "react";

const IconComponent = ({ displayPic }) => {
    return(
    <img 
    src={displayPic} 
    alt={displayPic} 
    height='30' 
    width='30'/>);
}

export default IconComponent;