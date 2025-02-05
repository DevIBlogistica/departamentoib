<template>
    <header class="navbar">
      <div class="logo">Sistema de Gerenciamento</div>
      <div class="user-info">
        <span>Usuário Logado</span>
        <button class="logout-button">Logout</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #15803d;
    color: white;
  }
  
  .logo {
    font-weight: bold;
    font-size: 1.2rem; /* Usa rem para ser relativo ao root */
  }
  
  .logout-button {
    background-color: #e63946;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .logout-button:hover {
    background-color: #d00000;
  }
  
  @media (max-width: 1023px) {
    .navbar {
      flex-direction: column;
      text-align: center;
    }
  
    .user-info {
      margin-top: 10px;
    }
  }
  </style>