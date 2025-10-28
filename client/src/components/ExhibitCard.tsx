import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExhibitCardProps {
  title: string;
  imageSrc: string;
  shortDescription: string;
  fullDescription?: string;
  imageAlt?: string;
}

export default function ExhibitCard({ 
  title, 
  imageSrc, 
  shortDescription,
  fullDescription,
  imageAlt = "Ancient Egyptian artifact"
}: ExhibitCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-exhibit-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Title Plate */}
      <div className="bg-accent/50 px-4 py-3 border-b border-accent-border">
        <h3 className="font-heading text-lg font-semibold text-accent-foreground">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {shortDescription}
        </p>
        
        {fullDescription && (
          <>
            {isExpanded && (
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                {fullDescription}
              </p>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm font-medium text-primary mt-3 hover:underline"
              data-testid={`button-toggle-description-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Learn More <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
