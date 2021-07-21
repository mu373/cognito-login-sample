let CognitoRegion = 'ap-northeast-1';
let CognitoUserPool = 'ap-northeast-1_xxxxxxxx';
let CognitoUserPoolClient = 'xxxxxxxxxxxxxx';

let CognitoDomainPrefix = 'xxxxxxxxxxxxxx';

let amplifyConfig = {
    Auth: {
        region: CognitoRegion,
        userPoolId: CognitoUserPool,
        userPoolWebClientId : CognitoUserPoolClient,
        oauth: {
            domain: `${CognitoDomainPrefix}.auth.${CognitoRegion}.amazoncognito.com`,
			scope: ['openid'],
            redirectSignIn: 'http://localhost:8080',
            redirectSignOut: 'http://localhost:8080',
            responseType: 'code'
        }
    }
};

export default amplifyConfig;