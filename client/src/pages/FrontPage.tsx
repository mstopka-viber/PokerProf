import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DogsPlayingPoker from "@/components/DogsPlayingPoker";
import { ChevronRight } from "lucide-react";
import { scrollToTop } from "@/hooks/use-scroll";

export default function FrontPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero section */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/90 to-indigo-700 shadow-xl mb-8 p-8 md:p-10">
        <div className="flex flex-col items-center">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Texas Hold'em<br />
              Poker Guide
            </h1>
            <p className="text-purple-100 text-lg md:text-xl mb-4 max-w-3xl mx-auto">
              Your comprehensive guide to mastering the world's most popular poker game
            </p>
          </div>
          
          {/* Dogs Playing Poker Image - Now underneath the title */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <DogsPlayingPoker className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
          
          {/* Description and Button */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-indigo-200">
              Whether you're a beginner learning the rules or an experienced player looking to refine your strategy,
              our interactive guide will help you improve your game.
            </p>
          </div>
        </div>
      </div>

      {/* Game Overview */}
      <Card className="mb-8 shadow-md">
        <CardHeader>
          <CardTitle>Game Overview</CardTitle>
          <CardDescription>
            The world's most popular poker variant played in friendly home games and professional tournaments alike
          </CardDescription>
        </CardHeader>
        <CardContent className="prose">
          <p>
            Texas Hold'em is a community card poker variant where players make the best five-card hand using any combination of their two hole cards and five community cards. Its strategic depth, accessibility, and dramatic potential have made it the most popular poker game worldwide.
          </p>
          <div className="flex justify-end mt-4">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-none font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/topics" onClick={scrollToTop}>
                <span className="flex items-center">
                  Explore Learning Topics <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-12 mb-8 bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Why Learn Poker?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-purple-700">Strategic Thinking</h3>
            <p className="text-gray-600 text-sm">
              Poker develops your ability to think strategically and make decisions under pressure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple-700">Mathematical Skills</h3>
            <p className="text-gray-600 text-sm">
              Learn to calculate odds and probabilities while making risk/reward decisions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple-700">Reading People</h3>
            <p className="text-gray-600 text-sm">
              Poker helps you develop observation skills and better understand human behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}