import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <>
      <div className="px-[5dvw] py-20">
        <div className="text-4xl font-semibold">Our Services</div>
        <div className="grid grid-cols-3 gap-8 py-10">
          <ServiceCard
            name="Corporate Workshops"
            imgName="corporate-transparent.png"
            bgColor="sapphire"
          />
          <ServiceCard
            name="Group Sessions"
            imgName="group-sessions-transparent.png"
            bgColor="mango"
          />
          <ServiceCard
            name="Individual Therapy"
            imgName="therapy-transparent.png"
            bgColor="iris"
          />
        </div>
      </div>
    </>
  );
}

export default Services;
