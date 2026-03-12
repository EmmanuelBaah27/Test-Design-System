import { Meta } from "@storybook/react";
import { Plus, Trash, ArrowRight, Warning } from "@phosphor-icons/react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "secondary-destructive",
        "tertiary-destructive",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "icon"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right", "only"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

// ─── Single variant stories (Playground) ─────────────────────────────────────

export const Primary = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Tertiary = {
  args: {
    children: "Button",
    variant: "tertiary",
  },
};

export const Destructive = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const SecondaryDestructive = {
  args: {
    children: "Button",
    variant: "secondary-destructive",
  },
};

export const TertiaryDestructive = {
  args: {
    children: "Button",
    variant: "tertiary-destructive",
  },
};

export const Small = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Loading = {
  args: {
    children: "Button",
    loading: true,
  },
};

export const IconLeft = {
  args: {
    children: "Button",
    icon: <Plus weight="bold" />,
    iconPosition: "left",
  },
};

export const IconRight = {
  args: {
    children: "Button",
    icon: <Plus weight="bold" />,
    iconPosition: "right",
  },
};

export const IconOnly = {
  args: {
    children: "Add",
    icon: <Plus weight="bold" />,
    iconPosition: "only",
  },
};

// ─── Stress test: All Variants ────────────────────────────────────────────────

export const AllVariants = {
  name: "Stress — All Variants",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <section>
        <h2 className="mb-4 text-lg font-semibold text-neutral-900">
          Variants
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="secondary-destructive">Secondary Destructive</Button>
          <Button variant="tertiary-destructive">Tertiary Destructive</Button>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-neutral-900">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="icon" icon={<Plus weight="bold" />}>
            Add
          </Button>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-neutral-900">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-neutral-900">
          With Icons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button icon={<Plus weight="bold" />} iconPosition="left">
            Icon Left
          </Button>
          <Button icon={<Plus weight="bold" />} iconPosition="right">
            Icon Right
          </Button>
          <Button
            icon={<Plus weight="bold" />}
            iconPosition="only"
            children="Add"
          />
        </div>
      </section>
    </div>
  ),
};

// ─── Stress test: Disabled per variant ───────────────────────────────────────

export const DisabledStates = {
  name: "Stress — Disabled (All Variants)",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Each variant must render the correct disabled appearance — muted text,
        no hover/focus effects, pointer-events blocked.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="tertiary" disabled>Tertiary</Button>
        <Button variant="destructive" disabled>Destructive</Button>
        <Button variant="secondary-destructive" disabled>Sec. Destructive</Button>
        <Button variant="tertiary-destructive" disabled>Tert. Destructive</Button>
      </div>
    </div>
  ),
};

// ─── Stress test: Loading per variant ────────────────────────────────────────

export const LoadingStates = {
  name: "Stress — Loading (All Variants)",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Loading replaces icon and label with a spinner. Button width should
        stay stable (min-width applied). All variants should spin correctly.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" loading>Primary</Button>
        <Button variant="secondary" loading>Secondary</Button>
        <Button variant="tertiary" loading>Tertiary</Button>
        <Button variant="destructive" loading>Destructive</Button>
        <Button variant="secondary-destructive" loading>Sec. Destructive</Button>
        <Button variant="tertiary-destructive" loading>Tert. Destructive</Button>
      </div>
    </div>
  ),
};

// ─── Stress test: Loading per size ───────────────────────────────────────────

export const LoadingSizes = {
  name: "Stress — Loading (All Sizes)",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Loading spinner size and min-width differ between default (20px icon,
        92px min-width) and sm (16px icon, 76px min-width). Icon size has no
        loading state — icon-only buttons should not show a loading state.
      </p>
      <div className="flex items-center gap-4">
        <Button size="default" loading>Save changes</Button>
        <Button size="sm" loading>Save</Button>
      </div>
    </div>
  ),
};

// ─── Stress test: Icon combos per size ───────────────────────────────────────

export const IconCombosAllSizes = {
  name: "Stress — Icons × Sizes",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Padding and gap differ by size. Verify correct spacing for each
        combination.
      </p>
      <section>
        <h3 className="mb-3 text-sm font-semibold text-neutral-700">Default size</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button icon={<Plus weight="bold" />} iconPosition="left">Left</Button>
          <Button icon={<Plus weight="bold" />} iconPosition="right">Right</Button>
          <Button icon={<Plus weight="bold" />} iconPosition="only">Add</Button>
          <Button size="icon" icon={<Plus weight="bold" />}>Add</Button>
        </div>
      </section>
      <section>
        <h3 className="mb-3 text-sm font-semibold text-neutral-700">Small size</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm" icon={<Plus weight="bold" />} iconPosition="left">Left</Button>
          <Button size="sm" icon={<Plus weight="bold" />} iconPosition="right">Right</Button>
          <Button size="sm" icon={<Plus weight="bold" />} iconPosition="only">Add</Button>
        </div>
      </section>
    </div>
  ),
};

// ─── Stress test: Icon combos per variant ────────────────────────────────────

export const IconCombosAllVariants = {
  name: "Stress — Icons × Variants",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Icons should inherit the correct color from each variant's text color.
      </p>
      {[
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "secondary-destructive",
        "tertiary-destructive",
      ].map((variant) => (
        <div key={variant} className="flex flex-wrap items-center gap-4">
          <span className="w-44 text-xs text-neutral-500">{variant}</span>
          <Button variant={variant} icon={<Plus weight="bold" />} iconPosition="left">Left</Button>
          <Button variant={variant} icon={<Plus weight="bold" />} iconPosition="right">Right</Button>
          <Button variant={variant} icon={<Plus weight="bold" />} iconPosition="only">Add</Button>
        </div>
      ))}
    </div>
  ),
};

