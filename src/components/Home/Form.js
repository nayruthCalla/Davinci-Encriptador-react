import React from 'react';
import {Input} from '../ViewPage/Input';

export const Form=()=>(
    <form className='form-style'>
        <label>CLAVE</label>
        <Input typeText='number' placeholder='Tu número de clave aquí...' name='inputOffset' classStyle='input-clave'/>
        <label>TEXTO A CIFRAR O DECIFAR</label>
        <Input typeText='text' placeholder='Escribe el texto aquí...' name='inputTexto' classStyle='input-texto'/>
        <div className='button-cont'>
        <Input typeText='button' name='cifrar' classStyle='input-btn-code' textInput='CODIFICAR'/>
        <Input typeText='button' name='decifrar' classStyle='input-btn-decod' textInput='DECODIFICAR' />
        </div>
    </form>
);

/* 

labelOffset='CLAVE' placeholderOffset='Tu número de clave aquí...' 
    labelTexto= 'TEXTO,SMS, ETC' placeholderTexto='Escribe el texto a encriptar'
	<div>
    <input type= {typeText} placeholder = {placeholder} name={name}  className={classStyle}>{textInput}</input>
  </div>
<div>
            <label>{labelOffset}</label>
            <input placeholder={placeholderOffset}></input>
        </div>
        <div>
            <label>{labelTexto}</label>
            <input placeholder={placeholderTexto}></input>
        </div>
        <div>
            <input type>{textCifrar}</input>
        </div>*/