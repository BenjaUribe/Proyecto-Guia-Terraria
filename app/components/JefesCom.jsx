import jefes from "@/app/boss_list.json";
import ClasCom from "./ClasCom";
import { useState } from "react";
import { Menu, MenuItem, MenuButton, Button, MenuList, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box,
  List,ListItem, Flex, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
  

function JefesCom({ sProp }) {
  const currentBoss = jefes.datos.find((boss) => boss.bossName === sProp);
  const vida = currentBoss.stats.life1;
  const vida2 = currentBoss.stats.life2;
  const vida3 = currentBoss.stats.life3;
  const def = currentBoss.stats.armor;
  const atq = currentBoss.stats.damage;
  const atq2 = currentBoss.stats.damage2;
  const atq3 = currentBoss.stats.damage3;
 
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const mostrarItems = (classType) => {
    const classData = currentBoss.classes.find(cls => cls.class === classType);
    if (!classData) return null;

    const mostrarImagen = (imagenes) => (<div style={{ display: 'flex' }}> {imagenes.map((img, index) => (
      <Tooltip key={index} label={img.nombre} aria-label={img.nombre}>
        <Image src={img.imagen} alt={img.nombre} width={50} height={50} style={{ margin: '8px' }} />
      </Tooltip>
      ))}
      </div>
    );

    return (
      <div>
        {mostrarImagen(classData.armorImage)}
        {mostrarImagen(classData.weaponImage)}
      </div>
    );
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
            {currentBoss && (<Image src={currentBoss.bossSummon.summonImage} alt={sProp} width={100} height={100} />)}
          </div>

          <div className="dataInv">
              <p style={{ textDecoration: 'underline' }}>{currentBoss.bossSummon.item}</p>
              <p>Crafteo: {currentBoss.bossSummon.craft}</p>
          </div>
        </div>

        <div className="mid">
          <div className="imageJefes">
            {currentBoss && (<Image src={currentBoss.bossImage} alt={sProp} width={200} height={200} />)}
          </div>
          <div className="dataJefes">
            <p style={{textDecoration: 'underline', fontSize: '1.5em'}}>{currentBoss.bossName}</p>
            <p>Vida en Normal: {vida}</p>
            <p>Vida en Experto: {vida2}</p>
            <p>Vida en Maestro: {vida3}</p>
            <p>Defensa: {def}</p>
            <p>Ataque en Normal: {atq}</p> 
            <p>Ataque en Experto: {atq2}</p> 
            <p>Ataque en Maestro: {atq3}</p> 
          </div>
        </div>

        <div className="bioma">
          <div className="imgBioma">
            {currentBoss && (<Image src={currentBoss.bossSummon.biome} alt={sProp} width={100} height={100} />)}
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
          <ClasCom selectedOption={selectedOption} classes={currentBoss.classes}/>
          <MenuList>
              <MenuItem color='red' onClick={() => handleOptionChange('Melee')}>
                <Tooltip label="Melee">
                  <span>Melee</span>
                </Tooltip>
              </MenuItem>
              <MenuItem color='red' onClick={() => handleOptionChange('Ranged')}>
                <Tooltip label="Melee">
                  <span>Rango</span>
                </Tooltip>
              </MenuItem>
              <MenuItem color='red' onClick={() => handleOptionChange('Magic')}>
                <Tooltip label="Melee">
                  <span>Mago</span>
                </Tooltip>
              </MenuItem>
              <MenuItem color='red' onClick={() => handleOptionChange('Summoner')}>
                <Tooltip label="Melee">
                  <span>Invocador</span>
                </Tooltip>
              </MenuItem>
           </MenuList>
          </Menu>
          {mostrarItems(selectedOption)}
      </div>

    </main>
  );
  }
  
  export default JefesCom;