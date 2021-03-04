import React from 'react'
import { Icon } from './Icon'
import { Notification } from './components/Notification'
import { Panel } from './components/Panel'
import { PanelItem } from './components/PanelItem'
import { Companies } from './components/Companies'

export function App() {
  return (
    <div className="home container">
      <header className="header">
        <h1>
          Job Trackr
          <sup>
            <Icon name="trademark" />
          </sup>
        </h1>
      </header>

      <aside className="notifications">
        <Panel
          title="Notification"
          headerAction={
            <a href="#new">
              <Icon name="plus" />
            </a>
          }
        >
          <PanelItem>
            <Notification
              title="Email ACME, Inc."
              detail="Foo Bar"
              done={true}
            />
          </PanelItem>
          <PanelItem>
            <Notification
              title="Apply at ACME, Inc."
              detail="Foo Bar"
              done={false}
            />
          </PanelItem>
          <PanelItem>
            <Notification title="Email PetCo" detail="Foo Bar" done={false} />
          </PanelItem>
          <li className="hack"></li>
        </Panel>
      </aside>

      <Companies />

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
