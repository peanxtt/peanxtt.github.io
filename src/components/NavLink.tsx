import classNames from '@/lib/classNames'
import Link from 'next/link'

interface Props {
  href: string
  title: string
}

const NavLink = ({ href, title }: Props) => {
  return (
    <Link
      href={href}
      className={classNames(
        'block py-2 pl-3 pr-4 text-[#C1AB85] sm:text-xl rounded md:p-0 hover:text-[#C1AB85]/80',
        'transition-colors duration-150 delay-75'
      )}
    >
      {title}
    </Link>
  )
}

export default NavLink
