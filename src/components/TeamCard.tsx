import useImage from "../hooks/useImage";

type TeamCardProps = {
  name?: string;
  pronoun?: string;
  position?: string;
  description?: string;
  imageName?: string;
  bgColor?: string;
};

function TeamCard({
  name,
  pronoun,
  position,
  description,
  imageName = "",
  bgColor,
}: TeamCardProps) {
  const { loading, image, error } = useImage(imageName);

  return (
    <div className="flex flex-col items-start justify-normal gap-12 sm:flex-row sm:items-center">
      <div
        className={`size-32 rounded-xl bg-${bgColor} flex shrink-0 items-end justify-center`}
      >
        {loading ? (
          `loading...`
        ) : error ? null : (
          <img className="aspect-square size-[90%]" src={image} alt={name} />
        )}
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        <div className="font-semibold text-orange-600">
          <div>{`${name} (${pronoun})`}</div>
          <div className="text-xs">{position}</div>
        </div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}

export default TeamCard;