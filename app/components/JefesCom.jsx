import jefes from "@/app/boss_list.json";

function JefesCom({ sProp }) {
  const currentBoss = jefes.datos.find((boss) => boss.bossName === sProp);
  const vida = currentBoss.stats.life1;
  const def = currentBoss.stats.armor;
  const atq = currentBoss.stats.damage;

  return (
    <main className="compJefes">

      <div className="topComp">
        <div className="imageJefes">
          {currentBoss && (<img src={currentBoss.bossImage} alt={sProp} />)}
        </div>
        <div className="dataJefes">
          <p>Vida: {vida}</p>
          <p>Defensa: {def}</p>
          <p>Ataque: {atq}</p> 
        </div>
      </div>
      
      <div>  
        FILA DE INVOCACION & LOOT
      </div>
        
      <div>
        FILA DE CLASES
      </div>

    </main>
  );
  }
  
  export default JefesCom;