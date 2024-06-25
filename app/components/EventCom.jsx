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

            <div className="eventIzq">
                <div className="eventSum">
                    {currentEvent && (<img src={currentEvent.summonImage} alt={sProp} />)}
                </div>
                <div className="itemData">                    
                    <p>Item: {currentEvent.summonItem}</p>
                    <p>Crafteo: {currentEvent.craft}</p>
                </div>
            </div>

            <div className="eventDer">
                <div className="imageEvent">
                    {currentEvent && (<img src={currentEvent.eventImage} alt={sProp} />)}
                </div>

                <div className="summonData">    
                        <p>Nombre: {currentEvent.eventName}</p>
                        <p>Orden: {currentEvent.order}</p>
                        <p>Invocación: {currentEvent.summon}</p>        
                </div>
            </div>

        </div>

        <div className="eventBoss">
            Fila de los bosses de evento
        </div>

        <div className="lootEvent">
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
        
      </main>
    );
    }
    
    export default EventCom;