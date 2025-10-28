import ActivitySection from "../ActivitySection";
import { Button } from "@/components/ui/button";

export default function ActivitySectionExample() {
  return (
    <div className="p-8 max-w-2xl">
      <ActivitySection
        title="Interactive Challenge"
        description="Test your knowledge of Ancient Egypt"
      >
        <div className="space-y-4">
          <p className="text-foreground">
            Can you identify which pharaoh is known as the "Great Builder"?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button variant="outline" data-testid="button-answer-1">Tutankhamun</Button>
            <Button variant="outline" data-testid="button-answer-2">Ramses II</Button>
            <Button variant="outline" data-testid="button-answer-3">Cleopatra</Button>
            <Button variant="outline" data-testid="button-answer-4">Khufu</Button>
          </div>
        </div>
      </ActivitySection>
    </div>
  );
}
