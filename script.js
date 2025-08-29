


document.getElementById("claimAirdropBtt").onclick = async () => {
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://<YOUR_APP_URL>/tonconnect-manifest.json',
        buttonRootId: 'ton-connect'
    });
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: "EQABa48hjKzg09hN_HjxOic7r8T1PleIy1dRd8NvZ3922MP0", // destination address
                amount: "20000000" //Toncoin in nanotons
            }
        ]
    }

    const result = await tonConnectUI.sendTransaction(transaction)
}
