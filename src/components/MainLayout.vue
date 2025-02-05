<template>
    <div id="app">
      <Navbar />
      <div class="container">
        <Sidebar />
        <main class="content">
          <router-view />
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Sidebar from '@/components/Sidebar.vue';
  
  export default {
    components: { Navbar, Sidebar },
  };
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    color: #212529;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .container {
    display: flex;
    flex: 1;
  }
  
  .content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
  
  @media (max-width: 1023px) {
    .container {
      flex-direction: column;
    }
  
    .content {
      padding: 10px;
    }
  }
  </style>