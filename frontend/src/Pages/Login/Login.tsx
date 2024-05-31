import './Login.css';
import {Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from  "react-bootstrap";

function Login (){
    return (
        <Container style={{display:'flex', flexDirection:'row', margin:'0', padding:'0'}}>
           <Row style={{display:'flex', flexDirection:'row'}}>
               <Col lg={{span:"9"}}>
                   <Form>
                       <Form.Group style={{display:'flex', flexDirection:'column'}}>
                           <Form.Label>Email address</Form.Label>
                           <Form.Control type="email" placeholder="Enter email" />
                           <Form.Text >
                               We'll never share your email with anyone else.
                           </Form.Text>
                       </Form.Group>

                       <Form.Group style={{display:'flex', flexDirection:'column'}}>
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" placeholder="Password" />
                       </Form.Group>
                       <Form.Group style={{display:'flex', flexDirection:'column'}}>
                           <Form.Check type="checkbox" label="Check me out" />
                       </Form.Group>
                       <Button variant="primary" type="submit">
                           Submit
                       </Button>
                   </Form>
               </Col>
               <Col lg={{span:'2'}}>
                   <h1>Ohhhhh</h1>
               </Col>
           </Row>
        </Container>

    );
}

export default Login;