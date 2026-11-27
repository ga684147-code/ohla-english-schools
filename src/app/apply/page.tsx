import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";

export default function Apply() {
  return (
    <main id="main" className="future-page">
      <meta httpEquiv="refresh" content={`0;url=${routes.apply}`} />
      <h1>Apply now</h1>
      <Button href={routes.apply}>Contact OHLA</Button>
    </main>
  );
}
