import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de Estilos
import './index.css'

//Comonentes Creados
import ContadorApp from './ContadorApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp valor_contador = {0} /> , divRoot);