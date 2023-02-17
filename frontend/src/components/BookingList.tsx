import { useEffect, useState } from 'react'
import { useApiService } from '../contexts/ServiceContext'
import { FormResponse, FormSend } from '../types/form'
import { BookingItem } from './BookingItem'
import TextField from './TextField'

export const BookingList = () => {
  const api = useApiService()
  const [search, setSearch] = useState('')
  const [bookings, setBookings] = useState<FormResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState('')
  const isSuccess = !isLoading && !isError

  useEffect(() => {
    api
      .SearchBookings(search)
      .then(data => {
        setBookings(data)
        setIsLoading(false)
      })
      .catch(e => {
        setIsError(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [search])

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value
    setSearch(str.toLowerCase().trim())
  }

  return (
    <div className="booking__list">
      <TextField
        label="Search By Name"
        name="search"
        type="text"
        onChange={onSearchChange}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p className="error-message">{isError}</p>}
      {isSuccess && (
        <ul className="booking__ul">
          {bookings.length === 0 && <p>Bookings is empty</p>}
          {bookings.map(b => (
            <BookingItem
              key={b.id}
              id={b.id}
              name={b.name}
              email={b.email}
              phone={b.phone}
              room={b.room}
              equipment={b.equipment}
              stylist={b.stylist}
              props={b.props}
              models={b.models}
              from={b.from}
              to={b.to}
              payment={b.payment}
              spam={b.spam}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
