const monthYearFormatter = new Intl.DateTimeFormat("es-MX", { month: "long", year: "numeric" });

const formatMonthYear = (isoDate: string) => {
    const parts = monthYearFormatter.formatToParts(new Date(`${isoDate}T00:00:00`));
    const month = parts.find((part) => part.type === "month")?.value ?? "";
    const year = parts.find((part) => part.type === "year")?.value ?? "";
    return `${month.charAt(0).toUpperCase()}${month.slice(1)} ${year}`;
};

export const formatDateRange = (startDate: string, endDate: string | null) =>
    `${formatMonthYear(startDate)} – ${endDate ? formatMonthYear(endDate) : "Actualidad"}`;

export const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
