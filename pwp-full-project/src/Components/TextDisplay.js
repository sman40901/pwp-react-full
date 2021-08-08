import React, { Component } from 'react';
import { useState } from 'react';
import '../App.css';

function TextDisplay({componentId, textString}){
    return(
        <div id={componentId}>{textString}</div> 
    );
}

export default TextDisplay;