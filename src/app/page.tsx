import CardComponent from "@/components/CardComponent";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-emerald-200 text-stone-800">
            <header className="text-4xl">
                <h1 className="font-bold">Precios del Dolar</h1>
            </header>
            <CardComponent />
        </main>
    );
}
