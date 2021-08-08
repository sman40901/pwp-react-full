import React, { Component } from 'react';
import { useState } from 'react';

import IconComponent from './IconComponent';

function IconList({icons}){
    return(
    <div id='IconList'>
         {icons.map(item => {
        <IconComponent displayPic={item.value}/>
         })}
    </div>
    );
}

export default IconList;