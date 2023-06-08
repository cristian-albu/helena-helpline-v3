import React from "react";

export default function Section({ children, style }: { children: React.ReactNode; style?: string }) {
    return <section className={`w-full flex flex-col p-10 justify-start items-start ${style}`}>{children}</section>;
}
