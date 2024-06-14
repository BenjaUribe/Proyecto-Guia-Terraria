import jefes from "@/app/boss_list.json";
import ClasCom from "./ClasCom";
import { useState } from "react";
import { Menu, MenuItem, MenuButton, Button, MenuList, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box,
  List,ListItem, Flex} from '@chakra-ui/react';
  

function JefesCom({ sProp }) {
  const currentBoss = jefes.datos.find((boss) => boss.bossName === sProp);
  const vida = currentBoss.stats.life1;
  const def = currentBoss.stats.armor;
  const atq = currentBoss.stats.damage;
 
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  function validarExpert(parametro) {
    const mensaje = parametro ? 'Se requiere modo experto' : 'No se requiere modo experto';
    return mensaje;
  }
  function validarMaster(parametro) {
    const mensaje = parametro ? 'Se requiere modo maestro' : 'No se requiere modo maestro';
    return mensaje;
  }

  return (
    <main className="compJefes">

      <div className="topComp">
        <div className="invocador">
          <div className="imgInv">
            {currentBoss && (<img src={currentBoss.bossSummon.summonImage} alt={sProp} />)}
          </div>

          <div className="dataInv">
              <p style={{ textDecoration: 'underline' }}>{currentBoss.bossSummon.item}</p>
              <p>Crafeto: {currentBoss.bossSummon.craft}</p>
          </div>
        </div>

        <div className="mid">
          <div className="imageJefes">
            {currentBoss && (<img src={currentBoss.bossImage} alt={sProp} />)}
          </div>
          <div className="dataJefes">
            <p style={{textDecoration: 'underline', fontSize: '1.5em'}}>{currentBoss.bossName}</p>
            <p>Vida: {vida}</p>
            <p>Defensa: {def}</p>
            <p>Ataque: {atq}</p> 
          </div>
        </div>

        <div className="bioma">
          <div className="imgBioma">
            {currentBoss && (<img src={currentBoss.bossSummon.biome} alt={sProp} />)}
          </div>
          <div className="dataBioma">
            <p>{currentBoss.bossSummon.description}</p>
          </div>
        </div>
      </div>
      
      <div className="contMid">  
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Loot
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className="drop" pb={4}>
              {currentBoss && currentBoss.drop && (
              <List>
                {currentBoss.drop.map((drop)=> (
                  <ListItem key={drop.item}>
                    <Flex style={{alignItems: 'center',justifyContent: 'space-between'}}>
                    <p id={`drop-${drop.item}`}>
                      {drop.item} --- {validarExpert(drop.expert)} Y {validarMaster(drop.master)}
                    </p>
                    </Flex>
                  </ListItem>
                ))}
              </List>
              )}
          </AccordionPanel>
        </AccordionItem>
        </Accordion>
      </div>
        
      <div className="contInf">
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