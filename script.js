((async () => {
    const MAINURL = "http://localhost:3000/";
    const leader = document.getElementById("leader");
    const main = document.getElementById("main");
    const profile = document.getElementById("profile");
    const closePage = document.getElementById("closePage");
    let spinning = false;
    const sellOrReciveGift = document.getElementById("sellOrReciveGift");
    const giftToProfile = document.getElementById("giftToProfile");
    const getGift = document.getElementById("getGift");
    const blurEffect = document.getElementById("blurEffect");
    const depositPage = document.getElementById("depositPage");
    const closePageDeposit = document.getElementById("closePageDeposit");
    const depositButton = document.getElementById("depositButton");
    const giftsUser = document.getElementById("giftsUser");
    const buttonSellOrRecive = document.getElementById("buttonSellOrRecive");
    let isDemo = false;
    let level = 0;
    let currentGift = null;
    let currentPrice = null;
    let error = false;
    const search = Telegram.WebApp.initData;

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
    if(!((userUIdata.user.username).trim().length)){
        createMessage("Пожалуйста, создайте имя пользователя(username) в профиле Telegram.", 0);
        return;
    }

    //createMessage("Hi");

    function f(path, params = {}){
        return fetch(MAINURL + path, {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru,en-US;q=0.9,en;q=0.8,hy;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "http://localhost:63342/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": JSON.stringify({initData: search, ...params}),
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        });
    }
    let giftUser  = await f("user").then((e) => e.json());
    if(giftUser.status !== "ok"){
        createMessage("USER AUTH ERROR", 0);
        return;
    }
    giftUser = JSON.parse(giftUser.data).gifts;
    // console.log(giftUser)
    // const giftUser = //JSON.parse();
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
        },
        {
            giftId: 12,
            price: 50,
        },
    ];



    let page = "main";
    function closePages(){
        leader.classList.add('hide');
        main.classList.add('hide');
        profile.classList.add('hide');
    }
    closePages();
    openPage(page);
    function openPage(pageId){
        let el = document.getElementById(pageId);
        if(!el){
            page = "main";
            el = document.getElementById("main");
        }
        el.classList.remove('hide');
    }
    function renderFooter(){
        const footerButtons = document.getElementById("footerButtons");
        let html = document.createElement('div');
        html.className = "flex spaceAround";
        const data = [
            {
                svg: `<svg width="800px" height="800px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z"
                          stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M20.4 21H15V18.1C15 17.7686 15.2686 17.5 15.6 17.5H20.4C20.7314 17.5 21 17.7686 21 18.1V20.4C21 20.7314 20.7314 21 20.4 21Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M9 21V16.1C9 15.7686 8.73137 15.5 8.4 15.5H3.6C3.26863 15.5 3 15.7686 3 16.1V20.4C3 20.7314 3.26863 21 3.6 21H9Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M10.8056 5.11325L11.7147 3.1856C11.8314 2.93813 12.1686 2.93813 12.2853 3.1856L13.1944 5.11325L15.2275 5.42427C15.4884 5.46418 15.5923 5.79977 15.4035 5.99229L13.9326 7.4917L14.2797 9.60999C14.3243 9.88202 14.0515 10.0895 13.8181 9.96099L12 8.96031L10.1819 9.96099C9.94851 10.0895 9.67568 9.88202 9.72026 9.60999L10.0674 7.4917L8.59651 5.99229C8.40766 5.79977 8.51163 5.46418 8.77248 5.42427L10.8056 5.11325Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
                text: "Лидеры",
                ref: "leader"
            },
            {
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
                    giftUser = JSON.parse(giftUser.data).gifts;
                    renderUserGift();
                }
            },
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
        userId.forEach(e => {e.innerText = id});

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
            const {giftId, price} = dataGift[i];
            const price2 = dataGift2[i].price;
            const giftId2 = dataGift2[i].giftId;
            let chance = Math.max(0, ((maxPrice - price2) / (maxPrice * scale)) * 100);
            if(chance === 0){
                chance =  100 - sum;
            }
            sum += chance;
            html += `<div class="rouletteItem textCenter">
                        <img src="./images/gift${giftId}.gif" alt="">
                        <p class="price starParent"><span class="starIcon"></span> ${price >= 999 ? "???" : price}</p>
                    </div>`;
            html2 += `<div class="rouletteItem textCenter">
                        <p>${Math.abs(+(chance).toFixed(3))}% </p>
                        <img src="./images/gift${giftId2}.gif" alt="">
                        <p class="price starParent"><span class="starIcon"></span> ${price2 >= 999 ? "???" : price2}</p>
                    </div>`;
        }
        // console.log(sum)
        rouletteItems.innerHTML = html + html + html + html;
        chanceE.innerHTML = html2;
    }

    async function spinRoulette() {
        rouletteItems.style.transform = `translateX(0)`;
        const closePage = document.getElementById("closePage");
        const sellOfReciveImg = document.getElementById("sellOfReciveImg");

        const itemWidth = document.querySelector('.rouletteItem').offsetWidth + 10;
        let random = await f("spin", {type: level+1});
        if(!random.ok){
            random = await random.text();
            createMessage(random, 0);
            return;
        }
        random = await random.json();
        if(random.invoice_link){
            Telegram.WebApp.openInvoice(random.invoice_link);
            return;
        }
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
                spinning = false;
                spinButton.disabled = false;
            }, 500)
        }, 3000);
    }
    demoButton.onclick = () => {
        isDemo = !isDemo;
    }
    spinButton.onclick = () => {
        spinRoulette();
    }
    // reciveGift.onclick = () => {
    //     sellOrReciveGift.classList.add("hide");
    //     //logic claim
    // }
    getGift.onclick = () => {
        sellOrReciveGift.classList.add("hide");
        //logic claim
    }
    giftToProfile.onclick = () => {
        sellOrReciveGift.classList.add("hide");
        //to gift profile logic
    }
    // depositButton.onclick = () => {
    //     depositPage.classList.add("active");
    //     blurEffect.classList.remove("hide");
    // }
    function closeDepositPage(){
        depositPage.classList.remove("active");
        blurEffect.classList.add("hide");
    }
    closePageDeposit.onclick = () => closeDepositPage();
    blurEffect.onclick = () => closeDepositPage();
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
            const {giftId, price} = giftUser[i];
            const div = document.createElement("div");
            div.className = "giftsUser";
            div.innerHTML = ` <img src="./images/gift${giftId}.gif" alt="">
                <p class="price starParent"><span class="starIcon"></span> ${price}</p>`;
            div.onclick = () => {
                document.getElementById("sellOrReciveGift").classList.remove("hide");
                giftToProfile.classList.add("hide");
                sellOfReciveImg.src = `./images/gift${giftId}.gif`;
                // reciveGift.classList.remove("hide");
                closePage.classList.remove("hide");
                // priceSell.innerText = price;
                currentPrice = price;
                currentGift = giftId;
            }
            html.appendChild(div);
        }
        giftsUser.append(html);
    }
    renderUserGift();
    closePage.onclick = () => {
        sellOrReciveGift.classList.add("hide");
    }


    function navigate() {
        const route = location.hash.slice(2, location.hash.indexOf('?')); // убираем '#'
        page = route;
        closePages();
        openPage(page);
    }
    navigate();
})())