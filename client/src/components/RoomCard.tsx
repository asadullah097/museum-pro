import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RoomCardProps {
  roomNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  onEnterRoom?: () => void;
  backgroundColor?: string;
}

export default function RoomCard({ 
  roomNumber, 
  title, 
  description, 
  imageSrc, 
  onEnterRoom,
  backgroundColor = "from-black/60 to-black/80"
}: RoomCardProps) {
  return (
    <Card 
      className="group overflow-hidden hover-elevate transition-all duration-300 cursor-pointer border-0"
      onClick={onEnterRoom}
      data-testid={`card-room-${roomNumber}`}
    >
      <div className="relative h-64 md:h-80">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${backgroundColor}`} />
        
        {/* Content */}
        <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
          <div className="mb-2">
            <span className="text-sm font-semibold text-white/80">Room {roomNumber}</span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            {title}
          </h3>
          <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-2">
            {description}
          </p>
          <Button 
            variant="outline" 
            className="w-full backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid={`button-enter-room-${roomNumber}`}
          >
            Enter Room
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
