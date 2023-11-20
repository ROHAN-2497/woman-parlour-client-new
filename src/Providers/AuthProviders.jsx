import { getAuth } from "firebase/auth";
import { app } from "../FireBase/Firebase.config";



const auth = getAuth(app);
const AuthProviders = ({children}) => {

    return (
        <div>
            
        </div>
    );
};

export default AuthProviders;