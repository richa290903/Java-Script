
  async function displayMessage(message, delay = 2000) {
      return new Promise((resolve) => {
          setTimeout(() => {
              const outputElement = document.getElementById('output');
              outputElement.textContent += message + '\n\n';
              resolve();
          }, delay);
      });
  }
  async function hackSimulation() {
      await displayMessage("Initiating system breach...")
      await displayMessage("Decrypting firewall security...")
      await displayMessage("Accessing encrypted database...")
      await displayMessage("Injecting malicious code...")
      await displayMessage("Bypassing authentication protocols...")
      await displayMessage("Compiling user credentials...")
      await displayMessage("Intercepting network traffic...")
      await displayMessage("Exploiting vulnerability in security protocols...")
      await displayMessage("Generating backdoor access...")
      await displayMessage("Extracting sensitive data...")
  }
  
  hackSimulation();
  
  
  