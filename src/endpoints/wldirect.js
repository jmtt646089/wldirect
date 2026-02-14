
const onlinePaymentsSdk = require('onlinepayments-sdk-nodejs');

const directSdk = onlinePaymentsSdk.init({
    integrator: 'JMI',
    host: 'payment.preprod.direct.worldline-solutions.com', 
    scheme: 'https', 
    port: 443, 
    enableLogging: true, 
    logger: logger, 
    apiKeyId: '[your-api-key-id]',
    secretApiKey: '[your-secret-api-key]'
});
