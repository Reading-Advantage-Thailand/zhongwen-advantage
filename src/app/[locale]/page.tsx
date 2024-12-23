import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getI18n } from "@/locales/server"

export default async function Home() {
  const t = await getI18n()

  const features = [
    {
      title: t("pages.indexPage.features.sections.characterLearning.title"),
      features: [
        t("pages.indexPage.features.sections.characterLearning.features.1"),
        t("pages.indexPage.features.sections.characterLearning.features.2"),
        t("pages.indexPage.features.sections.characterLearning.features.3"),
        t("pages.indexPage.features.sections.characterLearning.features.4"),
      ],
    },
    {
      title: t("pages.indexPage.features.sections.pronunciation.title"),
      features: [
        t("pages.indexPage.features.sections.pronunciation.features.1"),
        t("pages.indexPage.features.sections.pronunciation.features.2"),
        t("pages.indexPage.features.sections.pronunciation.features.3"),
        t("pages.indexPage.features.sections.pronunciation.features.4"),
      ],
    },
    {
      title: t("pages.indexPage.features.sections.reading.title"),
      features: [
        t("pages.indexPage.features.sections.reading.features.1"),
        t("pages.indexPage.features.sections.reading.features.2"),
        t("pages.indexPage.features.sections.reading.features.3"),
        t("pages.indexPage.features.sections.reading.features.4"),
      ],
    },
    {
      title: t("pages.indexPage.features.sections.management.title"),
      features: [
        t("pages.indexPage.features.sections.management.features.1"),
        t("pages.indexPage.features.sections.management.features.2"),
        t("pages.indexPage.features.sections.management.features.3"),
        t("pages.indexPage.features.sections.management.features.4"),
      ],
    },
  ]

  const techSections = [
    {
      title: t("pages.indexPage.technology.sections.frontend.title"),
      description: t("pages.indexPage.technology.sections.frontend.description"),
    },
    {
      title: t("pages.indexPage.technology.sections.backend.title"),
      description: t("pages.indexPage.technology.sections.backend.description"),
    },
    {
      title: t("pages.indexPage.technology.sections.processing.title"),
      description: t("pages.indexPage.technology.sections.processing.description"),
    },
  ]

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
            {t("pages.indexPage.hero.title")}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {t("pages.indexPage.hero.description")}
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="h-12">{t("pages.indexPage.hero.startLearningButton")}</Button>
            <Button size="lg" variant="outline" className="h-12">{t("pages.indexPage.hero.placementTestButton")}</Button>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            {t("pages.indexPage.features.title")}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("pages.indexPage.features.description")}
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 mt-12">
          {features.map((feature) => (
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
            {t("pages.indexPage.technology.title")}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("pages.indexPage.technology.description")}
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-3 md:max-w-[64rem] mt-12">
          {techSections.map((tech) => (
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
            {t("pages.indexPage.cta.title")}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
            {t("pages.indexPage.cta.description")}
          </p>
          <Button size="lg" className="h-12">{t("pages.indexPage.cta.button")}</Button>
        </div>
      </section>
    </>
  )
}
