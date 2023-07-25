export const fetchData = async () => {
    try {
        const response = await fetch(
            "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
        );
        const data = await response.json();
        const dolarFiltered = data.filter(
            (item) =>
                item.casa.nombre === "Dolar Blue" ||
                item.casa.nombre === "Dolar Bolsa" ||
                item.casa.nombre === "Dolar Oficial"
        );
        return {
            dolarFiltered,
            isLoading: false,
        };
    } catch (error) {
        console.log(error);
    }
};
