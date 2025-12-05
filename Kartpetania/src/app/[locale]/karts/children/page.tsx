import { useTranslations } from 'next-intl';

export default function ChildrensKartsPage() {
    const t = useTranslations('Karts');

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Children's Kart Rental</h1>
            <p>Content coming soon...</p>
        </div>
    );
}
