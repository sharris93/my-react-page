const navbarTitle = 'My Site';
const heroHeading = 'Your profile';
const mainParagraphs = [
  'This is the first paragraph of the main content.',
  'Here is another bit of content to display on the page.',
  'You can keep adding more text as needed!'
]
const footerText = '© 2025 My Site. All rights reserved.';


function App() {
  return (
    <>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            {navbarTitle}
          </a>
        </div>
      </nav>

      <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              {heroHeading}
            </h1>
          </div>
        </div>
      </section>


      <main className="section">
        <div className="container has-text-centered">
          {mainParagraphs.map((paragraph, index) => {
            return (
              <div key={index}>
                <p>{paragraph}</p>
              </div>
            )
          })}
        </div>
      </main>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>{footerText}</p>
        </div>
      </footer>


    </>
  )
}

export default App
