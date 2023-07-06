export function CookiesUtils({cookies, salary, payFrequency, hours, hourFrequency,
                             changeSalary, changePayFrequency, changeHours, changeHourFrequency,}) {

    // Set domain of cookie (localhost when testing)
    const isLocalhost = window.location.hostname === 'localhost';
    const domain = isLocalhost ? 'localhost' : 'jarrenwhite.github.io';
    const salaryCookie = 'settings-cookie'

    let cookieRead = true
    const readCookie = () => {
        // Prevent rerunning the function
        if (cookieRead) {
            return;
        } else {
            cookieRead = true;
        }

        const cookieList = document.cookie.split(';');

        if (cookieList.length > 0 && cookieList[0].startsWith(salaryCookie + '=')) {
            const salaryCookieValues = cookieList[0].substring(salaryCookie.length + 1);
            console.log(JSON.parse(decodeURIComponent(salaryCookieValues)))

        }
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

        cookies.set(salaryCookie, cookieString, { domain: domain, path: '/', secure: true, sameSite: 'strict' });
    }

    return {
        updateCookie,
        readCookie,
    }
}