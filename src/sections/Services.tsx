import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <>
      <div className="px-[5dvw] py-20">
        <div className="text-4xl font-semibold">Our Services</div>
        <div className="grid grid-cols-3 gap-8 py-10">
          <ServiceCard
            name="Corporate Workshops"
            imgName="corporate_transparent"
            bgColor="sapphire"
          />
          <ServiceCard
            name="Group Sessions"
            imgName="group_sessions_transparent"
            bgColor="mango"
          />
          <ServiceCard
            name="Individual Therapy"
            imgName="therapy_transparent"
            bgColor="iris"
          />
        </div>
      </div>
    </>
  );
}

export default Services;
