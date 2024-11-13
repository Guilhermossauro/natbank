const axios = require('axios');

const phone = 'appuser';
const kea = '296b81ed-6ed7-420b-9d77-230b7eee2f2ad';

axios.get(`http://localhost:3302/siteusers/`, {
phone: phone, kea: kea 
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error.response ? error.response.data : error.message);
});
