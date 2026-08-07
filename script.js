function work() {
    const div = document.querySelector("#text");
    const url = "https://catfact.ninja/fact";

    async function getfacts() {
        try {
            console.log(" Calling fetch()");
            const p1 = fetch(url);
            console.log(" fetch(url) returned:", p1);

            const response = await p1;
            console.log(" await fetch(url) resolved:", response);

            console.log(" Calling response.json()");
            const p2 = response.json();
            console.log(" response.json() returned:", p2);

            const data = await p2;
            console.log(" await response.json() resolved:", data);

            console.log(" Fact:", data.fact);
            div.innerText = data.fact;

        } catch (e) {
            console.log("❌ Error occurred:", e);
        }
    }

    getfacts();
}
