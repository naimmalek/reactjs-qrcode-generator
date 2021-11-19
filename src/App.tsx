import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactQrcode } from 'reactjs-qrcode-generator'
import 'reactjs-qrcode-generator/dist/index.css'


const App = () => {
  const [qrvalue, setQrvalue] = useState('Hello this is QRCode')
  const [size, setsize] = useState(200)
  return (
    <div className="card">
      <a href="https://github.com/naimmalek/reactjs-qrcode-generator" data-ribbon="Fork me on GitHub" title="Fork me on GitHub" className="github-fork-ribbon">Fork me on GitHub</a>
      <h5 className="card-header info-color white-text text-center py-4">
        <strong>ReactJs Qrcode Generator</strong>
      </h5>
      <div className="card-body px-lg-5 pt-0">
        <div style={{ margin: '10px 0 0 0' }} className="row">
          <div className="col-md-12 text-center">
            <div className="col-md-12 text-center"> npm package link
              <a href="https://www.npmjs.com/package/reactjs-qrcode-generator"> reactjs-qrcode-generator</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form style={{ margin: '15px 0 0 0' }}>
              <div className="form-group">
                <label>Value</label>
                <input className="form-control" value="Hello this is QRCode" onChange={e => setQrvalue(e.target.value)} />
              </div>
              <div className="form-group">
                <label >Size</label>
                <input className="form-control" type="number" value={size} min="200" placeholder="Size" onChange={e => setsize(parseInt(e.target.value))} />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div style={{ margin: '15px 0 0 0' }}>
              <ReactQrcode qrvalue={qrvalue} size={size} level={1} />
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="row" style={{ margin: '10px 0 0 0' }} >
          <div className="col-md-12 text-center">
            <a href="https://naimmalek.github.io">Copyright (c) 2021 Naim Malek
            </a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
