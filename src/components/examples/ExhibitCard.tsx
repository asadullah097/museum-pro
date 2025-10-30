import ExhibitCard from "../ExhibitCard";
import maskImage from "@assets/generated_images/Tutankhamun_golden_mask_17b9acdf.png";

export default function ExhibitCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ExhibitCard
        title="Tutankhamun's Mask"
        imageSrc={maskImage}
        shortDescription="The iconic golden burial mask of the boy pharaoh, crafted with gold and precious stones."
        fullDescription="This masterpiece of ancient Egyptian art was discovered in 1922 by Howard Carter. The mask weighs about 24 pounds and is made of two layers of high-karat gold, inlaid with glass and semi-precious stones."
        imageAlt="Golden mask of Tutankhamun"
      />
    </div>
  );
}
