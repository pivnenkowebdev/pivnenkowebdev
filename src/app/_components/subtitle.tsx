export default function Subtitle({ children }: { children: React.ReactNode }) {
    return(
        <div className="flex items-start gap-1 mb-4.5">
            <span className="text-2xl text-red-100 font-semibold">*</span>
            <h2 className="text-base font-semibold">
                { children }
            </h2>
        </div>
    )
}
