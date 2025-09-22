# 🔐 Secure Password Generator

A modern and intuitive web application for generating secure passwords with customizable options.

![Password Generator](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

- **🎯 Customizable Length**: Generate passwords from 4 to 24 characters
- **🔤 Character Options**:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (!@#$%&*...)
- **📋 One-Click Copy**: Easy copy to clipboard functionality
- **📝 Password History**: View previously generated passwords
- **🎨 Modern UI**: Clean and responsive design
- **⚡ Real-time Validation**: Instant feedback for user inputs
- **🔔 Toast Notifications**: User-friendly success and error messages

## 🚀 Demo

The application provides an intuitive interface where users can:
1. Select desired character types
2. Set password length
3. Generate secure passwords instantly
4. Copy passwords with one click
5. View password history

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with CSS variables and responsive design
- **Vanilla JavaScript**: Core functionality and DOM manipulation
- **Font Awesome**: Icons for better user experience
- **Toastify.js**: Toast notifications

## 📁 Project Structure

```
password-generator/
│
├── GeradorDeSenhas.html    # Main HTML file
├── GeradorDesenha.css      # Styling and responsive design
├── GeradorDesenha.js       # Core JavaScript functionality
└── pngwing.com.png         # Application icon
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/password-generator.git
   cd password-generator
   ```

2. **Open the application**
   - Simply open `GeradorDeSenhas.html` in your web browser
   - No additional setup or dependencies required!

3. **Start generating passwords**
   - Select your preferred character types
   - Set the desired password length (4-24 characters)
   - Click "Gerar Senha" to generate
   - Use the copy button to copy to clipboard

## 💡 How It Works

### Core Functions:

- **`pegarVariaveis()`**: Collects user preferences for character types
- **`tamanhoSenha()`**: Validates password length input
- **`caracter_aleatorio()`**: Generates random characters from selected types
- **`gerarSenha()`**: Creates the final secure password
- **`copiar()`**: Copies password to clipboard
- **`Mensagem()`**: Displays toast notifications

### Security Features:

- Uses `Math.random()` for character selection
- Ensures at least one character type is selected
- Validates password length constraints
- No passwords are stored permanently (client-side only)

## 🔒 Security Considerations

- All password generation happens client-side
- No data is sent to external servers
- Passwords are only stored temporarily in browser memory
- Uses cryptographically secure random number generation

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/wallacemaia2007.png" width="100px" style="border-radius: 50%;" alt="Wallace Maia"/>
  
  **Wallace Maia**  
  *Desenvolvedor Backend Java/Spring*
  
  [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wallacemaia-dev/)
  [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/wallacemaia2007)
  [![Email](https://img.shields.io/badge/-Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:wallacemaia2007@gmail.com)
</div>
