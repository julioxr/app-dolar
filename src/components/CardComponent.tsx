"use client";
import useFetchDolar from "@/components/hooks/useFetchDolar";
import SpinnerComponent from "./SpinnerComponent";

const CardComponent = () => {
    const { data, isLoading } = useFetchDolar();

    return (
        <>
            {isLoading ? (
                <SpinnerComponent />
            ) : (
                data &&
                data.map((data) => (
                    <section
                        className="flex flex-col items-center max-w-lg w-full px-12"
                        key={data.casa.nombre}
                    >
                        <h2 className="text-2xl font-semibold w-full bg-emerald-300 rounded-t-lg p-2 flex justify-center">
                            {data.casa.nombre}
                        </h2>
                        <section className="flex py-6 shadow-lg justify-center gap-6 bg-emerald-400 w-full rounded-b-md">
                            <div className="bg-emerald-300 p-8 rounded-lg flex flex-col items-center gap-2">
                                <h3 className="text-xl font-medium">Compra</h3>
                                <h3 className="font-bold text-4xl">
                                    ${data.casa.venta.split(",")[0]}
                                </h3>
                            </div>
                            <div className="bg-emerald-300 p-8 rounded-lg flex flex-col items-center gap-2">
                                <h3 className="text-xl font-medium">Venta</h3>
                                <h3 className="font-bold text-4xl">
                                    ${data.casa.venta.split(",")[0]}
                                </h3>
                            </div>
                        </section>
                    </section>
                ))
            )}
        </>
    );
};

export default CardComponent;
