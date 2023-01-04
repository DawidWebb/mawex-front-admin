import { useDispatch } from "react-redux";
import { editMainInfoItem, addMainInfoItem } from "../../data/blog-items";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "..";
import styles from "./add-item-form.module.scss";

const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Pole wymagane"),
    content1: Yup.string().required("Pole wymagane"),
    date: Yup.date().required("Pole wymagane"),
    userName: Yup.string().required("Pole wymagane"),
    imgPath: Yup.string().required("Pole wymagane"),

});

const AddItemForm = ({ isAddNewsModalOpen, setIsAddNewsModalOpen, isEdited = false, setIsEdited = false }) => {
    const dispatch = useDispatch();

    const initialValues = {
        title: isEdited ? isEdited.title : "",
        content1: isEdited ? isEdited.content1 : "",
        content2: isEdited ? isEdited.content2 : "",
        imgPath: isEdited ? isEdited.imgPath : "",
        date: isEdited ? isEdited.date : "",
        link: isEdited ? isEdited.link : "",
        userName: isEdited ? isEdited.userName : "",
    };

    const handleOnSubmit = (values, { setSubmitting }) => {
        if (isEdited) {
            values.id = isEdited.id;
            dispatch(editMainInfoItem(values));
        } else {
            dispatch(addMainInfoItem(values));
        }
        setIsAddNewsModalOpen(false);
    };

    const handleCloseAddItemModal = () => {
        if (isEdited) {
            setIsEdited(false);
        }
        setIsAddNewsModalOpen(false);
    };

    return (
        <Modal isModalOpen={ isAddNewsModalOpen }>
            <div className={ styles.wrapper }>
                <p>{ isEdited ? "Edycja elementu" : "Dodawanie elementu" }</p>
                <Formik
                    enableReinitialize
                    initialValues={ initialValues }
                    validationSchema={ SignupSchema }
                    onSubmit={ handleOnSubmit }
                >
                    { ({
                        values,
                        // initialValues,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        resetForm,
                        setFieldValue,
                    }) => (
                        //encType= "multipart/form-data"
                        <form onSubmit={ handleSubmit } >
                            <div className={ styles.element }>
                                <input
                                    type="input"
                                    name="imgPath"
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.imgPath }
                                    placeholder="link do zdjęcia na ftp"
                                />
                                <p> { errors.imgPath && touched.imgPath && errors.imgPath }</p>
                            </div>
                            <div className={ styles.element }>
                                <input
                                    type="text"
                                    name="title"
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.title }
                                    placeholder="Tytuł"
                                />
                                <p> { errors.title && touched.title && errors.title }</p>
                            </div>

                            <div className={ styles.element }>
                                <textarea
                                    name="content1"
                                    type="text"
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.content1 }
                                    placeholder="Tekst"
                                    cols="30"
                                    rows="10"
                                />
                                <p> { errors.content1 && touched.content1 && errors.content1 }</p>
                            </div>
                            <div className={ styles.element }>
                                <textarea
                                    name="content2"
                                    type="text"
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.content2 }
                                    placeholder="Tekst"
                                    cols="30"
                                    rows="10"
                                />
                            </div>
                            <div className={ styles.element }>
                                <input
                                    type="text"
                                    name="link"
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.link }
                                    placeholder="link do atrukułu"
                                />
                                <p> { errors.link && touched.link && errors.link }</p>
                            </div>
                            <div className={ styles.element }>
                                <input
                                    type="text"
                                    name="userName"
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.userName }
                                    placeholder="Podpis"
                                />
                                <p> { errors.userName && touched.userName && errors.userName }</p>
                            </div>
                            <div className={ styles.element }>
                                <input
                                    type="date"
                                    name="date"
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.date }
                                />
                                <p> { errors.date && touched.date && errors.date }</p>
                            </div>

                            {/* <div className={styles.element}>
                                <Input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={ (e) => setFieldValue("photo", e.currentTarget.files[0]) }
                                />
                                { !isEdited ? (
                                    ""
                                ) : (
                                    <span>Jeżeli chcesz zmienić istniejące zdjęcie wybierz je teraz</span>
                                ) }
                            </div> */}


                            <div className={ styles.buttons }>
                                <Button input type="button" name="wyjdź" onClick={ handleCloseAddItemModal } />
                                { isEdited ? "" : <Button input type="button" name="wyczyść" onClick={ resetForm } /> }
                                <Button input type="submit" name="zapisz" />
                            </div>
                        </form>
                    ) }
                </Formik>
            </div>

        </Modal>
    );

};

export default AddItemForm;