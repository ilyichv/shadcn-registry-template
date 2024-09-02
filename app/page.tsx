import { Index } from "@/__registry__/index";
import { CopyCommandButton } from "@/components/copy-command-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as React from "react";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Awesome Component Registry
      </h1>
      <p className="text-muted-foreground text-sm">
        Below is a list of all the components available in the registry. Click
        on a component to copy the command to install it.
      </p>
      <Tabs defaultValue="default" className="w-full mt-8">
        <div className="flex items-center gap-4 items-center mb-4">
          <p className="text-muted-foreground text-sm">Styles:</p>
          <TabsList>
            {Object.keys(Index).map((style) => (
              <TabsTrigger key={style} value={style}>
                {style}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(Index).map(([style, components]) => (
          <TabsContent key={style} value={style}>
            <ul className="space-y-2">
              {Object.entries(components as Record<string, any>).map(
                ([key, component]) => (
                  <li
                    key={key}
                    className="flex items-center justify-between py-2 px-4 border rounded-md"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{component.name}</span>
                      <Badge variant="secondary">{component.type}</Badge>
                    </div>
                    <CopyCommandButton style={style} component={component} />
                  </li>
                ),
              )}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
