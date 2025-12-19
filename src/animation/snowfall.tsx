'use client';

import Snowfall from 'react-snowfall';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemedSnowfall() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Snowfall
      color={resolvedTheme === 'dark' ? '#ffffff' : '#1e90ff'}
      snowflakeCount={100}
    />
  );
}
