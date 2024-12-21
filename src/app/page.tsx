import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container space-y-6 py-24 sm:py-32">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="relative w-[200px] h-[200px] mb-8">
            <Image
              src="/zhongwen-advantage.png"
              alt="Zhongwen Advantage Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Master Chinese with Confidence
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A specialized adaptation of Reading Advantage, designed specifically for Chinese language learning
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="h-12">Start Learning Now</Button>
            <Button size="lg" variant="outline" className="h-12">Take Placement Test</Button>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Comprehensive Learning Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our platform combines advanced technology with proven learning methods
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 mt-12">
          {[
            {
              title: "Character Learning System",
              features: [
                "Stroke order visualization",
                "Character breakdown analysis",
                "Radical learning components",
                "Traditional/Simplified support",
              ],
            },
            {
              title: "Pronunciation Tools",
              features: [
                "Pinyin display and practice",
                "Tone recognition exercises",
                "Audio recording capabilities",
                "Speech analysis tools",
              ],
            },
            {
              title: "Adapted Reading Features",
              features: [
                "Chinese text optimization",
                "Character-based progress",
                "Chinese-specific exercises",
                "Adaptive difficulty",
              ],
            },
            {
              title: "Educational Management",
              features: [
                "Classroom management",
                "Student progress tracking",
                "Assignment creation",
                "Performance analytics",
              ],
            },
          ].map((feature) => (
            <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-6">
              <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.features.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="container py-20 bg-muted">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl">
            Built with Modern Technology
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Powered by Next.js 14 and specialized Chinese language processing tools
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-3 md:max-w-[64rem] mt-12">
          {[
            {
              title: "Frontend",
              description: "Next.js 14, TypeScript, Tailwind CSS, and specialized Chinese text processing",
            },
            {
              title: "Backend",
              description: "PostgreSQL with Unicode support, Prisma ORM, and Firebase Authentication",
            },
            {
              title: "Processing",
              description: "HanziWriter for animations, chinese-tokenizer for text segmentation",
            },
          ].map((tech) => (
            <div key={tech.title} className="flex flex-col items-center text-center p-4">
              <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl">
            Start Your Chinese Learning Journey
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
            Join our comprehensive platform and master Chinese language with confidence
          </p>
          <Button size="lg" className="h-12">Begin Free Trial</Button>
        </div>
      </section>
    </>
  )
}
