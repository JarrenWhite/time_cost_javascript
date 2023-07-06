export function CookiesUtils({cookies, salary, payFrequency, hours, hourFrequency,
                             changeSalary, changePayFrequency, changeHours, changeHourFrequency,
                                 denyCookies, setDenyCookies}) {

    // Set domain of cookie (localhost when testing)
    const isLocalhost = window.location.hostname === 'localhost';
    const domain = isLocalhost ? 'localhost' : 'jarrenwhite.github.io';
    const salaryCookie = 'settings-cookie'
    const consentCookie = 'consent-cookie'

    let cookieRead = false
    const readCookie = () => {
        // Prevent rerunning the function
        if (cookieRead) {
            return;
        } else {
            cookieRead = true;
        }

        // If no cookies exist, check for cookie consent
        const cookie = document.cookie;
        if (!cookie) {
            askPermission();
            return;
        } else {
            setDenyCookies(false);
        }

        // Check each cookie to find salary cookie & extract info
        const cookieList = cookie.split('; ');
        for (const cookieItem of cookieList) {
            if (cookieItem.startsWith(salaryCookie + '=')) {
                // If cookie is correct, collect information
                const salaryCookieString = cookieItem.substring(salaryCookie.length + 1);
                const salaryCookieValues = JSON.parse(decodeURIComponent(salaryCookieString));

                // Set values by cookies
                changeSalary(salaryCookieValues.salary);
                changePayFrequency(salaryCookieValues.payFrequency);
                changeHours(salaryCookieValues.hours);
                changeHourFrequency(salaryCookieValues.hourFrequency);

                break;
            }
        }
    }

    // Function to manage getting cookie permission
    const askPermission = () => {
        const result = window.confirm('This site uses cookies to improve your experience.\nThey just store your selections for faster setup next time.\nAre you willing to receive them?');
        if (result) {
            setDenyCookies(false);
            cookies.set(consentCookie, 'Allow', { domain: domain, path: '/', secure: true, sameSite: 'strict' });
        }
    };

    const updateCookie = () => {
        // If either are empty, or cookies disallowed, don't proceed
        if (denyCookies || salary === '' || hours === '') {
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

        // Save cookie to browser
        cookies.set(salaryCookie, cookieString, { domain: domain, path: '/', secure: true, sameSite: 'strict' });
    }

    return {
        updateCookie,
        readCookie,
    }
}