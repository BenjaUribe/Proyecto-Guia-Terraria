import eventos from "@/app/event_list.json";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box 
  } from '@chakra-ui/react'

function EventCom({ sProp }) {
    const currentEvent = eventos.datos.find((event) => event.eventName === sProp);


    return (
      <main className="compEvent">

        <div className="topCompEvent">

            <div className="eventIzq">
                <div className="imageEvent">
                    {currentEvent && (<img src={currentEvent.eventImage} alt={sProp} />)}
                </div>
                <p>Item: {currentEvent.summonItem}</p>
                <p>Crafteo: {currentEvent.craft}</p>
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
            Fila de los loots
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
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                        <p>text</p>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
        
      </main>
    );
    }
    
    export default EventCom;