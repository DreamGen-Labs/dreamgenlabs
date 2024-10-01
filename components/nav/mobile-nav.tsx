"use client";

import { nav_list } from "@/constants";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileNav: React.FC<Props> = ({ open, setOpen }) => {
  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 h-full w-2/3 py-16 bg-white shadow-lg z-50"
        initial={{ x: "-25%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-25%", opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          opacity: { duration: 0.3 },
        }}
      >
        <ul className="flex flex-col items-start gap-6 px-14">
          {nav_list.map((item) => (
            <Link href={item.href} onClick={() => setOpen(false)} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
          <Link href="/contact">
          <li className="p-3 bg-custom-gradient text-white rounded-lg">
            Contact Us
          </li>
        </Link>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
