import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Página de precios',
    keywords: ['Pricing', 'Jose', 'Información']
}

export default function PricingPage() {
    return (
        <span className="text-7xl">Pricing Page</span>
    )
}
