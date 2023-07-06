export function CookiesUtils(cookies, salary, payFrequency, hours, hourFrequency) {

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

        cookies.set('settings-cookie', cookieString, { path: '/' });
    }

    return {
        updateCookie,
    }
}