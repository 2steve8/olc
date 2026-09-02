type FeatureCardProps = {
    title: string
    description: string
    number: string
}

export default function FeatureCard({
    title,
    description,
    number
}: FeatureCardProps) {
    return(
        <article className="rounded-2x1 border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                {number}
            </div>

            <h3 className="mb-3 text-xl font-bold text-gray-900">
                {title}
            </h3>

            <p className="leading-7 text-gray-600">
                {description}
            </p>
        </article>
    )
}