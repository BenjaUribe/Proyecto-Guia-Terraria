import jefes from "@/app/boss_list.json";
import ClasCom from "./ClasCom";
import { useState } from "react";
import { Menu, MenuItem, MenuButton, Button, MenuList, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box,
  List,ListItem, Flex, Tooltip,
  MenuOptionGroup, MenuDivider, Text } from '@chakra-ui/react';
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

      <div className="leftComp">
        <div className="jefe">
          <div className="imageJefes">
            {currentBoss && (<Image src={currentBoss.bossImage} alt={sProp} width={250} height={250} />)}
          </div>
          <div className="dataJefes">
            <p style={{fontSize: '1.5em'}}><b>{currentBoss.bossName}</b></p>
            <p>Vida en Normal: {vida}</p>
            <p>Vida en Experto: {vida2}</p>
            <p>Vida en Maestro: {vida3}</p>
            <p>Defensa: {def}</p>
            <p>Ataque en Normal: {atq}</p> 
            <p>Ataque en Experto: {atq2}</p> 
            <p>Ataque en Maestro: {atq3}</p> 
          </div>
          <div className="bioma">
            <p>Bioma</p>
            {currentBoss && (<Image src={currentBoss.bossSummon.biome} alt={sProp} width={150} height={150} />)}
          </div>
        </div>
        <div className="loot">  
          <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton bg="rgba(256,22,150,0.2)" color="white"
               _hover={{bg: "rgba(256,22,150,0.3)"}} _expanded={{bg: "rgba(256,22,150,0.3)"}}>
                  <b>Loot</b>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="drop" pb={4} bg="rgba(152,22,150,0.2)">
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
      </div>

      <div className="rightComp">
        <div className="invocacion">
          <b>Invocacion</b>
          <p>{currentBoss.bossSummon.description}</p>
        </div>
        <div className="invocador">
          <div className="imgInv">
            {currentBoss && (<Image src={currentBoss.bossSummon.summonImage} alt={sProp} width={100} height={100} />)}
          </div>
          <div className="dataInv">
            <p><b>{currentBoss.bossSummon.item}</b></p>
            <p>Crafteo: {currentBoss.bossSummon.craft}</p>
          </div>
        </div>
        <div className="recomendados">  
          <Menu>
            <MenuButton as={Button} bg="rgba(256,22,150,0.4)" color='white'
             _hover={{bg: "rgba(256,22,150,0.4)"}} _expanded={{bg: "rgba(256,22,150,0.4)"}}>
                Items recomendados
            </MenuButton>
            <ClasCom selectedOption={selectedOption} classes={currentBoss.classes}/>
            <MenuList bg="rgba(86,0,120,0.9)">
              <Text textAlign="center" color="white">
                Selecciona una clase
              </Text>
              <MenuDivider />
                <MenuItem color='white' bg="rgba(86,0,120,0.9)" _hover={{bg:"rgba(256,22,150,0.3)"}} 
                 onClick={() => handleOptionChange('Melee')}>
                  <Tooltip>
                    <span>Melee</span>
                  </Tooltip>
                </MenuItem>
                <MenuItem color='white' bg="rgba(86,0,120,0.9)" _hover={{bg:"rgba(256,22,150,0.3)"}} 
                 onClick={() => handleOptionChange('Ranged')}>
                  <Tooltip>
                    <span>Rango</span>
                  </Tooltip>
                </MenuItem>
                <MenuItem color='white' bg="rgba(86,0,120,0.9)" _hover={{bg:"rgba(256,22,150,0.3)"}} 
                 onClick={() => handleOptionChange('Magic')}>
                  <Tooltip>
                    <span>Mago</span>
                  </Tooltip>
                </MenuItem>
                <MenuItem color='white' bg="rgba(86,0,120,0.9)" _hover={{bg:"rgba(256,22,150,0.3)"}} 
                 onClick={() => handleOptionChange('Summoner')}>
                  <Tooltip>
                    <span>Invocador</span>
                  </Tooltip>
                </MenuItem>
              </MenuList>
          </Menu>
          {mostrarItems(selectedOption)}
        </div>
      </div>
       
    </main>
  );
  }
  
  export default JefesCom;