import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <>
      <div className="px-[5dvw] py-20">
        <div className="text-4xl font-semibold">Meet Our Team</div>
        <div className="flex flex-col gap-16 px-4 py-10">
          <TeamCard
            name="Ruchi Bhutada"
            pronoun="She/Her"
            imageName=""
            position="Co-Founder"
            description="Counselling Psychologist, Narrative Practitioner, Mental Health Advocate"
          />
          <TeamCard
            name="Abhramika Choudhuri"
            pronoun="She/They"
            imageName=""
            position="Co-Founder"
            description="Organizational Psychologist, MBA, Mental Health Advocate"
          />
        </div>
      </div>
    </>
  );
}

export default Team;
