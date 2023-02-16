import axios from 'axios'
import { FormSend } from '../types/form'

export class ApiService {
  private static url = 'api/'

  static async PostForm(form: FormSend) {
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
