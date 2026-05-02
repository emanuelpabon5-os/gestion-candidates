import { Link } from 'react-router-dom'

export default function UserFormPage() {
  return (
    <section className="page">
      <header className="page__header">
        <div>
          <div className="breadcrumbs">
            <Link className="link" to="/users">
              Users
            </Link>
            <span className="breadcrumbs__sep" aria-hidden="true">
              /
            </span>
            <span className="breadcrumbs__current">User form</span>
          </div>
          <h1 className="page__title">User</h1>
          <p className="page__subtitle">Create or edit a user</p>
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
                <h2 className="card__title">Profile</h2>
                <p className="card__subtitle">Basic user information</p>
              </div>
            </header>

            <div className="form__grid">
              <div className="field">
                <label className="label" htmlFor="uFullName">
                  Full name
                </label>
                <input id="uFullName" className="input" placeholder="Juan Torres" />
              </div>

              <div className="field">
                <label className="label" htmlFor="uUsername">
                  Username
                </label>
                <input id="uUsername" className="input" placeholder="jtorres" />
              </div>

              <div className="field">
                <label className="label" htmlFor="uEmail">
                  Email
                </label>
                <input
                  id="uEmail"
                  className="input"
                  type="email"
                  placeholder="juan.torres@am-talento.com"
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="uRole">
                  Role
                </label>
                <select id="uRole" className="select">
                  <option>admin</option>
                  <option>recruiter</option>
                </select>
              </div>
            </div>
          </section>

          <section className="card">
            <header className="card__header">
              <div>
                <h2 className="card__title">Credentials</h2>
                <p className="card__subtitle">Set or reset access password</p>
              </div>
            </header>

            <div className="form__grid">
              <div className="field">
                <label className="label" htmlFor="uPassword">
                  Password
                </label>
                <input
                  id="uPassword"
                  className="input"
                  type="password"
                  placeholder="New password"
                  autoComplete="new-password"
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="uPasswordConfirm">
                  Confirm password
                </label>
                <input
                  id="uPasswordConfirm"
                  className="input"
                  type="password"
                  placeholder="Repeat password"
                  autoComplete="new-password"
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="uForceReset">
                  Security
                </label>
                <label className="check">
                  <input type="checkbox" className="check__input" id="uForceReset" />
                  <span className="check__label">Require password change on next login</span>
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>
  )
}
