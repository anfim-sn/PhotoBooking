import { FormResponse, FormSend } from '../types/form'

type BookingItemProps = FormResponse

export const BookingItem = ({
  id,
  name,
  email,
  phone,
  room,
  equipment,
  stylist,
  props,
  models,
  from,
  to,
  payment,
  spam,
}: FormResponse) => {
  return (
    <div>
      <hr />
      <p>
        Name: {name}, Email: {email}, Phone: {phone}, Spam:
        {spam ? ' true' : ' false'}
      </p>
      <p>
        Pay: {payment}, Room: {room} Additional: {equipment ? ' equipment' : ''}
        {stylist ? ' stylist' : ''}
        {props ? ' props' : ''}
        {models ? ' models' : ''}
      </p>
      <p>
        From: {from.toString()}, To: {to.toString()}
      </p>
    </div>
  )
}
