let dia = "sexta";

function fimDeSemana(dia) {
  switch (dia) {
    case "segunda":
    case " quarta":
    case "sexta-feira":
      console.log(" você tem aulas");
      break;
    default:
      console.log("você não tem aulas");
  }
}

fimDeSemana(dia);
