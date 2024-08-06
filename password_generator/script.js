function generatePassword() {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
      let password = "";
      for (let i = 0, n = charset.length; i < 12; ++i) {
          password += charset.charAt(Math.floor(Math.random() * n));
      }
      return password;
  }
let passwordcontainer = document.getElementById("passwordDisplay");
passwordcontainer.innerHTML = generatePassword();