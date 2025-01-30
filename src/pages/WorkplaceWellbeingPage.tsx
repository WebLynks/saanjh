import saanpSidhi from "../assets/images/SaanpSidhi.png";
import saanjhLogo from "../assets/images/saanjh_logo.png";
import bluebgwithcircles from "../assets/images/bluebgwithcircles.png";

function WorkplaceWellbeingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-sapphire px-[10dvw] py-20 font-semibold text-white md:py-24 lg:py-28">
        <div className="">
          <div className="text-xl md:text-2xl lg:text-3xl">Welcome To</div>
          <div className="flex flex-wrap justify-between gap-2 text-5xl md:text-6xl lg:text-7xl">
            <div className="flex justify-start">Workplace</div>{" "}
            <div className="flex grow justify-end">Wellbeing</div>
          </div>
          <div className="flex justify-end text-xl md:text-2xl lg:text-3xl">
            Workshop
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-sky-200 px-[10dvw] pb-8 pt-16">
        <div className="mb-8 w-full break-words text-center text-lg md:w-9/12 lg:w-8/12 xl:w-7/12">
          Companies that take steps in the right direction to address workplace
          well-being are found to have:
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-sky-200 pb-16">
        <div className="flex w-full items-center justify-between gap-4 bg-sapphire pb-1 pe-4 ps-1 pt-1 font-semibold">
          <div className="">
            <div className="flex size-20 items-center justify-center bg-white text-2xl text-sapphire">
              1.
            </div>
          </div>
          <div className="grow text-center text-white md:text-lg">
            17% more likelihood of high performance
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-4 bg-sapphire pb-1 pe-4 ps-1 pt-1 font-semibold">
          <div className="">
            <div className="flex size-20 items-center justify-center bg-white text-2xl text-sapphire">
              2.
            </div>
          </div>
          <div className="grow text-center text-white md:text-lg">
            29% increase in high collaborative behaviours
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-4 bg-sapphire pb-1 pe-4 ps-1 pt-1 font-semibold">
          <div className="">
            <div className="flex size-20 items-center justify-center bg-white text-2xl text-sapphire">
              3.
            </div>
          </div>
          <div className="grow text-center text-white md:text-lg">
            20% increase in better decision making by employees
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 font-semibold">
        <div className="text-2xl md:text-3xl">Our Process</div>
        <div className="md:text-lg">Your Path To Harmony</div>
        <img
          className="h-auto w-full object-contain"
          src={saanpSidhi}
          alt="Process Image"
        />
      </div>
      <div className="flex flex-col flex-wrap items-center justify-evenly gap-6 bg-sapphire p-4 font-semibold text-white md:flex-row">
        <div className="flex items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Grow Stronger</div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Find Inner Peace</div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Mindful Healing</div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Renew Mind</div>
        </div>
      </div>
      <div className="space-y-4 px-[5dvw] py-16 text-center">
        <div className="text-2xl font-semibold">Why Workplace Wellbeing?</div>
        <div className="pb-4 text-sm font-semibold text-sapphire">
          Workplace wellbeing goes beyond just basic stress-management.
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="mx-[5dvw] py-8 sm:mx-0 sm:px-[5dvw]">
            With how much time is spent at work by individuals, it is important
            that organizations develop tools and strategies for workplace
            wellbeing.
          </div>
          <div className="mx-[5dvw] border-t-4 border-dashed border-sapphire py-8 sm:mx-0 sm:border-s-4 sm:border-t-0 sm:px-[5dvw]">
            Workplace wellbeing has to focus on employees as individuals and
            prioritize their overall wellbeing through empathetic, sensitive,
            and inclusive tools
          </div>
        </div>
      </div>
      <div className="flex h-24 flex-wrap items-center justify-center p-4">
        <img
          src={saanjhLogo}
          alt="Saanjh Logo"
          className="h-full w-auto object-contain"
        />
        <div className="text-3xl font-semibold">At Saanjh</div>
      </div>
      <div className="relative h-96 w-full bg-sapphire">
        <img
          src={bluebgwithcircles}
          alt="Blue Background"
          className="size-full object-fill"
        />
        <div className="absolute left-1/2 top-1/2 flex w-3/5 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center text-sm font-semibold text-white sm:text-base">
          <div>
            At Saanjh, we are focused on creating Workplace Wellbeing solutions
            that are aligned with the needs and concerns of your organization.
            We listen to the needs and concerns of your employees to able to
            curate workshops and provide actionable plans that provide the right
            tools to navigate these concerns and create a supportive and
            productive workplace
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkplaceWellbeingPage;
