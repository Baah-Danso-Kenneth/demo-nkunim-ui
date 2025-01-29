"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";

import LiIcon from "./LiIcon";
import { FaArrowDown, FaRepeat } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

type Props = {
  items: {
    time: string;
    stats: boolean;
    from: string;
    to: string;
    address: string;
    deliveryType: string;
    amount: string;
    work: string;
    href: string;
  };
};

function HistoryDetails({ items }: Props) {
  // ref is typed as HTMLAnchorElement (with null as a valid type)
  const ref = useRef<HTMLAnchorElement | null>(null);

  return (
    <Link
      ref={ref}
      href={items.href}
      className="font-dmMono text-zinc-800 my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div>
          {items.deliveryType === "send" && (
            <div className="flex gap-2 items-center">
              <div className="bg-green-200 p-2 border rounded-md">
                <FaArrowUp />
              </div>
              <h1>Sent</h1>
            </div>
          )}
          {items.deliveryType === "receive" && (
            <div className="flex gap-2 items-center">
              <div className="bg-blue-200 p-3 border rounded-md">
                <FaArrowDown />
              </div>
              <h1>Received</h1>
            </div>
          )}
          {items.deliveryType === "convert" && (
            <div className="flex gap-2 items-center">
              <div className="bg-violet-200 p-3 border rounded-md">
                <FaRepeat className="text-blue-500 font-bold" />
              </div>
              <h1>Conversion</h1>
            </div>
          )}
        </div>
        <span>{items.time}</span>
        <h3 className="font-bowlby">{items.amount} USDT</h3>
        <div>
          <p>
            From: {items.from} To: {items.to}
          </p>
        </div>
        <div>
          <h2 className="underline">Description</h2>
          <p>{items.work}</p>
        </div>

        {items.stats ? (
          <p className="capitalize text-green-500">Success</p>
        ) : (
          <p className="capitalize text-red-500">Failed</p>
        )}
      </motion.div>
    </Link>
  );
}

export default HistoryDetails;
