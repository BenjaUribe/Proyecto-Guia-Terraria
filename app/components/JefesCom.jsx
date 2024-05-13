import jefes from "@/app/boss_list.json";

function JefesCom({ sProp = "Ojo de Cthulhu" }) {
  const currentBoss = jefes.datos.find((boss) => boss.bossName === sProp);
  return (
    <main>
      {currentBoss && (<img src={currentBoss.bossImage} alt={sProp} />)}
    </main>
  );
  }
  
  export default JefesCom;