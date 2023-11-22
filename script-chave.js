document.getElementById("verificarButton").addEventListener("click", verificar);
document.getElementById("limparButton").addEventListener("click", limpar);
document.getElementById("chaveAcessoInput").addEventListener("keydown",
  function (event) {
    if (event.key === "Enter") {
      verificar();
    }
  });

  function verificarChaveAcesso(chave) {
const mensagemErroElement = document.getElementById("mensagemErro");

if (chave.length < 44) {
    exibirMensagemErro("A sua chave possui menos de 44 números.");
    return null;
} else if (chave.length > 44) {
    exibirMensagemErro("A sua chave possui mais de 44 números.");
    return null;
} else if (!/^\d+$/.test(chave)) {
    exibirMensagemErro("A chave não pode possuir letras e números, por favor, verifique");
    return null;
}

const uf = chave.substr(0, 2);
const anoMes = chave.substr(2, 4);
const cnpj = chave.substr(6, 14);
const modeloCodigo = chave.substr(20, 2);
const serie = chave.substr(22, 3);
const numeroNF = chave.substr(25, 9);
const formaEmissao = chave.substr(34, 1);
const codigoNumerico = chave.substr(35, 8);
const digitoVerificador = chave.substr(43, 1);
  const ufNames = {
    "11": "Rondônia",
    "12": "Acre",
    "13": "Amazonas",
    "14": "Roraima",
    "15": "Pará",
    "16": "Amapá",
    "17": "Tocantins",
    "21": "Maranhão",
    "22": "Piauí",
    "23": "Ceará",
    "24": "Rio Grande do Norte",
    "25": "Paraíba",
    "26": "Pernambuco",
    "27": "Alagoas",
    "28": "Sergipe",
    "29": "Bahia",
    "31": "Minas Gerais",
    "32": "Espírito Santo",
    "33": "Rio de Janeiro",
    "35": "São Paulo",
    "41": "Paraná",
    "42": "Santa Catarina",
    "43": "Rio Grande do Sul",
    "50": "Mato Grosso do Sul",
    "51": "Mato Grosso",
    "52": "Goiás",
    "53": "Distrito Federal"
  };

  const ufName = ufNames[uf] || "UF desconhecida";

  let modelo = "";
  let modeloNome = "";

if (modeloCodigo === "01") {
modelo = "Modelo 01";
modeloNome = "(01) Nota Fiscal 1/1ª";
} else if (modeloCodigo === "02") {
modelo = "Modelo 02";
modeloNome = "(02) Nota Fiscal de Venda a Consumidor";
} else if (modeloCodigo === "04") {
modelo = "Modelo 04";
modeloNome = "(04) Nota Fiscal de Produtor";
} else if (modeloCodigo === "06") {
modelo = "Modelo 06";
modeloNome = "(06) Nota Fiscal/Conta de Energia Elétrica";
} else if (modeloCodigo === "07") {
modelo = "Modelo 07";
modeloNome = "(07) Nota Fiscal de Serviço de Transporte";
} else if (modeloCodigo === "08") {
modelo = "Modelo 08";
modeloNome = "(08) Conhecimento de Transporte Rodoviário de Cargas";
} else if (modeloCodigo === "09") {
modelo = "Modelo 09";
modeloNome = "(09) Conhecimento de Transporte Aquaviário de Cargas";
} else if (modeloCodigo === "10") {
modelo = "Modelo 10";
modeloNome = "(10) Conhecimento Aéreo";
} else if (modeloCodigo === "11") {
modelo = "Modelo 11";
modeloNome = "(11) Conhecimento de Transporte Ferroviário de Cargas";
} else if (modeloCodigo === "13") {
modelo = "Modelo 13";
modeloNome = "(13) Bilhete de Passagem Rodoviário";
} else if (modeloCodigo === "14") {
modelo = "Modelo 14";
modeloNome = "(14) Bilhete de Passagem Aquaviário";
} else if (modeloCodigo === "15") {
modelo = "Modelo 15";
modeloNome = "(15) Bilhete de Passagem e Nota de Bagagem";
} else if (modeloCodigo === "17") {
modelo = "Modelo 17";
modeloNome = "(17) Despacho de Transporte";
} else if (modeloCodigo === "16") {
modelo = "Modelo 16";
modeloNome = "(16) Bilhete de Passagem Ferroviário";
} else if (modeloCodigo === "18") {
modelo = "Modelo 18";
modeloNome = "(18) Resumo de Movimento Diário";
} else if (modeloCodigo === "20") {
modelo = "Modelo 20";
modeloNome = "(20) Ordem de Coleta de Cargas";
} else if (modeloCodigo === "21") {
modelo = "Modelo 21";
modeloNome = "(21) Nota Fiscal de Serviço de Comunicação";
} else if (modeloCodigo === "22") {
modelo = "Modelo 22";
modeloNome = "(22) Nota Fiscal de Serviço de Telecomunicação";
} else if (modeloCodigo === "23") {
modelo = "Modelo 23";
modeloNome = "(23) GNRE";
} else if (modeloCodigo === "24") {
modelo = "Modelo 24";
modeloNome = "(24) Autorização de Carregamento e Transporte";
} else if (modeloCodigo === "25") {
modelo = "Modelo 25";
modeloNome = "(25) Manifesto de Carga";
} else if (modeloCodigo === "26") {
modelo = "Modelo 26";
modeloNome = "(26) Conhecimento de Transporte Multimodal de Cargas";
} else if (modeloCodigo === "27") {
modelo = "Modelo 27";
modeloNome = "(27) Nota Fiscal De Transporte Ferroviário De Carga";
} else if (modeloCodigo === "28") {
modelo = "Modelo 28";
modeloNome = "(28) Nota Fiscal/Conta de Fornecimento de Gás Canalizado";
} else if (modeloCodigo === "29") {
modelo = "Modelo 29";
modeloNome = "(29) Nota Fiscal/Conta De Fornecimento D'água Canalizada";
} else if (modeloCodigo === "55") {
modelo = "Modelo 55";
modeloNome = "[55] Nota Fiscal Eletrônica";
} else if (modeloCodigo === "57") {
modelo = "Modelo 57";
modeloNome = "(57) Conhecimento de Transporte Eletrônico - CT-e";
} else if (modeloCodigo === "58") {
modelo = "Modelo 58";
modeloNome = "(58) Cupom Fiscal Eletrônico CF-e-SAT";
} else if (modeloCodigo === "59") {
modelo = "Modelo 59";
modeloNome = "(59) Cupom Fiscal Eletrônico - CF-e";
} else if (modeloCodigo === "60") {
modelo = "Modelo 60";
modeloNome = "(60) Cupom Fiscal Eletrônico CF-e-ECF";
} else if (modeloCodigo === "65") {
modelo = "Modelo 65";
modeloNome = "(65) NFe para Consumidor Final";
} else {
modelo = "Modelo " + modeloCodigo;
modeloNome = "(" + modeloCodigo + ") - Modelo desconhecido";
}


  return {
    uf,
    ufName,
    anoMes,
    cnpj,
    modelo,
    modeloNome,
    serie,
    numeroNF,
    formaEmissao,
    codigoNumerico,
    digitoVerificador
  };
}

