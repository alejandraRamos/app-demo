function updateMessage() {
  // Obtener el ID de commit desde una variable global
  const commitId = window.commitId; // Esto debe estar definido en el flujo de CI/Backend

  const messageElement = document.getElementById('message');
  
  if (commitId) {
      messageElement.textContent = `Bienvenidos al mundo GitOps (Commit ID: ${commitId})`;
  } else {
      messageElement.textContent = 'Bienvenidos al mundo GitOps (Commit ID no disponible)';
  }
}