window.addEventListener('load', function() {

    var webAuth = new auth0.WebAuth({
        domain: 'shelden.auth0.com',
        clientID: 'l5sIsx33ZZCKQOL6Q95nbFbVp30m3m4W',
        responseType: 'token id_token',
        audience: 'https://shelden.auth0.com/userinfo',
        scope: 'openid',
        redirectUri: window.location.href
    });

    var loginBtn = document.getElementById('btn-login');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        webAuth.authorize();
    });

});