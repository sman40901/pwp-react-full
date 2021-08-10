import React, { Component } from 'react';
import { useState } from 'react';

import IconComponent from './IconComponent';

function IconList({icons}){
    return(
    <table id='IconList'>
         {icons.map((item) => <IconComponent displayPic={item} />)}
    </table>
    );
}

export default IconList;