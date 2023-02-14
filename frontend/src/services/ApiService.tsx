import axios from 'axios'
import { FormSend } from '../types/form'

export class ApiService {
  private static url = 'http://localhost:5194/api/'

  static async PostForm(form: FormSend) {
    console.log(form.from)
    console.log(form.to)
    try {
      const response = await axios.post(this.url + 'booking', form, {
        headers: { 'Content-Type': 'application/json' },
      })
      return response.data
    } catch ({ message }) {
      return Promise.reject(message)
    }
  }

  static async SearchBookings(search: string) {
    try {
      const response = await axios.get(`${this.url}booking?search=${search}`)
      return response.data
    } catch ({ message }) {
      return Promise.reject(message)
    }
  }
}
