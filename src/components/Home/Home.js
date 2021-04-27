import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {faKeyboard} from "@fortawesome/free-solid-svg-icons";
import {faHandPointer} from "@fortawesome/free-solid-svg-icons";

export const Home =()=>(
  <section className="section-home">
    <article className="user-handbook">
    <h3>Bienvenid@ Encriptador Gratutio</h3>
    <p>Encripta y protege tus datos!</p>    
      <ul>
        <li>
          <FontAwesomeIcon className="icon-handbook" icon={faKey}/>
          <span>Elige una <b>clave secreta</b></span>
          <span className="span-sec"> (Número de 1 a 100)</span>      
        </li>
        <li>
          <FontAwesomeIcon className="icon-handbook" icon={faKeyboard}/>
          <span>Escribe el <b>texto</b></span>  
          <span className="span-sec"> (Puedes encriptar mensajes, contraseñas, etc)</span>
        </li>
        <li>
          <FontAwesomeIcon className="icon-handbook" icon={faHandPointer}/>
          <span>Decide <b>Cifrar o Decifrar</b></span>
          <span className="span-sec"> (Finalmente podras copiar el texto cifrado o descifrado)</span>        
        </li>
      </ul>
    </article>    
  </section>
);
