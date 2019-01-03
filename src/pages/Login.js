import React from 'react'
import { observer, inject } from "mobx-react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'

@inject('userStore')
@observer
class NormalLoginForm extends React.Component{
    constructor(props){
        super(props)
        this.userStore = props.userStore
    }
    
    componentDidMount(){
        console.log(this.userStore)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.userStore.setUserId(values.userName)
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
                    rules: [{ required: true, message: '请输入用户名!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入用户密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住我</Checkbox>
                )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <a href="#/"> link home</a>
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="##">忘记密码</a>
                    或 <a href="##">注册!{this.userStore.userId}</a>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

@observer
class Login extends React.Component{
    componentDidMount(){
        console.log(this)
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