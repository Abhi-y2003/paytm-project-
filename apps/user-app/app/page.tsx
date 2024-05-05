import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();



export default function Page(): JSX.Element {
  return (
    <div className="text-4xl bg-blue-500 text-center h-[100vh]">
      Hello I am abhishek singh
    </div>
  );
}
