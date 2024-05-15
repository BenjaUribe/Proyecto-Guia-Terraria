import jefes from "@/app/boss_list.json";

function JefesCom({ sProp = "Rey Slime"}) {
  const currentBoss = jefes.datos.find((boss) => boss.bossName === sProp);
  const vida = currentBoss.stats.life1;
  const def = currentBoss.stats.armor;
  const atq = currentBoss.stats.damage;

  return (
    <main>
      {currentBoss && (<img src={currentBoss.bossImage} alt={sProp} />)}
      <div>Vida: {vida}</div>
      <div>Defensa: {def}</div>
      <div>Ataque: {atq}</div>
    </main>
  );
  }
  
  export default JefesCom;