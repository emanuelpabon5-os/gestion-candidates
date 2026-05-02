import { Link } from 'react-router-dom'

export default function CandidateDetailPage() {
  return (
    <section className="page">
      <header className="page__header">
        <div>
          <div className="breadcrumbs">
            <Link className="link" to="/candidates">
              Candidates
            </Link>
            <span className="breadcrumbs__sep" aria-hidden="true">
              /
            </span>
            <span className="breadcrumbs__current">Profile</span>
          </div>
          <h1 className="page__title">Ana Martínez</h1>
          <p className="page__subtitle">
            Junior · Bogotá, CO · ana.martinez@gmail.com
          </p>
        </div>
        <div className="page__actions">
          <Link className="btn" to="/candidates/1/edit">
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
              <h2 className="card__title">Candidate details</h2>
              <p className="card__subtitle">Contact and professional info</p>
            </div>
            <span className="badge">New</span>
          </header>

          <div className="dl">
            <div className="dl__row">
              <div className="dl__key">Full name</div>
              <div className="dl__value">Ana Martínez</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Email</div>
              <div className="dl__value">ana.martinez@gmail.com</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Phone</div>
              <div className="dl__value">+57 301 555 0101</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Location</div>
              <div className="dl__value">Bogotá, CO</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Seniority</div>
              <div className="dl__value">Junior</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Years experience</div>
              <div className="dl__value">1</div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Created at</div>
              <div className="dl__value">2026-03-01</div>
            </div>
          </div>
        </section>

        <section className="card">
          <header className="card__header">
            <div>
              <h2 className="card__title">Pipeline</h2>
              <p className="card__subtitle">Applied offer and status</p>
            </div>
          </header>

          <div className="dl">
            <div className="dl__row">
              <div className="dl__key">Applied offer</div>
              <div className="dl__value">
                <Link className="link" to="/offers/45">
                  Backend Developer (Node.js)
                </Link>
              </div>
            </div>
            <div className="dl__row">
              <div className="dl__key">Status</div>
              <div className="dl__value">
                <span className="badge">New</span>
              </div>
            </div>
          </div>

          <div className="divider" />

          <h3 className="section-title">Skills</h3>
          <div className="chips">
            <span className="chip">React</span>
            <span className="chip">JavaScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
          </div>

          <div className="divider" />

          <h3 className="section-title">Notes</h3>
          <div className="muted">
            Add notes, interview feedback and next steps.
          </div>
          <textarea
            className="textarea"
            rows={5}
            placeholder="Write a note..."
          />
          <div className="mt-12">
            <button className="btn btn--primary" type="button">
              Save note
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}
