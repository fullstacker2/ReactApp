import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import useLogin from "../hooks/useLogin"

const LoginSchema = new Yup.object ({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
});

function Login(){
    const initialState = {email:'', password:''};
    const {doLogin} = useLogin();
    return (
        <Formik 
            onSubmit={(values)=> doLogin(values.email, values.password)}
            initialValues ={initialState} 
            validationSchema = {LoginSchema}
        >
        <Form>
            <Field name="email" className="form-control" placeholder="Email" type="text"/>
            <ErrorMessage name = "email"/>
            <Field name="password" className="form-control" placeholder="Password" type="password"/>
            <ErrorMessage name = "password"/>
            <button type="submit" className="btn btn-success">Login</button>
        </Form>
        </Formik>
    );
}

export default Login;