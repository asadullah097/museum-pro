import { useLocation } from "wouter";
import RoomLayout from "@/components/RoomLayout";
import ExhibitCard from "@/components/ExhibitCard";
import ActivitySection from "@/components/ActivitySection";
import { Button } from "@/components/ui/button";
import nileRiver from "@assets/generated_images/Nile_River_aerial_view_4c589085.png";
import irrigation from "@assets/generated_images/Egyptian_irrigation_farming_scene_4f516a8e.png";

export default function Room3Nile() {
  const [, setLocation] = useLocation();

  return (
    <RoomLayout
      roomNumber={3}
      title="The River Nile"
      backgroundImage={nileRiver}
      backgroundGradient="from-blue-900/80 via-blue-800/70 to-background"
      onBack={() => setLocation("/")}
      onHome={() => setLocation("/")}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Nile River was the lifeblood of ancient Egypt. Its annual flooding brought nutrient-rich soil that made 
            farming possible in the desert, supporting one of the world's greatest civilizations for thousands of years.
          </p>
        </div>

        {/* Exhibits */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">The Nile's Importance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExhibitCard
              title="The Nile River System"
              imageSrc={nileRiver}
              shortDescription="The longest river in the world, flowing over 4,000 miles from central Africa to the Mediterranean Sea."
              fullDescription="The Nile provided water, transportation, and fertile soil. Without it, Egypt would be nothing but desert. The river flows north through the Sahara, creating a green ribbon of life in an otherwise barren landscape."
              imageAlt="Aerial view of the Nile River"
            />
            <ExhibitCard
              title="Irrigation & Farming"
              imageSrc={irrigation}
              shortDescription="Ancient Egyptians developed sophisticated irrigation systems to control and distribute Nile water to their fields."
              fullDescription="Farmers built canals, dikes, and basins to capture floodwater. They grew wheat, barley, flax, and vegetables. The agricultural calendar was based on three seasons: flooding, planting, and harvesting."
              imageAlt="Egyptian irrigation farming"
            />
          </div>
        </div>

        {/* Key Facts */}
        <div className="bg-accent/20 rounded-lg p-6 border border-accent-border">
          <h3 className="font-heading text-xl font-bold mb-4">Key Facts About the Nile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold">Annual Flooding</p>
                <p className="text-sm text-muted-foreground">Occurred every summer, depositing rich black soil</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold">Transportation Hub</p>
                <p className="text-sm text-muted-foreground">Boats carried goods and people up and down the river</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold">Food Source</p>
                <p className="text-sm text-muted-foreground">Fish, water birds, and papyrus reeds provided food and materials</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold">Religious Significance</p>
                <p className="text-sm text-muted-foreground">Egyptians worshipped Hapi, the god of the Nile flood</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Activity */}
        <ActivitySection
          title="Design a Farming Plan"
          description="Plan how to use Nile water for successful farming"
        >
          <div className="space-y-4">
            <p className="text-foreground">
              You're an ancient Egyptian farmer. The Nile flood is coming! What crops will you plant and where?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2" data-testid="crop-wheat">
                <span className="font-semibold">Wheat</span>
                <span className="text-xs text-muted-foreground">For bread - needs lots of water</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2" data-testid="crop-barley">
                <span className="font-semibold">Barley</span>
                <span className="text-xs text-muted-foreground">For beer - drought resistant</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2" data-testid="crop-flax">
                <span className="font-semibold">Flax</span>
                <span className="text-xs text-muted-foreground">For linen - grows near water</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground italic">
              💡 Tip: The best farmers planted different crops in different areas based on water availability!
            </p>
          </div>
        </ActivitySection>
      </div>
    </RoomLayout>
  );
}
