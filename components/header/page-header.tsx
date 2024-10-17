import React from "react"

interface Props {
    title: string;
    description: string;
}

export const PageHeader: React.FC<Props> = ({
    title,
    description
}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="main-text font-bold border p-2 rounded-md min-w-28 text-center">{title}</h1>
            <p className="text-slate-500">{description}</p>
        </div>
    )
}