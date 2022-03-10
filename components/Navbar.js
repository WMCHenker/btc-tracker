import Link from "next/link";

export default function Navbar(boolean) {
    return(
        <nav className="header drop-shadow-xl h-[85px]">
            <h1 className="font-bold text-3xl my-auto pl-2 uppercase">Bitcoin Tracker</h1>

            <ul className="font-medium text-[22px] list-none flex flex-row space-x-14 my-auto mr-7">
                <Link href='/'>Home</Link>
                <Link href='/contributing'>Contributing</Link>
                <Link href='/bitcoin'>Bitcoin Graph</Link>
            </ul>
        </nav>
    );
}