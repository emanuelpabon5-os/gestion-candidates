import { Link } from 'react-router-dom'

export default function OfferDetailPage() {
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
            <span className="breadcrumbs__current">Details</span>
          </div>
          <h1 className="page__title">Backend Developer (Node.js)</h1>
          <p className="page__subtitle">AndesFintech · Bogotá, CO · Hybrid</p>
        </div>
        <div className="page__actions">
          <Link className="btn" to="/offers/1/edit">
            Edit
          </Link>
          <button className="btn btn--danger" type="button">
            Delete
          </button>
        </div>
      </header>

      <div className="grid grid--2">
        <section className="card">
          <header className="card__header">
            <div>
              <h2 className="card__title">Offer details</h2>
              <p className="card__subtitle">Key information and requirements</p>
            </div>
            <span className="badge badge--success">Open</span>
          </header>

          <div className="dl">
            <div className="dl__row">
              <div className="dl__key">Title</div>
              <div className="dl__value">Backend Developer (Node.js)</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Company</div>
              <div className="dl__value">AndesFintech</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Location</div>
              <div className="dl__value">Bogotá, CO</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Modality</div>
              <div className="dl__value">Hybrid</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Seniority</div>
              <div className="dl__value">Mid</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Salary</div>
              <div className="dl__value">USD 5,500 – 7,500</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Posted at</div>
              <div className="dl__value">2026-02-10</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Recruiter</div>
              <div className="dl__value">
                <Link className="link" to="/users/2">
                  Recruiter #2
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <header className="card__header">
            <div>
              <h2 className="card__title">Tech stack</h2>
              <p className="card__subtitle">Skills used by this role</p>
            </div>
          </header>

          <div className="chips">
            <span className="chip">Node.js</span>
            <span className="chip">TypeScript</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Docker</span>
          </div>

          <div className="divider" />

          <h3 className="section-title">Candidates</h3>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Status</th>
                  <th className="right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="cell-title">Ana Martínez</div>
                    <div className="muted">Junior · Bogotá, CO</div>
                  </td>
                  <td>
                    <span className="badge">New</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/candidates/1">
                      Open
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cell-title">Carlos Rojas</div>
                    <div className="muted">Mid · Medellín, CO</div>
                  </td>
                  <td>
                    <span className="badge badge--info">In review</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/candidates/2">
                      Open
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  )
}
