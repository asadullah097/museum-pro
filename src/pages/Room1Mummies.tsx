import { useLocation } from "wouter";
import RoomLayout from "@/components/RoomLayout";
import ExhibitCard from "@/components/ExhibitCard";
import ActivitySection from "@/components/ActivitySection";
import tutMask from "@assets/generated_images/Tutankhamun_golden_mask_17b9acdf.png";
import mummy from "@assets/generated_images/Ancient_Egyptian_mummy_8bf97366.png";
import canopicJars from "@assets/generated_images/Canopic_jars_set_858c6256.png";

export default function Room1Mummies() {
  const [, setLocation] = useLocation();

  return (
    <RoomLayout
      roomNumber={1}
      title="Mummies & the Afterlife"
      backgroundImage={tutMask}
      backgroundGradient="from-amber-900/80 via-black/70 to-background"
      onBack={() => setLocation("/")}
      onHome={() => setLocation("/")}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The ancient Egyptians believed in an afterlife where the deceased would continue their existence. 
            To prepare for this journey, they developed the complex process of mummification to preserve the body.
          </p>
        </div>

        {/* Exhibits */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Featured Exhibits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExhibitCard
              title="Tutankhamun's Golden Mask"
              imageSrc={tutMask}
              shortDescription="The iconic burial mask of the boy pharaoh, crafted from 24 pounds of gold with inlaid precious stones."
              fullDescription="Discovered in 1922 by Howard Carter, this masterpiece represents the peak of ancient Egyptian craftsmanship. The mask shows the young king wearing the nemes headdress with the royal insignia of the cobra and vulture."
              imageAlt="Golden mask of Tutankhamun"
            />
            <ExhibitCard
              title="Mummified Remains"
              imageSrc={mummy}
              shortDescription="An actual mummy showing the intricate linen wrapping techniques used to preserve the body for eternity."
              fullDescription="The mummification process took 70 days. The body was dried with natron salt, organs were removed and stored separately, and the body was wrapped in hundreds of yards of linen bandages. Amulets were placed between layers for protection."
              imageAlt="Ancient Egyptian mummy"
            />
            <ExhibitCard
              title="Canopic Jars"
              imageSrc={canopicJars}
              shortDescription="Four jars with deity-headed lids used to store the deceased's internal organs during mummification."
              fullDescription="Each jar was protected by a different deity: Imsety (human-headed) for the liver, Hapy (baboon-headed) for the lungs, Duamutef (jackal-headed) for the stomach, and Qebehsenuef (falcon-headed) for the intestines."
              imageAlt="Set of canopic jars"
            />
          </div>
        </div>

        {/* Interactive Activity */}
        <ActivitySection
          title="Create Your Mummy Wrapping Plan"
          description="Design how you would preserve a mummy using ancient techniques"
        >
          <div className="space-y-4">
            <p className="text-foreground">
              The mummification process involved several important steps. Can you arrange them in the correct order?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 bg-background rounded-md border hover-elevate cursor-pointer" data-testid="step-remove-organs">
                <span className="font-semibold">Step 1:</span> Remove internal organs
              </div>
              <div className="p-4 bg-background rounded-md border hover-elevate cursor-pointer" data-testid="step-dry-body">
                <span className="font-semibold">Step 2:</span> Dry the body with natron salt
              </div>
              <div className="p-4 bg-background rounded-md border hover-elevate cursor-pointer" data-testid="step-wrap-linen">
                <span className="font-semibold">Step 3:</span> Wrap in linen bandages
              </div>
              <div className="p-4 bg-background rounded-md border hover-elevate cursor-pointer" data-testid="step-place-tomb">
                <span className="font-semibold">Step 4:</span> Place in decorated sarcophagus
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              💡 Tip: The entire process took about 70 days to complete!
            </p>
          </div>
        </ActivitySection>
      </div>
    </RoomLayout>
  );
}
