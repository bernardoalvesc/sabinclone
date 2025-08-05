import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <Header />
    </div>
  );
}
