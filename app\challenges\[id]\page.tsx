@ -0,0 +1,229 @@
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Terminal, Flag, Award, Clock, ArrowLeft, HelpCircle, MessageSquare, Users, CheckCircle } from "lucide-react"

export default function ChallengePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the challenge data based on the ID
  const challenge = {
    id: params.id,
    title: "SQL Injection Basics",
    description:
      "In this challenge, you will learn how to exploit SQL injection vulnerabilities in web applications. SQL injection is a code injection technique that might destroy your database and is one of the most common web hacking techniques.",
    difficulty: "Easy",
    category: "Web Security",
    points: 300,
    completionRate: 68,
    solvedBy: 1243,
    timeEstimate: "45-60 minutes",
    objectives: [
      "Understand how SQL injection works",
      "Identify vulnerable input fields",
      "Extract database information using UNION-based SQL injection",
      "Bypass login authentication using SQL injection",
      "Submit the flag to complete the challenge",
    ],
    hints: [
      "Try using single quotes in the input fields to test for vulnerabilities",
      "Remember that SQL comments can be useful to ignore the rest of a query",
      "UNION attacks require the same number of columns in both queries",
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button variant="ghost" className="mb-6 text-gray-400 hover:text-white" asChild>
          <a href="/challenges">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Challenges
          </a>
        </Button>

        {/* Challenge header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">{challenge.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="px-2 py-1 bg-green-900/50 text-green-400 rounded text-xs font-medium">
                {challenge.difficulty}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Terminal className="mr-1 h-4 w-4" />
                {challenge.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Award className="mr-1 h-4 w-4" />
                {challenge.points} points
              </span>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Start Machine</Button>
        </div>

        {/* Challenge stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-blue-900/50">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Solved by</p>
                <p className="text-xl font-bold">{challenge.solvedBy} users</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-blue-900/50">
                <CheckCircle className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Completion rate</p>
                <div className="flex items-center gap-2">
                  <Progress value={challenge.completionRate} className="h-2 w-24" />
                  <p className="text-xl font-bold">{challenge.completionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-blue-900/50">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Estimated time</p>
                <p className="text-xl font-bold">{challenge.timeEstimate}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Challenge content */}
        <Tabs defaultValue="description" className="mb-8">
          <TabsList className="bg-gray-900 border border-gray-800">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
            <TabsTrigger value="hints">Hints</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-blue-400" />
                    <h3 className="font-medium">Connection Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">IP Address</p>
                      <code className="bg-gray-950 px-2 py-1 rounded text-blue-300">10.10.10.10</code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Username</p>
                      <code className="bg-gray-950 px-2 py-1 rounded text-blue-300">student</code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Password</p>
                      <code className="bg-gray-950 px-2 py-1 rounded text-blue-300">cybertrainer</code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Web Application</p>
                      <code className="bg-gray-950 px-2 py-1 rounded text-blue-300">http://10.10.10.10:8080</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="objectives" className="mt-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {challenge.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full bg-blue-900/50 text-blue-400">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-300">{objective}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Flag className="h-5 w-5 text-green-400" />
                    <h3 className="font-medium">Submit Flag</h3>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter flag (e.g., CTF{...})"
                      className="flex-1 bg-gray-950 border border-gray-700 rounded px-3 py-2 text-white"
                    />
                    <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hints" className="mt-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="h-5 w-5 text-yellow-400" />
                  <h3 className="font-medium">Need some help?</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Stuck on this challenge? Here are some hints to help you progress. Each hint reveals a bit more
                  information.
                </p>
                <div className="space-y-4">
                  {challenge.hints.map((hint, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                      <details>
                        <summary className="cursor-pointer font-medium">Hint {index + 1}</summary>
                        <p className="mt-2 text-gray-300">{hint}</p>
                      </details>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discussion" className="mt-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  <h3 className="font-medium">Community Discussion</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Discuss this challenge with other users. Please avoid sharing direct solutions or flags.
                </p>
                <div className="p-8 flex flex-col items-center justify-center text-gray-500">
                  <MessageSquare className="h-12 w-12 mb-2" />
                  <p>No comments yet</p>
                  <p className="text-sm">Be the first to start the discussion</p>
                  <Button className="mt-4 bg-gray-800 hover:bg-gray-700">Add Comment</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
