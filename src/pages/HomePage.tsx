import { useLocation } from "wouter";
import MuseumHero from "@/components/MuseumHero";
import RoomCard from "@/components/RoomCard";
import tutMask from "@assets/generated_images/Tutankhamun_golden_mask_17b9acdf.png";
import artifacts from "@assets/generated_images/Egyptian_artifacts_collection_8474756c.png";
import nileRiver from "@assets/generated_images/Nile_River_aerial_view_4c589085.png";
import sphinx from "@assets/generated_images/Great_Sphinx_close-up_98a6a252.png";
import hieroglyphs from "@assets/generated_images/Hieroglyphics_alphabet_chart_77f508db.png";
import cleopatra from "@assets/generated_images/Queen_Cleopatra_portrait_a6e1e677.png";

const rooms = [
  {
    number: 1,
    title: "Mummies & the Afterlife",
    description: "Discover ancient Egyptian beliefs about death and the fascinating mummification process",
    image: tutMask,
    path: "/room/mummies",
    gradient: "from-amber-900/70 to-black/80"
  },
  {
    number: 2,
    title: "Egyptian Artifacts",
    description: "Explore the objects that reveal daily life and religious practices in ancient Egypt",
    image: artifacts,
    path: "/room/artifacts",
    gradient: "from-yellow-800/60 to-black/80"
  },
  {
    number: 3,
    title: "The River Nile",
    description: "Understand why the Nile was called 'The Lifeline of Egypt'",
    image: nileRiver,
    path: "/room/nile",
    gradient: "from-blue-900/70 to-black/80"
  },
  {
    number: 4,
    title: "Architecture",
    description: "Marvel at the pyramids, temples, and monuments that showcase Egyptian engineering",
    image: sphinx,
    path: "/room/architecture",
    gradient: "from-stone-800/70 to-black/80"
  },
  {
    number: 5,
    title: "Writing & Education",
    description: "Learn about hieroglyphics, papyrus, and the role of scribes in ancient Egypt",
    image: hieroglyphs,
    path: "/room/writing",
    gradient: "from-amber-700/70 to-black/80"
  },
  {
    number: 6,
    title: "Pharaohs & Gods",
    description: "Meet the powerful rulers and deities that shaped Egyptian civilization",
    image: cleopatra,
    path: "/room/pharaohs",
    gradient: "from-purple-900/70 to-black/80"
  }
];

export default function HomePage() {
  const [, setLocation] = useLocation();

  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <MuseumHero onEnterMuseum={scrollToRooms} />
      
      <div id="rooms" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Six Themed Rooms
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Journey through different aspects of Ancient Egyptian civilization. Each room features exhibits, 
            interactive activities, and fascinating insights into this remarkable culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard
              key={room.number}
              roomNumber={room.number}
              title={room.title}
              description={room.description}
              imageSrc={room.image}
              backgroundColor={room.gradient}
              onEnterRoom={() => setLocation(room.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
