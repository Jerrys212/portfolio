export function HighlightCard({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-periwinkle/60 px-5 py-4">
      <span className="text-sm font-bold text-twilight-indigo">{number}</span>
      <p className="text-sm leading-relaxed text-jet-black">{text}</p>
    </div>
  );
}
