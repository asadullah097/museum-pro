import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scroll } from "lucide-react";

interface ActivitySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ActivitySection({ title, description, children }: ActivitySectionProps) {
  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-accent/30 to-accent/10" data-testid="section-activity">
      <CardHeader className="border-b border-primary/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
            <Scroll className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="font-heading text-xl">
              {title}
            </CardTitle>
            <p className="font-serif text-sm text-muted-foreground italic mt-1">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}
