//pegando ids
const inputAposta = document.querySelector('#inputAposta')
const apostaElement = document.querySelector('#resultado')
const bntJogarDados = document.querySelector('#bntJogarDados')
const sectionHeader = document.getElementById('jogoHeader')

//função acionada ao clica no botão lançar dados

function jogaDados() {
  if (inputAposta.value == '') {
    //primeira coisa verifica se foi feita uma aposta
    alert('Faça sua aposta')
    return
  }

  bntJogarDados.setAttribute('disabled', true)

  const valorAposta = //guarda o valor da aposta +  html personalizado para exibir no resultado
    '<div>' +
    ' Valor da aposta foi de  ' +
    'R$ ' +
    inputAposta.value +
    ' Reais' +
    '</div>'

  const valorPremio = //guarda o valor do premio + html personalizado se o usuário ganhar
    '<h1>Você ganhou, Parabéns! </h1> <div>' +
    'Seu Prêmio é de R$ ' +
    inputAposta.value * 7 +
    ' Reais' +
    '</div>'

  // gerar numero aleátorio dos dois dados
  const numAleatoryd1 = Math.floor(Math.random() * 6)
  const numAleatoryd2 = Math.floor(Math.random() * 6)
  const totalPontos =
    parseInt(numAleatoryd1) + 1 + (parseInt(numAleatoryd2) + 1) //gambiara que deu certo

  const dadosJogados = // html personalizado para exibir as imagens dos dados e o total de pontos obtidos no lançamento
    `<img
  id="dado1"
  src="../img/ldadon${numAleatoryd1 + '.png'}"
  alt="lado do dado}"
/>
<img
  id="dado2"
  src="../img/ldadon${numAleatoryd2 + '.png'}"
  alt="lado do dado}"
/>` +
    '<h2>' +
    totalPontos +
    ' pontos </h2>'

  // esconder e mostrar html de elementos
  apostaElement.innerHTML = ''
  sectionHeader.style.display = 'initial'
  sectionHeader.innerHTML = "<img src='../img/dados_girando.gif' />"

  //depois de 1 segundo, analisa se ganhou e exibir
  setTimeout(function () {
    sectionHeader.style.display = 'none'
    if (totalPontos == 7) {
      sectionHeader.style.display = 'initial'
      sectionHeader.innerHTML = "<img src='../img/win.gif' />"
      setTimeout(function () {
        sectionHeader.style.display = 'none'
        inputAposta.value = ''
        apostaElement.innerHTML = valorAposta + dadosJogados + valorPremio
      }, 1500)
    } else {
      // vetor com resposta para incentivar o perdedor a não parar
      const incentivo = [
        'Não foi dessa jogador, continue tentando!',
        'É assim mesmo, só ganhar quem joga, vamos mais uma!',
        'Se você parar, por aqui veras que lutou em vão',
        'A luta só termina depois que o bolso estiver cheio',
        'Muitos tentaram e ganharam, não desista',
        'Você é maior do que suas derrotas, aposte mais uma',
        'Tente novamente, a sorte as vezes demora mais chega',
        'Quando tudo estiver difícil, é porque você está no caminho certo',
        'Vamos jogador, não desanime, senta o dedo',
        'Você está indo bem, nada de negativismo, continue',
        'Está liso? faça apostas menores, o importante é não parar',
        'Vamos ganhar, vai dar certo',
        'Você chegou mais longe do que muitos, pra cima jogador'
      ]

      //mostrar o resultado mais mensagem de incentivo
      apostaElement.innerHTML =
        dadosJogados + `<p>${incentivo[totalPontos]}</p>` //gambiarra usando a var de possibilidade de somas
    }
  }, 1000)
  bntJogarDados.removeAttribute('disabled')
}
