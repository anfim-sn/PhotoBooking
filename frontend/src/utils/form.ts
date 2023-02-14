import { FormState, FormSend } from './../types/form';

export const ToSendForm = (form: FormState): FormSend => {
  console.log('ToSendForm from', form);
  // "2023-02-11"
  // "18:20"
  const [year, month, day] = form.data.split('-');
  const [fromHours, fromMinutes] = form.fromTime.split(':');
  const [toHours, toMinutes] = form.toTime.split(':');

  // const fromDate = new Date(`${form.data}T${form.fromTime}:00`).toString(
  const startData = new Date(+year, +month, +day, +fromHours, +fromMinutes, 0);
  const endData = new Date(+year, +month, +day, +toHours, +toMinutes, 0);


  // startData.setHours(startTime.getHours());
  // startData.setMinutes(startTime.getMinutes());
  // endData.setHours(endTime.getHours());
  // endData.setMinutes(endTime.getMinutes());

  // const fromDate = startDate.toString();

  // const a = new Date(form.data).setHours(startTime.getHours());
  // const fromDate = new Date(form.data).setHours(startTime.getHours())
  // const toDate = new Date(`${form.data}T${form.toTime}:00`)

  const formSend: FormSend = {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    room: Number(form.room),
    equipment: form.equipment,
    stylist: form.stylist,
    props: form.props,
    models: form.models,
    from: startData.toISOString(),
    to: endData.toISOString(),
    payment: form.payment,
    spam: form.spam,
  }

  return formSend
}