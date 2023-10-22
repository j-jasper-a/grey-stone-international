"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  onClick?: () => void;
};

const Logo = ({ className, onClick }: Props) => {
  return (
    <motion.div layout className={`${className}`}>
      <Link href={"/"} className="w-fit" onClick={onClick}>
        <Image
          src={"/assets/images/company-logo.png"}
          alt="Logo"
          width={256}
          height={256}
        />
      </Link>
    </motion.div>
  );
};

export default Logo;
