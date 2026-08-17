export const ExperienceItem = ({
    company,
    role,
    date,
    description,
    isLast,
}: {
    company: string;
    role: string;
    date: string;
    description: string;
    isLast?: boolean;
}) => {
    return (
        <div className="relative pl-8">
            <span className="absolute top-1.5 left-0 size-3 rounded-full bg-twilight-indigo" />
            {!isLast && <span aria-hidden="true" className="absolute top-5 left-[5px] h-[calc(100%+2rem)] w-px bg-periwinkle" />}
            <p className="text-xs font-semibold tracking-wide text-twilight-indigo uppercase">{date}</p>
            <h3 className="mt-1 text-lg font-bold text-jet-black">
                {role} <span className="font-medium text-jet-black/60">— {company}</span>
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-jet-black/75">{description}</p>
        </div>
    );
};
