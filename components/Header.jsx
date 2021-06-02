import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
        </Link>
      </div>
      <div className={styles.nav_menu}>
        <Link href="/createStudent">
          <a>Add</a>
        </Link>
        <Link href="/project">
          <a>Projects</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
