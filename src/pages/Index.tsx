import Hero from "@/components/hearbyte/Hero";
import Section from "@/components/hearbyte/Section";
import SectionHeading from "@/components/hearbyte/SectionHeading";
import PickGroupBlock from "@/components/hearbyte/PickGroupBlock";
import NoteCallout from "@/components/hearbyte/NoteCallout";
import { headphoneGroups, sourceGroups, softwareGroups } from "@/data/picks";
import { FileAudio, Cable, Sliders, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
    </main>
  );
};

export default Index;
