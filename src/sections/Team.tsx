import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <div data-aos="slide-up" className="px-[10dvw] py-16">
      <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
        Meet Our Team
      </div>
      <div className="flex flex-col gap-16 px-4 pt-10">
        <TeamCard
          name="Ruchi Bhutada"
          pronoun="She/Her"
          imageName="ruchi"
          position="Co-Founder"
          description="Counselling Psychologist, Narrative Practitioner, Mental Health Advocate"
          bgColor="sapphire"
        />
        <TeamCard
          name="Abhramika Choudhuri"
          pronoun="She/They"
          imageName="abhramika"
          position="Co-Founder"
          description="Organizational Psychologist, MBA, Mental Health Advocate"
          bgColor="mango"
        />
      </div>
    </div>
  );
}

export default Team;
