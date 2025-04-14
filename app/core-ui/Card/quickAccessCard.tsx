import Link from "next/link";

interface QuickAccessCardProps {
  title: string;
  link: string;
  description: string;
  icon?: React.ReactNode;
}

export default function QuickAccessCard({
  title,
  link,
  description,
  icon,
}: QuickAccessCardProps) {
  return (
    <Link
      href={link}
      className="card hover:bg-lightGray transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">{description}</p>
        </div>
      </div>
    </Link>
  );
}
