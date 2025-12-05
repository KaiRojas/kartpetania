import { useTranslations } from 'next-intl';

export default function PromotionDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Promotion: {params.slug}</h1>
            <p>Content coming soon...</p>
        </div>
    );
}
