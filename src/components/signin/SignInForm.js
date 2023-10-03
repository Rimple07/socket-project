import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [signinValue, setSigninValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onFinish = (e) => {
    console.log("event", e);
    navigate("/dashboard");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSigninValue((prev) => ({ ...prev, [name]: value }));
  };

  console.log("signinValue", signinValue);

  return (
    <div className="signin-form">
      <div className="logo-container"> </div>
      <div className="headings-container-login">
        {" "}
        <h6 className="main-login-heading">
          {" "}
          It Is A Long Established Fact That
        </h6>{" "}
        <h3 className="login-heading"> Login your account</h3>{" "}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={(e) => onFinish(e)}
        >
          <div className="username-container">
            {" "}
            <h5 className="headings"> Username</h5>
            <Form.Item
              name="email"
              value={signinValue.email}
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                name="email"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                onChange={(e) => onChange(e)}
              />
            </Form.Item>{" "}
          </div>

          <div className="password-container">
            {" "}
            <h5 className="headings"> Password</h5>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                name="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                onChange={(e) => onChange(e)}
                value={signinValue.email}
              />
            </Form.Item>{" "}
          </div>

          <Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form.Item>
          <div className="remember-forgot-container">
            {" "}
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>

              <a className="login-form-forgot" href="">
                Forgot password?
              </a>
            </Form.Item>
          </div>
        </Form>{" "}
      </div>
    </div>
  );
};
export default SignInForm;
