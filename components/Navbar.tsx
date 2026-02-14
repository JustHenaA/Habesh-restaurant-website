"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations & Hours" },
  { href: "/reservations", label: "Reservations" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-nav">
        <Link className="brand" href="/">
          Habesh Table
        </Link>
        <nav aria-label="Primary">
          <div className="nav-links" role="list">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
