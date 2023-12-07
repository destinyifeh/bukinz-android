import createApiInstance from '../../../constants/api';
import {MERCHANT_ACCOUNT_SERVICE_BASE_URL} from '../../../constants/configs';
const api = createApiInstance(MERCHANT_ACCOUNT_SERVICE_BASE_URL);
export const signUp = async user => {
  const response = await api.post('/', user);
  return response;
};

export const signIn = async user => {
  const response = await api.post('/', user);
  return response;
};

export const verifyEmail = async user => {
  const response = await api.post('/', user);
  return response;
};

export const verifyOtp = async user => {
  const response = await api.post('/', user);
  return response;
};

export const updatePassword = async user => {
  const response = await api.post('/', user);
  return response;
};

export const updateAccount = async user => {
  const response = await api.post('/', user);
  return response;
};
