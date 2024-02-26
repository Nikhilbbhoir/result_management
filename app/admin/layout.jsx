import { Inter } from "next/font/google";
import Header from "./components/AdminHeader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex h-screen">
        <div className="w-64 bg-gray-800 text-white p-4">
        <ul>
          <li>
            <Link href="/admin" className="hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/result/manage" className="hover:bg-gray-700">Manage Result </Link>
          </li>
          <li>
            <Link href="/admin/user" className="hover:bg-gray-700">Manage User </Link>
          </li>
          {/* Add more links based on your admin features */}
        </ul>
      </div>

      <div className="w-10/12">
        {children}
      </div>
      </div>
        </body>
    </html>
  );
}
