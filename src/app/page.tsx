import Image from "next/image"
import { MainNav } from "@/components/navigation/main-nav"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MainNav />
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
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
              The most comprehensive platform for learning Chinese, from beginner to advanced
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="h-12">Start Learning Now</Button>
              <Button size="lg" variant="outline" className="h-12">Take Placement Test</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
              Why Choose Zhongwen Advantage?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our comprehensive approach combines proven learning methods with modern technology
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
            {[
              {
                title: "Extensive Reading Library",
                description: "Access thousands of leveled reading materials in both simplified and traditional characters",
              },
              {
                title: "Adaptive Learning",
                description: "Personalized learning path that adjusts to your progress and learning style",
              },
              {
                title: "HSK Aligned",
                description: "Content structured to align with official HSK levels while providing more granular progress tracking",
              },
            ].map((feature) => (
              <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-6">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="container py-20 bg-muted">
          <div className="mx-auto grid gap-8 sm:grid-cols-3 md:max-w-[64rem]">
            {[
              { stat: "18", label: "Reading Advantage Levels" },
              { stat: "6000+", label: "Interactive Exercises" },
              { stat: "500K+", label: "Active Learners" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold">{item.stat}</div>
                <div className="text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="container py-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
              Your Path to Mastery
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              From basic conversations to advanced literacy, we guide you every step of the way
            </p>
          </div>
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:max-w-[64rem] mt-12">
            {[
              {
                title: "Beginner",
                level: "HSK 1-2 | RA 1-6",
                features: ["Basic conversations", "Essential characters", "Foundational grammar"],
              },
              {
                title: "Intermediate",
                level: "HSK 3-4 | RA 7-12",
                features: ["Daily life topics", "Common expressions", "Extended conversations"],
              },
              {
                title: "Advanced",
                level: "HSK 5 | RA 13-15",
                features: ["Complex topics", "Professional contexts", "Abstract discussions"],
              },
              {
                title: "Near-Native",
                level: "HSK 6 | RA 16-18",
                features: ["Academic material", "Literary works", "Cultural nuances"],
              },
            ].map((level) => (
              <div key={level.title} className="relative overflow-hidden rounded-lg border bg-background p-6">
                <h3 className="font-bold text-xl">{level.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{level.level}</p>
                <ul className="mt-4 space-y-2">
                  {level.features.map((feature) => (
                    <li key={feature} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container py-20 bg-muted">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl">
              Start Your Chinese Learning Journey Today
            </h2>
            <Button size="lg" className="h-12 mt-6">Begin Free Trial</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
