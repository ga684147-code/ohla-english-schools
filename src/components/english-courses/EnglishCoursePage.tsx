import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { Photo } from "@/components/ui/Photo";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { routes } from "@/config/routes";
import type { EnglishCourse } from "@/data/english-courses";
import { LevelDiagram } from "./LevelDiagram";
import { CourseFees } from "./CourseFees";
import s from "./Courses.module.css";

type Level = Extract<EnglishCourse, { kind: "level" }>;
type Schedule = Extract<EnglishCourse, { kind: "schedule" }>;

function Checks({ title, items, description }: { title: string; items: string[]; description?: string }) {
  return <div className={s.checks}><h3>{title}</h3>{description && <p>{description}</p>}
    <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
  </div>;
}

function LevelDetails({ course }: { course: Level }) {
  const electives = <Checks title="Elective courses" description={course.electiveText} items={course.electives} />;
  return <div className={s.levelDetails}>
    {course.image === "academic" && electives}
    <div>
      <Checks title="Duration" items={["Each level lasts 10 weeks.", "Students may enroll for a minimum of 2 weeks.", "Students may take as long as they need to complete the program."]} />
      <Checks title="Intensity" items={["20 classes per week", "25 classes per week", "30 classes per week"]} />
    </div>
    {course.image === "general" && electives}
  </div>;
}

function Learning({ course }: { course: Schedule }) {
  const cards = [["core-esl","Core ESL"], ["electives","Electives"], ["ohla-life","OHLA L.I.F.E."], [`lessons-${course.lessons}`, `${course.lessons} lessons / week`]];
  return <section className={s.learning}>
    <RevealHeading as="h2">{course.learningTitle}</RevealHeading>
    {course.learningLead && <p><strong>{course.learningLead}</strong></p>}
    <p>{course.learningText}</p>
    <ol>{cards.map(([image, label]) => <li key={image}>
      <Image src={`/images/english-courses/${image}.webp`} alt="" width={280} height={245} />
      <h3>{label}</h3>
    </li>)}</ol>
  </section>;
}

export function EnglishCoursePage({ course }: { course: EnglishCourse }) {
  const schedule = course.kind === "schedule";
  return <main id="main" className={s.page} data-course={course.image}>
    <section className={s.hero}>
      <Photo name={`english-courses/${course.image}-hero`} priority />
      <div className={s.heroInner}>
        <RevealHeading as="h1">{course.image === "academic"
          ? <>English<br /><span className={s.unbroken}>Pre-Academic</span><br />&amp; Academic</>
          : course.image === "intensive" ? <>Intensive<br />English</> : course.title}</RevealHeading>
        {schedule && course.tagline && <strong>{course.tagline}</strong>}
        <p>{course.heroText}{!schedule && <><br />{course.band}</>}</p>
        {schedule && <ul>{course.heroDetails.map(detail => <li key={detail}>{detail}</li>)}</ul>}
        <Button href={routes.apply}>Apply Now</Button>
      </div>
    </section>
    <LevelDiagram intensive={schedule} />
    <section className={s.description} aria-labelledby="course-description">
      <div className={s.descriptionInner}>
        <div className={s.photo}><Photo name={`english-courses/${course.image}-description`} alt={course.about.alt} sizes="(max-width: 760px) 90vw, 40vw" /></div>
        <div className={s.copy}>
          <RevealHeading as="h2" id="course-description">Description</RevealHeading>
          {schedule && <strong>{course.aboutLead}</strong>}
          <p>{course.about.text}</p>
          {schedule && <ul className={s.facts}>{course.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>}
          {!schedule && course.image === "general" && <LevelDetails course={course} />}
        </div>
      </div>
    </section>
    {!schedule && course.image === "academic" && <section className={s.academicDetails} aria-label="Electives and course schedule"><LevelDetails course={course} /></section>}
    {schedule && <Learning course={course} />}
    <section className={s.register} data-short={!schedule}>
      <div><RevealHeading as="h2">{schedule ? course.registerTitle : "Register Today"}</RevealHeading>
        {schedule && <p>{course.registerText}</p>}
        <Button variant="outline" href={routes.apply}>Contact us</Button>
      </div>
    </section>
    {!schedule && <><CourseFees academic={course.image === "academic"} /><BlogCTA heading={course.image === "academic" ? "Contact us for promotional prices." : "Contact us for promotional pricing."} buttonLabel={course.image === "academic" ? "Consult now" : "Inquire now"} href={routes.apply} /></>}
    <VirtualCampusTab />
  </main>;
}
