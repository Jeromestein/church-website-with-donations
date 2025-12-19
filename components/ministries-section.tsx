import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ministries = [
  {
    title: "DEC Toddler",
    subtitle: "2-5 岁幼儿",
    age: "(2-5 years old)",
    description:
      "通过圣经教学、敬拜、手工艺和游戏，为幼儿提供温馨的学习环境。我们帮助孩子在爱和耐心中成长，建立对神的初步认识。",
    image: "/young-children-in-church-classroom-learning.jpg",
  },
  {
    title: "DEC Children",
    subtitle: "6-11 岁儿童",
    age: "(6-11 years old)",
    description:
      "帮助儿童建立与神的关系，通过互动教学、敬拜和小组活动，让他们在基督里成长。我们教导孩子爱神爱人，培养他们的属灵生命。",
    image: "/elementary-children-worship-and-dance-in-church.jpg",
  },
  {
    title: "DEC Youth",
    subtitle: "12-18 岁青少年",
    age: "(12-18 years old)",
    description:
      "为青少年提供一个安全的空间，让他们在基督里建立身份认同。通过敬拜、查经和团契，帮助年轻人在信仰中成长，培养属灵领袖。",
    image: "/teenagers-in-church-youth-group-gathering.jpg",
  },
]

export function MinistriesSection() {
  return (
    <section id="ministries" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">事工与团契</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <Card key={ministry.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={ministry.image || "/placeholder.svg"}
                  alt={ministry.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{ministry.title}</CardTitle>
                <CardDescription className="text-base">{ministry.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{ministry.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <Link href={`#${ministry.title.toLowerCase().replace(" ", "-")}`}>了解更多</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
