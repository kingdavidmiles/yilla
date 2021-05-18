import FirebaseAuth from "../../components/auth/FirebaseAuth";
import Register from "./resgister"
const Auth = () => {
  return (
    <div>
      <Register/>
      <div>
        <FirebaseAuth />
        <p>
          <a href="/">Go Home</a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
