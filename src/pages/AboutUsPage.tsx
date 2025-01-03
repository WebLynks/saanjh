import ruchiImage from "../assets/images/ruchi.png";
import abhramikaImage from "../assets/images/abhramika.png";
import FounderCard, { Founder } from "../components/FounderCard";
import orangebgwithcircles from "../assets/images/orangebgwithcircles.png";

const founders: Founder[] = [
  {
    name: "Ruchi Bhutada",
    imageName: "ruchi",
    detail:
      "Your mental health sidekick – because even superheroes need a break!",
    bgColor: "mango",
  },
  {
    name: "Abhramika Choudhuri",
    imageName: "abhramika",
    detail:
      "Your mental health sidekick – because even superheroes need a break!",
    bgColor: "sapphire",
  },
  {
    name: "Harshdeep Singh",
    imageName: "harshdeep",
    detail:
      "Your mental health sidekick – because even superheroes need a break!",
    bgColor: "iris",
  },
];

function AboutUsPage() {
  return (
    <div>
      <div className="flex items-center justify-center px-[10dvw] py-16">
        <div className="prose flex flex-col items-center justify-center">
          <h1 className="text-sunset">About Us</h1>
          <p className="text-center">
            We at Saanjh aim to create a safe space and community through open
            conversations about everything mental health and well-being. We wish
            to achieve this by working with both individuals and groups.
          </p>
        </div>
      </div>

      <div className="bg-sunset text-white">
        <div className="px-[10dvw] py-12">
          <div className="flex flex-col gap-8 md:flex-row md:gap-0">
            <div className="w-12/12 flex grow justify-start md:w-4/12 md:grow-0">
              <div className="flex flex-col items-start justify-center text-5xl font-semibold">
                <div>Our</div> <div>Founders</div>
              </div>
            </div>
            <div className="w-12/12 flex md:w-8/12">
              <div className="flex w-2/12 flex-col items-center md:w-2/12">
                <div>Ruchi</div>
                <div>Bhutada</div>
              </div>
              <div className="-mb-12 flex w-4/12 grow md:w-4/12">
                <img className="object-fill" src={ruchiImage} alt="Ruchi" />
              </div>
              <div className="-mb-12 -ms-7 flex w-4/12 grow md:w-4/12">
                <img src={abhramikaImage} alt="Abhramika" />
              </div>
              <div className="flex w-2/12 flex-col items-center md:w-2/12">
                <div>Abhramika</div>
                <div>Choudhuri</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10dvw] py-16 sm:max-md:px-[15dvw]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-16">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>

      <div className="bg-pink-100 px-[10dvw] py-16 text-sunset">
        <div className="flex flex-col gap-16 md:flex-row md:gap-32">
          <div className="flex flex-col justify-center text-6xl font-semibold">
            <div>Our</div>
            <div>Mission</div>
          </div>
          <div className="font-semibold">
            At Saanjh, we understand that mental health goes beyond just the
            individual. We aim to inform our services by the larger context of
            an individual, the intersections of their identity, and provide
            access to a space where people can be authentically themselves.
            Creating community is central to our work as we believe community
            support to be indispensable to mental health care. We also believe
            in the power of stories; every individual has a story to share that
            would enrich the world. We aim to provide a platform for people to
            share their stories to be witnessed and for others to find
            resonance.
          </div>
        </div>
      </div>

      <div className="relative flex text-xs text-white sm:text-lg sm:font-semibold md:text-xl lg:text-2xl">
        <div className="flex h-96 w-1/4 items-start justify-center text-clip bg-mango px-2 py-16">
          Inclusivity
        </div>
        <div className="flex h-96 w-1/4 items-start justify-center bg-sunset px-2 py-16">
          Community
        </div>
        <div className="flex h-96 w-1/4 items-start justify-center text-clip bg-iris px-2 py-16">
          Intersectional
        </div>
        <div className="flex h-96 w-1/4 items-start justify-center bg-sapphire px-2 py-16">
          Compassion
        </div>
        <div className="absolute bottom-0 z-20 w-full text-9xl font-medium -tracking-[.75rem] opacity-50 sm:text-[8.5rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] 2xl:text-[17rem]">
          Our Values
        </div>
      </div>

      <div className="relative h-96 w-full bg-sunset">
        <img
          src={orangebgwithcircles}
          alt="Orange Background"
          className="size-full object-fill"
        />
        <div className="absolute left-1/2 top-1/2 flex w-4/5 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center text-sm font-semibold text-white sm:text-base">
          <div>
            At the core of this initiative is the belief that mental health is
            not just about coping with mental illnesses but also about
            maintaining mental wellbeing. We believe that mental health is
            collective and should be approached wholistically.
          </div>
          <div>
            Mental health is not just personal but also a political space, and
            therefore inclusion of human diversity and understanding the
            intersections of their identity is important to providing care.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
