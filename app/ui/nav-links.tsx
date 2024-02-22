"use client";

import {
  UserGroupIcon,
  HomeIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import { DirectionsCar } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Stores", href: "/dashboard/stores", icon: BuildingStorefrontIcon },
  { name: "Clients", href: "/dashboard/clients", icon: UserGroupIcon },
  { name: "Cars", href: "/dashboard/cars", icon: DirectionsCar },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray p-3 text-sm font-medium text-white hover:bg-white hover:text-black transition duration-200 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-blue-600 text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
