export const SwitchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
      <path d="M18 4l3 3l-3 3" />
      <path d="M3 7h5l7 10h6" />
      <path d="M18 20l3 -3l-3 -3" />
    </svg>
  );
};
