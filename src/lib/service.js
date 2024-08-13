import axios from 'axios';


const getData = async (userId) => {
  try {
  
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;
   
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = postsResponse.data;
    
 
    const result = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: {
        street: userData.address.street,
        suite: userData.address.suite,
        city: userData.address.city,
        zipcode: userData.address.zipcode,
        geo: {
          lat: userData.address.geo.lat,
          lng: userData.address.geo.lng
        }
      },
      phone: userData.phone,
      website: userData.website,
      company: {
        name: userData.company.name,
        catchPhrase: userData.company.catchPhrase,
        bs: userData.company.bs
      },
      posts: postsData
    };
    
    return result;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export default getData;


