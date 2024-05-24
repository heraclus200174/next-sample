import React,{useState} from "react"
import axios from "axios";


const Home = () => {

    const [data, setData] = useState({
        name: '',
        pass: ''
    })

    const handleChange = (event) => {
        setData({...data,[event.target.name]: event.target.value})
    }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/data', data);
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

    return (
        <div>
            <input 
                type="text"
                placeholder="your name"
                name="name"
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="your pass"
                name="pass"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>send</button>
        </div>
    )
}

export default Home
 