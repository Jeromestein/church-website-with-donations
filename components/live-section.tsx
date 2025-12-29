"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LiveSection() {
  return (
    <section id="live" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">主日崇拜直播</h2>
        </div>

        <Tabs defaultValue="chinese" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="chinese">华语主日</TabsTrigger>
            <TabsTrigger value="english">英语主日</TabsTrigger>
          </TabsList>

          <TabsContent value="chinese">
            <Card>
              <CardHeader>
                <CardTitle>罗兰岗 华语主日聚会</CardTitle>
                <CardDescription>
                  周六晚堂 7:00 PM | 周日早堂 9:00 AM & 11:30 AM
                  <br />
                  60-20 Woodside Ave, Suite 205, Woodside, NY 11377
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/A7lmqYbnzHk?start=230"
                    title="Chinese Service Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  请将 YOUR_CHANNEL_ID 替换为您的 YouTube 频道 ID
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="english">
            <Card>
              <CardHeader>
                <CardTitle>DEC Irvine 华语主日</CardTitle>
                <CardDescription>
                  午堂 1:30 PM
                  <br />
                  60-20 Woodside Ave, Suite 205, Woodside, NY 11377
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/A7lmqYbnzHk?start=230"
                    title="English Service Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Please replace YOUR_CHANNEL_ID with your YouTube channel ID
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">无法参加现场直播？观看我们的过往讲道</p>
        </div>
      </div>
    </section>
  )
}
