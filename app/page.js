"use client";
import jefes from "@/app/boss_list.json";
import JefesCom from './components/JefesCom.jsx';


import { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, Box, Flex} from '@chakra-ui/react';

export default function Home() {
  const today = new Date();
  const currentYear = today.getFullYear();

  const ListaJefes = () => {
  
    useEffect(() => {
      const obtenerDatos = async () => {
        const respuesta = await fetch('app/boss_list.json');
        const datos = await respuesta.json();
        setDatosJefes(datos);
      };
  
      obtenerDatos();
    }, []);}

  return (
    <main className="main">
      <div>
        <h1 className='text'>Guia de progresion Terraria</h1>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>Bosses</Tab>
            <Tab>Eventos</Tab>
          </TabList>
          <TabPanels style={{color: 'white'}}>
              <TabPanel>
                <p> AQUI TODO LO DE LOS BOSSES </p>
                <Box className="listajefes">
                  {jefes && jefes.datos && (
                    <List>
                      {jefes.datos.map((elemento) => (
                        <ListItem key={elemento.bossName}>
                          <Flex style={{alignItems: 'center',justifyContent: 'space-between'}}>
                            <p>{elemento.order}.- {elemento.bossName}</p>
                          </Flex>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              </TabPanel>
              <TabPanel>
                <p> AQUI TODO LO DE LOS EVENTOS </p>
                <Box className="listajefes">
                  {eventos && eventos.datos && (
                    <List>
                      {eventos.datos.map((elemento) => (
                        <ListItem key={elemento.eventName}>
                          <Flex style={{alignItems: 'center',justifyContent: 'space-between'}}>
                            <p>{elemento.order}.- {elemento.eventName}</p>
                          </Flex>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      
      <div className="test">
        <JefesCom sProp = "Los Gemelos"/>
      </div>

      <footer>
        <p> Copyright © {currentYear} "Inserte nombre". Chile.</p>
      </footer>
    </main>
  );
}
