import type { V2_MetaFunction } from "@remix-run/node";

import Sidebar from "./Sidebar";

export const meta: V2_MetaFunction = () => [{ title: "Hydrosys" }];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white">
      <div className="relative">
        <Sidebar />
      </div>
    </main>
  );
}
