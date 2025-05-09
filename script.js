((async () => {
    const MAINURL = "https://server-production-bb76.up.railway.app/"//"http://localhost:3000/";

    const users = document.getElementById("users");
    const main = document.getElementById("main");
    const profile = document.getElementById("profile");
    const closePage = document.getElementById("closePage");
    let spinning = false;
    const sellOrReciveGift = document.getElementById("sellOrReciveGift");
    const giftToProfile = document.getElementById("giftToProfile");
    const getGift = document.getElementById("getGift");
    const blurEffect = document.getElementById("blurEffect");
    const depositPage = document.getElementById("depositPage");
    // const closePageDeposit = document.getElementById("closePageDeposit");
    const profileIdCopy = document.getElementById("profileIdCopy");
    const idInput = document.getElementById("idInput");
    const giftsUser = document.getElementById("giftsUser");
    const buttonSellOrRecive = document.getElementById("buttonSellOrRecive");
    const loading = document.getElementById("loading");
    const usersList = document.getElementById("usersList");
    const bodyElm = document.body;
    const fond = document.getElementById("fond");
    const fondAmount = document.getElementById("fondAmount");
    const fondMaxAmount = document.getElementById("fondMaxAmount");
    const fondImage = document.getElementById("fondImage");
    const sendElm = document.getElementById("send");
    let isDemo = false;
    let level = 0;
    let currentGift = null;
    let currentPrice = null;
    let selectedGiftIndex = null;
    const searchInput = document.getElementById("searchInput");
    const search = Telegram.WebApp.initData;
    const toFriend = document.getElementById("toFriend");
    const closeSendFriendPage = document.getElementById("closeSendFriendPage");
    // Telegram.WebApp.expand();
    function parseQuery(query) {
        const params = new URLSearchParams(query);
        const result = {};

        for (const [key, value] of params.entries()) {
            result[key] = value;
        }

        if (result.user) {
            try {
                result.user = JSON.parse(decodeURIComponent(result.user));
            } catch (e) {
                createMessage("ERROR parsing user " + e, 0);
                console.error("Ошибка при парсинге user JSON:", e);
            }
        }

        return result;
    }
    const spinButton = document.getElementById("spinButton");
    const demoButton = document.getElementById("demoButton");
    const rouletteItems = document.getElementById("rouletteItems");
    const userUIdata = parseQuery(search);
    const dialog = document.getElementById("dialog");
    function createMessage(text, type = 1){ //1 succes 0 error
        const div = document.createElement("div");
        div.className =  `message ${type ? "success" : "error"}`;
        div.innerText = text;
        dialog.appendChild(div);
        setTimeout(() => {
            div.style.opacity = '0';
        }, 3000)
        setTimeout(() => {
            dialog.removeChild(div);
        }, 4000)
    }
    if((userUIdata.user.username).trim().length <= 1){
        createMessage("Пожалуйста, создайте имя пользователя(username) в профиле Telegram.", 0);
        return;
    }


    function f(path, params = {}){
        return fetch(MAINURL + path, {
            method: "POST",
            headers: {
                "accept": "*/*",
                "content-type": "application/json"
            },
            body: JSON.stringify({ initData: search, ...params }),
            mode: "cors"
        });
    }
    let giftUser  = await f("user").then((e) => e.json()).catch((e) => {
        createMessage("USER AUTH ERROR", 0);
    })
    if(giftUser.status !== "ok"){
        createMessage("USER AUTH ERROR", 0);
        return;
    }
    async function fondSet(){
        let fondA  = await f("fond").then((e) => e.json());
        if(fondA.status !== "ok"){
            createMessage("SERVER ERROR", 0);
            return false;
        }
        const amount = fondA.data;
        let max = 50000;
        fondAmount.innerText = amount;
        fondMaxAmount.innerText = max;
        let backgroundFondImg = "emptyPig.png";
        if(amount >= max){
            backgroundFondImg = "fullPig.png";
        } else if(amount >= (max / 2)){
            backgroundFondImg = "fill_1_2_pig.png";
        } else if(amount > 0){
            backgroundFondImg = "fill_1_4_pig.png";
        }
        // console.log(backgroundFondImg)
        fondImage.style.backgroundImage = `url("./images/${backgroundFondImg}")`;
        return true;
    }
    if(!(await fondSet())){
        return;
    }
    giftUser = JSON.parse(giftUser.data);
    setTimeout( () => {
        bodyElm.style.overflow = "auto";
        loading.className = "hide";
    }, 2000)
    const dataGift = [
        {
            giftId: 1,
            price: 100,
        },
        {
            giftId: 2,
            price: 25,
        },
        {
            giftId: 3,
            price: 50,
        },
        {
            giftId: 4,
            price: 15,
        },
        {
            giftId: 5,
            price: 15,
        },
        {
            giftId: 6,
            price: 25,
        },
        {
            giftId: 7,
            price: 50,
        },
        {
            giftId: 8,
            price: 100,
        },
        {
            giftId: 9,
            price: 50,
        },
        {
            giftId: 10,
            price: 100,
        },
        {
            giftId: 11,
            price: 999,
            isNft: true
        },
        {
            giftId: 12,
            price: 50,
        },
    ];


    document.querySelector("form").onsubmit = (e) => {
        e.preventDefault();
        const text = searchInput.value.trim();
        searchUser(text);
    }
    searchInput.oninput = (e) => {
        if(!(searchInput.value.trim())){
            searchUser('');
        }
    }
    let page = "main";
    function closePages(){
        users.classList.add('hide');
        main.classList.add('hide');
        profile.classList.add('hide');
        fond.classList.add('hide');
    }
    closePages();
    openPage(page);
    function renderSearchPage(res){
        let html = "";
        for(let i = 0; i < res.length; i++){
            const t = res[i];
            // console.log(userUIdata.user.id, i.id)
            html += `<div class="user ${(t.id == userUIdata.user.id ? 'selected' : '')}">
                    <p>#${t.id}</p>
                    <div>
                        <p>${t.giftCount} Подарок</p>
                    </div>
                </div>`;
        }
        usersList.innerHTML = html;
    }
    function openPage(pageId){
        let el = document.getElementById(pageId);
        if(!el){
            page = "main";
            el = document.getElementById("main");
        }
        el.classList.remove('hide');
    }
    async function searchUser(s = ''){
        let res = await f("users", {search: +s}).then((e) => e.json());
        res = res.data;
        res.sort((a,b) => b.giftCount - a.giftCount);
        renderSearchPage(res);
    }
    searchUser();
    function renderFooter(){
        const footerButtons = document.getElementById("footerButtons");
        let html = document.createElement('div');
        html.className = "flex spaceAround";
        const data = [
            {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
    <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z"></path>
</svg>`,
                text: "Пользователи",
                ref: "users",
                fnc: async () => {
                    await searchUser();
                }
            },
            {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 465.548"><path d="M9.685 234.312h74.566c5.328 0 9.684 4.366 9.684 9.685v170.222c0 5.318-4.366 9.684-9.684 9.684H9.685c-5.319 0-9.685-4.359-9.685-9.684V243.997c0-5.329 4.359-9.685 9.685-9.685zM314.568 26.356c56.994 0 103.199 46.204 103.199 103.195 0 56.995-46.205 103.199-103.199 103.199s-103.195-46.204-103.195-103.199c0-56.991 46.201-103.195 103.195-103.195zm-3.883 95.742h20.081v15.857h-17.753c-.226 3.727-.904 7.093-2.056 10.095-.927 2.283-2.463 4.653-4.63 7.115 2.462-.542 4.584-.81 6.348-.81 2.257 0 5.193.427 8.807 1.287 4.948 1.129 8.9 1.691 11.859 1.691 2.416 0 4.518-.201 6.302-.608 1.807-.408 4.157-1.265 7.046-2.575l9.013 19.785c-4.359 2.171-8.198 3.684-11.518 4.518-3.3.838-6.845 1.245-10.638 1.245-4.157 0-8.88-.725-14.232-2.168-7.003-1.923-11.339-3.029-13.034-3.346a31.484 31.484 0 00-5.421-.45c-5.69 0-11.972 1.989-18.836 5.964l-8.586-18.839c9.307-6.64 13.961-13.283 13.961-19.922 0-.361-.046-1.357-.135-2.982h-13.826v-15.857h9.893c-1.671-5.806-2.641-9.195-2.843-10.118-.271-1.4-.407-3.141-.407-5.22 0-5.51 1.466-10.459 4.405-14.841 2.913-4.382 6.776-7.566 11.565-9.529 4.789-1.989 11.227-2.982 19.335-2.982 7.59 0 13.597.857 18.025 2.552 4.426 1.695 8.176 4.518 11.224 8.447 3.071 3.951 5.173 8.718 6.325 14.321l-25.343 3.952c-1.264-4.697-2.734-7.814-4.382-9.35-1.648-1.536-3.525-2.304-5.623-2.304-2.552 0-4.608.834-6.19 2.506-1.582 1.671-2.373 4.044-2.373 7.115 0 1.649.159 3.208.477 4.72.291 1.536 1.353 5.107 3.16 10.731zM314.568 0c71.551 0 129.555 58.004 129.555 129.555 0 71.55-58.004 129.554-129.555 129.554-71.551 0-129.555-58.004-129.555-129.554C185.013 58.004 243.017 0 314.568 0zm0 11.78c65.044 0 117.775 52.731 117.775 117.775 0 65.043-52.731 117.775-117.775 117.775-65.044 0-117.775-52.732-117.775-117.775 0-65.044 52.731-117.775 117.775-117.775zM107.31 408.105l-.003-158.68a2.401 2.401 0 012.399-2.403h71.375l.643.086c15.294 2.767 30.549 8.281 45.77 15.48 15.004 7.103 30.023 15.88 45.037 25.313l55.091.023c7.933.51 14.768 3.293 19.786 7.41 3.865 3.175 6.659 7.166 8.059 11.552 1.413 4.438 1.406 9.267-.348 14.043-1.936 5.259-6 10.466-12.613 15.003-10.095 7.374-21.739 10.856-34.227 12.18l-.073.007c-12.255 1.288-25.322.497-38.542-.682-5.315-.258-8.794 1.993-10.372 5.018a8.993 8.993 0 00-1.017 3.965 9.25 9.25 0 00.834 4.058c1.48 3.19 5.002 5.712 10.681 5.739l.166.006c3.63.272 7.516-.109 11.296-.479 2.886-.282 5.729-.563 8.466-.567 16.139-.013 30.837-1.555 43.458-6.255 12.395-4.61 22.853-12.319 30.797-24.691l8.235-19.223a2.354 2.354 0 011.142-1.208l82.767-41.018c13.468-4.439 25.787-3.095 35.395 1.807 6.262 3.194 11.382 7.917 14.94 13.54 3.558 5.63 5.551 12.193 5.548 19.045-.004 9.741-4.029 20.07-13.259 29.182l-.275.232c-29.868 21.732-60.188 41.587-90.916 59.638-30.656 18.006-61.665 34.191-92.985 48.641-23.106 14.02-46.244 20.795-69.396 20.679-23.142-.119-46.261-7.132-69.343-20.669l-67.215-34.644a2.393 2.393 0 01-1.301-2.128z"/></svg>`,
                text: "Общий фонд",
                ref: "fond",
                fnc: async () => {
                    await fondSet();
                }
            }, {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="512" height="512" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="512" height="512" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_2)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,256,256)"><path  fill-opacity="1" d=" M199.11099243164062,-256 C199.11099243164062,-256 -199.11099243164062,-256 -199.11099243164062,-256 C-230.39999389648438,-256 -256,-230.39999389648438 -256,-199.11099243164062 C-256,-199.11099243164062 -256,199.11099243164062 -256,199.11099243164062 C-256,230.39999389648438 -230.39999389648438,256 -199.11099243164062,256 C-199.11099243164062,256 199.11099243164062,256 199.11099243164062,256 C230.39999389648438,256 256,230.39999389648438 256,199.11099243164062 C256,199.11099243164062 256,-199.11099243164062 256,-199.11099243164062 C256,-230.39999389648438 230.39999389648438,-256 199.11099243164062,-256z M-128,170.66700744628906 C-151.60899353027344,170.66700744628906 -170.66700744628906,151.60899353027344 -170.66700744628906,128 C-170.66700744628906,104.39099884033203 -151.60899353027344,85.33399963378906 -128,85.33399963378906 C-104.39099884033203,85.33399963378906 -85.33300018310547,104.39099884033203 -85.33300018310547,128 C-85.33300018310547,151.60899353027344 -104.39099884033203,170.66700744628906 -128,170.66700744628906z M-128,-85.33300018310547 C-151.60899353027344,-85.33300018310547 -170.66700744628906,-104.39099884033203 -170.66700744628906,-128 C-170.66700744628906,-151.60899353027344 -151.60899353027344,-170.66600036621094 -128,-170.66600036621094 C-104.39099884033203,-170.66600036621094 -85.33300018310547,-151.60899353027344 -85.33300018310547,-128 C-85.33300018310547,-104.39099884033203 -104.39099884033203,-85.33300018310547 -128,-85.33300018310547z M0,42.66699981689453 C-23.608999252319336,42.66699981689453 -42.66699981689453,23.608999252319336 -42.66699981689453,0 C-42.66699981689453,-23.608999252319336 -23.608999252319336,-42.66600036621094 0,-42.66600036621094 C23.608999252319336,-42.66600036621094 42.66699981689453,-23.608999252319336 42.66699981689453,0 C42.66699981689453,23.608999252319336 23.608999252319336,42.66699981689453 0,42.66699981689453z M128,170.66700744628906 C104.39099884033203,170.66700744628906 85.33300018310547,151.60899353027344 85.33300018310547,128 C85.33300018310547,104.39099884033203 104.39099884033203,85.33399963378906 128,85.33399963378906 C151.60899353027344,85.33399963378906 170.66700744628906,104.39099884033203 170.66700744628906,128 C170.66700744628906,151.60899353027344 151.60899353027344,170.66700744628906 128,170.66700744628906z M128,-85.33300018310547 C104.39099884033203,-85.33300018310547 85.33300018310547,-104.39099884033203 85.33300018310547,-128 C85.33300018310547,-151.60899353027344 104.39099884033203,-170.66600036621094 128,-170.66600036621094 C151.60899353027344,-170.66600036621094 170.66700744628906,-151.60899353027344 170.66700744628906,-128 C170.66700744628906,-104.39099884033203 151.60899353027344,-85.33300018310547 128,-85.33300018310547z"></path></g></g></g></svg>`,
                text: "Играть",
                ref: "main"
            },{
                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="512" height="512" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_7"><rect width="512" height="512" x="0" y="0"></rect></clipPath><g id="__lottie_element_8"><g transform="matrix(1,0,0,1,256,256)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(19.692310333251953,0,0,19.692310333251953,0,0)"><path  fill-opacity="1" d=" M0,13 C7.179999828338623,13 13,7.179999828338623 13,0 C13,-7.179999828338623 7.179999828338623,-13 0,-13 C-7.179999828338623,-13 -13,-7.179999828338623 -13,0 C-13,7.179999828338623 -7.179999828338623,13 0,13z"></path></g></g></g><mask id="__lottie_element_8_1" mask-type="alpha"><use xlink:href="#__lottie_element_8"></use></mask></defs><g clip-path="url(#__lottie_element_7)"><g mask="url(#__lottie_element_8_1)" style="display: block;"><g transform="matrix(1,0,0,1,256,256)" opacity="1"><g opacity="1" transform="matrix(19.692310333251953,0,0,19.692310333251953,0,0)"><path  fill-opacity="1" d=" M6.61,5.98 C7.13,6.33 7.39,6.5 7.57,6.92 C7.69,7.22 7.69,7.78 7.57,8.08 C7.39,8.5 7.13,8.67 6.61,9.02 C4.71,10.27 2.44,11 0,11 C-2.44,11 -4.71,10.27 -6.61,9.02 C-7.13,8.67 -7.39,8.5 -7.57,8.08 C-7.69,7.78 -7.69,7.22 -7.57,6.92 C-7.39,6.5 -7.13,6.33 -6.61,5.98 C-4.71,4.73 -2.44,4 0,4 C2.44,4 4.71,4.73 6.61,5.98z M0,1 C-2.21,1 -4,-0.79 -4,-3 C-4,-5.21 -2.21,-7 0,-7 C2.21,-7 4,-5.21 4,-3 C4,-0.79 2.21,1 0,1z M-15.82,3.96 C-15.56,4.31 -15.42,4.48 -15.39,4.84 C-15.36,5.09 -15.45,5.54 -15.58,5.75 C-15.76,6.06 -15.95,6.17 -16.33,6.37 C-17.71,7.12 -19.23,7.4 -20.74,7.08 C-22.24,6.76 -23.52,5.88 -24.47,4.64 C-24.74,4.3 -24.87,4.13 -24.91,3.77 C-24.93,3.52 -24.84,3.07 -24.71,2.85 C-24.53,2.54 -24.34,2.44 -23.96,2.23 C-22.58,1.49 -21.06,1.21 -19.56,1.53 C-18.05,1.85 -16.78,2.72 -15.82,3.96z M-18.86,-1.77 C-20.22,-2.06 -21.02,-3.71 -20.65,-5.46 C-20.28,-7.21 -18.87,-8.4 -17.51,-8.11 C-16.15,-7.82 -15.35,-6.17 -15.72,-4.42 C-16.09,-2.67 -17.49,-1.48 -18.86,-1.77z M0,13 C7.179999828338623,13 13,7.179999828338623 13,0 C13,-7.179999828338623 7.179999828338623,-13 0,-13 C-7.179999828338623,-13 -13,-7.179999828338623 -13,0 C-13,7.179999828338623 -7.179999828338623,13 0,13z"></path><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g opacity="1" transform="matrix(0.6847032904624939,0.14553818106651306,-0.18712051212787628,0.8803328275680542,-18.743759155273438,-2.299665689468384)"><g opacity="1" transform="matrix(0.8999999761581421,0,0,0.8999999761581421,0,0.75)"></g><g opacity="1" transform="matrix(0.8999999761581421,0,0,0.8999999761581421,0,-0.3000001907348633)"></g></g></g></g></g></g></svg>`,
                text: "Профиль",
                ref: "profile",
                fnc: async () => {
                    giftUser  = await f("user").then((e) => e.json());
                    if(giftUser.status !== "ok"){
                        createMessage("USER AUTH ERROR", 0);
                        return;
                    }
                    giftUser = JSON.parse(giftUser.data);
                    renderUserGift();
                }
            }
        ]
        for(let i = 0; i < data.length; i++) {
            const t = data[i];
            const div = document.createElement("div");
            div.innerHTML = `${t.svg}
                <p>${t.text}</p>`;
            div.className = "textCenter " + (page === t.ref ? "activeButton" : '');
            div.style.width = (100 /  data.length) + '%'
            div.onclick = () => {
                if(t.fnc){
                    t.fnc();
                }
                if(div.classList.contains("activeButton")) {
                    return;
                }
                const children = html.querySelectorAll("div");
                children.forEach((e) => {
                    e.classList.remove("activeButton");
                })

                div.classList.add("activeButton");
                closePages();
                openPage(t.ref);
            }
            html.appendChild(div);

        }


        footerButtons.append(html);
    }
    renderFooter();
    function userProfile(){
        const userName = document.querySelectorAll(".userName");
        const userId = document.querySelectorAll(".userId");
        const profileAvatarImg = document.querySelectorAll(".profileAvatarImg");
        const {id, username, photo_url, first_name} = userUIdata.user;
        userName.forEach(e => {e.innerText = username});
        profileAvatarImg.forEach(e => {e.src = photo_url});
        userId.forEach(e => {e.innerHTML = "ID: " + id + `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" id='copyIcon'>
<path d="M7.00001 4.10999C6.14022 4.33198 5.37874 4.83376 4.83558 5.53625C4.29241 6.23875 3.99845 7.10201 4.00001 7.98999V17.99C4.00001 19.0509 4.42149 20.0682 5.17164 20.8184C5.92178 21.5685 6.93914 21.99 8.00001 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C19.9993 7.10372 19.7044 6.24269 19.1614 5.54224C18.6184 4.84178 17.8581 4.34156 17 4.12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5.98999C8.46957 5.98999 7.96089 5.77925 7.58582 5.40417C7.21074 5.0291 7 4.52042 7 3.98999C7 3.45956 7.21074 2.95088 7.58582 2.57581C7.96089 2.20073 8.46957 1.98999 9 1.98999H15C15.5304 1.98999 16.0392 2.20073 16.4142 2.57581C16.7893 2.95088 17 3.45956 17 3.98999C17 4.52042 16.7893 5.0291 16.4142 5.40417C16.0392 5.77925 15.5304 5.98999 15 5.98999H9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`});

    }
    userProfile();

    function typeGameFunctional(){
        const typeGame = document.querySelectorAll(".typeGame");
        typeGame.forEach((e, i) => {
            e.onclick = () => {
                if(level === i || spinning){
                    return;
                }
                typeGame.forEach(el => {
                    el.classList.remove("selected");
                })
                e.classList.add("selected");
                level = i;
                renderRoulette();
            }
        })
    }
    typeGameFunctional();
    function renderRoulette(){
        const chanceE = document.getElementById("chance");
        let html = '';
        let html2 = '';
        const scale = 10 + level;
        const maxPrice = 600 * (level+1);
        let sum = 0;
        const dataGift2 = [...dataGift];
        dataGift2.sort((a,b) => {
            return a.price - b.price;
        })
        // console.log(dataGift2)
        for(let i = 0; i < dataGift.length; i++){
            const {giftId, price, isNft} = dataGift[i];
            const price2 = dataGift2[i].price;
            const giftId2 = dataGift2[i].giftId;
            const isNft2 = dataGift2[i].isNft;
            let chance = Math.max(0, ((maxPrice - price2) / (maxPrice * scale)) * 100);
            if(chance === 0){
                chance =  100 - sum;
            }
            sum += chance;
            html += `<div class="rouletteItem textCenter">
                        ${isNft ? `<div style="overflow: hidden;width: 100%; height: 100%;position: absolute;left: 0;top: 0;">
                            <div class="statusGift">NFT</div>
                          </div>` : ''}
                        <img src="./images/gift${giftId}.gif" alt="">
                        <p class="price starParent"><span class="starIcon"></span> ${price >= 999 ? "???" : price}</p>
                    </div>`;
            html2 += ` <div class="rouletteItem textCenter">
                       ${isNft2 ? `<div style="overflow: hidden;width: 100%; height: 100%;position: absolute;left: 0;top: 0;">
                            <div class="statusGift">NFT</div>
                          </div>` : ''}

                        <p>${Math.abs(+(chance).toFixed(3))}% </p>
                        <img src="./images/gift${giftId2}.gif" alt="">
                        <p class="price starParent"><span class="starIcon"></span> ${price2 >= 999 ? "???" : price2}</p>
                    </div>`;
        }
        // console.log(sum)
        rouletteItems.innerHTML = html + html + html + html;
        chanceE.innerHTML = html2;
    }
    spinButton.onclick = spinRoulette;
    async function spinRoulette() {
        rouletteItems.style.transform = `translateX(0)`;
        const closePage = document.getElementById("closePage");
        const sellOfReciveImg = document.getElementById("sellOfReciveImg");

        const itemWidth = document.querySelector('.rouletteItem').offsetWidth + 10;
        function getAnim(){
            const randomIndex = isDemo ? Math.floor(Math.random() * (dataGift.length)) + 1 : random.data.giftId;
            const offset = (randomIndex-2) * itemWidth;
            const fullSpin = (dataGift.length * itemWidth) * 3;
            const finalPosition = fullSpin + offset;
            // const priceSell =document.getElementById("priceSell");
            if(isDemo){
                buttonSellOrRecive.classList.add("hide");
                closePage.classList.remove('hide');
            } else{
                closePage.classList.add('hide');
                buttonSellOrRecive.classList.remove("hide");
            }
            spinButton.disabled = true;
            spinning = true;
            rouletteItems.style.transition = 'transform 3s ease-out';
            const rand = Math.random() * (itemWidth-100);
            rouletteItems.style.transform = `translateX(-${finalPosition + rand}px)`;

            setTimeout(() => {
                rouletteItems.style.transition = 'none';
                rouletteItems.style.transform = `translateX(-${offset + rand}px)`;

                const price = dataGift[randomIndex-1].price;
                sellOfReciveImg.src = `./images/gift${(randomIndex)}.gif`;
                // priceSell.innerText = price;
                currentPrice = price;
                currentGift = randomIndex;
                setTimeout(() => {
                    sellOrReciveGift.classList.remove("hide");
                    //setting :)
                    giftToProfile.classList.remove("hide");

                    toFriend.classList.add("hide");
                    spinning = false;
                    spinButton.disabled = false;
                }, 500)
            }, 3000);
        }
        if(isDemo){
            getAnim();
            return;
        }
        let random = await f("spin", {type: level+1});
        let spinCheckCount = 10;
        if(!random.ok){
            random = await random.text();
            createMessage(random, 0);
            return;
        }
        random = await random.json();
        async function checking() {
            return new Promise((resolve) => {
                const interval = setInterval(async () => {
                    if (spinCheckCount <= 0) {
                        clearInterval(interval);
                        resolve(false);
                        return;
                    }

                    spinCheckCount--;

                    try {
                        const resCheck = await f("spinCheck", { spinType: level + 1}).then((e) => e.json());
                        if (resCheck.valid) {
                            let randomRes = await f("spin", { type: level + 1 }).then((e) => e.json());

                            if (randomRes.invoice_link) { //not pay
                                const errorText = await randomRes.text();
                                createMessage(errorText, 0);
                                clearInterval(interval);
                                resolve(false);
                                return;
                            }

                            random = randomRes;
                            if (random.status === 'ok') {
                                clearInterval(interval);
                                resolve(true);
                                return;
                            }
                        }
                    } catch (err) {
                        console.error("Error in checking loop:", err);
                        clearInterval(interval);
                        resolve(false);
                    }
                }, 1000);
            });
        }


        if (random.invoice_link) {
            Telegram.WebApp.openInvoice(random.invoice_link, async (e) => {
                if(e === "paid"){
                    const result = await checking();
                    if (!result) {
                        createMessage("PAYMENT FAILED", 0);
                        return;
                    }
                    createMessage("PAYMENT SUCCESS");
                    getAnim();
                }
            });

        }
        else{
            getAnim();
        }
    }
    demoButton.onclick = () => {
        isDemo = !isDemo;
    }

    sendElm.onclick = async () => {
        const id = +idInput.value;
        if(!id || isNaN(id)){
            return;
        }
        const res = await f("sendUser", { id: id, index: selectedGiftIndex });
        if(!res.ok){
            createMessage(await res.text(), 0);
        } else{
            createMessage("SUCCESS", 1);
            sellOrReciveGift.classList.add("hide");
            giftUser  = await f("user").then((e) => e.json());
            if(giftUser.status !== "ok"){
                createMessage("USER AUTH ERROR", 0);
                return;
            }
            giftUser = JSON.parse(giftUser.data);
            renderUserGift();
        }
        sendFriendPage.classList.remove("active");
    }
    closeSendFriendPage.onclick = () => {
        sendFriendPage.classList.remove("active");
    }
    toFriend.onclick = () => {
        // sellOrReciveGift.classList.add("hide");
        sendFriendPage.classList.add("active"); //doto oki

    }
    getGift.onclick = async () => {
        sellOrReciveGift.classList.add("hide");
        const res = await f("getGift", { index: selectedGiftIndex });
        if(!res.ok){
            createMessage(await res.text(), 0);
        } else{
            createMessage("Подарок будет доставлен в течение 1 минуты – 24 часов. Пожалуйста, подождите — вы получите уведомление, как только он будет доставлен.", 1);
            sellOrReciveGift.classList.add("hide");
            giftUser  = await f("user").then((e) => e.json());
            if(giftUser.status !== "ok"){
                createMessage("USER AUTH ERROR", 0);
                return;
            }
            giftUser = JSON.parse(giftUser.data);
            renderUserGift();
        }
        // console.log("GET")
        //logic claim
    }
    giftToProfile.onclick = () => {
        sellOrReciveGift.classList.add("hide");
    }
    // depositButton.onclick = () => {
    //     depositPage.classList.add("active");
    //     blurEffect.classList.remove("hide");
    // }
    function closeDepositPage(){
        depositPage.classList.remove("active");
        blurEffect.classList.add("hide");
    }
    // closePageDeposit.onclick = () => closeDepositPage();
    // blurEffect.onclick = () => closeDepositPage();
    renderRoulette();
    function renderUserGift(){
        const sellOfReciveImg = document.getElementById("sellOfReciveImg");
        // const priceSell =document.getElementById("priceSell");
        const nogift = document.getElementById("nogift");
        let html = document.createElement("div");
        if(giftUser.length === 0){
            nogift.classList.remove("hide");
            giftsUser.classList.add('hide');
            return;
        }
        nogift.classList.add("hide");
        giftsUser.classList.remove('hide');
        giftsUser.innerHTML = '';
        html.className = "flex wrap";
        html.style.justifyContent = "center";
        for(let i = 0; i < giftUser.length; i++){ // I'm not begginer proggramer :) I'm olympic proggramer and this way is very fast ...
            const {giftId, price, byFriend} = giftUser[i];
            const div = document.createElement("div");
            div.className = "giftsUser";
            div.innerHTML = `${byFriend ? '<div class="statusGift">Oт друга</div>' : ''} <img src="./images/gift${giftId}.gif" alt="">
                <p class="price starParent"><span class="starIcon"></span> ${price}</p>`;
            div.onclick = () => {
                document.getElementById("sellOrReciveGift").classList.remove("hide");
                giftToProfile.classList.add("hide");
                sellOfReciveImg.src = `./images/gift${giftId}.gif`;
                buttonSellOrRecive.classList.remove("hide");
                toFriend.classList.remove("hide");
                closePage.classList.remove("hide");
                // priceSell.innerText = price;
                currentPrice = price;
                currentGift = giftId;
                selectedGiftIndex = i;
            }
            html.appendChild(div);
        }
        giftsUser.append(html);
    }
    renderUserGift();
    closePage.onclick = () => {
        sellOrReciveGift.classList.add("hide");
    }
    profileIdCopy.onclick = () => {
        navigator.clipboard.writeText(userUIdata.user.id);
    }
    profileIdCopy.ontouchstart = () => {
        profileIdCopy.classList.add("activeCopy")
    }
    profileIdCopy.ontouchend = () => {
        profileIdCopy.classList.remove("activeCopy")
    }

})())