function verificar() {
const chaveAcesso = document.getElementById("chaveAcessoInput").value;
const informacoesChave = verificarChaveAcesso(chaveAcesso);

if (informacoesChave) {
  exibirInformacoesChave(informacoesChave);


  const informacoesFormatadas = formatarInformacoesChave(informacoesChave);
    copiarInformacoes(informacoesFormatadas);


    exibirCaixaInformacoesCopiadas();
}
}
function exibirMensagemErro(mensagem) {
const mensagemErroElement = document.getElementById("mensagemErro");
mensagemErroElement.textContent = mensagem;
mensagemErroElement.style.display = "block";

setTimeout(function () {
    mensagemErroElement.style.display = "none";
    mensagemErroElement.textContent = "";
}, 3000);
}

function exibirInformacoesChave(informacoes) {
  document.getElementById('ufInfo').textContent = `${informacoes.uf} - ${informacoes.ufName}`;
  document.getElementById('anoMesInfo').textContent = informacoes.anoMes;


  const cnpjInfo = document.getElementById('cnpjInfo');
  cnpjInfo.textContent = formatarCNPJ(informacoes.cnpj);

  document.getElementById('modeloInfo').textContent = informacoes.modeloNome;

  const serieElement = document.getElementById('serieInfo');
  const serieValue = informacoes.serie;

  serieElement.textContent = serieValue;


  if (serieValue === '222' || serieValue === '999' || serieValue === '111') {
    serieElement.style.color = 'tomato';
    serieElement.style.fontStyle = 'italic';
    serieElement.textContent += ' - Série não identificada.';
  } else {
    serieElement.style.color = 'inherit';
    serieElement.style.fontStyle = 'normal';
  }

  serieElement.addEventListener('mouseout', function () {
    document.getElementById('chaveAcessoInput').innerHTML = '';
  });

  document.getElementById('numeroNFInfo').textContent = informacoes.numeroNF;
  document.getElementById('formaEmissaoInfo').textContent = informacoes.formaEmissao;
  document.getElementById('codigoNumericoInfo').textContent = informacoes.codigoNumerico;
  document.getElementById('digitoVerificadorInfo').textContent = informacoes.digitoVerificador;
}


