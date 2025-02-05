import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="px-[10dvw] py-16">
      <div className="font-sans-black text-4xl tracking-tighter text-gray-900 opacity-90">
        Our Services
      </div>
      <div className="grid grid-cols-3 gap-8 pt-10">
        <ServiceCard
          name="Corporate Workshops"
          imgName="corporate_transparent"
          bgColor="sapphire"
          link="/services/workplace-wellbeing"
        />
        <ServiceCard
          name="Group Sessions"
          imgName="group_sessions_transparent"
          bgColor="mango"
          link="/events"
        />
        <ServiceCard
          name="Individual Therapy"
          imgName="therapy_transparent"
          bgColor="iris"
          link="/services/individual-therapy"
        />
      </div>
    </div>
  );
}

export default Services;
