"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { div } from "motion/react-client";

export const Sidebar = () => {
    const [isMobile, setisMobile] = useState(false);
    const [expanded, setexpanded] = useState(false);
    const barRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setisMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //For mobile
    const handleClick = () => {
        if (isMobile) {
            setexpanded((prev) => !prev);
        }
    };

    // For mobile
    useEffect(() => {
        const handleClickOutsideMobile = (e: MouseEvent) => {
            if (
                isMobile &&
                expanded &&
                barRef.current &&
                !barRef.current.contains(e.target as Node)
            ) {
                setexpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideMobile);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMobile);
        };
    }, [isMobile, expanded]);

    return (
        <div className="relative">
            {!isMobile ? (
                <motion.div
                    onMouseEnter={() => { if (!isMobile) setexpanded(true); }}
                    onMouseLeave={() => { if (!isMobile) setexpanded(false); }}
                    whileHover={{ width: 120 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition
                                flex items-center justify-center"
                >
                    {!expanded && (
                        <FaBars className="w-5" />
                    )}
                </motion.div>
            ) : (

                <motion.div
                    ref={barRef}
                    onClick={handleClick}
                    animate={expanded ? { height: 120 } : { width: 40 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-4 right-1
                                p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition
                                flex items-center justify-center"
                >
                    {!expanded && (
                        <FaBars className="w-5" />
                    )}
                </motion.div>
            )}
        </div>


    );
};
