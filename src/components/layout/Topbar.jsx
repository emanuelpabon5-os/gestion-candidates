import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <div className="topbar__title">Candidate Management</div>
        <div className="topbar__subtitle">
          Users, offers and candidates in one place
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__search" role="search">
          <label className="sr-only" htmlFor="globalSearch">
            Search
          </label>
          <input
            id="globalSearch"
            className="input"
            placeholder="Search candidates, offers or users"
          />
        </div>

        <Link className="btn btn--primary" to="/candidates/new">
          New candidate
        </Link>
      </div>
    </header>
  )
}
