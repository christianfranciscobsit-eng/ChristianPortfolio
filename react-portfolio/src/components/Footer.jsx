export default function Footer() {
  return (
    <footer className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md max-w-container-max mx-auto border-t border-outline-variant/20 bg-surface">
      <div className="flex flex-col items-center md:items-start gap-stack-sm">
        <div className="font-headline-md text-headline-md text-primary font-bold">Portfolio</div>
        <p className="font-label-md text-label-md text-on-surface-variant italic opacity-70">
          © 2026 Christian Francisco. Elevated Minimalism.
        </p>
      </div>
      <div className="flex gap-stack-lg">
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 uppercase tracking-widest"
          href="https://www.linkedin.com/in/christian-francisco-38720b393"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 uppercase tracking-widest"
          href="https://www.facebook.com/Christian.Francisco.Manalang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 uppercase tracking-widest"
          href="https://www.instagram.com/muddyyyy2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}
