import axios from 'axios';


const url = 'http://localhost:5000/api/auth/login'


const login = async (userData) => {
    const response = await axios.post(url, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
   const  {user} = response.data;
    return user;
}

const logout = ()=>{
    localStorage.removeItem('user');
}


const authService = {
    login,
    logout
}

export default authService;