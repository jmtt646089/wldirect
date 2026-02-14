
const onlinePaymentsSdk = require('onlinepayments-sdk-nodejs');


const merchantId = 'JMI';


const directSdk = onlinePaymentsSdk.init({
    integrator: merchantId, // is merchantId property missed
    host: 'payment.preprod.direct.worldline-solutions.com', // or name it apiEndpoint
    scheme: 'https', 
    port: 443, 
    enableLogging: true, 
    logger: logger, 
    apiKeyId: '[your-api-key-id]',
    secretApiKey: '[your-secret-api-key]'
});



const sdkResponse = await directSdk.hostedCheckout.createHostedCheckout(
    merchantId,
    {
        order: {
            amountOfMoney: {
                currencyCode: "USD",
                amount: 2345,
            },
            customer: {
                merchantCustomerId: "1234",
                billingAddress: {
                    countryCode: "US",
                },
            },
        },

        hostedCheckoutSpecificInput: {
            variant: "testVariant",
            locale: "en_GB",
        },
    },

    {}
);

const partialRedirectUrl = sdkResponse.partialRedirectUrl;
const baseUrl = "https://payment.";
reUrl = baseUrl + partialRedirectUrl;

// perform a redirection of your customer to this URL
