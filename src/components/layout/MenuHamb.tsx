import { useEffect, useState } from 'react'

interface MenuHambItem {
  label: string
  href: string
}

interface MenuHambProps {
  items: MenuHambItem[]
}

export const MenuHamb = ({ items }: MenuHambProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className="relative flex items-center md:hidden">
      <button
        className="flex flex-col justify-center gap-1.5 w-8 h-8 relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block w-8 h-[3px] bg-black transition-transform duration-300 ${
            isOpen
              ? 'rotate-45 translate-y-[9px] -translate-x-[6px] bg-white'
              : ''
          }`}
        ></span>
        <span
          className={`block w-8 h-[3px] bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-8 h-[3px] bg-black transition-transform duration-300 ${
            isOpen
              ? '-rotate-45 -translate-y-[9px] -translate-x-[6px] bg-white'
              : ''
          }`}
        ></span>
      </button>

      <div
        className={`flex justify-center items-center absolute right-0 bg-black shadow-lg p-4 transition-transform duration-300 ${
          isOpen
            ? '!fixed inset-0 z-10 translate-y-0 opacity-[98%]'
            : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col text-center gap-2 text-white">
          {items.map((item) => (
            <li key={item.href}>
              <a
                onClick={() => setIsOpen(false)}
                href={item.href}
                className="block p-2 hover:bg-gray-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
