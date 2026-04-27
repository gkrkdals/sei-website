'use client';

interface ScrollButtonProps {
  targetId: string;
  label: string;
  className?: string;
}

export default function ScrollButton({ targetId, label, className }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
