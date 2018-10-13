import axios from "axios";

export default {
    user: {
        login: (credentials) => axios.post("/api/auth", {credentials}).then(res => res.data.user)
        },
    userFacebook:{
        enviaFace: (usuarioFace) => axios.post("api/facebookUser",{usuarioFace}).then(res => res.data.user)
    }
}

