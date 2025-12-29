import avatar from "/src/assets/FFCD693D-D72C-4431-8375-267F56F49D3F.png";

function AvatarSection() {
  return (
    <>
      <div className="avat-and-bg w-90 md:w-80 lg:w-90 2xl:w-90 md:h-160 lg:h-170 xl:h-190 2xl:h-200 hidden md:block fixed bottom-0 right-0 z-0 pointer-events-none">
        <div className="avatar-backg w-60 md:w-70 lg:w-75 h-full rounded-t-[394px] bg-[#FCE2CE]"></div>
        <img
          src={avatar}
          className="w-80 md:w-80 lg:w-85 h-90 md:h-115 lg:h-120 absolute md:bottom-40 2xl:bottom-70 -left-30 md:-left-20 lg:-left-25 "
        />
      </div>
    </>
  );
}

export default AvatarSection;
