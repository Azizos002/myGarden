'use client';

import Image from 'next/image';
import { useState } from 'react';

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border">
      <Image src={before} alt="Before garden" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
        <Image src={after} alt="After garden" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <input
        type="range"
        min={10}
        max={90}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute bottom-4 left-1/2 w-[80%] -translate-x-1/2"
        aria-label="Before and after slider"
      />
    </div>
  );
}
