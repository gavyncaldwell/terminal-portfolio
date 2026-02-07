import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__privacy">no tracking · no cookies · self-hosted</p>
          <p className="footer__copyright">© {currentYear} Gavyn Caldwell</p>
        </div>
      </div>
    </footer>
  )
}
