export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="footer"
      aria-label="Website Footer with copyright information"
    >
      <p>
        <small>
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </small>
      </p>
    </footer>
  );
}
