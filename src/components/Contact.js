import React from 'react'
import { Form } from 'react-bootstrap'

const Contact = () => {
const func = (ev)=>{
ev.preventDefault()
fetch('/api/submit', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(ev.value)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  // Handle success, e.g., show a success message
})
.catch(error => {
  console.error('Error:', error);
  // Handle error, e.g., show an error message
});

}
  return (
    <div>
    <Form onSubmit={func()}>
    <input type="text" id="inputValue" name="inputValue" required />
    <button className='btn' type='submit'>send</button>
    </Form>
    </div>
  )
}

export default Contact