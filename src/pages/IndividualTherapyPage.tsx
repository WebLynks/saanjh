import individualTherapyHeader from "../assets/images/individual_therapy_header.png";

function IndividualTherapyPage() {
  return (
    <div className="px-[5dvw] py-16">
      <div
        style={{ backgroundImage: `url(${individualTherapyHeader})` }}
        className="bg-contain bg-right bg-no-repeat px-[5dvw]"
      >
        <div className="flex w-1/2 flex-col items-start justify-center gap-8">
          <div className="text-3xl font-semibold text-gray-800">On Therapy</div>
          <div>
            The aim of therapy is to create a supportive space where you can
            navigate life’s challenges and be authentically yourself
          </div>
          <div>
            <div>
              <span className="mr-4 inline-block h-3 w-3 rounded-full bg-sunset"></span>
              <span>Self-exploration</span>
            </div>
            <div>
              <span className="mr-4 inline-block h-3 w-3 rounded-full bg-sunset"></span>
              <span>Identifying patterns</span>
            </div>
            <div>
              <span className="mr-4 inline-block h-3 w-3 rounded-full bg-sunset"></span>
              <span>Learning coping strategies</span>
            </div>
            <div>
              <span className="mr-4 inline-block h-3 w-3 rounded-full bg-sunset"></span>
              <span>Navigating through life’s challenges</span>
            </div>
            <div>
              <span className="mr-4 inline-block h-3 w-3 rounded-full bg-sunset"></span>
              <span>Finding a non-judgmental and supportive space</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualTherapyPage;
