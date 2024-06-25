import React, { 
   useState } from 'react'

const Documents = () => {
  // const [users, setusers] = useState()
  // useEffect(() => {
  //   fetch("http://localhost:9000/fes")
  //     .then(val => val.json())
  //     .then(result => {
  //       console.log(result);
  //       setusers(result)

  //     })
  // }, [])
  const [festivals, setfestivals] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (festivals === !"") {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ festivals }),
      })
      .then(val=>val.json())
      .then(rest=>{console.log(rest);})

    }
  }
  return (
    <form onSubmit={handleSubmit}>


      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="festival"
        name="festival"
        onChange={(e) => setfestivals(e.target.value)}
        required
      />

      <button type="submit">send</button>
    </form>
  )
}

export default Documents
