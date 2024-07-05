"use client";
import jefes from "@/app/boss_list.json";
import eventos from "@/app/event_list.json";
import JefesCom from './components/JefesCom.jsx';
import EventCom from './components/EventCom.jsx';
import  CheckBoxGroup  from './components/CheckBoxCom.jsx';
import  CheckBoxGroup2  from './components/CheckBoxCom2.jsx';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, Box, Flex} from '@chakra-ui/react';

/*
<eventCom sProp = "Luna de sangre"/>
<JefesCom sProp = "Los Gemelos"/> 
*/

export default function Home() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const router = useRouter();
  const [itemSeleccionado, setItemSeleccionado] = useState({ tipo:'jefe', nombre:'Rey Slime' })
  
  const clickCountRef = useRef(0);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    if (router.query) {
      const { tipo, nombre } = router.query;
      if (tipo && nombre) {
        setItemSeleccionado({ tipo, nombre });
      }
    }
  }, [router.query]);

  const manejarClick = (tipo, nombre) => {
    const formattedName = nombre.toLowerCase().replace(/\s+/g, '-');
    router.push(`/?tipo=${tipo}&nombre=${formattedName}`, undefined, { shallow: true });
    setItemSeleccionado({ tipo, nombre });
  };

  const mostrarInfo = () => {
    if (itemSeleccionado.tipo === 'jefe'){
      return <JefesCom sProp={itemSeleccionado.nombre}/>;
    } else if (itemSeleccionado.tipo === 'evento'){
      return <EventCom sProp={itemSeleccionado.nombre}/>;
    }
    return null;
  };

  const easterEgg = () => {
    clickCountRef.current += 1;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      if (clickCountRef.current >= 5) {
        window.open('/data/bosses.mp4', '_blank');
      }
      clickCountRef.current = 0;
    }, 150);
  };

  return (
    <main className="main">
      <div>
        <h1 className='text'>Guía de progresión Terraria</h1>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab onClick={easterEgg}>Bosses</Tab>
            <Tab>Eventos</Tab>
          </TabList>
          <TabPanels style={{color: 'white'}}>
              <TabPanel>
              <div className="lista">
                <Box className="listajefes">
                  {jefes && jefes.datos && (
                    <List>
                      {jefes.datos.map((elemento) => (
                        <ListItem key={elemento.bossName}>
                          <Flex style={{alignItems: 'center',justifyContent: 'space-between'}}>
                            <a href="#" onClick={() => manejarClick('jefe', elemento.bossName)}>
                              {elemento.order}.- {elemento.bossName}
                            </a>
                          </Flex>
                        </ListItem>
                      ))}
                    </List>
                  )}
                   </Box>
                  <div className="checkboxes-container">
                    <CheckBoxGroup numCheckboxes={jefes?.datos?.length} />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="lista">
                <Box className="listaEventos">
                  {eventos && eventos.datos && (
                    <List>
                      {eventos.datos.map((elemento) => (
                        <ListItem key={elemento.eventName}>
                          <Flex style={{alignItems: 'center',justifyContent: 'space-between'}}>
                            <a href="#" onClick={() => manejarClick('evento', elemento.eventName)}>
                              {elemento.order}.- {elemento.eventName}
                            </a>
                          </Flex>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
                <div className="checkboxes-container">
                    <CheckBoxGroup2 numCheckboxes={eventos?.datos?.length} />
                  </div>
                </div>
              </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      
      <div className="components">
        {mostrarInfo()}
      </div>

      <footer>
        <p> Copyright © {currentYear} "Exquizos". Chile.</p>
      </footer>
    </main>
  );
}
