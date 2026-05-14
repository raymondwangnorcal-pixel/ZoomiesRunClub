export type SampleEvent = {
  title: string;
  label: string;
  detail: string;
  pace: string;
};

export const sampleEvents: SampleEvent[] = [
  {
    title: "Community run",
    label: "Sample event format",
    detail: "Meet spot, route notes, and RSVP details live on Pie.",
    pace: "Walk, jog, run",
  },
  {
    title: "Themed meetup",
    label: "Sample event format",
    detail: "Theme, partner details, and limited spots are announced first on Substack.",
    pace: "Show up as you are",
  },
  {
    title: "Post-run hang",
    label: "Sample event format",
    detail: "After-run plans are shared with the event details when they are ready.",
    pace: "Stay for the community",
  },
];
