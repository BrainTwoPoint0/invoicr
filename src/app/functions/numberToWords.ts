export function numberToWords(num: number): string {
    if (num === 0) return "ZERO";

    const underTwenty = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN",
        "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN",
        "EIGHTEEN", "NINETEEN"];
    const tens = ["TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"];
    const scales = ["THOUSAND", "MILLION", "BILLION"]; // Extend with "TRILLION", etc., as needed.

    function convert(n: number): string {
        if (n < 20) return underTwenty[n - 1] || "";
        if (n < 100) return tens[Math.floor(n / 10) - 2] + (n % 10 !== 0 ? " " + convert(n % 10) : "");
        if (n < 1000) return convert(Math.floor(n / 100)) + " HUNDRED" + (n % 100 !== 0 ? " " + convert(n % 100) : "");
        for (let i = 0, s = 1000; i < scales.length; i++, s *= 1000) {
            if (n < s * 1000) {
                return convert(Math.floor(n / s)) + " " + scales[i] + (n % s !== 0 ? " " + convert(n % s) : "");
            }
        }
        return "";
    }

    return convert(num);
}