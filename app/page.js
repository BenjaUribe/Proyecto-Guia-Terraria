"use client";

import Image from 'next/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="main">
      <h1 className='text'>Guia de Terraria</h1>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Bosses</Tab>
          <Tab>Eventos</Tab>
        </TabList>
        <TabPanels style={{color: 'white'}}>
            <TabPanel>
              <p> AQUI TODO LO DE LOS BOSSES </p>
            </TabPanel>
            <TabPanel>
              <p> AQUI TODO LO DE LOS EVENTOS </p>
            </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
