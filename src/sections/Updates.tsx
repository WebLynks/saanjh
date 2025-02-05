import UpdateCard from "../components/UpdateCard";

function Updates() {
  return (
    <>
      <div data-aos="slide-up" className="px-[10dvw] py-16">
        <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
          The Latest From Saanjh
        </div>
        <div className="grid grid-cols-3 gap-4 pt-10">
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
