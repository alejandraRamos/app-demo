function updateMessage() {
    const versionInput = document.getElementById('versionInput').value;
    const messageElement = document.getElementById('message');
  
    if (versionInput) {
      messageElement.textContent = `Bienvenidos al mundo GitOps v${versionInput}`;
    } else {
      messageElement.textContent = 'Bienvenidos al mundo GitOps v0.0.0';
    }
  }