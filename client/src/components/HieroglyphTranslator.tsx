import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Simple mapping of letters to hieroglyph symbols (using Unicode characters as placeholders)
const hieroglyphMap: Record<string, string> = {
  'a': '𓄿', 'b': '𓃀', 'c': '𓍿', 'd': '𓂧', 'e': '𓇋', 'f': '𓆑', 'g': '𓎼', 'h': '𓉔',
  'i': '𓇋', 'j': '𓆓', 'k': '𓎡', 'l': '𓃭', 'm': '𓅓', 'n': '𓈖', 'o': '𓍯', 'p': '𓊪',
  'q': '𓈎', 'r': '𓂋', 's': '𓋴', 't': '𓏏', 'u': '𓅱', 'v': '𓆑', 'w': '𓅱', 'x': '𓎡𓋴',
  'y': '𓇌', 'z': '𓊃', ' ': ' '
};

export default function HieroglyphTranslator() {
  const [name, setName] = useState("");
  const [translated, setTranslated] = useState("");

  const translateName = () => {
    const result = name
      .toLowerCase()
      .split('')
      .map(char => hieroglyphMap[char] || char)
      .join('');
    setTranslated(result);
    console.log('Translated:', name, 'to', result);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name-input" className="text-base font-medium">
          Enter Your Name
        </Label>
        <div className="flex gap-2 mt-2">
          <Input
            id="name-input"
            type="text"
            placeholder="Type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1"
            data-testid="input-name"
          />
          <Button onClick={translateName} data-testid="button-translate">
            Translate
          </Button>
        </div>
      </div>
      
      {translated && (
        <div className="bg-accent/30 rounded-md p-6 border-2 border-primary/20">
          <Label className="text-sm font-medium text-muted-foreground mb-2 block">
            Your Name in Hieroglyphics
          </Label>
          <div 
            className="text-4xl font-serif text-center py-4"
            data-testid="text-hieroglyph-result"
          >
            {translated}
          </div>
        </div>
      )}
    </div>
  );
}
