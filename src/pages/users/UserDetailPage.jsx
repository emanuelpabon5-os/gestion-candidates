import { Link } from 'react-router-dom'

export default function UserDetailPage() {
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
            <span className="breadcrumbs__current">Details</span>
          </div>
          <h1 className="page__title">Juan Torres</h1>
          <p className="page__subtitle">jtorres · juan.torres@am-talento.com</p>
        </div>
        <div className="page__actions">
          <Link className="btn" to="/users/1/edit">
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
              <h2 className="card__title">User profile</h2>
              <p className="card__subtitle">Identity and access role</p>
            </div>
            <span className="badge badge--info">Admin</span>
          </header>

          <div className="dl">
            <div className="dl__row">
              <div className="dl__key">Full name</div>
              <div className="dl__value">Juan Torres</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Username</div>
              <div className="dl__value">jtorres</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Email</div>
              <div className="dl__value">juan.torres@am-talento.com</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Role</div>
              <div className="dl__value">admin</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Created at</div>
              <div className="dl__value">2026-01-10</div>
            </div>
          </div>
        </section>

        <section className="card">
          <header className="card__header">
            <div>
              <h2 className="card__title">Security</h2>
              <p className="card__subtitle">Password and session actions</p>
            </div>
          </header>

          <div className="stack">
            <div className="stack__row">
              <div>
                <div className="cell-title">Reset password</div>
                <div className="muted">Send a reset link to the user email</div>
              </div>
              <button className="btn" type="button">
                Send reset
              </button>
            </div>

            <div className="divider" />

            <div className="stack__row">
              <div>
                <div className="cell-title">Force sign out</div>
                <div className="muted">Invalidate active sessions</div>
              </div>
              <button className="btn btn--danger" type="button">
                Sign out
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
