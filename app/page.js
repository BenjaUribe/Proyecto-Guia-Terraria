"use client";


import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Home() {
  const today = new Date();
  const currentYear = today.getFullYear();

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
              </TabPanel>
              <TabPanel>
                <p> AQUI TODO LO DE LOS EVENTOS </p>
              </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <footer>
        <p> Copyright © {currentYear} "Inserte nombre". Chile.</p>
      </footer>
    </main>
  );
}
