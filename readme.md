#Readme 

        DISPONIBILIZADO UM PDF APRESENTANDO O APP NA MAIN BRANCH

        Introdução sobre o projeto

O aplicativo "Farma-Ok!" possui o objetivo de facilitar a gestão de farmácias, procurando integrar as unidades filiais, a unidade "Head-Quarter HQ"  e entregadores
em uma unica solução conveniente que atenda às suas principais necessidades:

unidade "Head-Quarter HQ" - Permite o acompanhamento do estoque de produtos da rede, Listando todos os produtos disponiveis nas unidades SC, SP, CE
                          - Permite o cadastro de novos usuários (unidades filias ou motoristas)
                          - Permite o ativamento ou desativamento de usuários

unidade "Filial" - Permite a listagem de Movimentações de Produtos
                 - Permite a criação de novas Movimentações de Produtos

motoristas       - Permite a visualização das movimentações criadas pelas filiais
                 - Permite a entrega do produto 
                 - Permite a visualização do inicio e destino da entrega


        Tecnologias utilizadas

para o desenvolvimento do aplicativo "Farma-Ok!" foi utilizado principalmente a tecnologia react-native (uma extensão da linguagem de programação JavaScript)
e bibliotecas também desenvolvidas para o react-native com destaque à biblioteca 'Axios' para fazer o Front-End ( a area que utilizamos para interagir com o app)
Durante o desenvolvimento do app foram utilizados diversos componentes do react-native (como views, background-image, touchable-opacity)
Também foram utilizadas bibliotecas como:

    -Image-Picker para permitir que os motoristas tirem fotos dos produtos para iniciar ou finalizar entregadores

    -MapView para permitir a criação de mapas também foram utilizados os componentes   Marker e Polyline  para criar os marcadores e as linhas que conectam os marcadores

    -Ionicos e outros variantes para adicionar os pequenos icones em cards e etc

 Javascript também foi utilizado para providenciar o Back-End do app lidando com as requisições que fazemos
 

        Como executar?

Inicie a pasta contendo o app, após isso pressione "ctrl + j" isso ira abrir o terminal do Vscode apos isso é so digitar npx expo start
(OBS: devido a erros com rede foi utilizado ngrok e npx expo start --tunnel, também é necessario trocar as rotas manualmente)

Também é necessario abrir a pasta contendo o back-end, pós isso pressione "ctrl + j" isso ira abrir o terminal do Vscode apos isso é so digitar npm run start para iniciar o back-end do projeto

        Possiveis Melhorias

O aplicativo "Farma-Ok!" ainda pode ser melhorado das seguintes maneiras

- Na tela de movimentações para motoristas é possivel que um motorista "finalize a entrega" de outro motorista, isso ocorre pois não há um tratamento para garantir que a entrega seje 
completada pelo mesmo motorista que a iniciou

- Seria interessante adicionar um sistema de compras de produtos na tela "Gerenciamento de Estoques" dessa maneira o app se tornaria mais dinâmico
