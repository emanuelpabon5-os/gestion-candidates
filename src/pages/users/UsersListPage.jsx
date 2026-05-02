import { Link } from 'react-router-dom'

export default function UsersListPage() {
  return (
    <section className="page">
      <header className="page__header">
        <div>
          <h1 className="page__title">Users</h1>
          <p className="page__subtitle">Admins and recruiters that can sign in</p>
        </div>
        <div className="page__actions">
          <Link className="btn btn--primary" to="/users/new">
            New user
          </Link>
        </div>
      </header>

      <section className="card">
        <header className="card__header">
          <div>
            <h2 className="card__title">Search and filters</h2>
            <p className="card__subtitle">Filter by role</p>
          </div>
        </header>

        <div className="filters">
          <div className="field">
            <label className="label" htmlFor="qUsers">
              Search
            </label>
            <input id="qUsers" className="input" placeholder="Name, username, email" />
          </div>
          <div className="field">
            <label className="label" htmlFor="roleUsers">
              Role
            </label>
            <select id="roleUsers" className="select">
              <option>Any</option>
              <option>Admin</option>
              <option>Recruiter</option>
            </select>
          </div>
        </div>
      </section>

      <section className="card">
        <header className="card__header">
          <div>
            <h2 className="card__title">Results</h2>
            <p className="card__subtitle">Showing 3 users</p>
          </div>
        </header>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Created</th>
                <th className="right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cell-title">Juan Torres</div>
                  <div className="muted">jtorres · juan.torres@am-talento.com</div>
                </td>
                <td>
                  <span className="badge badge--info">Admin</span>
                </td>
                <td>2026-01-10</td>
                <td className="right">
                  <div className="row-actions">
                    <Link className="btn btn--sm" to="/users/1">
                      Open
                    </Link>
                    <Link className="btn btn--sm" to="/users/1/edit">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-title">María Pérez</div>
                  <div className="muted">mperez · maria.perez@am-talento.com</div>
                </td>
                <td>
                  <span className="badge">Recruiter</span>
                </td>
                <td>2026-02-01</td>
                <td className="right">
                  <div className="row-actions">
                    <Link className="btn btn--sm" to="/users/2">
                      Open
                    </Link>
                    <Link className="btn btn--sm" to="/users/2/edit">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cell-title">Sebastián Díaz</div>
                  <div className="muted">sdiaz · sebastian.diaz@am-talento.com</div>
                </td>
                <td>
                  <span className="badge">Recruiter</span>
                </td>
                <td>2026-02-15</td>
                <td className="right">
                  <div className="row-actions">
                    <Link className="btn btn--sm" to="/users/3">
                      Open
                    </Link>
                    <Link className="btn btn--sm" to="/users/3/edit">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  )
}
