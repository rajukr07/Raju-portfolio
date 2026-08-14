import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__name">Raju Kumar</p>

        <div className="footer__links">
          <a
            href="https://github.com/rajukr07"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/raajucs074/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
          <a
            href="https://www.linkedin.com/in/raj-k07"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:rajukumarsdr95@gmail.com">
            Email
          </a>
        </div>

        <p className="footer__copyright">
          © 2026 Raju Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;