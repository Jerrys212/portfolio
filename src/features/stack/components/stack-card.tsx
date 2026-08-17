import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const StackCard = ({ title, primary, secondary }: { title: string; primary: readonly string[]; secondary: readonly string[] }) => {
    return (
        <Card className="h-full gap-3 rounded-2xl border-border p-5">
            <h3 className="text-base font-bold text-jet-black">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {primary.map((tag) => (
                    <Badge key={tag} className="h-auto rounded-full bg-twilight-indigo px-3 py-1 text-xs font-medium text-ghost-white">
                        {tag}
                    </Badge>
                ))}
            </div>
            <div className="flex flex-wrap gap-2">
                {secondary.map((tag) => (
                    <Badge key={tag} variant="secondary" className="h-auto rounded-full bg-periwinkle px-3 py-1 text-xs font-medium text-jet-black">
                        {tag}
                    </Badge>
                ))}
            </div>
        </Card>
    );
};
