import useImage from "../hooks/useImage";

type TeamCardProps = {
  name?: string;
  pronoun?: string;
  position?: string;
  description?: string;
  imageName?: string;
};

function TeamCard({
  name,
  pronoun,
  position,
  description,
  imageName = "",
}: TeamCardProps) {
  const { loading, image, error } = useImage(imageName);

  return (
    <>
      <div className="flex items-center justify-normal gap-12">
        <div className="h-28 w-28 rounded-xl bg-gray-400">
          {loading ? (
            `loading...`
          ) : error ? null : (
            <img className="h-full w-auto" src={image} alt={name} />
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
    </>
  );
}

export default TeamCard;
