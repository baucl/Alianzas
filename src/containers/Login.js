import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center">
        <div className="col-4 col-lg-1 py-5">
          <img src="https://www.iudu.com.ar/wp-content/uploads/2020/11/iudu_logo_solo.svg" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Form
          name="normal_login"
          className="login-form col-6"
          initialValues={{
            remember: true,
          }}
          size="large"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese su usuario",
              },
            ]}
          >
            <Input
              autoComplete={false}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuario"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese su contrase\u00F1a",
              },
            ]}
          >
            <Input
              size="small"
              autoComplete={false}
              prefix={<LockOutlined className="site-form-item-icon" />}
              suffix={
                <Button
                  type="default"
                  htmlType="submit"
                  className="login-form-button"
                  icon={<ArrowRightOutlined className="" />}
                />
              }
              type="password"
              placeholder="Contrase&ntilde;a"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Recordar usuario</Checkbox>
            </Form.Item>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
