"use client";
import { useState, useEffect } from "react";
const useFetchDolar = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDolar = async () => {
        try {
            const data = await fetch(
                "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
            );
            const res = await data.json();
            const dolarData = res.filter(
                (data) =>
                    data.casa.nombre === "Dolar Oficial" ||
                    data.casa.nombre === "Dolar Blue" ||
                    data.casa.nombre === "Dolar Bolsa"
            );
            setData(dolarData);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDolar();
    }, []);

    return {
        data,
        isLoading,
    };
};

export default useFetchDolar;
