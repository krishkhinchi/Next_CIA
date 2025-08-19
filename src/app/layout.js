'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    if (pathname.includes('404') || pathname === '/404') {
      setIs404(true);
    } else {
      setIs404(false);
    }
  }, [pathname]);

  return (
    <div>
      <header>
        <h1>Dashboard Layout</h1>
        <nav>
          <ul>
            <li>
              <Link
                href="/dashboard/profile"
                className={pathname.startsWith('/dashboard/profile') ? 'active' : ''}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className={pathname === '/dashboard/settings' ? 'active' : ''}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={pathname === '/dashboard' ? 'active' : ''}
              >
                Dashboard Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {is404 ? (
        <div>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
        </div>
      ) : (
        <main>
          {children}
        </main>
      )}
    </div>
  );
};

export default Layout;
