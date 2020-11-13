import React from 'react'
import Link from 'next/link'

export const Header = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/api-sample">
        <a>API Sample</a>
      </Link>
    </li>
  </ul>
)

export default Header
