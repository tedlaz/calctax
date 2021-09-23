import React, { useState } from 'react'
import axios from 'axios'

export default () => {
  const [year, setYear] = useState(2021)
  const [income, setIncome] = useState(0)
  const [kids, setKids] = useState(0)
  // const [result, setResult] = useState({})
  const [resHtml, setResHtml] = useState('')

  const onSubmitForm = async event => {
    event.preventDefault()

    const format = {
      style: 'currency',
      currency: 'EUR',
    }

    const rresult = await axios.get(
      `https://tpcvju.deta.dev/tax?year=${year}&income=${income}&kids=${kids}`
    )
    const rdata = rresult.data.data

    if (Object.keys(rdata).length === 0) {
      setResHtml(
        <div className="alert alert-danger" role="alert">
          Δεν υπάρχει τύπος υπολογισμού για το έτος {year}
        </div>
      )
      return
    }

    const formatedData = {
      ...rdata,
      income: rdata.income.toLocaleString('el-GR', format),
      tax: rdata.tax.toLocaleString('el-GR', format),
      eea: rdata.eea.toLocaleString('el-GR', format),
      total_taxes: rdata.total_taxes.toLocaleString('el-GR', format),
      after_taxes: rdata.after_taxes.toLocaleString('el-GR', format),
    }
    // setResult(formatedData)
    setResHtml(renderedResults(formatedData))
    // console.log(rresult.data.data.income.toLocaleString('el-GR'))
  }

  const renderedResults = vals => {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Περιγραφή</th>
              <th>Τιμή</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Φορολογικό Έτος</td>
              <td align="right">{vals.tax_year}</td>
            </tr>
            <tr>
              <td>Παιδιά</td>
              <td align="right">{vals.children}</td>
            </tr>
            <tr>
              <td>Φορολογητέο Εισόδημα</td>
              <td align="right">{vals.income}</td>
            </tr>

            <tr>
              <td>Φόρος Εισοδήματος</td>
              <td align="right">{vals.tax}</td>
            </tr>
            <tr>
              <td>Ειδικό Επίδομα Αλληλεγγύης</td>
              <td align="right">{vals.eea}</td>
            </tr>
            <tr>
              <td>Φόροι συνολικά</td>
              <td align="right">{vals.total_taxes}</td>
            </tr>
            <tr>
              <td>Καθαρό ποσό</td>
              <td align="right">{vals.after_taxes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>Έτος</label>
          <input
            value={year}
            onChange={e => setYear(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Ετήσιο Εισόδημα</label>
          <input
            value={income}
            onChange={e => setIncome(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Παιδιά</label>
          <input
            value={kids}
            onChange={e => setKids(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <button className="btn btn-primary">Υποβολή</button>
      </form>
      <br />
      {resHtml}
    </div>
  )
}
