import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../data/user";
import { Button } from "../../components";
import { StartPage } from "../index";
import styles from "./login-page.module.scss";

const LoginPage = () => {

    const dispatch = useDispatch();
    const login = useSelector((store) => store.user);
    const session = useSelector((store) => store.session);

    console.log(session);

    const pageViev = !session && !login.length ? (

        <div className={ styles.loginBox }>
            <p>Logowanie</p>
            <Formik
                initialValues={ { login: "", password: "" } }
                validate={ (values) => {
                    const errors = {};
                    if (!values.login) {
                        errors.login = "Pole wymagane";
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)) {
                        errors.login = "Niepoprawny adres eMail";
                    }
                    return errors;
                } }
                onSubmit={ (values, { setSubmitting }) => {
                    dispatch(userLogin(values));

                } }
            >
                { ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={ handleSubmit }>
                        <input
                            type="email"
                            name="login"
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.email }
                            placeholder="eMail"
                        />
                        <p> { errors.email && touched.email && errors.email }</p>
                        <input
                            type="password"
                            name="password"
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.password }
                            placeholder="hasło"
                        />
                        <p> { errors.email && touched.email && errors.email }</p>

                        <Button type="submit" name="zaloguj" />
                    </form>
                ) }
            </Formik>
        </div>
    ) :
        (
            <div className={ styles.startPage }>
                <StartPage />
            </div>

        );


    return (
        <div className={ styles.wrapper }>
            <div className={ styles.inside }>
                { pageViev }
            </div>
        </div>
    );
};

export default LoginPage;