import { Link } from 'react-router-dom'

export default function OffersListPage() {
  return (
    <section className="page">
      <header className="page__header">
        <div>
          <h1 className="page__title">Offers</h1>
          <p className="page__subtitle">Manage job offers and their statuses</p>
        </div>
        <div className="page__actions">
          <Link className="btn btn--primary" to="/offers/new">
            New offer
          </Link>
        </div>
      </header>

      <section className="card">
        <header className="card__header">
          <div>
            <h2 className="card__title">Search and filters</h2>
            <p className="card__subtitle">Filter by status, modality and seniority</p>
          </div>
        </header>

        <div className="filters">
          <div className="field">
            <label className="label" htmlFor="qOffers">
              Search
            </label>
            <input
              id="qOffers"
              className="input"
              placeholder="Title, company, tech"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="statusOffers">
              Status
            </label>
            <select id="statusOffers" className="select">
              <option>Any</option>
              <option>Open</option>
              <option>Closed</option>
              <option>Draft</option>
            </select>
          </div>
          <div className="field">
            <label className="label" htmlFor="modalityOffers">
              Modality
            </label>
            <select id="modalityOffers" className="select">
              <option>Any</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>
          <div className="field">
            <label className="label" htmlFor="seniorityOffers">
              Seniority
            </label>
            <select id="seniorityOffers" className="select">
              <option>Any</option>
              <option>Junior</option>
              <option>Mid</option>
              <option>Senior</option>
              <option>Lead</option>
            </select>
          </div>
        </div>
      </section>

      <section className="card">
        <header className="card__header">
          <div>
            <h2 className="card__title">Results</h2>
            <p className="card__subtitle">Showing 3 offers</p>
          </div>
          <div className="card__header-actions">
            <button className="btn" type="button">
              Export
            </button>
          </div>
        </header>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Offer</th>
                <th>Location</th>
                <th>Seniority</th>
                <th>Salary</th>
                <th>Status</th>
                <th className="right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-title">Backend Developer (Node.js)</div>
                  <div className="muted">AndesFintech</div>
                </td>
                <td>Bogotá, CO · Hybrid</td>
                <td>Mid</td>
                <td>USD 5,500 – 7,500</td>
                <td>
                  <span className="badge badge--success">Open</span>
                </td>
                <td className="right">
                  <div className="row-actions">
                    <Link className="btn btn--sm" to="/offers/1">
                      Open
                    </Link>
                    <Link className="btn btn--sm" to="/offers/1/edit">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-title">Frontend Developer (React)</div>
                  <div className="muted">LatamRetail</div>
                </td>
                <td>Medellín, CO · Remote</td>
                <td>Mid</td>
                <td>USD 4,500 – 6,500</td>
                <td>
                  <span className="badge badge--success">Open</span>
                </td>
                <td className="right">
                  <div className="row-actions">
                    <Link className="btn btn--sm" to="/offers/2">
                      Open
                    </Link>
                    <Link className="btn btn--sm" to="/offers/2/edit">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-title">QA Engineer</div>
                  <div className="muted">CloudHealth</div>
                </td>
                <td>Bogotá, CO · On-site</td>
                <td>Junior</td>
                <td>USD 2,800 – 3,600</td>
                <td>
                  <span className="badge">Draft</span>
                </td>
                <td className="right">
                  <div className="row-actions">
                    <Link className="btn btn--sm" to="/offers/3">
                      Open
                    </Link>
                    <Link className="btn btn--sm" to="/offers/3/edit">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <footer className="card__footer">
          <div className="pagination">
            <button className="btn" type="button">
              Previous
            </button>
            <div className="muted">Page 1 of 1</div>
            <button className="btn" type="button">
              Next
            </button>
          </div>
        </footer>
      </section>
    </section>
  )
}