// ─── Stress test: Icon default position ──────────────────────────────────────

export const IconDefaultPosition = {
  name: "Stress — Icon Without iconPosition (defaults to left)",
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <p className="text-sm text-neutral-500">
        When an icon is provided without an explicit iconPosition, it defaults
        to "left". This is an implicit behavior that should be visible.
      </p>
      <Button icon={<Plus weight="bold" />}>No iconPosition prop</Button>
    </div>
  ),
};

// ─── Stress test: Icon-only accessibility ────────────────────────────────────

export const IconOnlyAccessibility = {
  name: "Stress — Icon-Only (Accessibility)",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Icon-only buttons require accessible labels. When{" "}
        <code>children</code> is a string, it becomes the{" "}
        <code>aria-label</code>. When no children is provided, no label is set
        — inspect the DOM to verify.
      </p>
      <div className="flex flex-wrap gap-4">
        {/* ✅ aria-label set — children is a string */}
        <Button
          icon={<Plus weight="bold" />}
          iconPosition="only"
          title="Has aria-label from children string"
        >
          Add item
        </Button>
        {/* ⚠️ No aria-label — no children provided */}
        <Button
          icon={<Trash weight="bold" />}
          iconPosition="only"
          title="Missing aria-label — no children"
        />
        {/* ⚠️ No aria-label — children is a React node, not a string */}
        <Button
          icon={<ArrowRight weight="bold" />}
          iconPosition="only"
          title="Missing aria-label — children is a React node"
        >
          <span>Go</span>
        </Button>
      </div>
      <p className="text-xs text-neutral-400">
        Hover each button to see the title. Inspect the DOM to check
        aria-label. The second and third buttons are accessibility gaps.
      </p>
    </div>
  ),
};

// ─── Stress test: Long text truncation ───────────────────────────────────────

export const LongTextTruncation = {
  name: "Stress — Long Text (Truncation)",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        The button uses <code>truncate</code>. Text that overflows the
        button's width should be cut with an ellipsis, not wrap.
      </p>
      <div className="flex flex-col gap-4">
        <Button variant="primary">
          This is a very long button label that should be truncated
        </Button>
        <Button variant="secondary" icon={<Plus weight="bold" />} iconPosition="left">
          Submit and save all changes to the record
        </Button>
        <Button variant="destructive" icon={<Warning weight="bold" />} iconPosition="left">
          Permanently delete all selected items
        </Button>
      </div>
    </div>
  ),
};

// ─── Stress test: Disabled + Loading simultaneously ──────────────────────────

export const DisabledAndLoading = {
  name: "Stress — Disabled + Loading Simultaneously",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Both <code>disabled</code> and <code>loading</code> passed at once.
        The component ORs them for the HTML <code>disabled</code> attribute.
        Visual result should match the loading state (spinner shown), with
        the button non-interactive.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button disabled loading>Primary</Button>
        <Button variant="secondary" disabled loading>Secondary</Button>
        <Button variant="destructive" disabled loading>Destructive</Button>
      </div>
    </div>
  ),
};

// ─── Stress test: Loading hides icon ─────────────────────────────────────────

export const LoadingHidesIcon = {
  name: "Stress — Loading Overrides Icon",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        When <code>loading=true</code>, the icon is hidden and replaced by a
        spinner regardless of <code>iconPosition</code>. Confirm the icon does
        not appear alongside the spinner.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button icon={<Plus weight="bold" />} iconPosition="left" loading>
          With icon left
        </Button>
        <Button icon={<Plus weight="bold" />} iconPosition="right" loading>
          With icon right
        </Button>
        <Button icon={<Plus weight="bold" />} iconPosition="only" loading>
          Add
        </Button>
      </div>
    </div>
  ),
};

// ─── Stress test: Form button types ──────────────────────────────────────────

export const FormButtonTypes = {
  name: "Stress — Form Button Types",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        Buttons inside forms can be <code>submit</code>, <code>reset</code>, or{" "}
        <code>button</code>. Verify the component passes through the{" "}
        <code>type</code> attribute correctly.
      </p>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted");
        }}
        onReset={() => alert("Form reset")}
      >
        <input
          className="border border-neutral-300 rounded px-3 py-2 text-sm"
          placeholder="Type something..."
        />
        <div className="flex gap-4">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
          <Button type="button" variant="tertiary">Button (no submit)</Button>
        </div>
      </form>
    </div>
  ),
};

// ─── Stress test: No children, no icon ───────────────────────────────────────

export const EmptyButton = {
  name: "Stress — Empty Button (No Children, No Icon)",
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <p className="text-sm text-neutral-500">
        A button rendered with no children and no icon. Should render an empty
        but sized button — not crash.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button size="sm" />
      </div>
    </div>
  ),
};

// ─── Stress test: size="icon" correct usage ───────────────────────────────────

export const IconSizeCorrect = {
  name: "Stress — size=icon (Correct Usage)",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm text-neutral-500">
        <code>size="icon"</code> forces <code>iconPosition="only"</code>{" "}
        internally. Always pass an <code>icon</code> prop and an accessible{" "}
        <code>children</code> string for the aria-label.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button size="icon" icon={<Plus weight="bold" />}>Add</Button>
        <Button size="icon" icon={<Trash weight="bold" />} variant="destructive">Delete</Button>
        <Button size="icon" icon={<ArrowRight weight="bold" />} variant="secondary">Next</Button>
      </div>
    </div>
  ),
};
