import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Footer</Link>
        </div>
      </nav>
    </header>
  )
}
