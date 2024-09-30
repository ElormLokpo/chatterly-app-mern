
export const ProfileImage = ({content}:{content:string}) => {
    let backgournds = ["bg-cyan-500", "bg-emerald-500", "bg-teal-500", "bg-stone-500", "bg-orange-500", "bg-amber-500", "bg-indigo-500", "bg-rose-500"]

    let rnd = Math.ceil(0 + Math.random() * backgournds.length - 1);
    let background_color = backgournds[rnd];

    return (
        <div className={`h-[3rem] ${background_color} w-[3rem] border border-stone-500 text-stone-100 flex font-semibold items-center justify-center p-3 rounded-full`}>
            {content}
        </div>
    )
}