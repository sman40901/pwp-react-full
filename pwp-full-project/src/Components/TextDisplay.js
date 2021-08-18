import React, { Component } from 'react';
import { useState } from 'react';
import '../App.css';

function TextDisplay({componentId, textString,classN}){
    return(
        <div id={componentId} className={classN}>{textString}</div> 
    );
}

export default TextDisplay;