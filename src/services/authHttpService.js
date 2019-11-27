import api from '../utils/api';

const authHttpService = {
  login(payload) {
    return api.post('users/login', payload);
  },
};

export default authHttpService;
