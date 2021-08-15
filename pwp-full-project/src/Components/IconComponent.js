import React, { useState } from "react";

const IconComponent = ({ displayPic }) => {
    return (
        <tr>
            <td>
                <img
                    src={displayPic}
                    alt={displayPic}
                    height='30'
                    width='30' /> 
            </td>
        </tr>);
}

export default IconComponent;