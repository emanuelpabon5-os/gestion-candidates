import { Link } from 'react-router-dom'

export default function OfferFormPage() {
  return (
    <section className="page">
      <header className="page__header">
        <div>
          <div className="breadcrumbs">
            <Link className="link" to="/offers">
              Offers
            </Link>
            <span className="breadcrumbs__sep" aria-hidden="true">
              /
            </span>
            <span className="breadcrumbs__current">Offer form</span>
          </div>
          <h1 className="page__title">Offer</h1>
          <p className="page__subtitle">Create or edit an offer</p>
        </div>
        <div className="page__actions">
          <button className="btn" type="button">
            Cancel
          </button>
          <button className="btn btn--primary" type="button">
            Save
          </button>
        </div>
      </header>

      <form className="form">
        <div className="grid grid--2">
          <section className="card">
            <header className="card__header">
              <div>
                <h2 className="card__title">Basics</h2>
                <p className="card__subtitle">Title, company and location</p>
              </div>
            </header>

            <div className="form__grid">
              <div className="field">
                <label className="label" htmlFor="oTitle">
                  Title
                </label>
                <input
                  id="oTitle"
                  className="input"
                  placeholder="Backend Developer (Node.js)"
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="oCompany">
                  Company
                </label>
                <input id="oCompany" className="input" placeholder="AndesFintech" />
              </div>

              <div className="field">
                <label className="label" htmlFor="oLocation">
                  Location
                </label>
                <input id="oLocation" className="input" placeholder="Bogotá, CO" />
              </div>

              <div className="field">
                <label className="label" htmlFor="oModality">
                  Modality
                </label>
                <select id="oModality" className="select">
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>On-site</option>
                </select>
              </div>
            </div>
          </section>

          <section className="card">
            <header className="card__header">
              <div>
                <h2 className="card__title">Compensation</h2>
                <p className="card__subtitle">Salary range and status</p>
              </div>
            </header>

            <div className="form__grid">
              <div className="field">
                <label className="label" htmlFor="oSeniority">
                  Seniority
                </label>
                <select id="oSeniority" className="select">
                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </div>

              <div className="field">
                <label className="label" htmlFor="oStatus">
                  Status
                </label>
                <select id="oStatus" className="select">
                  <option>Open</option>
                  <option>Closed</option>
                  <option>Draft</option>
                </select>
              </div>

              <div className="field">
                <label className="label" htmlFor="oSalaryMin">
                  Salary min
                </label>
                <input id="oSalaryMin" className="input" type="number" placeholder="5500" />
              </div>

              <div className="field">
                <label className="label" htmlFor="oSalaryMax">
                  Salary max
                </label>
                <input id="oSalaryMax" className="input" type="number" placeholder="7500" />
              </div>

              <div className="field">
                <label className="label" htmlFor="oCurrency">
                  Currency
                </label>
                <select id="oCurrency" className="select">
                  <option>USD</option>
                  <option>COP</option>
                  <option>EUR</option>
                </select>
              </div>

              <div className="field">
                <label className="label" htmlFor="oRecruiter">
                  Recruiter
                </label>
                <select id="oRecruiter" className="select">
                  <option>Juan Torres (admin)</option>
                  <option>Recruiter #2</option>
                  <option>Recruiter #3</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        <section className="card">
          <header className="card__header">
            <div>
              <h2 className="card__title">Tech stack</h2>
              <p className="card__subtitle">Add technologies as tags</p>
            </div>
          </header>

          <div className="form__grid form__grid--3">
            <div className="field">
              <label className="label" htmlFor="oTech">
                New tech
              </label>
              <input id="oTech" className="input" placeholder="Node.js" />
            </div>
            <div className="field">
              <label className="label" htmlFor="oTechType">
                Category
              </label>
              <select id="oTechType" className="select">
                <option>Language</option>
                <option>Framework</option>
                <option>Database</option>
                <option>Cloud</option>
                <option>Tooling</option>
              </select>
            </div>
            <div className="field field--actions">
              <label className="label" aria-hidden="true">
                Add
              </label>
              <button className="btn btn--primary" type="button">
                Add tech
              </button>
            </div>
          </div>

          <div className="chips mt-12">
            <span className="chip">Node.js</span>
            <span className="chip">TypeScript</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Docker</span>
          </div>
        </section>
      </form>
    </section>
  )
}
