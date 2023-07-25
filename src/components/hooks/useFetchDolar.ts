"use client";
import { fetchData } from "@/helpers/fetchData";
import { useState, useEffect } from "react";
const useFetchDolar = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const { dolarFiltered, isLoading } = await fetchData();
        setData(dolarFiltered);
        setIsLoading(isLoading);
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        data,
        isLoading,
    };
};

export default useFetchDolar;
