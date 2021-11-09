import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div className="font-sans mx-auto max-w-5xl">
            <div className="mx-4 mt-4 flex justify-between items-center rounded-xl bg-white py-4 px-4">
                <div className="text-gray-700 font-semibold text-l">
                    <Link href='/' className="cursor-pointer">
                            <a>Nav</a>
                    </Link>
                </div>
                <nav>
                    <ul className="text-sm text-gray-600 font-semibold hidden md:flex">
                        <li>
                            <Link href='/'><a className="px-2 hover:text-green-600">Home</a></Link>
                        </li>
                        <li>
                            <Link href='/about'><a className="px-2 hover:text-green-600">About</a></Link>
                        </li>
                        <li>
                            <Link href='/contact'><a className="px-2 hover:text-green-600">Contact</a></Link>
                        </li>
                        <li>
                            <Link href='/contact'><a className="ml-2 px-2 py-1 rounded-xl border-4 border-green-600 hover:bg-green-600 hover:text-white">Register</a></Link>
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden items-end">
                    <Link href='/' className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;