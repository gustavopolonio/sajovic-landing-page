import { Link } from 'react-router-dom'
import Logo from '/logo.png'
import { MenuHamb } from './MenuHamb'

export const Header = () => {
  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <header className="bg-white w-full text-base text-black font-normal z-10 max-md:sticky max-md:top-0 max-md:shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
      <div className="flex w-full justify-between items-stretch flex-wrap px-20 py-4 max-lg:px-5 max-md:px-[14px] max-md:py-[18px]">
        <Link to="/">
          <img
            loading="lazy"
            src={Logo}
            className="aspect-[5.18] object-contain w-[249px] shrink-0 max-w-full max-md:w-[200px]"
            alt="Sajovic Sociedade de Advogados Logo"
          />
        </Link>

        <nav className="flex gap-5 my-auto max-md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <MenuHamb items={navItems} />
      </div>
    </header>
  )
}
