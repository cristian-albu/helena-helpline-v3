import React from "react";

function getColSize(cols: number) {
    // `grid-cols-${cols} was the first solution but Tailwind does not work great with that...`
    let colSize: string;
    switch (true) {
        case cols === 2:
            colSize = "grid-cols-2";
            break;
        case cols === 3:
            colSize = "grid-cols-3";
            break;
        case cols === 4:
            colSize = "grid-cols-4";
            break;
        case cols > 10:
            colSize = "grid-cols-10";
            break;
        default:
            colSize = "grid-cols-1";
    }

    return colSize;
}

export default function Grid({ cols, children }: { cols: 1 | 2 | 3 | 4; children: React.ReactNode }) {
    return <div className={`w-full grid gap-5 justify-items-start items-center ${getColSize(cols)}`}>{children}</div>;
}
