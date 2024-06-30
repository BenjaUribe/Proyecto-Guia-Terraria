import React from 'react';
import { Box } from '@chakra-ui/react';

const ClasCom = ({ selectedOption, classes}) => {
  switch (selectedOption) {
    case classes[0].class:
      var class_armor = classes[0].armor;
      var class_weapon = classes[0].weapon;
      break;
    case classes[1].class:
      var class_armor = classes[1].armor;
      var class_weapon = classes[1].weapon;
      break;
    case classes[2].class:
      var class_armor = classes[2].armor;
      var class_weapon = classes[2].weapon;
      break;
    case classes[3].class:
      var class_armor = classes[3].armor;
      var class_weapon = classes[3].weapon;
      break;      
  }

  return (
    <Box>
      {selectedOption && <p>Clase seleccionada: {selectedOption}</p>}
      <p>Items recomendados:</p>
    </Box>
  );
};

export default ClasCom;