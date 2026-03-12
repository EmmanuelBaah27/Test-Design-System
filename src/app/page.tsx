import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Chip } from "@/components/atoms/Chip";
import { InputWithLabel } from "@/components/molecules/InputWithLabel";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 p-10 font-sans">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">
        <div>
          <h1 className="text-H1 text-neutral-black mb-1">Mande Design System</h1>
          <p className="text-base-regular text-neutral-500">Component playground — build your UIs here.</p>
        </div>

        {/* Buttons */}
        <section className="flex flex-col gap-4">
          <h2 className="text-H3 text-neutral-black">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="secondary" size="sm">Small Secondary</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="flex flex-col gap-4">
          <h2 className="text-H3 text-neutral-black">Inputs</h2>
          <Input placeholder="Enter your email" />
          <Input placeholder="Disabled input" disabled />
        </section>

        {/* InputWithLabel */}
        <section className="flex flex-col gap-4">
          <h2 className="text-H3 text-neutral-black">Input with Label</h2>
          <InputWithLabel label="Email address" placeholder="you@example.com" />
          <InputWithLabel label="Password" placeholder="••••••••" type="password" />
        </section>

        {/* Labels */}
        <section className="flex flex-col gap-4">
          <h2 className="text-H3 text-neutral-black">Labels</h2>
          <div className="flex gap-3">
            <Label>Default Label</Label>
          </div>
        </section>

        {/* Checkboxes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-H3 text-neutral-black">Checkboxes</h2>
          <div className="flex gap-4">
            <Checkbox id="check1" />
            <Checkbox id="check2" defaultChecked />
            <Checkbox id="check3" disabled />
          </div>
        </section>

        {/* Chips */}
        <section className="flex flex-col gap-4">
          <h2 className="text-H3 text-neutral-black">Chips</h2>
          <div className="flex flex-wrap gap-3">
            <Chip>Default</Chip>
          </div>
        </section>
      </div>
    </div>
  );
}
