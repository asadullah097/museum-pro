import RoomCard from "../RoomCard";
import mummyImage from "@assets/generated_images/Tutankhamun_golden_mask_17b9acdf.png";

export default function RoomCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <RoomCard
        roomNumber={1}
        title="Mummies & the Afterlife"
        description="Explore ancient Egyptian beliefs about death and the fascinating mummification process"
        imageSrc={mummyImage}
        onEnterRoom={() => console.log('Enter room 1')}
      />
    </div>
  );
}
