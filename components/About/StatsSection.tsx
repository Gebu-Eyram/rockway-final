import { BlurFade } from "@/components/ui/blur-fade";

export default function StatsSection() {
  return (
    <section>
      <div className="pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <BlurFade delay={0.2}>
              <div className="space-y-0.5 md:text-center">
                <div className="text-sky-600 text-4xl font-bold">5+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="space-y-0.5 md:text-center">
                <div className="text-sky-600 text-4xl font-bold">99%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
            </BlurFade>
            <div className="col-span-2 border-t pt-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <BlurFade delay={0.6}>
                <p className="text-muted-foreground text-balance text-lg">
                  Our company continues to grow with customers and businesses
                  with excellence.
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
