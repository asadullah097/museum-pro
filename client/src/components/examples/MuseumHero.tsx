import MuseumHero from "../MuseumHero";

export default function MuseumHeroExample() {
  return <MuseumHero onEnterMuseum={() => console.log('Enter museum clicked')} />;
}
