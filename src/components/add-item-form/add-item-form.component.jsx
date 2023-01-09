import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editMainInfoItem, addMainInfoItem, addPhotoFile } from "../../data/blog-items";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "..";
import styles from "./add-item-form.module.scss";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Pole wymagane"),
    content1: Yup.string().required("Pole wymagane"),
    date: Yup.date().required("Pole wymagane"),
    userName: Yup.string().required("Pole wymagane"),


});


const AddItemForm = ({ isAddNewsModalOpen, setIsAddNewsModalOpen, isEdited = false, setIsEdited = false }) => {

    const photoItem = useSelector(store => store.photoItem);

    const dispatch = useDispatch();

    const initialValues = {
        title: isEdited ? isEdited.title : "",
        content1: isEdited ? isEdited.content1 : "",
        content2: isEdited ? isEdited.content2 : "",
        date: isEdited ? isEdited.date : "",
        link: isEdited ? isEdited.link : "",
        userName: isEdited ? isEdited.userName : "",
        imgPath: isEdited ? isEdited.userName : ""
    };


    const [file, setFile] = useState("");

    const handleSetFile = (e) => {
        setFile(e.target.files[0]);
    };
    const [fileNameData, setFileNameData] = useState(null);

    const handleUploadFile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        dispatch(addPhotoFile(formData));
        if (photoItem) {
            setFileNameData(photoItem);
        }
    };

    const handleOnSubmit = (values, { setSubmitting }) => {
        if (isEdited) {
            values.id = isEdited.id;
            dispatch(editMainInfoItem(values));
        } else {
            values.imgPath = `images/blog/${ photoItem }`;
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
                <div className={ styles.forms }>
                    <div className={ styles.addPhotoForm }>
                        <form
                            // style={ { display: `${ !item ? "flex" : "none" }` } }
                            className={ styles.addImage }
                            onSubmit={ handleUploadFile }
                        >
                            <div className={ styles.uploadWrapper }>
                                <input className={ styles.fileInput } id="file-upload" type="file" onChange={ handleSetFile } />
                                <label for="file-upload">{ file === "" ? "Wybierz zdjęcie" : " Zmień zdjęcie" }</label>
                            </div>

                            <div className={ styles.customUpload }>
                                <p className={ styles.fileName }>{ file.name }</p>
                                <p
                                    style={ { display: `${ file === "" ? "none" : "inline" }` } }
                                    className={ styles.fileName }
                                >
                                    { Math.floor(file.size / 1000) }KB
                                </p>
                            </div>

                            <div className={ styles.buttons }>
                                { !photoItem ? <Button type="button" name="wyjdź" onClick={ handleCloseAddItemModal } /> : "" }
                                <Button type="submit" name="zapisz" />
                            </div>
                        </form>

                    </div>
                    { !photoItem ? (
                        <p>Dodaj i zapisz zdjęcie aby edytować treść"</p>
                    ) : (
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

                                <form className={ styles.addContent } onSubmit={ handleSubmit } >
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

                                        />
                                        <input className={ styles.link }
                                            type="text"
                                            name="link"
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            value={ values.link }
                                            placeholder="link do atrukułu"
                                        />
                                    </div>

                                    <div className={ styles.element }>
                                        <div >
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
                                        <div >
                                            <input
                                                type="date"
                                                name="date"
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                value={ values.date }
                                            />
                                            <p> { errors.date && touched.date && errors.date }</p>
                                        </div>
                                    </div>

                                    <div className={ styles.buttons }>
                                        <Button type="button" name="wyjdź" onClick={ handleCloseAddItemModal } />
                                        { isEdited ? "" : <Button type="button" name="wyczyść" onClick={ resetForm } /> }
                                        <Button type="submit" name="zapisz" />
                                    </div>
                                </form>
                            ) }
                        </Formik>
                    ) }
                </div>
            </div>

        </Modal >
    );

};

export default React.memo(AddItemForm);