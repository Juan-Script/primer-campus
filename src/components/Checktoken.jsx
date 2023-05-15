import React from 'react'

export default function Checktoken() {
    const navigate = useNavigate();

  useEffect(() => {
      let token = getToken()

      if(!token){
          // showToast() 
          navigate("/")
      }

  }, []);

}