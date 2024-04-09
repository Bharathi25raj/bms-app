import { Form } from "antd";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Register = () => {


  
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="card w-400 p-3">
        <h1 className="text-xl mb-1">
          Welcome to Scaler Shows! Please Register
        </h1>

        <Form layout="vertical" className="mt-1">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <input type="text" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth type="submit" title="REGISTER" />
            <Link to="/login"> Already have an account? Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
