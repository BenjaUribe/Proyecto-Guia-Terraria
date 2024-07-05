import eventos from "@/app/event_list.json";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    List,
    ListItem,
    Flex
  } from '@chakra-ui/react'

function EventCom({ sProp }) {
    const currentEvent = eventos.datos.find((event) => event.eventName === sProp);


    return (
      <main className="compEvent">

        <div className="topCompEvent">

            <div className="imageEvent">
                {currentEvent && (<img src={currentEvent.eventImage} alt={sProp} width={300} height={150}/>)}
            </div>
    
            <div className="summonData">    
                <p style={{fontSize: '1.5em'}}><b>{currentEvent.eventName}</b></p>
                <p>Invocación:</p> 
                <p>{currentEvent.summon}</p>        
            </div>

            <div className="eventDer">
                <div className="eventSum">
                    {currentEvent && (<img src={currentEvent.summonImage} alt={sProp} width={100} height={100}/>)}
                </div>
                <div className="itemData">                    
                    <p><b>{currentEvent.summonItem}</b></p>
                    <p>Crafteo: {currentEvent.craft}</p>
                </div>
            </div>

        </div>


        <div className="bottomCompEvent">
            <div className="eventBoss">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem >
                    <h2>
                        <AccordionButton bg="rgba(50,22,2560,0.2)" color="white"
                         _hover={{bg: "rgba(50,22,2560,0.3)"}} _expanded={{bg: "rgba(50,22,2560,0.3)"}}>
                        <Box as='span' flex='1' textAlign='left'>
                            <b>Bosses del evento</b>
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                <AccordionPanel className="boss" pb={4} bg="rgba(152,22,150,0.2)">
                    {currentEvent && currentEvent.eventBosses && (
                    <List>  
                        {currentEvent.eventBosses.map((boss)=> (
                        <ListItem key={boss.Boss}>
                            <Flex style={{alignItems: 'center',justifyContent: 'space-between'}}>
                            <p id={`boss-${boss.Boss}`}>
                            - {boss.Boss}
                            </p>
                            </Flex>
                        </ListItem>
                        ))}
                    </List>
                    )}
                    {!currentEvent.eventBosses && (
                            
                            <p>No hay información para desplegar</p>
                            )}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>

        <div className="lootEvent">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem >
                    <h2>
                        <AccordionButton bg="rgba(256,22,150,0.2)" color="white"
                         _hover={{bg: "rgba(256,22,150,0.3)"}} _expanded={{bg: "rgba(256,22,150,0.3)"}}>
                        <Box as='span' flex='1' textAlign='left'>
                            <b>Loot</b>
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="drop" pb={4} bg="rgba(152,22,150,0.2)">
                    {currentEvent && currentEvent.loot && (
                    <List>
                        {currentEvent.loot.map((drop)=> (
                        <ListItem key={drop.item}>
                            <Flex style={{alignItems: 'center',justifyContent: 'space-between'}}>
                            <p id={`drop-${drop.item}`}>
                            - {drop.item}
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
      </main>
    );
    }
    
    export default EventCom;