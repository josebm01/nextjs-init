import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Página de Contacto',
    keywords: ['Contact', 'Jose', 'Información']
}

export default function ContactPage() {
    return (
        <span className="text-7xl">Contact Page</span>
    )
}
