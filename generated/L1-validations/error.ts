const errors = [
    { code: undefined, message: "Generic bad or invalid request error" },
    { code: undefined, message: "Cannot verify signature for request" },
    {
        code: undefined,
        message: "Valid city code needs to be passed for search",
    },
    { code: undefined, message: "Catalog refresh is invalid" },
    { code: undefined, message: "Cannot verify signature for response" },
    { code: undefined, message: "Cannot process stale request" },
    { code: undefined, message: "Provider not found" },
    { code: undefined, message: "Provider location not found" },
    { code: undefined, message: "Item not found" },
    {
        code: undefined,
        message: "Invalid response does not meet API contract specifications",
    },
    {
        code: undefined,
        message: "Order/fulfillment state is stale or not valid",
    },
    {
        code: undefined,
        message:
            "Callback received prior to ACK for request or out of sequence",
    },
    { code: undefined, message: "Callback received late, session timed out" },
    {
        code: undefined,
        message: "Cannot process response due to internal error, please retry",
    },
    { code: undefined, message: "Order validation failure" },
    {
        code: undefined,
        message:
            "Buyer App cannot confirm order as no response from Seller App",
    },
    {
        code: undefined,
        message: "Seller App terms and conditions not acceptable to Buyer App",
    },
    {
        code: undefined,
        message:
            "Order terminated as Seller App did not accept terms and conditions proposed by Buyer App",
    },
    {
        code: undefined,
        message: "Invalid request does not meet API contract specifications",
    },
    {
        code: undefined,
        message:
            "When Seller App is unable to find the provider ID sent by the Buyer App",
    },
    {
        code: undefined,
        message:
            "When Seller App is unable to find the provider location ID sent by the Buyer App",
    },
    {
        code: undefined,
        message:
            "When Seller App is unable to find the provider category ID sent by the Buyer App",
    },
    {
        code: undefined,
        message: "Unable to find details for item, may have been deleted",
    },
    { code: undefined, message: "Return reason is invalid" },
    {
        code: undefined,
        message:
            "Seller App cannot confirm order as no response from Buyer App",
    },
    {
        code: undefined,
        message: "Cannot process request due to internal error, please retry",
    },
    { code: undefined, message: "Order validation failure" },
    { code: undefined, message: "Payment fails" },
    { code: undefined, message: "Generic business error" },
    {
        code: undefined,
        message:
            "Order terminated as Buyer App did not accept terms proposed by Seller App",
    },
    {
        code: 20006,
        message: "Invalid response does not meet API contract specifications",
    },
    {
        code: 30000,
        message: "Invalid request does not meet API contract specifications",
    },
];

export function getError(code: number) {
    const error = errors.find((error) => error.code === code);
    if (!error) {
        throw new Error(`Error code ${code} not found`);
    }
    return error;
}
