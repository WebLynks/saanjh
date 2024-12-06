import imgSrc from "../assets/images/corporate-transparent.png";

function Story() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 bg-gray-300 px-[5dvw] py-20">
        <div className="col-span-5 md:col-span-3">
          <div className="space-y-8">
            <div className="text-4xl font-semibold text-gray-800">
              Story of Saanjh
            </div>
            <div className="text-2xl text-gray-800">
              Evening or dusk. The time when the sun starts to set and the sky
              is filled with a myriad of colours
            </div>
            <p className="text-base text-gray-800">
              Saanjh is a mental health service provider, born from the desire
              to make mental health care intersectional and accessible. We chose
              the name Saanjh because of the visual nature of the word, and the
              beautiful and poetic connotations around sunsets. For us it
              denotes a soft but beautiful and powerful environment. It also
              signifies that endings can be beautiful, and the perfect place to
              create new beginnings.
            </p>
            <p className="text-base text-gray-800">
              Saanjh was created with the intention to build a space that
              promotes mental health advocacy, and recognises that our mental
              health journeys are collective. We want to highlight and address
              topics within the mental health space that often fall through the
              cracks.
            </p>
          </div>
        </div>
        <div className="col-span-5 flex items-center justify-center md:col-span-2">
          <img
            src={imgSrc}
            alt="Story"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default Story;
