'use client';

import dynamic from 'next/dynamic';

const GameScene = dynamic(() => import('@/components/GameScene'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-2xl">Loading game...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <GameScene />
    </main>
  );
}