if (document.readyState !== 'loading') {
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        myInitCode();
    });
}

function myInitCode() {
    const graphRootContainer = document.querySelector("#root > div > div.sc-fYxtnH.dBizAF > div > div.sc-bdVaJa.sc-bMvGRv.fUYXgU > div > div:nth-child(1) > div > div > div.sc-dUjcNx.hrbEwZ.sc-fYiAbW.biLepa");
    graphRootContainer.style.height = "calc(100vh - 100px)";

    const graphSubContainer = document.querySelector("#root > div > div.sc-fYxtnH.dBizAF > div > div.sc-bdVaJa.sc-bMvGRv.fUYXgU > div > div:nth-child(1) > div > div > div.sc-dUjcNx.hrbEwZ.sc-fYiAbW.biLepa > div.sc-bdVaJa.sc-fhYwyz.eKbcJp");
    graphSubContainer.style.height = "calc(100vh - 100px)";

    tryAddMarginToFooter()
}

function tryAddMarginToFooter() {
    const maxRetries = 5;
    const retries = 0;

    const disposable = setInterval(() => {
        try {
            const footer = document.querySelector("#root > div > div.sc-fYxtnH.dBizAF > section");
            footer.style.marginTop = "352px";
            clearInterval(disposable);
            console.info(`retry ${retries} succeeded`);
        } catch (e) {
            retries++;
            if (retries == maxRetries) {
                clearInterval(disposable);
                console.info(`wazirx-graph-fit-window plugin failed to set footer after retrying maxRetries`)
            }
        }
    }, 1000)
}