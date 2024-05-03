"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="main">
    <h1>Guia de Terraria</h1>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Bosses</Tab>
          <Tab>Eventos</Tab>
        </TabList>
        <TabPanels>
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
