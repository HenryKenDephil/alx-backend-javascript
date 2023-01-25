function getResponseFromAPI() {
  /* eslint-disable */
  return new Promise((resolve, reject) => {
    resolve(fetch(API));
});
};
export default getResponseFromAPI();