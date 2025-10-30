import { useLocation } from "wouter";
import RoomLayout from "@/components/RoomLayout";
import ExhibitCard from "@/components/ExhibitCard";
import ActivitySection from "@/components/ActivitySection";
import pyramidsImage from "@assets/generated_images/Pyramids_sunset_hero_image_b9696909.png";
import sphinx from "@assets/generated_images/Great_Sphinx_close-up_98a6a252.png";
import temple from "@assets/generated_images/Egyptian_temple_interior_38043d4a.png";

export default function Room4Architecture() {
  const [, setLocation] = useLocation();

  return (
    <RoomLayout
      roomNumber={4}
      title="Egyptian Architecture"
      backgroundImage={pyramidsImage}
      backgroundGradient="from-stone-800/80 via-amber-900/70 to-background"
      onBack={() => setLocation("/")}
      onHome={() => setLocation("/")}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ancient Egyptian architecture stands as a testament to human ingenuity and ambition. From the towering pyramids 
            to magnificent temples, these structures have survived for millennia, inspiring awe and wonder.
          </p>
        </div>

        {/* Exhibits */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Monumental Structures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExhibitCard
              title="The Great Pyramids of Giza"
              imageSrc={pyramidsImage}
              shortDescription="The last remaining wonder of the ancient world, built around 2560 BC as tombs for pharaohs."
              fullDescription="The Great Pyramid of Khufu originally stood 481 feet tall and was made of 2.3 million stone blocks, each weighing 2-15 tons. Workers used copper tools, wooden sledges, and simple machines to move the massive stones."
              imageAlt="Pyramids of Giza"
            />
            <ExhibitCard
              title="The Great Sphinx"
              imageSrc={sphinx}
              shortDescription="A massive limestone statue with a lion's body and human head, guarding the Giza plateau."
              fullDescription="Carved from a single piece of limestone, the Sphinx is 66 feet tall and 240 feet long. It represents the pharaoh's power and wisdom, combining human intelligence with a lion's strength."
              imageAlt="Great Sphinx"
            />
            <ExhibitCard
              title="Temple of Luxor"
              imageSrc={temple}
              shortDescription="A massive temple complex with towering columns covered in hieroglyphics and colorful reliefs."
              fullDescription="Built around 1400 BC, Luxor Temple features massive pylons, courtyards, and hypostyle halls with columns reaching 50 feet high. The temple was dedicated to the rejuvenation of kingship."
              imageAlt="Temple interior"
            />
          </div>
        </div>

        {/* Building Techniques */}
        <div className="bg-accent/20 rounded-lg p-6 border border-accent-border">
          <h3 className="font-heading text-xl font-bold mb-4">How Did They Build It?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🪨</span>
              </div>
              <div>
                <p className="font-semibold">Stone Quarrying</p>
                <p className="text-sm text-muted-foreground">
                  Workers cut limestone and granite blocks from quarries using copper chisels and wooden wedges
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛷</span>
              </div>
              <div>
                <p className="font-semibold">Transportation</p>
                <p className="text-sm text-muted-foreground">
                  Massive stones were moved on wooden sledges, with workers pouring water to reduce friction
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⬆️</span>
              </div>
              <div>
                <p className="font-semibold">Ramps & Levers</p>
                <p className="text-sm text-muted-foreground">
                  Ramps were built around the pyramid, allowing workers to drag stones up to higher levels
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Activity */}
        <ActivitySection
          title="Build a Pyramid Challenge"
          description="Learn about the steps involved in pyramid construction"
        >
          <div className="space-y-4">
            <p className="text-foreground">
              Building a pyramid required careful planning and thousands of workers. Here are the main phases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg border p-4 space-y-2" data-testid="phase-planning">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <h4 className="font-heading font-semibold">Planning Phase</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Architects designed the pyramid and calculated materials needed. Astronomers aligned it with the stars.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-4 space-y-2" data-testid="phase-foundation">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <h4 className="font-heading font-semibold">Foundation</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  The site was leveled perfectly using water channels. The base had to be absolutely flat.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-4 space-y-2" data-testid="phase-construction">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <h4 className="font-heading font-semibold">Construction</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Layer by layer, workers placed massive stone blocks, creating internal chambers as they built.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-4 space-y-2" data-testid="phase-finishing">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <h4 className="font-heading font-semibold">Finishing Touches</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  The outer casing of white limestone made the pyramid shine brilliantly in the sun.
                </p>
              </div>
            </div>
          </div>
        </ActivitySection>
      </div>
    </RoomLayout>
  );
}
