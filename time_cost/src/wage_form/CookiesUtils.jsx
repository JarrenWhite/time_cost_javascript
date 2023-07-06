export function CookiesUtils(cookies, salary, payFrequency, hours, hourFrequency,
                             changeSalary, changePayFrequency, changeHours, changeHourFrequency,) {

    // Set domain of cookie (localhost when testing)
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

        cookies.set('settings-cookie', cookieString, { domain: domain, path: '/', secure: true });
    }

    return {
        updateCookie,
        readCookie,
    }
}