import React from 'react';

export const Input=({typeText, placeholder,name, classStyle,textInput})=>(
	<div>
    <input type= {typeText} placeholder = {placeholder} name={name}  className={classStyle} value={textInput}/>
  </div>
);


