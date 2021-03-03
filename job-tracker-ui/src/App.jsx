import React from 'react'

export function App() {
  return (
    <div className="home container">
      <header className="header">
        <h1>Job Trackr&trade;</h1>
      </header>

      <aside className="notifications">
        <header>
          <h2>Notifications</h2>
          <a href="#new">New</a>
        </header>
        <ul>
          <li>
            <h3>Follow up with Petco</h3>
            <p>You applied 3 days ago.</p>
          </li>
          <li>
            <h3>Interview with ACME Inc.</h3>
            <p>Monday at 2 pm</p>
          </li>
          <li>
            <h3>Interview with ACME Inc.</h3>
            <p>Monday at 2 pm</p>
          </li>
          <li>
            <h3>Interview with ACME Inc.</h3>
            <p>Monday at 2 pm</p>
          </li>
          <li>
            <h3>Interview with ACME Inc.</h3>
            <p>Monday at 2 pm</p>
          </li>
        </ul>
      </aside>

      <main className="companies">
        <h2>Companies</h2>
        <a href="#new">New</a>
        <ul>
          <li>
            <h3>PetCo</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              porro rem alias tempore.
            </p>
            <p>
              <a href="#edit">Edit</a>
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
              <a href="#edit">Edit</a>
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
              <a href="#edit">Edit</a>
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
              <a href="#edit">Edit</a>
            </p>
          </li>
        </ul>
      </main>

      <aside className="interactions">
        <h2>Interactions</h2>
        <a href="#new">New</a>
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
        <p>&copy; 2021 Cohort 20. Made with &hearts; in St. Petersburg, FL.</p>
      </footer>
    </div>
  )
}
