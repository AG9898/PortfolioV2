export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-800 text-center text-sm text-neutral-500">
      <p>&copy; {new Date().getFullYear()} Aden Guo</p>
      <p>
        <a
          href="mailto:aden.guowe@example.com"
          className="hover:text-white transition-colors"
        >
          aden.guowe@gmail.com
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/aden-guo-b39743362/?trk=opento_sprofile_details"
          target="_blank"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/AG9898"
          target="_blank"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
