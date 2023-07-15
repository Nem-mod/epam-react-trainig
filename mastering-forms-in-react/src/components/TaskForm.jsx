import './Form.css'
import {Field, Formik, Form} from 'formik';
import {useState} from "react";

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
export const TaskForm = () => {
    const [output, setOutput] = useState('');
    return (
        <div className='form-box'>
            <Formik
                initialValues={initialValue}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setOutput(JSON.stringify(values, null, 8));
                        setSubmitting(false);
                    }, 400);
                }}
                onReset={() => setOutput('')}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Form onSubmit={handleSubmit}>

                        <label htmlFor="firstName">
                            First Name
                            <Field
                                id="firstname"
                                name="firstName"
                                type="text"
                                onChange={handleChange}
                                value={values.firstName}
                                placeholder='First Name'
                            />
                        </label>
                        <label htmlFor="last-name">
                            Last Name
                            <Field
                                type="text"
                                name='lastName'
                                onChange={handleChange}
                                value={values.lastName}
                                placeholder='Last Name'
                            />
                        </label>

                        <label htmlFor="age">
                            Last Name
                            <Field
                                type="number"
                                name='age'
                                onChange={handleChange}
                                value={values.age}
                            />
                        </label>

                        <label>
                            <Field type="checkbox" name="employed" />
                            Employed
                        </label>
                        <label>
                            Favorite Color
                            <Field
                                component="select"
                                id='favoriteColor'
                                multiple={false}
                            >
                                <option value='none'>None</option>
                                <option value='green'>Green</option>
                                <option value='red'>Red</option>
                                <option value='blue'>Blue</option>
                                <option value='pink'>Pink</option>
                            </Field>
                        </label>
                        <center>Sauces</center>
                        <div>
                            <label>
                                <Field type="checkbox" name="sauces" value="ketchup" />
                                Ketchup
                            </label>
                            <label>
                                <Field type="checkbox" name="sauces" value="mustard" />
                                Mustard
                            </label>
                            <label>
                                <Field type="checkbox" name="sauces" value="mayonnaise" />
                                Mayonnaise
                            </label>
                            <label>
                                <Field type="checkbox" name="sauces" value="guacamole" />
                                Guacamole
                            </label>
                        </div>

                        <center>Best Stooge</center>
                        <div>
                            <label>
                                <Field type="radio" name="stooge" value="larry" />
                                Larry
                            </label>
                            <label>
                                <Field type="radio" name="stooge" value="moe" />
                                Moe
                            </label>
                            <label>
                                <Field type="radio" name="stooge" value="curly" />
                                Curly
                            </label>
                        </div>

                        <label>
                            <Field component='textarea' type="textarea" name="notes" placeholder='Notes' />
                            Notes
                        </label>
                        <div className='button-box'>
                            <button className='btn submit-btn' type="submit">Submit</button>
                            <button className='btn reset-btn'  type='reset' >Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
            { output &&
                <div className='output'>
                    {output}
                </div>
            }
        </div>
    );
}
