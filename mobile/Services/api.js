import axios from 'axios';

const api = axios.create({
  baseURL: 'https://atividade2-fullsttacking-production.up.railway.app',
});

export default api;
