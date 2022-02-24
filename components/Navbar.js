import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="header">
            <h1 className="font-bold text-3xl">Name</h1>

            <ul className="font-normal list-none flex flex-row space-x-6 my-auto">
                <Link href='#'>Home</Link>
                <Link href='/contributing'>Contributing</Link>
            </ul>
        </nav>
    );
}