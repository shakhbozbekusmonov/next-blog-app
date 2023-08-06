import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default TheHeader;
