interface PostsHeaderProps {
  title: string;
  description?: string;
}

export const PostsHeader = ({ title, description }: PostsHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold text-center">{title}</h1>
      <span className="text-center text-gray-500">{description}</span>
    </div>
  );
};
