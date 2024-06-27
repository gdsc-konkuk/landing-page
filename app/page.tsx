import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <Button variant="destructive" size="lg" className="text-4xl">
      Jenkins Test!
    </Button>
  );
}
