import Link from "next/link";
import React from "react";

const btnStyle = `bg-black color-white`;
export default function Button({
    link,
    role,
    ariaLabel,
    onClicky,
    children,
}: {
    link?: string;
    role?: string;
    ariaLabel?: string;
    onClicky?: () => void;
    children: React.ReactNode;
}) {
    if (link) {
        return (
            <Link href={link} className="btnStyle" role={role} aria-label={ariaLabel} onClick={onClicky}>
                {children}
            </Link>
        );
    } else {
        return (
            <button className="btnStyle" role={role} aria-label={ariaLabel} onClick={onClicky}>
                {children}
            </button>
        );
    }
}
