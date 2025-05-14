import Link from "next/link";
import { IconType } from "react-icons";

interface QuickAccessCardProps {
  title: string;
  link: string;
  description: string;
  icon: IconType;
}

export default function QuickAccessCard({
  title,
  link,
  description,
  icon: Icon,
}: QuickAccessCardProps) {
  return (
    <Link
      href={link}
      className="card hover:bg-lightGray transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <Icon className="text-3xl text-primary" />
        <div>
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">{description}</p>
        </div>
      </div>
    </Link>
  );
}
