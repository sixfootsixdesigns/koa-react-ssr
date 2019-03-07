import { withRouter } from 'next/router'
import Link from 'next/link';

const ActiveLink = ({ children, router, href }: any) => {
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  }

  return (
    <Link href={href}>
      <a style={style}>
        {children}
      </a>
    </Link>
  )
}

export default withRouter(ActiveLink);
