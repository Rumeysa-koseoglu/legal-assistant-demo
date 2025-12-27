import avatar from "/src/assets/FFCD693D-D72C-4431-8375-267F56F49D3F.png";

function AvatarSection() {
  return (
    <div>
      <div className="avat-and-bg fixed bottom-5 right-10">
        <img src={avatar} className="w-90 h-140 fixed bottom-20 right-40 " />
        <div className="avatar-backg w-90 h-180 rounded-t-[394px] bg-[#FCE2CE] z-0"></div>
      </div>
    </div>
  );
}

export default AvatarSection;
