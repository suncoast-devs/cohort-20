import React from 'react'
import { Icon } from './Icon'

function Notification({ title, detail, done }) {
  return (
    <li>
      <div className="content">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
      <div className="toggle">
        <a href="#toggle">
          {done ? <Icon name="check" /> : <Icon name="circle" style="far" />}
        </a>
      </div>
    </li>
  )
}

export function App() {
  return (
    <div className="home container">
      <header className="header">
        <h1>Job Trackr&trade;</h1>
      </header>

      <aside className="notifications">
        <header>
          <h2>Notifications</h2>
          <a href="#new">
            <Icon name="plus" />
          </a>
        </header>
        <ul>
          <Notification title="Email ACME, Inc." detail="Foo Bar" done={true} />
          <Notification
            title="Email ACME, Inc."
            detail="Foo Bar"
            done={false}
          />
          <Notification
            title="Apply to ACME, Inc."
            detail="Foo Bar"
            done={true}
          />
          <Notification
            title="Email ACME, Inc."
            detail="Foo Bar"
            done={false}
          />
          <Notification
            title="Email ACME, Inc."
            detail="Foo Bar"
            done={false}
          />
          <Notification
            title="Email ACME, Inc."
            detail="Foo Bar"
            done={false}
          />
          <li className="hack"></li>
        </ul>
      </aside>

      <main className="companies">
        <h2>Companies</h2>
        <a href="#new">
          <Icon name="plus" />
        </a>
        <ul>
          <li>
            <h3>PetCo</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              porro rem alias tempore.
            </p>
            <p>
              <a href="#edit">
                <Icon name="edit" />
              </a>
            </p>
          </li>
          <li>
            <h3>ACME Inc.</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!
            </p>
            <p>
              <a href="#edit">
                <Icon name="edit" />
              </a>
            </p>
          </li>
          <li>
            <h3>PetCo</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              porro rem alias tempore.
            </p>
            <p>
              <a href="#edit">
                <Icon name="edit" />
              </a>
            </p>
          </li>
          <li>
            <h3>ACME Inc.</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!
            </p>
            <p>
              <a href="#edit">
                <Icon name="edit" />
              </a>
            </p>
          </li>
        </ul>
      </main>

      <aside className="interactions">
        <h2>Interactions</h2>
        <a href="#new">
          <Icon name="plus" />
        </a>
        <ul>
          <li>
            <h3>Emailed PetCo</h3>
            <p>Vel, ex accusantium hic harum eos odio dolorum.</p>
            <p>4 days ago</p>
          </li>
          <li>
            <h3>Emailed ACME, Inc.</h3>
            <p>Vel, ex accusantium hic harum eos odio dolorum.</p>
            <p>2 days ago</p>
          </li>
          <li>
            <h3>Applied at PetCo</h3>
            <p>Vel, ex accusantium hic harum eos odio dolorum.</p>
            <p>2 days ago</p>
          </li>
        </ul>
      </aside>

      <footer className="footer">
        <p>
          &copy; 2021 Cohort 20. Made with{' '}
          <span className="love">
            <Icon name="heart" />
          </span>{' '}
          in St. Petersburg, FL.
        </p>
      </footer>
    </div>
  )
}
