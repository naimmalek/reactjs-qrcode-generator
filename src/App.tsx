import React, { useState } from 'react'

import { ReactQrcode } from 'reactjs-qrcode-generator'
import 'reactjs-qrcode-generator/dist/index.css'

const App = () => {
  const [qrvalue, setQrvalue] = useState('Hello this is QRCode')
  const [size, setsize] = useState(200)
  return (
    <>
      <ReactQrcode qrvalue={qrvalue} size={size} level={1} />
      <input onChange={e => setQrvalue(e.target.value)} />
      <input type="number" value={size} min="200" placeholder="Size" onChange={e => setsize(parseInt(e.target.value))} />
    </>
  )

}

export default App
