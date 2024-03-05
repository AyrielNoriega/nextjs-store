import Link from "next/link";

export const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <Link href="/">
                    <li>home</li>
                </Link>
            </ul>
        </nav>
    </header>
  );
};
