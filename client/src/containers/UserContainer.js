import { Container } from "unstated";
import axios from 'axios';
import setAuthToken from './utils/setAuthToken'


class UserContainer extends Container {
  constructor() {
    super();
    this.state = {
      sessionData: {
        user: []
      },
    };
  }
  goBack = (props) => {
    props.history.goBack();
  };

  fetchUser = async () => {
   
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
        let res= await axios.get('/api/auth');
        let users = JSON.stringify(res.data)
        
          users = JSON.parse(users)
          this.setState({
            sessionData: {
              user: users
            },
             
          });   
          console.log(users)
          return users;
  
 }

  signIn = async ({ email, password }, props) => {
    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
    }
    await axios.post("/api/auth", { email, password }, config)
      .then((response) => {
        const token = response.data;
        console.log(token);
        
        
        localStorage.setItem('token', JSON.stringify(response.data.token));
       
        props.history.push("/order");
        return {};
        
      })
      .catch((e) => {
        console.log(e);
      }); 

  }; 


  register = async ({ firstname, lastname, email, password }, props) => {
    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
    }
    await axios.post("/api/users", { firstname, lastname, email, password}, config)
      .then((response) => {
        const token = response.data;
        console.log(token);
        
        
        localStorage.setItem("token", JSON.stringify(response.data.token));
       
        
        return {};
        
      })
      .catch((e) => {
        console.log(e);
      }); 

  }; 

  updateClientProfile = async state => {
    console.log(state)

      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }
      await axios.put(`/api/users/${state._id}`, state, config)
      .then((data) => {
        console.log(data);
       
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export { UserContainer };
