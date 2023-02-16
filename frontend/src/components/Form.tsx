import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApiService } from '../contexts/ServiceContext'
import { useEffectNoFirstRender } from '../hooks/useEffectNoFirstRender'
import { _options } from '../mock/options'
import {
  FormErrors,
  FormFields,
  FormState,
  FormValidationSchemeType,
} from '../types/form'
import { formatToInputDate, formatToInputTime } from '../utils/dateTime'
import { ToSendForm } from '../utils/form'
import Button from './Button'
import CheckboxField from './CheckboxField'
import DateField from './DateField'
import RadioField from './RadioField'
import SelectField from './SelectField'
import TextField from './TextField'
import TimeField from './TimeField'

const emailRegExp: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const phoneRegExp: RegExp = /^[0-9]{1,13}/

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  room: '0',
  equipment: false,
  stylist: false,
  props: false,
  models: false,
  data: formatToInputDate(new Date(Date.now())),
  fromTime: formatToInputTime(new Date(Date.now())),
  toTime: formatToInputTime(new Date(Date.now() + 3600000)),
  payment: 'card',
  terms: false,
  spam: true,
}

const initialErrors: FormErrors = Object.keys(initialState).reduce(
  (acc, cur) => {
    acc = { ...acc, [cur]: '' }
    return acc
  },
  {} as FormErrors
)

const validationScheme: FormValidationSchemeType = {
  name: val => (val.length > 20 ? 'Name should be less than 10 chars' : ''),
  email: val =>
    val === ''
      ? 'Email is required'
      : val.match(emailRegExp) === null
      ? 'Email should be valid'
      : '',
  phone: val =>
    val === ''
      ? 'Phone is required'
      : val.match(phoneRegExp) === null
      ? 'Phone should be valid'
      : '',
  room: val => (val === '0' ? 'Please select a room' : ''),
  data: val =>
    new Date(
      new Date(val).setHours(new Date(Date.now()).getHours())
    ).getTime() <
    Date.now() - 43200000
      ? 'Date cannot be in past'
      : '',
  fromTime: val => '',
  toTime: val => '',
  payment: val => (val === '' ? 'Please select a payment method' : ''),
  terms: val => (val === false ? 'Please read and confirm our terms' : ''),
}

const hasErrors = (errors: FormErrors) => {
  return Object.values(errors).some(error => error !== '')
}

enum FormNetwrokStatus {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  ERROR = 'ERROR',
  PREPARE = 'PREPAPE',
}

const Form = () => {
  const api = useApiService()
  const navigate = useNavigate()
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState<FormErrors>(initialErrors)
  const [formNetworkStatus, setFormNetworkStatus] = useState<FormNetwrokStatus>(
    FormNetwrokStatus.PREPARE
  )
  const formNotValid = hasErrors(errors)
  const formIsValid = !formNotValid

  useEffectNoFirstRender(() => {
    validateForm()
  }, [form])

  const validateForm = (): boolean => {
    let isValid = true

    const formEntries = Object.entries(form)
    const errors = formEntries.reduce((acc, [fieldName, fieldValue]) => {
      const validationFunc =
        validationScheme[fieldName as keyof FormValidationSchemeType]
      const result = validationFunc ? validationFunc(fieldValue as never) : ''

      if (result !== '') isValid = false

      return { ...acc, [fieldName]: result }
    }, {} as Record<FormFields, string>)

    setErrors(errors)
    return isValid
  }

  const handleSubmitClick = async () => {
    if (!validateForm()) return
    setFormNetworkStatus(FormNetwrokStatus.PENDING)

    try {
      await api.PostForm(ToSendForm(form))
      setFormNetworkStatus(FormNetwrokStatus.SUCCESS)
      navigate('/')
    } catch (err) {
      setFormNetworkStatus(FormNetwrokStatus.ERROR)
    }
  }

  function onFieldChange({
    target,
  }: FormEvent<HTMLInputElement | HTMLSelectElement>) {
    console.log(target)
    if (target instanceof HTMLInputElement) {
      if (target.type === 'checkbox') {
        setForm({ ...form, ...{ [target.name]: target.checked } })
      } else {
        setForm({
          ...form,
          ...{
            [target.name]: target.value,
          },
        })
      }
    }

    if (target instanceof HTMLSelectElement) {
      setForm({ ...form, ...{ [target.name]: target.value } })
    }
  }

  return (
    <div className="form">
      <TextField
        name="name"
        label="Name"
        type="text"
        onChange={onFieldChange}
        error={errors.name}
        value={form.name}
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        onChange={onFieldChange}
        error={errors.email}
        value={form.email}
      />
      <TextField
        name="phone"
        label="Phone"
        type="tel"
        onChange={onFieldChange}
        error={errors.phone}
        value={form.phone}
      />
      <SelectField
        name="room"
        label="Room"
        options={_options}
        onChange={onFieldChange}
        error={errors.room}
        value={form.room}
      />
      <div>
        <h2>Additional</h2>
        <CheckboxField
          name="equipment"
          label="Equipment"
          onChange={onFieldChange}
          checked={form.equipment}
        />
        <CheckboxField
          name="stylist"
          label="Stylist"
          onChange={onFieldChange}
          checked={form.stylist}
        />
        <CheckboxField
          name="props"
          label="Props and Costumes"
          onChange={onFieldChange}
          checked={form.props}
        />
        <CheckboxField
          name="models"
          label="Models"
          onChange={onFieldChange}
          checked={form.models}
        />
      </div>
      <div className="flex">
        <DateField
          name="data"
          label="Select day"
          onChange={onFieldChange}
          value={initialState.data}
          error={errors.data}
        />
        <TimeField
          name="fromTime"
          label="From"
          onChange={onFieldChange}
          value={initialState.fromTime}
          error={errors.fromTime}
        />
        <TimeField
          name="toTime"
          label="To"
          onChange={onFieldChange}
          value={initialState.toTime}
          error={errors.toTime}
        />
      </div>
      <RadioField
        name="payment"
        label="Payment method"
        radioItems={[
          { id: 1, value: 'card', label: 'Card' },
          { id: 2, value: 'cash', label: 'Cash' },
        ]}
        onChange={onFieldChange}
        error={errors.payment}
        value={form.payment}
      />

      <div>
        <CheckboxField
          name="spam"
          label="Send some spam on my email"
          onChange={onFieldChange}
          checked={form.spam}
        />
        <CheckboxField
          name="terms"
          label="I agree with the terms of use of the studio"
          onChange={onFieldChange}
          error={errors.terms}
          checked={form.terms}
        />
      </div>

      <Button
        id="submit-button"
        disabled={
          formNotValid || formNetworkStatus === FormNetwrokStatus.PENDING
        }
        error={formNetworkStatus === 'ERROR'}
        title="Send"
        onClick={handleSubmitClick}
      >
        Send
      </Button>
    </div>
  )
}

export default Form
