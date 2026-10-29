import { projects } from "@/lib/data";
import { Button, Img, Section, SectionHeading } from "@/components/ui/ui";
export default function Work() {
  return <Section id="work"><SectionHeading label="Video shoots" title="Recent productions" />
    <ul className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">{projects.map(p => <li key={p.title} className="group">
      <Img src={p.img} alt={p.title} className="aspect-video" /><h3 className="mt-2 text-xs font-semibold">{p.title}</h3><p className="text-[11px] text-mute">{p.meta}</p></li>)}</ul>
    <div className="mt-8 text-center"><Button href="#gallery" small>VIEW ALL WORK</Button></div></Section>;
}
