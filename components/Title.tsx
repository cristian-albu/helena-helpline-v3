import React from "react";

const globalHeadingStyle = "w-full mb-3";

export default function Title({
    children,
    h,
    altStyle,
}: {
    children: React.ReactNode;
    h?: "h1" | "h2" | "h3";
    altStyle?: string;
}) {
    const heading = () => {
        switch (h) {
            case "h1":
                return <h1 className={`${altStyle ?? `text-4xl`} ${globalHeadingStyle}`}>{children}</h1>;
            case "h2":
                return <h2 className={`${altStyle ?? `text-3xl`} ${globalHeadingStyle}`}>{children}</h2>;
            case "h3":
                return <h3 className={`${altStyle ?? `text-2xl`} ${globalHeadingStyle}`}>{children}</h3>;
            default:
                return <p className={`${altStyle ?? `text-xl`} ${globalHeadingStyle}`}>{children}</p>;
        }
    };

    return <header className="w-full">{heading()}</header>;
}
