import axios from 'axios'


export const getUsuarios = async () => {
    let _data = await axios.get("http://localhost:1337/api/" + "usuarios", { headers: {
        "Authorization" : "Bearer 1ad176f806ad51da0c06c242b78bdb4014cd130f878b7d328a37931b61b3b68d001184403835b183dd9b2219cc2aa4dc2c7615ae408d77d11d4976dcc4daac902f39c1a448fc4d630833630d295586a74256ac72ddbc036f4fc882220d43427e8a34db517b9a47fdb269351f6fa12abe092a78b1c3d38e0d5f89ae4e93018bfd"
    
    }})

    return _data.data.data
}

