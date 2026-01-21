function work() {
    const div = document.querySelector("#text");
    const url = "https://catfact.ninja/fact";

    async function getfacts() {
        try {
            console.log("1️⃣ Calling fetch()");
            const p1 = fetch(url);
            console.log("2️⃣ fetch(url) returned:", p1);

            const response = await p1;
            console.log("3️⃣ await fetch(url) resolved:", response);

            console.log("4️⃣ Calling response.json()");
            const p2 = response.json();
            console.log("5️⃣ response.json() returned:", p2);

            const data = await p2;
            console.log("6️⃣ await response.json() resolved:", data);

            console.log("7️⃣ Fact:", data.fact);
            div.innerText = data.fact;

        } catch (e) {
            console.log("❌ Error occurred:", e);
        }
    }

    getfacts();
}
