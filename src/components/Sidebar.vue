<template>
  <aside class="sidebar">
    <ul>
      <li v-for="setor in setores" :key="setor.id">{{ setor.nome }}</li>
    </ul>
  </aside>
</template>

<script>
import { fetchSetores } from '@/services/setores';

export default {
  data() {
    return {
      setores: [],
    };
  },
  async created() {
    this.setores = await fetchSetores();
  },
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
</style>