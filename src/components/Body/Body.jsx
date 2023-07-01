import React, { useState } from 'react';
import {
  Contenedor,
  Titulo,
  Card,
  BodyCuadroLetra,
  ContenedorButtom,
} from './style'; 
import Palette from './ColorPalette/Palette';
import { PaletteButtom } from '../Body/style'; 




export const Body = () => {




  
const [selectedColor, setSelectedColor] = useState('');

  
 const Colores = [
    { id: 0, color: '#000' },
    { id: 1, color: '#7f7e7e' },
    { id: 2, color: '#890115' },
    { id: 3, color: '#ed1c24' },
    { id: 4, color: '#ff7e26' },
    { id: 5, color: '#fff200' },
    { id: 6, color: '#22b14c' },
    { id: 7, color: '#00a2e8' },
    { id: 8, color: '#3f48cc' },
    { id: 9, color: '#a349a4' },
    { id: 10, color: '#ffffff' },
    { id: 11, color: '#c3c3c3' },
    { id: 12, color: '#b97a57' },
    { id: 13, color: '#ffaec9' },
    { id: 14, color: '#ffc90e' },
    { id: 15, color: '#efe4b0' },
    { id: 16, color: '#b5e61d' },
    { id: 17, color: '#99d9ea' },
    { id: 18, color: '#7092be' },
    { id: 19, color: '#c8bfe7' },
    { id: 20, color: '#f9f9f9' },
    { id: 21, color: '#f9f9f9' },
    { id: 22, color: '#f9f9f9' },
    { id: 23, color: '#f9f9f9' },
    { id: 24, color: '#f9f9f9' },
    { id: 25, color: '#f9f9f9' },
    { id: 26, color: '#f9f9f9' },
    { id: 27, color: '#f9f9f9' },
    { id: 28, color: '#f9f9f9' },
    { id: 29, color: '#f9f9f9' },
  ];

const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <Contenedor>
      <div></div> {/* de lujo */}

      <BodyCuadroLetra>
        <Titulo>Selecciona un color:</Titulo>
      </BodyCuadroLetra>

      <Card>
        <ContenedorButtom>
          {Colores.map((color) => (
            <Palette
              key={color.id}
              color={color.color}
              onClick={() => handleColorClick(color.color)}
              
            /> 
          ))}

          <div style={{ paddingTop: '20px' }}>
            <PaletteButtom style={{ backgroundColor: selectedColor }}>
              Color actual
            </PaletteButtom>
          </div>
        </ContenedorButtom>
        
      </Card>
      
    </Contenedor>
  );
};

export default Body;
