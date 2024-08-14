import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-zinc-600 min-h-screen">
      <Navbar />
      <Button>Click me</Button>
    </main>
  );
}
