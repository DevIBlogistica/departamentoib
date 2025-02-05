<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Nome:</label>
        <input v-model="funcionario.nome" required />
      </div>
      <div>
        <label>Função:</label>
        <select v-model="funcionario.funcao_id" required>
          <option v-for="funcao in funcoes" :key="funcao.id" :value="funcao.id">
            {{ funcao.nome }}
          </option>
        </select>
      </div>
      <div>
        <label>Setor:</label>
        <select v-model="funcionario.setor_id" required>
          <option v-for="setor in setores" :key="setor.id" :value="setor.id">
            {{ setor.nome }}
          </option>
        </select>
      </div>
      <div>
        <label>Unidade de Negócio:</label>
        <select v-model="funcionario.unidade_negocio_id" required>
          <option v-for="unidade in unidadesNegocio" :key="unidade.id" :value="unidade.id">
            {{ unidade.nome }}
          </option>
        </select>
      </div>
      <button type="submit">Salvar</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { supabase } from '@/services/supabase';
  
  export default {
    setup() {
      const funcionario = ref({
        nome: '',
        funcao_id: null,
        setor_id: null,
        unidade_negocio_id: null,
      });
  
      const funcoes = ref([]);
      const setores = ref([]);
      const unidadesNegocio = ref([]);
  
      // Buscar dados iniciais
      const fetchData = async () => {
        const { data: funcoesData } = await supabase.from('dp_funcoes').select('*');
        const { data: setoresData } = await supabase.from('dp_setores').select('*');
        const { data: unidadesData } = await supabase.from('dp_unidades_negocio').select('*');
  
        funcoes.value = funcoesData;
        setores.value = setoresData;
        unidadesNegocio.value = unidadesData;
      };
  
      fetchData();
  
      const handleSubmit = async () => {
        const { error } = await supabase.from('dp_funcionarios').insert([funcionario.value]);
        if (error) {
          alert('Erro ao salvar funcionário');
        } else {
          alert('Funcionário salvo com sucesso!');
        }
      };
  
      return {
        funcionario,
        funcoes,
        setores,
        unidadesNegocio,
        handleSubmit,
      };
    },
  };
  </script>