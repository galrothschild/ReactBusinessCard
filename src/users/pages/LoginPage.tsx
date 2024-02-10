import Form from "../../forms/components/Form";
import { useUser } from "../utils/useUser";

const LoginPage = () => {
  const { handleChange, handleLogin } = useUser();
  return (
    <Form
      colNum={1}
      inputs={["email", "password"]}
      title="Log In"
      onSubmit={handleLogin}
      onInputChange={handleChange}
    />
  );
};

export default LoginPage;
