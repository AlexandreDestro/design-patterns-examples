// Produtos
class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
  }
  

  class LightThemeFactory {
    createButton() {
      return new LightButton();
    }
    createWindow() {
      return new LightWindow();
    }
  }
  
  class DarkThemeFactory {
    createButton() {
      return new DarkButton();
    }
    createWindow() {
      return new DarkWindow();
    }
  }
  

  const theme = "dark"; 
  

  const factory = theme === "light" ? new LightThemeFactory() : new DarkThemeFactory();
  

  const button = factory.createButton();
  const windowUI = factory.createWindow();
  
  console.log(button.render());
  console.log(windowUI.render());
  