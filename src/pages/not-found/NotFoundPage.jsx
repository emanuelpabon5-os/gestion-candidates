import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="page page--center">
      <div className="empty">
        <div className="empty__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              d="M12 8v5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M12 16.5h.01"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M10.3 4.8h3.4L21 12l-7.3 7.2h-3.4L3 12l7.3-7.2Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="empty__title">Page not found</h1>
        <p className="empty__subtitle">
          The page you are looking for does not exist or was moved.
        </p>
        <div className="empty__actions">
          <Link className="btn btn--primary" to="/dashboard">
            Go to dashboard
          </Link>
          <Link className="btn" to="/login">
            Sign in
          </Link>
        </div>
      </div>
    </section>
  )
}
