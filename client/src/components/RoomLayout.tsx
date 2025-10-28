import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

interface RoomLayoutProps {
  roomNumber: number;
  title: string;
  backgroundImage: string;
  backgroundGradient?: string;
  children: React.ReactNode;
  onBack?: () => void;
  onHome?: () => void;
}

export default function RoomLayout({ 
  roomNumber, 
  title, 
  backgroundImage, 
  backgroundGradient = "from-black/70 via-black/60 to-background",
  children,
  onBack,
  onHome
}: RoomLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Room Header Banner */}
      <div className="relative h-64 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${backgroundGradient}`} />
        
        {/* Navigation */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <Button 
            variant="outline"
            size="sm"
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={onBack}
            data-testid="button-back"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            variant="outline"
            size="sm"
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={onHome}
            data-testid="button-home"
          >
            <Home className="h-4 w-4 mr-2" />
            Museum Home
          </Button>
        </div>
        
        {/* Room Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold text-white/80 mb-2">Room {roomNumber}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Room Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  );
}
