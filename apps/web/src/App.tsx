import { Button } from "@workspace/ui/components/button";

function App() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button from packages/ui</Button>
      </div>
    </div>
  );
}

export default App;
