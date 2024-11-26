import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../providers/AuthContext';

export default function SignIn() {

    const auth = useAuth()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await auth.handleAuth({
                username: e.target.username.value, 
                password: e.target.passwordUser.value
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 w-100" style={{backgroundColor: '#0d6efd'}}>
            <div className="w-25 rounded p-3 shadow bg-white">
                <div className="w-100">
                    <h1 className="h1 fs-1">Login</h1>
                    <h2 className="text-secondary fs-6">
                    Bem-vindo de volta!<br/>
                    Acesse sua conta para continuar onde parou.
                    </h2>
                </div>
                <div className="w-100">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passwordUser">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="name@example.com" required />
                        </Form.Group>
                        <Button id='login'  type='submit' className='mb-3'>Entrar</Button>
                    </Form>
                    
                </div>
            </div>
        </div>
    )
}