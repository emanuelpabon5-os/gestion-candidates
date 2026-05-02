import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Primary">
      <div className="sidebar__brand">
        <div className="sidebar__logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path
              d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M12 3v18M4 7.5l8 4.5 8-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="sidebar__brand-text">
          <div className="sidebar__title">Candidates</div>
          <div className="sidebar__subtitle">Recruitment CRM</div>
        </div>
      </div>

      <nav className="sidebar__nav">
        <div className="sidebar__section">
          <div className="sidebar__section-title">Overview</div>
          <Link className="sidebar__link" to="/dashboard">
            Dashboard
          </Link>
        </div>

        <div className="sidebar__section">
          <div className="sidebar__section-title">Management</div>
          <Link className="sidebar__link" to="/candidates">
            Candidates
          </Link>
          <Link className="sidebar__link" to="/offers">
            Offers
          </Link>
          <Link className="sidebar__link" to="/users">
            Users
          </Link>
        </div>
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="avatar" aria-hidden="true">
            JT
          </div>
          <div className="sidebar__user-meta">
            <div className="sidebar__user-name">Juan Torres</div>
            <div className="sidebar__user-role">Admin</div>
          </div>
        </div>
        <Link className="sidebar__link sidebar__link--muted" to="/login">
          Sign out
        </Link>
      </div>
    </aside>
  )
}
