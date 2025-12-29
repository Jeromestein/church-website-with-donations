import { Card } from "@/components/ui/card"
import { Heart, Users, BookOpen } from "lucide-react"

export function Ministries() {
  const ministries = [
    {
      icon: Heart,
      title: "社区关怀与扶贫",
      subtitle: "Community Outreach",
      tagline: "爱在 Woodside，暖在心间",
      description: "既然我们在 Woodside 和 Irvine，我们就是社区的一部分。",
      services: [
        {
          name: "街头送暖",
          detail: "每周定期在 Roosevelt Ave 地铁站及周边公园，为有需要的人士分发热餐、面包与饮用水。",
        },
        {
          name: "冬衣捐赠",
          detail: "寒冬将至，我们收集并分发厚冬衣，确保没有一位邻舍需要在寒风中颤抖。",
        },
      ],
    },
    {
      icon: Users,
      title: "新移民安家服务",
      subtitle: "New Immigrant Services",
      tagline: "从落地到扎根，我们陪您走",
      description: "初来乍到？别担心，我们为您提供力所能及的帮助。",
      services: [
        {
          name: "生活资讯向导",
          detail: "协助解决租房、入学、考驾照等生活难题。",
        },
        {
          name: "语言互助小组",
          detail: "通过读经与交流，在信仰环境中提升英语能力。",
        },
        {
          name: "法律与精神支持",
          detail: "为遭遇法律困境（如移民案件）的弟兄姊妹提供品格证明与精神陪伴，做您坚强的后盾。",
        },
      ],
    },
    {
      icon: BookOpen,
      title: "属灵成长",
      subtitle: "Spiritual Growth",
      tagline: "生命的更新，从这里开始",
      description: "无论您是虔诚的信徒，还是对信仰充满好奇的朋友，我们都欢迎您来探索生命的意义。",
      services: [
        {
          name: "主日崇拜",
          detail: "Sunday Service - 每周日聚会，敬拜赞美与信息分享。",
        },
        {
          name: "查经班与家庭团契",
          detail: "Bible Study & Fellowship - 深入学习圣经，建立深厚友谊。",
        },
      ],
    },
  ]

  return (
    <section id="ministries" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">核心事工</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-16">Our Ministries</p>

          <div className="grid md:grid-cols-1 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon
              return (
                <Card key={index} className="p-8 md:p-10 hover:shadow-lg transition-shadow bg-card">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{ministry.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{ministry.subtitle}</p>
                      <p className="text-lg font-semibold text-primary mb-3 italic">"{ministry.tagline}"</p>
                      <p className="text-base text-foreground/90 mb-6 leading-relaxed">{ministry.description}</p>
                      <div className="space-y-4">
                        {ministry.services.map((service, idx) => (
                          <div key={idx} className="pl-4 border-l-2 border-primary/30">
                            <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                            <p className="text-sm text-foreground/80 leading-relaxed">{service.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
