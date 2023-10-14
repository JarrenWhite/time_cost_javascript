export function CookiesUtils({cookies, salary, payFrequency, hours, hourFrequency,
                             changeSalary, changePayFrequency, changeHours, changeHourFrequency,
                                 denyCookies, setDenyCookies, predictTax, changePredictTax}) {

    // Set domain of cookie (localhost when testing)
    const linux_testing = 'localhost';
    const windows_testing = '127.0.0.1';
    const deployment_version = 'jarrenwhite.github.io';

    const isLinuxHost = window.location.hostname === '127.0.0.1';
    const isWindowsHost = window.location.hostname === '127.0.0.1';

    let domain = isLinuxHost ? linux_testing : deployment_version;
    domain = isWindowsHost ? windows_testing : deployment_version;

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
                if (salaryCookieValues.useTaxEstimate) {
                    changePredictTax();
                }

                break;
            }
        }
    }

    // Function to manage getting cookie permission
    const askPermission = () => {
        const result = window.confirm('This site uses cookies to improve your experience.\n' +
            'They just store your selections for faster setup next time.\n' +
            'Are you willing to receive them?');
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
            useTaxEstimate: predictTax,
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