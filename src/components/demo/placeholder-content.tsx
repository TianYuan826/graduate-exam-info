import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export default function PlaceholderContent() {
  return (
    <Card className="rounded-lg border-none mt-4">
      <CardContent className="p-4">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col relative">
            <Image
              src="/placeholder.png"
              alt="Placeholder Image"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
