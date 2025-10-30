import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Pyramids_sunset_hero_image_b9696909.png";

interface MuseumHeroProps {
  onEnterMuseum?: () => void;
}

export default function MuseumHero({ onEnterMuseum }: MuseumHeroProps) {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl mb-4">
          Virtual Museum of Ancient Egypt
        </h1>
        <p className="font-serif text-lg text-white/90 md:text-xl lg:text-2xl italic max-w-3xl mb-8">
          Discover the wonders of one of history's most remarkable civilizations through six immersive themed rooms
        </p>
        <Button 
          size="lg"
          variant="outline"
          className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
          onClick={onEnterMuseum}
          data-testid="button-enter-museum"
        >
          Begin Your Journey
        </Button>
      </div>
    </div>
  );
}
