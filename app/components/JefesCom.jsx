import jefes from "@/app/boss_list.json";
import ClasCom from "./ClasCom";
import { useState } from "react";
import { Menu, MenuItem, MenuButton, Button, MenuList} from '@chakra-ui/react';

function JefesCom({ sProp }) {
  const currentBoss = jefes.datos.find((boss) => boss.bossName === sProp);
  const vida = currentBoss.stats.life1;
  const def = currentBoss.stats.armor;
  const atq = currentBoss.stats.damage;
 
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <main className="compJefes">

      <div className="topComp">
        <div className="imageJefes">
          {currentBoss && (<img src={currentBoss.bossImage} alt={sProp} />)}
        </div>
        <div className="dataJefes">
          <p>Vida: {vida}</p>
          <p>Defensa: {def}</p>
          <p>Ataque: {atq}</p> 
        </div>
      </div>
      
      <div>  
        FILA DE INVOCACION & LOOT
      </div>
        
      <div>
        <Menu>
          <MenuButton as={Button} colorScheme='pink'>
              Clases
          </MenuButton>
          <MenuList>
              <MenuItem color='red' onClick={() => handleOptionChange('Melee')}>Melee</MenuItem>
              <MenuItem color='red' onClick={() => handleOptionChange('Ranged')}>Rango</MenuItem>
              <MenuItem color='red' onClick={() => handleOptionChange('Magic')}>Mago</MenuItem>
              <MenuItem color='red' onClick={() => handleOptionChange('Summoner')}>Invocador</MenuItem>
          </MenuList>
        </Menu>
        <ClasCom selectedOption={selectedOption} classes={currentBoss.classes}/>
      </div>

    </main>
  );
  }
  
  export default JefesCom;