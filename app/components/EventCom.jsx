import eventos from "@/app/event_list.json";

function EventCom({ sProp }) {
    const currentEvent = eventos.datos.find((event) => event.eventName === sProp);


    return (
      <main className="compEvent">
        <div className="topComp">
            <div className="imageEvent">
                {currentEvent && (<img src={currentEvent.eventImage} alt={sProp} />)}
            </div>
    
            <div className="dataEvent">
                <p>Nombre: {currentEvent.eventName}</p>
                <p>Orden: {currentEvent.order}</p>
                <p>Invocación: {currentEvent.summon}</p>
            </div>
        </div>

        <div>
            Fila de los bosses de evento
        </div>

        <div>
            Fila de los loots
        </div>
        
      </main>
    );
    }
    
    export default EventCom;