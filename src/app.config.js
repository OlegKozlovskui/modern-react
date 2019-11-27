export const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SEER_HOSTNAME__PRODUCTION
    : process.env.REACT_APP_SEER_HOSTNAME__DEVELOPMENT,
};