function verificar() {
  const chaveAcesso = document.getElementById("chaveAcessoInput").value;
  verificarChaveAcesso(chaveAcesso);

  const informacoesChave = verificarChaveAcesso(chaveAcesso);

  if (informacoesChave) {

    exibirInformacoesChave(informacoesChave);

    const informacoesFormatadas = formatarInformacoesChave(informacoesChave);
    copiarInformacoes(informacoesFormatadas);

    exibirCaixaInformacoesCopiadas();

  } 
}


function exibirCaixaInformacoesCopiadas() {
  const copiedInfoBox = document.getElementById("copiedInfoBox");
  copiedInfoBox.classList.add("show");

  setTimeout(function () {
    copiedInfoBox.classList.remove("show");
  }, 10000);
}

function limpar() {
  document.getElementById("chaveAcessoInput").value = "";
  document.getElementById("ufInfo").textContent = "";
  document.getElementById("anoMesInfo").textContent = "";
  document.getElementById("cnpjInfo").textContent = "";
  document.getElementById("modeloInfo").textContent = "";
  document.getElementById("serieInfo").textContent = "";
  document.getElementById("numeroNFInfo").textContent = "";
  document.getElementById("formaEmissaoInfo").textContent = "";
  document.getElementById("codigoNumericoInfo").textContent = "";
  document.getElementById("digitoVerificadorInfo").textContent = "";
  document.getElementById("exibirMensagemErro").value = "";
}

function formatarCNPJ(cnpj) {
  const cnpjFormatado = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  return cnpjFormatado;
}

document.getElementById("copiarButton").addEventListener("click", copiarInformacoes);

function copiarInformacoes() {
const ufCaixa = "UF: ";
const ufInfo = document.getElementById('ufInfo').textContent;
const anoMesCaixa = "Ano/Mês: ";
const anoMesInfo = document.getElementById('anoMesInfo').textContent;
const cnpjCaixa = "CNPJ: ";
const cnpjInfo = document.getElementById('cnpjInfo').textContent;
const modeloCaixa = "Modelo: ";
const modeloInfo = document.getElementById('modeloInfo').textContent;
const serieCaixa = "Série: ";
const serieInfo = document.getElementById('serieInfo').textContent;
const numeroNFCaixa = "Número NF: ";
const numeroNFInfo = document.getElementById('numeroNFInfo').textContent;
const formaEmissaoCaixa = "Forma de Emissão: ";
const formaEmissaoInfo = document.getElementById('formaEmissaoInfo').textContent;
const codigoNumericoCaixa = "Código Numérico: ";
const codigoNumericoInfo = document.getElementById('codigoNumericoInfo').textContent;
const digitoVerificadorCaixa = "Dígito Verificador: ";
const digitoVerificadorInfo = document.getElementById('digitoVerificadorInfo').textContent;

const chaveAcessoInput = document.getElementById("chaveAcessoInput").value;

const informacoesCopiadas =
`Chave de Acesso: ${chaveAcessoInput}\n${ufCaixa}${ufInfo}\n${anoMesCaixa}${anoMesInfo}\n${cnpjCaixa}${cnpjInfo}\n${modeloCaixa}${modeloInfo}\n${serieCaixa}${serieInfo}\n${numeroNFCaixa}${numeroNFInfo}\n${formaEmissaoCaixa}${formaEmissaoInfo}\n${codigoNumericoCaixa}${codigoNumericoInfo}\n${digitoVerificadorCaixa}${digitoVerificadorInfo}`;

navigator.clipboard.writeText(informacoesCopiadas)
.then(() => {
  const copiedInfoMessage = document.getElementById('copiedInfoMessage');
  copiedInfoMessage.textContent = 'As informações da chave de acesso foram copiadas!';
  copiedInfoMessage.style.display = 'block';

  setTimeout(() => {
    copiedInfoMessage.style.display = 'none';
  }, 2000);
})
.catch((error) => {
  console.error("Erro ao copiar as informações:", error);
});
}


function voltarPagina() {
window.location.href = "https://validador.info/";
}


const chaveBoxes = document.querySelectorAll(".chave-box");


chaveBoxes.forEach(function(chaveBox) {
  chaveBox.addEventListener("click", function() {
    const chaveTexto = chaveBox.textContent.trim();

    if (chaveTexto !== "") {
      navigator.clipboard.writeText(chaveTexto)
        .then(() => {
          alert("Informação copiada com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao copiar a informação!:", error);
        });
    }
  });
});



// Função para alternar entre os temas
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('theme-dark')) {
    body.classList.remove('theme-dark');
    body.classList.add('theme-white');
  } else {
    body.classList.remove('theme-white');
    body.classList.add('theme-dark');
  }
}

// Evento para alternar o tema ao clicar no botão
document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById('theme-button');
  themeButton.addEventListener('click', toggleTheme);
});

