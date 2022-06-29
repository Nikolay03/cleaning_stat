import { TOKEN } from 'constants/constants'

export const requestAction = (values) => {
  const payload = fetch('https://sms.set.uz/api/v1/main/send_message/', {
    headers: {
      Authorization : `Token ${TOKEN}`,
      'content-type': 'Application/json'
    },
    body : JSON.stringify({
      phone_number: values.phone,
      message: values.name
    }),
    method: 'POST'
  })
  console.warn(payload)
  return payload
}
