export function CookiesUtils(cookies, salary, payFrequency, hours, hourFrequency) {

    // Set domain of cookie (localost when testing)
    const isLocalhost = window.location.hostname === 'localhost';
    const domain = isLocalhost ? 'localhost' : 'jarrenwhite.github.io';

    const readCookie = () => {
        console.log('Once on launches');
    }

    const updateCookie = () => {
        // If either are empty, don't proceed
        if (salary === '' || hours === '') {
            return;
        }

        // Creat cookie as an array
        const cookieArray = {
            salary: salary,
            payFrequency: payFrequency,
            hours: hours,
            hourFrequency: hourFrequency,
        }

        // Serialise content of cookie
        const cookieString = JSON.stringify(cookieArray);
        console.log(cookieArray);
        console.log(cookieString);

        cookies.set('settings-cookie', cookieString, { domain: domain, path: '/', secure: true });
    }

    return {
        updateCookie,
        readCookie,
    }
}