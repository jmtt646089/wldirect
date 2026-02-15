
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

async function main() {
  const response = await fetch(reUrl); //, {
   // method: 'POST',
   // headers: {
   //   'User-Agent': 'undici-stream-example',
   //   'Content-Type': 'application/json',
    //},
    // body: JSON.stringify(body),
  //});
  const data = await response.json();
  console.log(data);
  // returns something like:
  // { title: 'foo', body: 'bar', userId: 1, id: 101 }
}

main().catch(console.error);


// In Node.js, URL redirection is handled on the server side by sending an HTTP redirect status code to 
// the client (browser), which then navigates to the new URL. 
// The method depends on whether you are using a web framework like Express.js or the built-in http module. 
