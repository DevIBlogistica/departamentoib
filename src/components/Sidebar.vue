<template>
    <aside class="sidebar">
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/funcionarios">Funcionários</router-link></li>
        <li><router-link to="/exames">Exames</router-link></li>
        <li><router-link to="/relatorios">Relatórios</router-link></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: #15803d;
    font-weight: bold;
  }
  
  a.router-link-active {
    color: #0056b3;
  }
  
  @media (max-width: 1023px) {
    .sidebar {
      width: 200px;
    }
  
    li {
      font-size: 0.9rem;
    }
  }
  </style>