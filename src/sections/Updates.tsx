import UpdateCard from "../components/UpdateCard";

function Updates() {
  return (
    <>
      <div className="px-[5dvw] py-20">
        <div className="text-4xl font-semibold">The Latest From Saanjh</div>
        <div className="grid grid-cols-3 gap-8 py-10">
          <UpdateCard
            date="8th March, 2024"
            bgColor="mango"
            content="Anger Management and self
love treatment"
          />
          <UpdateCard
            date="8th March, 2024"
            bgColor="sapphire"
            content="How pets help us in good
mental health"
          />
          <UpdateCard
            date="8th March, 2024"
            bgColor="iris"
            content="Overcoming trauma and
helplessness"
          />
        </div>
      </div>
    </>
  );
}

export default Updates;
