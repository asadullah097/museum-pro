import RoomLayout from "../RoomLayout";
import heroImage from "@assets/generated_images/Pyramids_sunset_hero_image_b9696909.png";

export default function RoomLayoutExample() {
  return (
    <RoomLayout
      roomNumber={1}
      title="Example Room"
      backgroundImage={heroImage}
      onBack={() => console.log('Back clicked')}
      onHome={() => console.log('Home clicked')}
    >
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          This is example content within the room layout. The actual room content would go here.
        </p>
      </div>
    </RoomLayout>
  );
}
