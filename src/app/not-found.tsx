import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col items-start justify-center pt-24">
      <p className="display text-[clamp(6rem,24vw,20rem)] leading-none text-gold/90">404</p>
      <h1 className="display mt-2 text-4xl md:text-6xl">This frame is empty.</h1>
      <p className="mt-4 max-w-md text-ivory/60">The page you are looking for does not exist or has moved.</p>
      <div className="mt-10"><Button href="/" variant="solid">Back to home</Button></div>
    </section>
  );
}
