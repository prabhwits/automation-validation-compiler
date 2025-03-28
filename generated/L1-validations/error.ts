const errors = [
    {
        code: 23001,
        message: "Cannot process response due to internal error, please retry",
    },
    { code: 23002, message: "Order validation failure" },
    {
        code: 25001,
        message:
            "Buyer App cannot confirm order as no response from Seller App",
    },
    {
        code: 27501,
        message: "Seller App terms and conditions not acceptable to Buyer App",
    },
    {
        code: 27502,
        message:
            "Order terminated as Seller App did not accept terms and conditions proposed by Buyer App",
    },
    {
        code: 30000,
        message: "Invalid request does not meet API contract specifications",
    },
    {
        code: 30001,
        message:
            "When Seller App is unable to find the provider id sent by the Buyer App",
    },
    {
        code: 30002,
        message:
            "When Seller App is unable to find the provider location id sent by the Buyer App",
    },
    {
        code: 30003,
        message:
            "When Seller App is unable to find the provider category id sent by the Buyer App",
    },
    {
        code: 30004,
        message: "Unable to find details for item, may have been deleted",
    },
    { code: 30005, message: "Return reason is invalid" },
    { code: 30006, message: "Offer code is not valid anymore" },
    { code: 30007, message: "Offer cannot be fulfilled at this time" },
    {
        code: 30008,
        message: "Pickup location not serviceable by Logistics Provider",
    },
    {
        code: 30009,
        message: "Dropoff location not serviceable by Logistics Provider",
    },
    {
        code: 30010,
        message:
            "Delivery distance exceeds the maximum serviceability distance",
    },
    { code: 30011, message: "Delivery Partners not available" },
    { code: 30012, message: "Cancellation reason is invalid" },
    {
        code: 30013,
        message: "Fulfillment TAT is different from what was quoted earlier",
    },
    {
        code: 30014,
        message:
            "Cancellation request is rejected as fulfillment TAT is not breached",
    },
    {
        code: 30015,
        message:
            "When the Seller App receives an invalid value as the rating value in value",
    },
    { code: 30016, message: "Cannot verify signature for request" },
    { code: 30017, message: "Merchant is currently not taking orders" },
    { code: 30018, message: "Order not found" },
    { code: 30019, message: "Seller App is unable to confirm the order" },
    {
        code: 30020,
        message:
            "Seller App cannot confirm order as no response from Buyer App",
    },
    { code: 30021, message: "Merchant is inactive" },
    { code: 30022, message: "Cannot process stale request" },
    { code: 30023, message: "Cart value is less than minimum order value" },
    {
        code: 31001,
        message: "Cannot process request due to internal error, please retry",
    },
    { code: 31002, message: "Order validation failure" },
    { code: 31003, message: "Order processing in progress" },
    { code: 31004, message: "Payment fails" },
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
