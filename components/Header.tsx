"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";
import { motion } from "framer-motion";

interface HeaderProps {
  session?: Session | null;
}

const Header: React.FC<HeaderProps> = ({ session }) => {
  const pathname = usePathname();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioElementRef.current) {
        try {
          await audioElementRef.current.play();
          setIsAudioPlaying(true);
          setIsIndicatorActive(true);
        } catch (error) {
          document.addEventListener("click", enableAudio);
        }
      }
    };

    const enableAudio = () => {
      if (audioElementRef.current) {
        audioElementRef.current
          .play()
          .then(() => {
            setIsAudioPlaying(true);
            setIsIndicatorActive(true);
          })
          .catch(() => {});
      }
      document.removeEventListener("click", enableAudio);
    };

    playAudio();
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  const toggleAudioIndicator = () => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.pause();
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      } else {
        audioElementRef.current.play().then(() => {
          setIsAudioPlaying(true);
          setIsIndicatorActive(true);
        });
      }
    }
  };

  return (
    <header className="my-10 flex flex-col items-center">
      <div className="w-full flex justify-between items-center px-10">
        <ul className="flex flex-row items-center gap-8">
          {["library", "contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/${item}`}
                className={cn(
                  "text-base cursor-pointer capitalize transition-colors duration-300 hover:text-light-300",
                  pathname === `/${item}` ? "text-light-200" : "text-light-100",
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-col items-center">
          <Link href="/">
            <Image src="/icons/lo.png" alt="logo" width={50} height={50} />
          </Link>
          <button
            onClick={toggleAudioIndicator}
            className="mt-2 flex space-x-1"
          >
            <audio
              ref={audioElementRef}
              className="hidden"
              src="/sounds/m3%20(1).mp3"
              loop
            />
            {["#FF9933", "#FFFFFF", "#138808", "#000080"].map(
              (color, index) => (
                <div
                  key={index}
                  className={`w-1 h-5 mx-0.5 rounded transition-transform duration-300 ${
                    isIndicatorActive
                      ? "animate-pulse scale-y-125"
                      : "scale-y-100"
                  }`}
                  style={{
                    backgroundColor: color,
                    animationDelay: `${index * 0.1}s`,
                  }}
                />
              ),
            )}
          </button>
        </div>

        <ul className="flex flex-row items-center gap-8">
          {["quiz", "pdf"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/${item}`}
                className={cn(
                  "text-base cursor-pointer capitalize transition-colors duration-300 hover:text-light-300",
                  pathname === `/${item}` ? "text-light-200" : "text-light-100",
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.li>
          ))}
          <li>
            <Link href="/my-profile">
              <Avatar>
                <AvatarFallback className="bg-amber-200">
                  {getInitials(session?.user?.name ?? "IN")}
                </AvatarFallback>
              </Avatar>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
