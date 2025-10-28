import { useLocation } from "wouter";
import RoomLayout from "@/components/RoomLayout";
import ExhibitCard from "@/components/ExhibitCard";
import ActivitySection from "@/components/ActivitySection";
import HieroglyphTranslator from "@/components/HieroglyphTranslator";
import hieroglyphs from "@assets/generated_images/Hieroglyphics_alphabet_chart_77f508db.png";
import rosettaStone from "@assets/generated_images/Rosetta_Stone_artifact_183b5ea1.png";
import scribe from "@assets/generated_images/Egyptian_scribe_at_work_dc171fef.png";
import papyrus from "@assets/generated_images/Papyrus_texture_background_abd656f5.png";

export default function Room5Writing() {
  const [, setLocation] = useLocation();

  return (
    <RoomLayout
      roomNumber={5}
      title="Writing & Education"
      backgroundImage={papyrus}
      backgroundGradient="from-amber-700/80 via-amber-900/70 to-background"
      onBack={() => setLocation("/")}
      onHome={() => setLocation("/")}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hieroglyphics, the ancient Egyptian writing system, combined logographic and alphabetic elements. 
            Scribes were highly respected professionals who recorded everything from royal decrees to business transactions.
          </p>
        </div>

        {/* Exhibits */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">The Written Word</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExhibitCard
              title="Hieroglyphics Chart"
              imageSrc={hieroglyphs}
              shortDescription="Ancient Egyptian writing using pictorial symbols that represent sounds, words, and concepts."
              fullDescription="Hieroglyphics contained over 700 symbols. They could be written in rows or columns, and read from left to right or right to left - you can tell by which way the animals and people are facing!"
              imageAlt="Hieroglyphics alphabet"
            />
            <ExhibitCard
              title="The Rosetta Stone"
              imageSrc={rosettaStone}
              shortDescription="The key to deciphering hieroglyphics, featuring the same text in three different scripts."
              fullDescription="Discovered in 1799, this stone contains a decree written in hieroglyphics, Demotic script, and ancient Greek. By comparing the Greek (which scholars could read) with the hieroglyphics, Jean-François Champollion cracked the code in 1822."
              imageAlt="Rosetta Stone"
            />
            <ExhibitCard
              title="Scribe at Work"
              imageSrc={scribe}
              shortDescription="Professional scribes were the educated elite who could read and write in ancient Egypt."
              fullDescription="Becoming a scribe required years of training. They used reed pens and wrote on papyrus scrolls. Scribes held important positions in government, temples, and the army, keeping records and writing correspondence."
              imageAlt="Egyptian scribe"
            />
          </div>
        </div>

        {/* Writing Materials */}
        <div className="bg-accent/20 rounded-lg p-6 border border-accent-border">
          <h3 className="font-heading text-xl font-bold mb-4">Tools of the Trade</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2">📜 Papyrus</p>
              <p className="text-sm text-muted-foreground">
                Made from papyrus plant stems that grew along the Nile. Strips were laid perpendicular and pressed together to form sheets.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">🖊️ Reed Pens</p>
              <p className="text-sm text-muted-foreground">
                Thin reeds were cut and shaped into pens. The tips were chewed or cut at an angle to hold ink.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">🎨 Ink & Paint</p>
              <p className="text-sm text-muted-foreground">
                Black ink was made from carbon (soot), red ink from ochre. Important words were often written in red.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">📦 Scribe's Palette</p>
              <p className="text-sm text-muted-foreground">
                A wooden palette with wells for different colored inks and a slot to hold reed pens.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Activity */}
        <ActivitySection
          title="Write Your Name in Hieroglyphics"
          description="Use our translator to see how your name would appear in ancient Egyptian writing"
        >
          <HieroglyphTranslator />
        </ActivitySection>
      </div>
    </RoomLayout>
  );
}
