let playerCounterWins = 0;
let cpuCounterWins = 0;
let counterTies = 0;
let messageWinner;

function machinePlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    case 2:
      return "tijera";
    default:
      break;
  }
}

function selectWinner(playerOption, cpuChoice) {
  if (playerOption === cpuChoice) {
    counterTies++;
    return "Empate";
  } else if (
    (playerOption === "piedra" && cpuChoice === "tijera") ||
    (playerOption === "papel" && cpuChoice === "piedra") ||
    (playerOption === "tijera" && cpuChoice === "papel")
  ) {
    playerCounterWins++;
    return "El Jugador";
  } else {
    cpuCounterWins++;
    return "La Maquina";
  }
}
function playCachipun() {
  const quantity = parseInt(prompt("Cuantas veces desea jugar al cachipún?"));

  for (let i = 0; i < quantity; i++) {
    const playerChoice = prompt("Elija su jugada: Piedra, Papel, Tijera").toLowerCase();
    const cpuChoice = machinePlay();
    alert(`La jugada de la máquina fue: ${cpuChoice}`);
    const winner = selectWinner(playerChoice, cpuChoice);
    alert(`El ganador es: ${winner}!!!`);
  }

  if (playerCounterWins > cpuCounterWins) {
    messageWinner = "Felicidades haz ganado más veces!!";
  } else if (cpuCounterWins > playerCounterWins) {
    messageWinner = "La máquina te dio una paliza :(";
  } else {
    messageWinner = "Son igual de buenos, ha sido un EMPATE!!";
  }
  alert(`
        Cantidad de jugadas: ${quantity}
        Jugadas ganadas por el jugador: ${playerCounterWins}
        Jugadas ganadas por la máquina: ${cpuCounterWins}
        Jugadas que fueron empate: ${counterTies}
        
        ${messageWinner}`);
}
