import { AnswerContainer, ProblemContainer } from "@/app/games/zeroSum/page"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ShowAnswer({problems,answers,goToStart}) {

    return (
        <Tabs defaultValue="problems" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="problems">Problem</TabsTrigger>
                <TabsTrigger value="answers">Answer</TabsTrigger>
            </TabsList>
            <TabsContent value="problems">
                <Card>
                <CardHeader>
                    <CardTitle>Problem</CardTitle>
                    <CardDescription>
                    Find the key {answers.key1} , {answers.key2}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <ProblemContainer problems={problems}/>
                </CardContent>
                <CardFooter>
                    <Button onClick={goToStart}>Go To Start</Button>
                </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="answers">
                <Card>
                <CardHeader>
                    <CardTitle>Answer</CardTitle>
                    <CardDescription>
                        Find the key {answers.key1} , {answers.key2}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <AnswerContainer problems={problems} answers={answers}/>
                </CardContent>
                <CardFooter>
                    <Button onClick={goToStart}>Go To Start</Button>
                </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
