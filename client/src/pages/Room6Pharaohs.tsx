import { useLocation } from "wouter";
import RoomLayout from "@/components/RoomLayout";
import ExhibitCard from "@/components/ExhibitCard";
import ActivitySection from "@/components/ActivitySection";
import PharaohQuiz from "@/components/PharaohQuiz";
import cleopatra from "@assets/generated_images/Queen_Cleopatra_portrait_a6e1e677.png";
import ra from "@assets/generated_images/God_Ra_deity_illustration_e6d9bf17.png";
import anubis from "@assets/generated_images/God_Anubis_deity_illustration_7eb79819.png";

export default function Room6Pharaohs() {
  const [, setLocation] = useLocation();

  return (
    <RoomLayout
      roomNumber={6}
      title="Pharaohs & Gods"
      backgroundImage={cleopatra}
      backgroundGradient="from-purple-900/80 via-purple-800/70 to-background"
      onBack={() => setLocation("/")}
      onHome={() => setLocation("/")}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pharaohs were the divine rulers of ancient Egypt, believed to be living gods on Earth. They governed with absolute 
            power while the Egyptian pantheon of gods controlled nature, the afterlife, and human destiny.
          </p>
        </div>

        {/* Exhibits */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Rulers & Deities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExhibitCard
              title="Queen Cleopatra VII"
              imageSrc={cleopatra}
              shortDescription="The last active pharaoh of Egypt, known for her intelligence, political skill, and relationships with Julius Caesar and Mark Antony."
              fullDescription="Cleopatra ruled from 51-30 BC. She spoke multiple languages, was highly educated, and fought to keep Egypt independent from Rome. Her death marked the end of ancient Egypt's pharaonic era."
              imageAlt="Portrait of Cleopatra"
            />
            <ExhibitCard
              title="Ra - The Sun God"
              imageSrc={ra}
              shortDescription="The most powerful deity in Egyptian mythology, Ra sailed across the sky each day bringing light and life."
              fullDescription="Ra was depicted with a falcon head and sun disk. Egyptians believed he created all life and that pharaohs were his descendants. Each night he battled the serpent Apophis in the underworld."
              imageAlt="God Ra"
            />
            <ExhibitCard
              title="Anubis - God of the Dead"
              imageSrc={anubis}
              shortDescription="The jackal-headed god who guided souls to the afterlife and oversaw the mummification process."
              fullDescription="Anubis weighed the hearts of the deceased against the feather of Ma'at (truth) to determine if they could enter the afterlife. He was the patron god of embalmers and protected tombs from grave robbers."
              imageAlt="God Anubis"
            />
          </div>
        </div>

        {/* Famous Pharaohs */}
        <div className="bg-accent/20 rounded-lg p-6 border border-accent-border">
          <h3 className="font-heading text-xl font-bold mb-4">Notable Pharaohs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-heading font-semibold text-primary">Tutankhamun (c. 1332-1323 BC)</p>
              <p className="text-sm text-muted-foreground">
                The "Boy King" who became pharaoh at age 9. His intact tomb, discovered in 1922, revealed incredible treasures and gave us insights into royal burial practices.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-heading font-semibold text-primary">Ramses II (c. 1279-1213 BC)</p>
              <p className="text-sm text-muted-foreground">
                Known as "Ramses the Great," he ruled for 66 years, built more monuments than any other pharaoh, and led successful military campaigns.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-heading font-semibold text-primary">Hatshepsut (c. 1479-1458 BC)</p>
              <p className="text-sm text-muted-foreground">
                One of few female pharaohs, she ruled successfully for over 20 years, focusing on trade and building magnificent temples.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-heading font-semibold text-primary">Khufu (c. 2589-2566 BC)</p>
              <p className="text-sm text-muted-foreground">
                Builder of the Great Pyramid of Giza, the largest of the pyramids and one of the Seven Wonders of the Ancient World.
              </p>
            </div>
          </div>
        </div>

        {/* Major Deities */}
        <div className="bg-muted/30 rounded-lg p-6 border">
          <h3 className="font-heading text-xl font-bold mb-4">The Egyptian Pantheon</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold">☀️ Ra</p>
              <p className="text-sm text-muted-foreground">Sun god and creator</p>
            </div>
            <div>
              <p className="font-semibold">👁️ Horus</p>
              <p className="text-sm text-muted-foreground">Sky god, protector of pharaohs</p>
            </div>
            <div>
              <p className="font-semibold">⚖️ Osiris</p>
              <p className="text-sm text-muted-foreground">God of the afterlife and resurrection</p>
            </div>
            <div>
              <p className="font-semibold">🌙 Isis</p>
              <p className="text-sm text-muted-foreground">Goddess of magic and healing</p>
            </div>
            <div>
              <p className="font-semibold">🐊 Sobek</p>
              <p className="text-sm text-muted-foreground">Crocodile god of the Nile</p>
            </div>
            <div>
              <p className="font-semibold">📚 Thoth</p>
              <p className="text-sm text-muted-foreground">God of wisdom and writing</p>
            </div>
          </div>
        </div>

        {/* Interactive Activity */}
        <ActivitySection
          title="Pharaoh & God Knowledge Quiz"
          description="Test your knowledge about Egyptian rulers and deities"
        >
          <PharaohQuiz />
        </ActivitySection>
      </div>
    </RoomLayout>
  );
}
