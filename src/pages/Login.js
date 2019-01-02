import React from 'react'
import { observer } from "mobx-react";
import UserStore from '@/stores/user'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'

class NormalLoginForm extends React.Component{

    componentDidMount(){
        console.log(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

@observer
class Login extends React.Component{
    componentDidMount(){
        console.log(UserStore)
    }
    render(){
        return (
            <Row>
                <Col span={8}></Col>
                <Col span={8}><WrappedNormalLoginForm /></Col>
                <Col span={8}></Col>
            </Row>
        )
    }
}

export default Login