let selected = 0;
              
function checkboxLimit(checkbox) {
        if (checkbox.id === "nada-oferecido") {
            if (checkbox.checked) {
            if (selected > 0) {
                checkbox.checked = false;
            } else {
                    document.getElementById("bebida").disabled = true;
                    document.getElementById("combo").disabled = true;
                    document.getElementById("tamanho").disabled = true;
                }
                    } else {
                      document.getElementById("bebida").disabled = false;
                      document.getElementById("combo").disabled = false;
                      document.getElementById("tamanho").disabled = false;
                    }
                    } else {
                    if (checkbox.checked) {
                      selected++;
                    } else {
                      selected--;
                    }
                    if (selected > 3) {
                      checkbox.checked = false;
                      selected--;
                    }
                }
}


// Obtém o elemento de entrada
const input = document.querySelector("#datahora");

// Função que atualiza a hora
function updateTime() {
  // Obtém a data e hora atuais
  const now = new Date();

  // Obtém a diferença em minutos entre o fuso horário local e o UTC
  const timezoneOffset = now.getTimezoneOffset();

  // Adiciona a diferença de minutos ao horário atual para obter o horário local
  now.setMinutes(now.getMinutes() + timezoneOffset);

  // Retira 3 horas ao horário atual (fuso)
  now.setHours(now.getHours() - 3);

  // Obtém o horário local no formato hh:mm
  const currentHours = now.getHours().toString().padStart(2, "0");
  const currentMinutes = now.getMinutes().toString().padStart(2, "0");
  const currentTimeString = `${currentHours}:${currentMinutes}`;

  // Obtém a data no formato yyyy-mm-dd
  const currentDateString = now.toISOString().slice(0, 10);

  // Atribui a data e hora ao elemento de entrada
  input.value = `${currentDateString}T${currentTimeString}`;
}

// Atualiza a hora a cada 60 segundos (60000 milissegundos)
setInterval(updateTime, 1000);

// Executa a função pela primeira vez para definir a hora inicial
updateTime();
