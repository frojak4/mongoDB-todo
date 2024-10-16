import Input from "@/components/Input";
import ToDoList from "@/components/ToDoList";
import { Suspense } from "react";






export default async function Home() {


  return (
    <div className="flex justify-center">
      <div className="w-4/5 mx-auto max-h-fit text-center mt-8">
        <Input />
        <Suspense fallback={<p>Loading....</p>}>
          <ToDoList />
        </Suspense>
      </div>
    </div>
  );
}
