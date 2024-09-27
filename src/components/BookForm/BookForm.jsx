
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/operations";
import css from './BookForm.module.css'

import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookForm = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const dispatch = useDispatch();

    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required!"),
        email: Yup.string().email().required("Required!"),
        date: Yup.date().required("Required!"),
        comment: Yup.string(),
    })

    const initialValues = {
        name: "",
        email: "",
        date: "",
        comment: "",
    };

    const handleSubmit = (values, actions) => {
        // dispatch(addContact(values));
        // actions.resetForm();
    };

    return (
        <div className={css.container}>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <Formik
                className={css.formik}
                initialValues={initialValues}
                validationSchema={Validator}
                onSubmit={handleSubmit}>
                <Form className={css.form}>
                    <div className={css.label}>
                        <Field className={css.field} type="text" name="name" placeholder="Name*"></Field>

                        <ErrorMessage className={css.error} name="name" component="span" />
                    </div>
                    <div className={css.label}>

                        <Field className={css.field} type="text" name="email" placeholder="Email*"></Field>

                        <ErrorMessage className={css.error} name="email" component="span" />
                    </div>
                    <div className={css.label}>

                        <DatePicker
                            className={css.field}
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            placeholderText="Booking date*"
                            dateFormat="dd/MM/yyyy"
                        />

                        <ErrorMessage className={css.error} name="date" component="span" />
                    </div>
                    <div className={css.label}>

                        <Field className={css.comment} type="text" name="comment" placeholder="Comment"></Field>

                        <ErrorMessage className={css.error} name="comment" component="span" />
                    </div>
                    <button className={css.btn} type="submit">Send</button>
                </Form>
            </Formik>
        </div>
    )
}

export default BookForm