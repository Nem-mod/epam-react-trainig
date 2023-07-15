import './Form.css'
import {Field, Formik, Form, ErrorMessage} from 'formik';
import {useRef, useState} from "react";

const initialValue = {
    stooge: '',
    employed: false,
    favoriteColor: 'none',
    lastName: '',
    firstName: '',
    age: 0,
    sauces: [],
    notes: ''
}

const validate = (values) => {
    const errors = {};

    if (!/^[a-zA-Z\s]+$/.test(values.firstName)) {
        errors.firstName = 'Invalid first name';
    }

    if (!/^[a-zA-Z\s]+$/.test(values.lastName)) {
        errors.lastName = 'Invalid last name';
    }

    if (!/^\d+$/.test(values.age)) {
        errors.age = 'Invalid age';
    }

    if (values.notes.length > 100) {
        errors.notes = 'Notes must not exceed 100 characters';
    }

    return errors;
};
export const TaskForm = () => {
    const [output, setOutput] = useState('');
    return (
        <div className='form-box'>
            <Formik
                initialValues={initialValue}

                validate={validate}

                onSubmit={(values, {setSubmitting}) => {
                    alert(JSON.stringify(values, null, '\t'));
                    setSubmitting(false);
                }}
                enableReinitialize={false}

            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      resetForm,
                      dirty,
                      isValid,
                      setFieldValue
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={'box'}>
                            <label htmlFor="firstName">
                                First Name
                            </label>
                            <Field
                                id="firstname"
                                name="firstName"
                                type="text"
                                onChange={handleChange}
                                value={values.firstName}
                                placeholder='First Name'
                                className={touched.firstName && errors.firstName ? 'error' : ''}
                            />
                            <ErrorMessage name="firstName" component="div" className="error-message"/>
                        </div>

                        <div className={'box'}>
                            <label htmlFor="last-name">Last Name</label>
                            <Field
                                type="text"
                                name='lastName'
                                onChange={handleChange}
                                value={values.lastName}
                                placeholder='Last Name'
                                className={touched.lastName && errors.lastName ? 'error' : ''}
                            />
                            <ErrorMessage name="lastName" component="div" className="error-message"/>
                        </div>

                        <div className={'box'}>
                            <label htmlFor="age">Age</label>
                            <Field
                                type="text"
                                name='age'
                                onChange={handleChange}
                                value={values.age}
                                placeholder='Age'
                                className={touched.age && errors.age ? 'error' : ''}
                            />
                            <ErrorMessage name="age" component="div" className="error-message"/>
                        </div>

                        <div className={'box'}>
                            <label>Employed</label>
                            <Field type="checkbox" name="employed"/>

                        </div>
                        <div className={'box'}>
                            <label>Favorite Color</label>
                            <Field
                                component="select"
                                id='favoriteColor'
                            >
                                <option value='green'>Green</option>
                                <option value='red'>Red</option>
                                <option value='blue'>Blue</option>
                                <option value='pink'>Pink</option>
                            </Field>
                        </div>
                        <div className={'box row'}>
                            <span>Sauces</span>
                            <div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="sauces" value="ketchup"/>
                                        Ketchup
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="sauces" value="mustard"/>
                                        Mustard
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <Field type="checkbox" name="sauces" value="mayonnaise"/>
                                        Mayonnaise
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="sauces" value="guacamole"/>
                                        Guacamole
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className={'box row'}>
                            <span>Best Stooge</span>
                            <div>
                                <div>
                                    <label>
                                        <Field type="radio" name="stooge" value="larry"/>
                                        Larry
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="radio" name="stooge" value="moe"/>
                                        Moe
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="radio" name="stooge" value="curly"/>
                                        Curly
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={'box'}>
                            <label>Notes</label>
                            <Field
                                component='textarea'
                                type="textarea"
                                name="notes"
                                placeholder='Note'
                                className={touched.notes && errors.notes ? 'error' : ''}
                            />
                            <ErrorMessage name="notes" component="div" className="error-message"/>

                        </div>
                        <div className='button-box'>
                            <button className='btn submit-btn' type="submit" disabled={!isValid || !dirty}>Submit
                            </button>
                            <button className='btn reset-btn' type='reset' onClick={() => {
                                setOutput('');
                                resetForm();
                            }} disabled={!dirty}>Reset
                            </button>
                        </div>
                        <div className='output'>{JSON.stringify(values, null, '\t')}</div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
