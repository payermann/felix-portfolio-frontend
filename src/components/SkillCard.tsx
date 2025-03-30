interface SkillCardProps {
  name: string;
  progress: number;
}

export default function SkillCard({ name, progress }: SkillCardProps) {
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-primary h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
