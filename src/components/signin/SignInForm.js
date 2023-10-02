import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./SignIn.css";

const SignInForm = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	return (
		<div className="signin-form">
			<div> </div>
			<div>
				{" "}
				<h6> It Is A Long Established Fact That</h6> <h3> Login your account</h3>{" "}
			</div>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<div className="username-container">
					{" "}
					<h5> Username</h5>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your Username!",
							},
						]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Form.Item>{" "}
				</div>

				<div className="password-container">
					{" "}
					<h5> Password</h5>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}
					>
						<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
					</Form.Item>{" "}
				</div>

				<Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
					</Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className="login-form-forgot" href="">
						Forgot password
					</a>
				</Form.Item>
			</Form>{" "}
		</div>
	);
};
export default SignInForm;
