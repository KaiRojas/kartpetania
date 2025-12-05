import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import LocationSection from '@/components/LocationSection';
import Reviews from '@/components/Reviews';
import VideoGallery from '@/components/VideoGallery';
import HomeContent from '@/components/HomeContent';
import UpcomingEvents from '@/components/UpcomingEvents';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <Hero />
      <HomeContent />
      <UpcomingEvents />
      <Reviews />
      <VideoGallery />
      <Gallery />
      <LocationSection />
    </main>
  );
}
