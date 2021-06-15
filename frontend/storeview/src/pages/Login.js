import React from 'react';
import {Button,Form,Container}from 'react-bootstrap';
import NavbarTop from '../components/NavbarTop';
import naverLogin from '../components/naverLoginButton';

function Login(){
  const LoginStyle = {
    margin : "0 auto",
    padding :"0",
  }
  const ButtonStyle ={
    width:"100%",
  }
  const FormStyle = {
    marginTop:"15px",
  }
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/main/')
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch(console.error);
  }, [setData]);
 	return(
	<Container fluid style={LoginStyle}>
	<NavbarTop type="client"/>
  <Container fluid style={FormStyle}>
  	<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="아이디" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="비밀번호" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="로그인 상태 유지" />
    </Form.Group>
    <Button style={ButtonStyle} variant="dark" type="submit">ATable 로그인</Button>
  	</Form>
    </Container>

	</Container>
		)
}
export default Login;