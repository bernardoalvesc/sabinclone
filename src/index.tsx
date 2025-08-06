import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <Header />
      <HeroBanner /> 
    </div>
  );
}
