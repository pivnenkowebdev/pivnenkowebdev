type itemsProps = {
    listOfItems: string[],
    className: string,
}

export default function InfoList({ listOfItems, className }: itemsProps) {
    return (
        <ul className={`flex flex-col gap-2 ${className}`}>
        {listOfItems.map((text: string) => (
            <li key={text} className="flex items-start gap-1">
                <div className="self-start pt-1.75 shrink-0">
                    <span className="w-3.5 h-0.5 bg-red-100 block"/>
                </div>
                <span className="text-tiny font-normal">{text}</span>
            </li>
        ))}
        </ul>
    );
}
