// src/components/ui/Textarea.tsx
import { cn } from '@/shared/lib/utils/cn';

const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={cn(
        'w-full p-4 text-sm border border-gray-500 rounded-xl resize-none outline-none focus:ring-2 focus:ring-black transition-all',
        'placeholder:text-xs xs:placeholder:text-sm',
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
