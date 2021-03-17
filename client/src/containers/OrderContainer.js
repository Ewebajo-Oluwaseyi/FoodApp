import { Container } from "unstated";
import axios from 'axios';
import setAuthToken from './utils/setAuthToken'


class OrderContainer extends Container{

    constructor() {
        super();
        this.state = {
          sessionData: {
            orders: [],
            total: 0
          },
        };
      }

      fetchOrder = async () => {
   
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
            let res= await axios.get('/api/order');
            let order = JSON.stringify(res.data)
           
              order = JSON.parse(order)
              this.setState({
                sessionData: {
                    orders: order
                },
                 
              });   
              return order;
      
     }

    addOrder = async({food, quantity, price}, props) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
          }

        await axios.post("/api/order", {food, quantity, price}, config)
        

            
    }

    deleteOrder = async (_id) => {
      if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    console.log(_id)


     await axios.delete(`/api/order/${_id}`)
    
    
    }

    setTotal =  (e) => {
      console.log(e)
      let data =  e
      this.setState({
        sessionData: {
          total: data
        },
         
      });  
      return data
    }
}


export {OrderContainer}