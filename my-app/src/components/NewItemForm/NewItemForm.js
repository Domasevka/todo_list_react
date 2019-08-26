import React, { Component } from 'react';
import { connect } from 'react-redux';
import createValidator from '../joi_redux_form.js';
import { Field, reduxForm } from 'redux-form';
import './style.scss'

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
export const phoneNumber = value =>
  value && !/^[8]{1}[0-9]{7}$/i.test(value)
    ? 'Invalid phone number, must start with 8 & be 8 digits'
    : undefined;
/*const tooLow = value =>
  value && value < 65 ? 'Prise is to low' : undefined;*/
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="list__input list__input_md"/>
        {touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

class  NewForm  extends Component {

  render() {
    const { handleSubmit, onSubmit, error } = this.props;

    return (
      <form onSubmit={ handleSubmit(onSubmit) }>
      {/*<form onSubmit={ handleSubmit(submit) }>*/}
        {/*<div>
          <label htmlFor="username" className="list__label">Name:</label>
          <Field name="username" component={username =>
            <div>
              <input name="username" type="text" {...username} placeholder="Username" className="list__input list__input_md"/>
              {username.touched && username.error && <span>{username.error}</span>}
            </div>
          } />
        </div>*/}
        {/*
        <div>
          <label htmlFor="phone" className="list__label">Phone:</label>
          <Field name="phone" component="input" type="text" className="list__input list__input_md"/>
        </div>
        <div>
          <label htmlFor="email" className="list__label">Email:</label>
          <Field name="email" component="input" type="email" className="list__input list__input_md"/>
        </div>*/}
        <div className="list__form">
          <Field
            name="name"
            type="text"
            label="Name"
            component={renderField}
            //validate={required}
          />
        </div>
        <div className="list__form">
          <Field
            name="email"
            type="text"
            label="Email"
            component={renderField}
          />
        </div>
        <div className="list__form">
          <Field
            name="phone"
            type="number"
            label="Phone"
            component={renderField}
            validate={[required, phoneNumber]}
          />
        </div>
        <div className="list__form">
          <Field
            name="price"
            type="text"
            label="Price"
            component={renderField}
            //validate={required}
            //warn={tooLow}
          />
        </div>
      <div>
          {error && <strong>{error}</strong>}
        </div>
        <button type="submit" className="btn btn_blue btn_sm">Submit</button>
      </form>
    )
  }
}
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch)  => ({
});

NewForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewForm);

NewForm  = reduxForm({
  // a unique name for the form
  form: 'newForm',
  validate: createValidator()
})(NewForm);


export default NewForm


