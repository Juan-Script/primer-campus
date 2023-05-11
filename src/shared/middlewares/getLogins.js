import axios from 'axios'


export const getLogins = async () => {
    let _data = await axios.get("https://reqres.in/api/users/2" ,  
        
    )

    return _data
}


