import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControl/Input';
import { requiredFieldCreator, minLengthCreator, emailCheck, repeatPasswordCheck } from '../../validator/validator';
import suburbs from '../../json/cities.json';
import { countMaxPopulationOfCity } from '../../object-helper/iteration-cities';
import { getDate } from '../../common/DateControl/DateControl';
import PropTypes from 'prop-types';
import SelectionItem from './SelectionItem';
import styled from 'styled-components';
import FormItem from './FormItem';

const FormPageRedux = ({ passwordRequiredField, passwordMinLength, emailRequiredField, submitting, data, result, handleSubmit }) => {
  return <form onSubmit={(e) => { handleSubmit(e) }} >
    <Main__form_grid>
      <FormItem FieldTitle={'Ваш город'} FieldDescription={'Ваш новый пароль должен содержать не менее 5 символов.'}>
        <SelectionItem result={result} />
      </FormItem>
      <FormItem FieldTitle={'Пароль'} FieldDescription={'Ваш новый пароль должен содержать не менее 5 символов.'}>
        <Field component={Input} type='password' name={'password'} validate={[passwordRequiredField, passwordMinLength]} />
      </FormItem>
      <FormItem FieldTitle={'Пароль еще раз'} FieldDescription={'Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.'}>
        <Field component={Input} type='password' name={'repeatPassword'} validate={[passwordRequiredField, repeatPasswordCheck]} />
      </FormItem>
      <FormItem FieldTitle={'Электронная почта'} FieldDescription={'Можно изменить адрес, указанный при регистрации.'}>
        <Field component={Input} type='text' name={'email'} validate={[emailRequiredField, emailCheck]} />
      </FormItem>
    </Main__form_grid>
    <Main__form_checkbox>
      <Main__form_checkbox_title>Я согласен</Main__form_checkbox_title>
      <Main__form_checkbox_description>
        <Main__form_checkbox_description_field>
          <Field component={'input'} type='checkbox' name={'agreeWithTheRules'} />
        </Main__form_checkbox_description_field>
        <Main__form_checkbox_description_signature>
        принимать актуальную информацию на емейл
        </Main__form_checkbox_description_signature>
      </Main__form_checkbox_description>
    </Main__form_checkbox>
    <Main__form_button>
      <Main__form_button_submit type='submit' disabled={submitting}>
        Изменить
      </Main__form_button_submit>
      <Main__form_button_signature>
        {data}
      </Main__form_button_signature>
    </Main__form_button>
  </form>
}

FormPageRedux.propTypes = {
  data: PropTypes.string,
  result: PropTypes.array,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  passwordRequiredField: PropTypes.func,
  emailRequiredField: PropTypes.func,
  passwordMinLength: PropTypes.func,
  handleSubmit: PropTypes.func,
}

function FormPage() {
  const renderTime = getDate();
  const [date, setDate] = useState(renderTime);
  const result = countMaxPopulationOfCity(suburbs);

  const passwordRequiredField = requiredFieldCreator('пароль');
  const emailRequiredField = requiredFieldCreator('E-mail');
  const passwordMinLength = minLengthCreator(5);

  const handleSubmit = (e) => {
    const timenow = getDate();
    setDate(timenow);
    console.warn(JSON.stringify(e)); // final result
  }

  const ReduxFormPage = reduxForm({ form: 'formPage' })(FormPageRedux);
  return <Main__form>
    <ReduxFormPage onSubmit={(e) => { handleSubmit(e) }} data={date}
      result={result} passwordRequiredField={passwordRequiredField}
      emailRequiredField={emailRequiredField} passwordMinLength={passwordMinLength} />
  </Main__form>
}

const Main__form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6vh 0;
`
const Main__form_grid = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
      ". . ."
      ". . ."   
      ". . .";
  align-items: center;
  @media screen and (max-width: 114vh) {
    padding: 0 3vh;
  }
  @media screen and (max-width: 105vh) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". ."
      ". ."
      ". .";
  }
`

const Main__form_checkbox_title = styled.p`
  font-size: 3vh;
  @media screen and (max-width: 105vh) {
    font-size: 2.5vh;
  }
  @media screen and (max-width: 70vh) {
    font-size: 2.8vh;
    margin: 0;
  }
`

const Main__form_checkbox_description = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 114vh) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: inherit;
  }
`

const Main__form_checkbox = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 68%;
  margin: auto;
  @media screen and (max-width: 114vh) {
    font-size: 2.5vh;
    width: inherit;
  }
`

const Main__form_checkbox_description_field = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Main__form_checkbox_description_signature = styled.p`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  @media screen and (max-width: 114vh) {
    font-size: 2.2vh;
    margin-left: 0.5vh;
  }
  @media screen and (max-width: 70vh) {
    font-size: 1.4vh;
  }
`

const Main__form_button = styled.div`
  margin-left: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
`
const Main__form_button_submit = styled.button`
  padding: 2vh 6vh;
  background-color: #71C838;
  border: none; 
  color: white;
  font-size: 2.4vh;
`

const Main__form_button_signature = styled.p`
  margin-left: 5%;
  color: #999999;
  @media screen and (max-width: 70vh) {
    letter-spacing: -0.1vh;
    font-size: 1.8vh;
  }
`

export default FormPage;