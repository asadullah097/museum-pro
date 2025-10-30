import { useLocation } from "wouter";
import RoomLayout from "@/components/RoomLayout";
import ExhibitCard from "@/components/ExhibitCard";
import ActivitySection from "@/components/ActivitySection";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import artifacts from "@assets/generated_images/Egyptian_artifacts_collection_8474756c.png";

const mysteryArtifacts = [
  { name: "Scarab Amulet", purpose: "Protection charm worn for good luck", image: artifacts },
  { name: "Bronze Mirror", purpose: "Used for personal grooming and beauty rituals", image: artifacts },
  { name: "Pottery Vessel", purpose: "Storage container for food, water, or wine", image: artifacts }
];

export default function Room2Artifacts() {
  const [, setLocation] = useLocation();
  const [revealedArtifacts, setRevealedArtifacts] = useState<boolean[]>([false, false, false]);

  const revealArtifact = (index: number) => {
    const newRevealed = [...revealedArtifacts];
    newRevealed[index] = true;
    setRevealedArtifacts(newRevealed);
    console.log('Artifact revealed:', mysteryArtifacts[index].name);
  };

  return (
    <RoomLayout
      roomNumber={2}
      title="Egyptian Artifacts"
      backgroundImage={artifacts}
      backgroundGradient="from-yellow-800/80 via-black/70 to-background"
      onBack={() => setLocation("/")}
      onHome={() => setLocation("/")}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Artifacts provide a window into daily life in ancient Egypt. From jewelry and pottery to tools and religious objects, 
            these items reveal how Egyptians lived, worked, and worshipped thousands of years ago.
          </p>
        </div>

        {/* Exhibits */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Featured Artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExhibitCard
              title="Golden Jewelry Collection"
              imageSrc={artifacts}
              shortDescription="Intricate necklaces, bracelets, and rings made from gold and precious stones, worn by Egyptian nobility."
              fullDescription="Egyptian jewelry was not just decorative - it held religious and protective significance. The scarab beetle was a popular symbol representing rebirth and regeneration."
              imageAlt="Ancient Egyptian jewelry"
            />
            <ExhibitCard
              title="Ceremonial Pottery"
              imageSrc={artifacts}
              shortDescription="Decorated clay vessels with hieroglyphic inscriptions, used for storing food, drink, and sacred oils."
              fullDescription="Pottery was essential in ancient Egypt. Different shapes served different purposes - amphorae for wine and oil, bowls for food, and special vessels for religious ceremonies."
              imageAlt="Egyptian pottery"
            />
            <ExhibitCard
              title="Bronze Tools & Implements"
              imageSrc={artifacts}
              shortDescription="Everyday tools including knives, chisels, and agricultural implements that show Egyptian craftsmanship."
              fullDescription="Egyptian metalworkers were highly skilled. Bronze tools were used for everything from farming and construction to creating art and building monuments."
              imageAlt="Bronze tools"
            />
          </div>
        </div>

        {/* Interactive Activity */}
        <ActivitySection
          title="Artifact Detective Challenge"
          description="Guess the purpose of these mystery objects from ancient Egypt"
        >
          <div className="space-y-6">
            <p className="text-foreground">
              Can you figure out what these artifacts were used for? Click "Reveal Answer" to find out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mysteryArtifacts.map((artifact, index) => (
                <div key={index} className="bg-background rounded-lg border p-4 space-y-3">
                  <div className="aspect-square bg-muted rounded-md overflow-hidden">
                    <img src={artifact.image} alt={`Mystery artifact ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-heading font-semibold">Mystery Object #{index + 1}</h4>
                  {revealedArtifacts[index] ? (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">{artifact.name}</p>
                      <p className="text-sm text-muted-foreground">{artifact.purpose}</p>
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => revealArtifact(index)}
                      data-testid={`button-reveal-${index}`}
                    >
                      Reveal Answer
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ActivitySection>
      </div>
    </RoomLayout>
  );
}
