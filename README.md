# Bootcamp Binance


  
### Software/Subject: <a href="../../">blockchain   <img src="https://github.com/PedroHeeger/main/blob/main/0-aux/logos/content/blockchain.jpg" alt="blockchain" width="auto" height="25"></a>



---



### Theme:
- Blockchain

### Used Tools:
- Operating System (OS): 
  - Linux   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="linux" width="auto" height="25">
- Linux Distribution:
  - Ubuntu   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="ubuntu" width="auto" height="25">
- Language:
  - HTML   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" width="auto" height="25">
  - JavaScript   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="auto" height="25">
  - Markdown   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt="markdown" width="auto" height="25">
- Runtime Environment:
  - Node.js   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="auto" height="25">
- Integrated Development Environment (IDE) and Text Editor:
  - Visual Studio Code (VS Code)   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="auto" height="25">
- Versioning: 
  - Git   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="auto" height="25">
- Repository:
  - GitHub   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" width="auto" height="25">
- Library:
  - Bitcoin Improvement Proposal 39 (bip39)   <img src="" alt="bip39" width="auto" height="25">
  - Bitcoin Improvement Proposal 32 (bip32)   <img src="" alt="bip32" width="auto" height="25">
  - bitcoinjs-lib   <img src="https://github.com/PedroHeeger/main/blob/main/0-aux/logos/frame_library/bitcoinjs-lib.png" alt="bitcoinjs-lib" width="auto" height="25">
- Blockchain:
  - Bitcoin (BTC)   <img src="https://github.com/PedroHeeger/main/blob/main/0-aux/logos/software/btc.webp" alt="btc" width="auto" height="25">
  - Bitcoin Testnet Faucet   <img src="https://github.com/PedroHeeger/main/blob/main/0-aux/logos/software/btc.webp" alt="bitcoin_testnet_faucet" width="auto" height="25">
  - Blockchain.com   <img src="https://github.com/PedroHeeger/main/blob/main/0-aux/logos/software/blockchain_com.png" alt="blockchain_com" width="auto" height="25">
  - Blockstream Explorer   <img src="https://github.com/PedroHeeger/main/blob/main/0-aux/logos/sites/blockstream_explorer.webp" alt="blockstream_explorer" width="auto" height="25">
  - Electrum Bitcoin Wallet   <img src="https://github.com/PedroHeeger/main/blob/main/0-aux/logos/software/electrum_bitcoin_wallet.png" alt="electrum_bitcoin_wallet" width="auto" height="25">

---

### Bootcamp Module 1 Structure
1. <a name="item1">Fundamentos da Blockchain</a><br>
  1.2. <a href="#item1.2">Desafio de Projeto: Criando e Utilizando a Sua Carteira de Criptomoedas</a><br>


---

### Objective:
O objetivo deste deasafio é criar carteiras e realizar transações na rede de teste usando fauceuts (testnet coins).  

---

### Development:
O desenvolvimento deste desafio foi utilizar o Node.js para criar carteiras e realizar transações, NECESSÁRIO algumas modificações e estudos paralelos as aulas.
- mudar o parão de carteiras para p2wpkh
- adicionar o prefixo p2wpkh:(private key) no momento de restaurar a carteira 


<a name="item1.2"><h4>1.2 Desafio de Projeto: Criando e Utilizando a Sua Carteira de Criptomoedas</h4></a>[Back to summary](#item1.2) | <a href="a">Certificate</a>

 **JavaScript** gerar uma carteira de **Bitcoin**, importar essa carteira para um software gerenciador de carteiras software **Electrum Bitcoin Wallet** (Wallet) e realizar de transações de envio e recebimento de **Bitcoin**. Foi utilizado um faucet para **Bitcoin**, Neste caso, ele foi utilizado para obter moedas na testnet da blockchain do **Bitcoin**, que é uma rede auxiliar para testes. 

  Como alternativa foi utilizado o explorador de blocos **Blockstream Explorer**, que funcionava na testnet o sugerido pelo desafio não era eficiente para fins didáticos.

Criada a primiera carteira 

![image](https://github.com/user-attachments/assets/45b77e62-e7ec-4565-bf70-1a17b6fad4bc)

e segunda carteira 

![image](https://github.com/user-attachments/assets/9e643f7a-3e01-48e7-9b70-a95b6b50b3b6)




Ainda foi possível utilizar o explorador de blocos **Blockstream Explorer** para visualizar as transações na testnet sendo confirmadas nos blocos da rede blockchain. 
[blockstream Explorer testnet](https://blockstream.info/testnet/)

O histórico da carteira comprova as transações realizadas que podem ser conferidas no link acima utilizando os endereços da carteiras.

![image](https://github.com/user-attachments/assets/464cf184-168e-4fa8-bfd5-3f395559f065)

# Warnings

Agradecimento ao PedroHeeger por suas postágens no fórum de como modificou parte do código e ajudas prestadas.

1. Necessário modificar o padrão para 

![image](https://github.com/user-attachments/assets/6578d791-85a2-4187-8980-3a92d4355543)

2. colocar o prefixo p2wpkh na carteira Electrum 

![image](https://github.com/user-attachments/assets/eeb7dfc4-d769-49f9-85fc-11be5fa827d1)




