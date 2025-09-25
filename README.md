# 🎭 Party RPG - Gerenciador de Personagens

<div align="center">
  
  ![React Native](https://img.shields.io/badge/React_Native-0.81.4-61DAFB.svg)
  ![Expo](https://img.shields.io/badge/Expo-~54.0.1-000020.svg)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg)
  ![License](https://img.shields.io/badge/License-MIT-green.svg)
</div>

## 📖 Sobre o Projeto

**Party RPG** é um aplicativo mobile desenvolvido em React Native que permite aos jogadores de RPG gerenciar sua party (grupo) de personagens de forma intuitiva e visual. O app oferece funcionalidades para adicionar, recrutar e filtrar personagens, proporcionando uma experiência completa para mestres e jogadores.

### 🎯 Objetivo

Simplificar o gerenciamento de personagens em campanhas de RPG, oferecendo uma interface moderna e funcional para organizar sua party de aventureiros.

## ✨ Funcionalidades Principais

### 🔔 1. Modal de Confirmação
- **Modal de Sucesso**: Confirmação visual ao adicionar novos personagens
- **Modal de Remoção**: Alerta de confirmação antes de remover personagens
- **Feedback Imediato**: Notificações visuais para todas as ações importantes

### 🎨 2. Ícones Visuais Interativos
- **FontAwesome Icons**: Ícones profissionais para ações e estados
- **MaterialIcons**: Símbolos temáticos para RPG
- **Indicadores Visuais**: 
  - ⭐ Personagem recrutado
  - 🌙 Personagem disponível
  - 🏰 Tema medieval/fantasia

### 🔍 3. Sistema de Filtros
- **Filtro "Todos"**: Visualiza todos os personagens da party
- **Filtro "Recrutados"**: Mostra apenas personagens ativos
- **Filtro "Disponíveis"**: Exibe personagens não recrutados
- **Interface Intuitiva**: Botões com feedback visual do filtro ativo

## 🚀 Tecnologias Utilizadas

```json
{
  "frontend": "React Native 0.81.4",
  "framework": "Expo ~54.0.1",
  "linguagem": "JavaScript ES6+",
  "icons": ["@expo/vector-icons", "FontAwesome", "MaterialIcons"],
  "estado": "React Hooks (useState)",
  "componentes": "Funcionais com Props"
}
```

## 📱 Estrutura do Projeto

```
Party-RPG/
├── 📁 assets/
│   ├── 🖼️ icon.png
│   ├── 🖼️ adaptive-icon.png
│   ├── 🖼️ favicon.png
│   └── 🖼️ splash-icon.png
├── 📁 components/
│   ├── 📄 AddCharacterForm.js    # Formulário de adição
│   ├── 📄 CharacterCard.js       # Card de personagens
│   ├── 📄 Header.js              # Cabeçalho do app
│   └── 📄 SuccessModal.js        # Modal de confirmação
├── 📄 App.js                     # Componente principal
├── 📄 index.js                   # Ponto de entrada
├── 📄 package.json               # Dependências
└── 📄 app.json                   # Configurações Expo
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo móvel ou emulador

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/isab5/Party-RPG.git
   cd Party-RPG
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm start 
      ```  
   ```bash
   npx expo start
   ```

4. **Teste no dispositivo**
   - Escaneie o QR Code com o app Expo Go
   - Ou execute no emulador Android/iOS
   - https://expo.dev/artifacts/eas/c3gyXTK2Rg9uG12rCs5jig.apk

## 📋 Como Usar

### Adicionando Personagens
1. Digite o nome do personagem no campo de texto
2. Toque no botão ➕ ou pressione Enter
3. Confirme a ação no modal de sucesso

### Gerenciando Status
- **Recrutar**: Toque no personagem para alterar status
- **Remover**: Mantenha pressionado e confirme a remoção

### Filtrando Personagens
- **Todos**: Visualiza toda a party
- **Recrutados**: Apenas personagens ativos
- **Disponíveis**: Personagens não recrutados

## 🎨 Design e Interface

### Paleta de Cores
- **Primária**: `#F2B84B` (Dourado RPG)
- **Secundária**: `#BF8339` (Bronze)
- **Fundo**: `#0D0D0D` (Preto profundo)
- **Destaque**: `#730E0E` (Vermelho escuro)
- **Sucesso**: `#4BB543` (Verde)

### Tipografia
- **Títulos**: Fonte bold, cor dourada
- **Texto**: Cor bronze sobre fundo escuro
- **Ícones**: 16-24px, cores temáticas

## 🔧 Componentes Principais

### `App.js`
- Gerencia o estado global dos personagens
- Implementa sistema de filtros
- Coordena comunicação entre componentes

### `CharacterCard.js`
- Renderiza lista de personagens
- Controla interações (recrutar/remover)
- Exibe status visual com ícones

### `AddCharacterForm.js`
- Formulário de entrada de dados
- Validação de campos
- Integração com modal de sucesso

### `SuccessModal.js`
- Modal de confirmação reutilizável
- Animações suaves
- Feedback visual positivo

## 📊 Funcionalidades Técnicas

### Estado da Aplicação
```javascript
const [characters, setCharacters] = useState([
  { id: 1, name: "🧙‍♂️ Gandalf o Mago", recruited: 0 },
  { id: 2, name: "⚔️ Aragorn o Guerreiro", recruited: 1 },
  { id: 3, name: "🏹 Legolas o Arqueiro", recruited: 0 }
]);
```

### Sistema de Filtros
```javascript
const filteredCharacters = characters.filter(character => {
  if (filter === "recruited") return character.recruited === 1;
  if (filter === "available") return character.recruited === 0;
  return true;
});
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova funcionalidade'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autoras

**Ana** - [@souzabweatriz] (https://github.com/souzabweatriz)
**Isabella** - [@isab5](https://github.com/isab5)

---

<div align="center">
  <p>⚔️ Criado com ❤️ para a comunidade RPG ⚔️</p>
  
  [![GitHub](https://img.shields.io/badge/GitHub-Party--RPG-181717?logo=github)](https://github.com/isab5/Party-RPG)
</div>
