"use client";

import { useMotionValue, useMotionTemplate, motion, MotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";

const generateRandomString = (length: number) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const CardPattern = ({ mouseX, mouseY, randomString }: { mouseX: MotionValue<number>; mouseY: MotionValue<number>; randomString: string }) => {
    let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none absolute inset-[-6px] overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-75 group-hover:opacity-100 backdrop-blur-xl transition duration-500"
                style={style}
            />
            <motion.div
                className="absolute inset-0 mix-blend-overlay"
                style={style}
            >
                <p className="absolute inset-0 text-xs break-words whitespace-pre-wrap text-white font-mono font-bold overflow-hidden p-4 transition duration-500">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
};

const CommandCard = ({
    title,
    children,
    onClose,
    onExecute,
    hideExecute,
    hideClose,
}: {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    onExecute: () => void;

    hideExecute?: boolean;

    hideClose?: boolean;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        let str = generateRandomString(3500);
        setRandomString(str);
    }, []);

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString(3500);
        setRandomString(str);
    }

    console.log("Rendering CommandCard with title:", title);

    return (
        <div
            onMouseMove={onMouseMove}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white rounded-lg shadow-2xl w-96 h-auto flex flex-col justify-between overflow-hidden p-6 group"
        >
            {/* Animated Background */}
            <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

            {/* Header */}
            <div className="relative mb-4">
                {!hideClose && (
                    <button
                        className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                )}
                <h3 className="text-xl font-bold">{title}</h3>
            </div>

            {/* Content */}
            <div className="relative mb-4">{children}</div>

            {/* Footer */}
            {!hideExecute && (
                <div className="relative mt-4 flex justify-end">
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition duration-200"
                        onClick={onExecute}
                    >
                        Execute
                    </button>
                </div>
            )}
        </div>
    )
};

export default CommandCard;