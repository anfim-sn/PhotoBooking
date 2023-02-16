export type FormState = {
  name: string
  email: string
  phone: string
  room: string
  equipment: boolean
  stylist: boolean
  props: boolean
  models: boolean
  data: string
  fromTime: string
  toTime: string
  payment: 'card' | 'cash'
  terms: boolean
  spam: boolean
}

export type FormValidationSchemeType = {
  name: (value: string) => string
  email: (value: string) => string
  phone: (value: string) => string
  room: (value: string) => string
  data: (value: string) => string
  fromTime: (value: string) => string
  toTime: (value: string) => string
  terms: (value: boolean) => string
  payment: (value: string) => string
}

export type FormFields = keyof FormState
export type FormErrors = Record<keyof Partial<FormState>, string>

export type FormSend = {
  name: string
  email: string
  phone: string
  room: number
  equipment: boolean
  stylist: boolean
  props: boolean
  models: boolean
  from: string
  to: string
  payment: string
  spam: boolean
}

export type FormResponse = {
  id: string
  name: string
  email: string
  phone: string
  room: number
  equipment: boolean
  stylist: boolean
  props: boolean
  models: boolean
  from: Date
  to: Date
  payment: string
  spam: boolean
}