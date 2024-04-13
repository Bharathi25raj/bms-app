import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { RegisterUser } from "../../apiCalls/users";
import { useEffect } from "react";

const Register = () => {

  const navigate = useNavigate();

  const onFinish = async (values) => {

      try{

        const response = await RegisterUser(values);

        if(response.success){
          message.success(response.message);
          navigate('/login');
          console.log(response.message);
        } else {
          message.error(response.message);
          console.log(response.message);
        }
      } catch (err) {
        message.error(err);
      }

  }
  

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/');
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="card w-400 p-3">
        <h1 className="text-xl mb-1">
          Welcome to Scaler Shows! Please Register
        </h1>

        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
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
