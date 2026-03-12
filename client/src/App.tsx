import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/Sidebar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import FrontPage from "@/pages/FrontPage";
import Topics from "@/pages/Topics";
import HandRankings from "@/pages/HandRankings";
import TablePosition from "@/pages/TablePosition";

import Terminology from "@/pages/Terminology";
import Ranges from "@/pages/Ranges";
import OddsCalculator from "@/pages/OddsCalculator";
import Bluffing from "@/pages/Bluffing";
import GameFormat from "@/pages/GameFormat";
import GameplayRounds from "@/pages/GameplayRounds";
import PlayerCountTable from "@/pages/PlayerCountTable";
import BettingStructures from "@/pages/BettingStructures";
import PlayingStyles from "@/pages/PlayingStyles";
import BasicStrategy from "@/pages/BasicStrategy";
import Tells from "@/pages/Tells";
import TableTalkImage from "@/pages/TableTalkImage";
import ReferenceTools from "@/pages/ReferenceTools";

function Router() {
  const [location] = useLocation();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-orange-50 to-gray-100">
      {/* Only show sidebar when not on the front page */}
      {location !== "/" && <Sidebar />}

      <main className={`flex-1 p-3 md:p-5 lg:p-6 overflow-y-auto ${location === "/" ? "w-full" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <Switch>
            <Route path="/" component={FrontPage} />
            <Route path="/home" component={Home} />
            <Route path="/topics" component={Topics} />
            <Route path="/hand-rankings" component={HandRankings} />
            <Route path="/table-position" component={TablePosition} />

            <Route path="/terminology" component={Terminology} />
            <Route path="/ranges" component={Ranges} />
            <Route path="/odds-calculator" component={OddsCalculator} />
            <Route path="/bluffing" component={Bluffing} />
            <Route path="/tells" component={Tells} />
            <Route path="/table-talk-image" component={TableTalkImage} />
            <Route path="/reference-tools" component={ReferenceTools} />
            <Route path="/gameplay-rounds" component={GameplayRounds} />
            <Route path="/player-count" component={PlayerCountTable} />
            <Route path="/game-format" component={GameFormat} />
            <Route path="/betting-structures" component={BettingStructures} />
            <Route path="/playing-styles" component={PlayingStyles} />
            <Route path="/basic-strategy" component={BasicStrategy} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;