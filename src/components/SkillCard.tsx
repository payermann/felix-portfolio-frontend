interface SkillCardProps {
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="group card bg-base-100 border-base-100 border-1 shadow-md p-4 hover:cursor-default hover:shadow-primary hover:border-primary">
      <h2 className="text-xl font-bold transition-transform duration-100 group-hover:scale-110">
        {name}
      </h2>
    </div>
  );
}
