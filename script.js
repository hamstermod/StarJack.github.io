((async () => {
    const test = false;

    const isHotChances = true;
    const maintenance = false;
    const MAINURL = test ? "http://localhost:3000/" : "https://server-production-327b.up.railway.app/";
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
                createMessage(text.errorParsing + " " + e, 0);
                console.error("Ошибка при парсинге user JSON:", e);
            }
        }

        return result;
    }
    const search = Telegram.WebApp.initData;
    const userUIdata = parseQuery(search);
    const dataText = {
        ru: {
            errorParsing: "ОШИБКА анализа пользователя",
            errorCreateUsername: "Пожалуйста, создайте имя пользователя(username) в профиле Telegram.",
            gift: "Подарок",
            usersText: "Лидеры",
            marketText: "Маркет",
            playText: "Играть",
            profileText: "Профиль",
            noGiftText: "Нет нераспределённых подарков",
            toFriendText: "Отправить другу",
            getGiftText: "Получить подарок",
            demoText: "Демо режим",
            spinButtonText: "Мне повезёт!",
            infoSendFriend: `С помощью этой функции вы можете отправить подарок другому пользователю.
                        Просто введите <strong>ID пользователя</strong>, которому хотите отправить подарок, и нажмите кнопку <em>«Отправить»</em>.`,
            sendText: "Отправить",
            placeHolderSend: "Напишите ID пользователя, которому хотите отправить подарок.",
            caseText: "Кейс",
            giftWithdraw: "Успех",
            giveaway:  "Розыгрыши",
            giveawayPayText: "Платные",
            giveawayFreeText: "Бесплатные",
            giveawayEnteredText: "Участвую",
            tickets: "Ваши билеты",
            totalTicket: "Всего билетов",
            price: "Цена",
            participants : "Участники",
            giveawayBy: "Розыгрыш от",
            enterGiveAway: "Принять участие",
            free: "Бесплатно",
            finished: "ЗАВЕРШЕН",
            followTo: "Подпишитесь на ",
            areInGiveAway: "Вы участвуете ",
            likeTo: "Проголосовать",
            errorIsNotSubscribe: "Ты не подписался на канал",
            topUpBalance: "Пополнить баланс",
            topUp: "Пополнить",
            enterAmountText: "Введите сумму пополнения",
            enterAmountPlace: "Введите сумму (min: 1)",
            errorValidNumber: "Пожалуйста, введите корректное число больше 1.",
            paymentError: "Платёж не прошёл",
            paymentSuccess: "Платёж прошёл успешно",
            buyTickets: "Купить больше билетов",
            butTicketsText: "Купить билеты",
            fromFriend: "Oт друга",
            cases: "Кейсы",
            gamesText: "Игры",
            betOn: "Ставьте на",
            heads: "Орел",
            tails: "Решка",
            transfer: "Передать",
            sell: "Продать",
            owner: "Владелец",
            model: "Модель",
            fonText: "Фон",
            uzorText: "Узор",
            commentGift: `Подарок от <span class="highlight">StarJackCommunity</span> для <span class="highlight">${userUIdata.user.username}</span>, отправлен ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}.</div>`,
            errorSalePageMinMax: "Введите значение от 10 до 100000 звёзд.",
            errorSale: "❌ Сделка неуспешна",
            onsaleText: "продаётся",
            notSell: "не продавать",
            priceStars: "Цена в звёздах",
            enterPrice: "Укажите цену в звёздах",
            listSale: "Выставить на продажу",
            withdrawStatus: "Вывод скоро будет доступен.",
        },
        en: {
            errorParsing: "ERROR parsing user",
            errorCreateUsername: "Please create a username in your Telegram profile.",
            gift: "Gift",
            usersText: "Leaders",
            marketText: "Market",
            playText: "Play",
            profileText: "Profile",
            noGiftText: "There are no unclaimed gifts",
            toFriendText: "Send to a friend",
            getGiftText: "Receive gift",
            demoText: "Demo Mode",
            spinButtonText: "Try my luck!",
            infoSendFriend:`This feature lets you send a gift to another user.
Simply enter the <strong>user ID</strong> of the person you want to send it to, then click <em>“Send”</em>.`,
            sendText: "Send",
            placeHolderSend: "Please enter the user ID of the person you want to send the gift to.",
            caseText: "Case",
            giftWithdraw: "Success",
            giveaway:  "Giveaways",
            giveawayPayText: "Paid",
            giveawayFreeText: "Free",
            giveawayEnteredText: "Entered",
            tickets: "Your tickets",
            totalTicket: "Total tickets",
            price: "Price",
            participants: "Participants",
            giveawayBy: "Giveaway by",
            enterGiveAway: "Enter Giveaway",
            free: "Free",
            finished: "FINISHED",
            followTo: "Subscribe to the",
            areInGiveAway: "You Are In ",
            likeTo: "Vote",
            errorIsNotSubscribe: "You didn't subscribe to the channel",
            topUpBalance: "Top up balance",
            topUp: "Top up",
            enterAmountText: "Enter the top-up amount",
            enterAmountPlace: "Enter the amount (min: 1)",
            errorValidNumber: "Please enter a valid number greater than 1.",
            paymentError: "Payment failed",
            paymentSuccess: "Payment success",
            buyTickets: "Buy More Tickets",
            butTicketsText: "Buy tickets",
            fromFriend: "From a friend",
            cases: "Cases",
            gamesText: "Games",
            betOn: "Bet on",
            heads: "Heads",
            tails: "Tails",
            transfer: "Transfer",
            sell: "Sell",
            owner: "Owner",
            model: "Model",
            fonText: "Backdrop",
            uzorText: "Symbol",
            commentGift: `Gift from <span class="highlight">StarJackCommunity</span> `,
            errorSalePageMinMax: "The price must be between 10 and 100,000 stars.",
            errorSale: "❌ Transaction failed",
            onsaleText: "On Sale",
            notSell: "Unlist",
            priceStars: "Price in stars",
            enterPrice: "Enter the price in stars",
            listSale: "List for sale",
            withdrawStatus: "Withdrawal will be available soon."
        }
    }
    let lang = localStorage.getItem("lang") === "en" || localStorage.getItem("lang") === "ru" ? localStorage.getItem("lang") : "en";

    let text = dataText[lang];
    // const fondInfoText = document.getElementById("fondInfoText");
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
    const nogiftP = document.getElementById("nogiftP");
    const profileIdCopy = document.getElementById("profileIdCopy");
    const idInput = document.getElementById("idInput");
    const giftsUser = document.getElementById("giftsUser");
    const buttonSellOrRecive = document.getElementById("buttonSellOrRecive");
    const loading = document.getElementById("loading");
    const usersList = document.getElementById("usersList");
    const bodyElm = document.body;
    // const fond = document.getElementById("fond");
    // const fondAmount = document.getElementById("fondAmount");
    // const fondMaxAmount = document.getElementById("fondMaxAmount");
    const withdraw_button = document.getElementById("withdraw-button");
    const sendElm = document.getElementById("send");
    let isDemo = false;
    let level = 0;
    let caseId = 0;
    let currentGift = null;
    let currentPrice = null;
    let selectedGiftIndex = null;
    const searchInput = document.getElementById("searchInput");

    const toFriend = document.getElementById("toFriend");
    const language_toggle = document.getElementById("language-toggle");
    const closeSendFriendPage = document.getElementById("closeSendFriendPage");
    const dialog = document.getElementById("dialog");
    const giftTextSellOfRecive = document.getElementById("giftTextSellOfRecive");
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
    const spinButton = document.getElementById("spinButton");
    const demoButton = document.getElementById("demoButton");
    const rouletteItems = document.getElementById("rouletteItems");
    const toFriendText = document.querySelectorAll(".toFriendText");
    const demoText = document.getElementById("demoText");
    const textInfoSendFriend= document.getElementById("textInfoSendFriend");
    const selectCasePage = document.getElementById("selectCasePage");
    const casePage = document.getElementById("casePage");
    const headerCases = document.getElementById("headerCases");
    const closeCases = document.getElementById("closeCases");
    const maintenanceElm = document.getElementById("maintenance");
    const giveawayBttTabContainer = document.getElementById("giveawayBttTabContainer");
    const giveawayPay = document.getElementById("giveawayPay");
    const giveawayFree = document.getElementById("giveawayFree");
    const giveawayEntered = document.getElementById("giveawayEntered");
    const giveawayBttTab = document.querySelectorAll(".giveawayBttTab");
    const animateAds = document.getElementById("animateAds");
    const giveawayCard = document.getElementById("giveaway-cards");
    const modelImg = document.getElementById("modelImg");
    const blurEffectGiveAway = document.getElementById("blurEffectGiveAway");
    const model = document.getElementById("model");
    const closePageGiveaway = document.getElementById("closePageGiveaway");
    const tasksGiveAway = document.getElementById("tasksGiveAway");
    const enterGiveAway = document.getElementById("enterGiveAway");
    const depositButton = document.getElementById("depositButton");
    const userStars = document.querySelectorAll(".userStars");
    const buyTicketsElm = document.getElementById("buyTickets");
    const buyTicketsBoard = document.getElementById("buyTicketsBoard");
    const decrementTicketCount = document.getElementById("decrementTicketCount");
    const ticketsCount = document.getElementById("ticketsCount");
    const incrementTicketCount = document.getElementById("incrementTicketCount");
    const buyTicketsStar = document.getElementById("buyTicketsStar");
    const cases = document.getElementById("cases");
    const games = document.getElementById("games");
    const toCasesPageButton = document.getElementById("toCasesPageButton");
    const toGamesPageButton = document.getElementById("toGamesPageButton");
    const openGamePage = document.getElementById("openGamePage");
    const betsFlipCoin = document.getElementById("betsFlipCoin");
    const betOn = document.getElementById("betOn");
    const headsText = document.getElementById("headsText");
    const tailsText = document.getElementById("tailsText");
    const closeGame = document.getElementById("closeGame");
    const gameFlipCoin = document.getElementById("gameFlipCoin");
    const imgCase = document.getElementById("imgCase");
    const videoCase = document.getElementById("videoCase");
    const footerGiftDesign = document.getElementById("footerGiftDesign");
    const blurEffectGift = document.getElementById("blurEffectGift");
    const closeGift = document.getElementById("closeGift");
    const imgGiftModel = document.getElementById("imgGiftModel");
    const giftOfUser = document.getElementById("giftOfUser");
    const casePrice = document.getElementById("casePrice");
    const transfer = document.getElementById("transfer");
    const sell = document.getElementById("sell");
    const toFriendModel = document.getElementById("toFriendModel");
    const modelText = document.getElementById("modelText");
    const fonText = document.getElementById("fonText");
    const uzorText = document.getElementById("uzorText");
    const commentGift = document.getElementById("commentGift");
    const sellOrSendFriend = document.getElementById("sellOrSendFriend");
    const modelTextGift = document.getElementById("modelTextGift");
    const fonTextGift = document.getElementById("fonTextGift");
    const uzorTextGift = document.getElementById("uzorTextGift");
    const uzorElms = document.querySelectorAll("#uzor p");
    const closePageSaleButton = document.getElementById("closePageSaleButton");
    const toSaleButton = document.getElementById("toSaleButton");
    const blurCloseSalePage = document.getElementById("blurCloseSalePage");
    const salePage = document.getElementById("salePage");
    const openSalePage = document.getElementById("openSalePage");
    const notDesignLine = document.getElementById("notDesignLine");
    let onSaleGift = false;
    const priceInStars = document.getElementById("priceInStars");
    const enterPrice = document.getElementById("enterPrice");
    const priceGiftPos = document.getElementById("priceGiftPos");
    const priceGiftNumber = document.getElementById("priceGiftNumber");
    const market = document.getElementById("market");
    const giftsMarket = document.getElementById("giftsMarket");
    const buyItem = document.getElementById("buyItem");
    const priceStarToBuy = document.getElementById("priceStarToBuy");
    const backdropDiv = document.getElementById("backdropDiv");

    const listRender = [
        {
            elmsRefs: toFriendText,
            to: "toFriendText"
        },
        {
            elmsRefs: nogiftP,
            to:  "noGiftText"
        },
        {
            elmsRefs: giftTextSellOfRecive,
            to: "gift",
        },
        {
            elmsRefs: toFriend,
            to: "toFriendText",
        },
        {
            elmsRefs: getGift,
            to: "getGiftText"
        },
        {
            elmsRefs: demoText,
            to: "demoText",
        },
        {
            elmsRefs: spinButton,
            to: "spinButtonText",
        },
        {
            elmsRefs: textInfoSendFriend,
            to: "infoSendFriend",
            html: true
        },
        {
            elmsRefs: sendElm,
            to: "sendText",
        },
        {
            elmsRefs: idInput,
            to: "placeHolderSend",
            place: true
        },
        {
            elmsRefs: ".caseText",
            to: "caseText",
            upgrade: true,
        },
        {
            elmsRefs: giveawayPay,
            to: "giveawayPayText"
        },
        {
            elmsRefs: giveawayFree,
            to: "giveawayFreeText",
        },
        {
            elmsRefs: giveawayEntered,
            to: "giveawayEnteredText",
        },
        {
            elmsRefs: enterGiveAway,
            to: "enterGiveAway",
        },
        {
            elmsRefs: depositButton,
            to: "topUpBalance"
        },
        {
            elmsRefs: deposit,
            to: "topUp"
        },
        {
            elmsRefs: enterAmountText,
            to: "enterAmountText"
        },
        {
            elmsRefs: depositInput,
            to: "enterAmountPlace",
            place: true,
        },
        {
            elmsRefs: buyTicketsElm,
            to: "butTicketsText"
        },
        {
            elmsRefs: toCasesPageButton,
            to: "cases"
        },
        {
            elmsRefs: toGamesPageButton,
            to: "gamesText"
        },
        {
            elmsRefs: betOn,
            to: "betOn"
        },
        {
            elmsRefs: headsText,
            to: "heads"
        },
        {
            elmsRefs: tailsText,
            to: "tails"
        },
        {
            elmsRefs: transfer,
            to: "transfer"
        },
        {
            elmsRefs: sell,
            to: "sell"
        },
        {
            elmsRefs: modelText,
            to: "model",
        },
        {
            elmsRefs: fonText,
            to: "fonText"
        },
        {
            elmsRefs: uzorText,
            to: "uzorText"
        },
        {
            elmsRefs: commentGift,
            to: "commentGift",
            html: true
        },
        {
            elmsRefs: priceInStars,
            to: "priceStars"
        },
        {
            elmsRefs: enterPrice,
            to: "enterPrice",
        },
        {
            elmsRefs: toSaleButton,
            to: "listSale",
        }
    ];
    const colorsObject = {
        "Midnight Blue": "#191970",
        "Silver Blue": "#c0c9d6",
        "Aquamarine": "#7fffd4",
        "Cappuccino": "#a67b5b",
        "Desert Sand": "#edc9af",
        "Persimmon": "#ec5800",
        "Malachite": "#0bda51",
        "Pacific Green": "#00a693",
        "Dark Lilac": "#9c6da5",
        "Emerald": "#50c878",
        "Amber": "#ffbf00",
        "Black": "#000000",
        "Turquoise": "#40e0d0",
        "Lemongrass": "#9bcd9b",
        "Copper": "#b87333",
        "Electric Indigo": "#6f00ff",
        "Fandango": "#b53389",
        "French Blue": "#0072bb",
        "Pine Green": "#01796f",
        "Pistachio": "#93c572",
        "Shamrock Green": "#009e60",
        "Sky Blue": "#87ceeb",
        "Chestnut": "#954535",
        "Ivory White": "#fffff0",
        "Raspberry": "#e30b5c",
        "Cyberpunk": "#ff0090",
        "Orange": "#ffa500",
        "Satin Gold": "#cba135",
        "Steel Grey": "#43464b",
        "Burgundy": "#800020",
        "Mint Green": "#98ff98",
        "Mystic Pearl": "#e5e5e5",
        "Roman Silver": "#838996",
        "Strawberry": "#fc5a8d",
        "Pacific Cyan": "#1ca9c9",
        "Battleship Grey": "#848482",
        "Lavender": "#e6e6fa",
        "Neon Blue": "#1f51ff",
        "English Violet": "#563c5c",
        "Light Olive": "#a9a971",
        "Navy Blue": "#000080",
        "Pure Gold": "#ffd700",
        "Carrot Juice": "#ed9121",
        "Electric Purple": "#bf00ff",
        "Grape": "#6f2da8",
        "Sapphire": "#0f52ba",
        "Hunter Green": "#355e3b",
        "Indigo Dye": "#00416a",
        "Cobalt Blue": "#0047ab",
        "Jade Green": "#00a86b",
        "Rosewood": "#65000b",
        "Azure Blue": "#007fff",
        "Moonstone": "#3aa8c1",
        "Coral Red": "#ff4040",
        "Khaki Green": "#8a9a5b",
        "Purple": "#800080",
        "Caramel": "#af6f09",
        "Chocolate": "#7b3f00",
        "Onyx Black": "#0f0f0f",
        "Platinum": "#e5e4e2"
    };
    const giveaway = document.getElementById("giveaway");
    if(maintenance){
        loading.classList.add("hide");
        maintenanceElm.classList.remove("hide");
        return;
    }
    if(userUIdata.user.username === undefined){
        createMessage(text.errorCreateUsername, 0);
        return;
    }
    if(test){
        loading.classList.add("hide");
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

    function renderListLang(){
        listRender.map((el) => {
            let {elmsRefs, to, html, place, upgrade} = el;
            if(upgrade){
                elmsRefs = document.querySelectorAll(elmsRefs);
            }
            to = text[to];
            if(elmsRefs.length){
                elmsRefs.forEach((el) => {
                    if(place){
                        el.placeholder = to;
                    }
                    else if(html){
                        el.innerHTML = to;
                    } else{
                        el.innerText = to;
                    }
                })
            }
            else{
                if(place){
                    elmsRefs.placeholder = to;
                }
                else if(html){
                    elmsRefs.innerHTML = to;
                } else{
                    elmsRefs.innerText = to;
                }
            }
        })
    }


    // giftUser = JSON.parse(giftUser.data);
    setTimeout( () => {
        bodyElm.style.overflow = "auto";
        loading.className = "hide";
    }, 2000)
    let giftsData = await f("gifts").then((e) => e.json())
    giftsData = giftsData.data;

    function renderCases(){
        selectCasePage.innerHTML = '';
        for(let i = 0; i < giftsData.length; i++){
            const {caseName, status, isClosed, price, id} = giftsData[i];
            const caseElm = document.createElement("div");
            caseElm.className = "case";
            caseElm.onclick = () => {
                if(isClosed){
                    return;
                }
                headerCases.classList.add("active");
                selectCasePage.classList.add("hide");
                casePage.classList.remove("hide");
                caseId = i;
                casePrice.innerText = price || 0;
                // isEventSquid
                renderRoulette();
            }
            caseElm.innerHTML = `<div class="statusGift">${status}</div>
                    <div style="width: 120px;" class="textCenter">
                        <div style="min-height: 120px">
                         <img src="./images/cases/case${id}.png" alt="" class="caseImg" />
                        </div>
                        <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">${caseName} <span class="caseText"></span></p>
                        <div class="starParent" >
                            <span>${price || 0}</span>
                            <span class="starIcon"></span>
                        </div>
                    </div>`;
            selectCasePage.appendChild(caseElm);
        }


    }
    renderCases();
    closeCases.onclick = () => {
        headerCases.classList.remove("active");
        selectCasePage.classList.remove("hide");
        casePage.classList.add("hide");
    }
    if(lang === "en"){
        language_toggle.checked = true;
    }
    language_toggle.onclick = async () => {
        if(lang === "en"){
            lang = "ru";
        } else{
            lang = "en";
        }
        localStorage.setItem("lang", lang);
        // setTimeout(() => {
        //     location.reload();
        // }, 1000)
        text = dataText[lang];
        searchUser();
        renderListLang();
        renderFooter();
        sellOrReciveGift.classList.add("hide");
        giftUser  = await f("user").then((e) => e.json());
        if(giftUser.status !== "ok"){
            createMessage("USER AUTH ERROR", 0);
            return;
        }
        renderUserGift();
    }

    let page = "main";
    let giveawayPage = "giveawayFree";
    let mainPage = "cases";
    async function renderGiveAway(){
        let dataGiveAway;
        // = {
        //     free: [
        //         {
        //             id: 1,
        //             byUser: "Hayk5545",
        //             imageGift: "https://nft.fragment.com/gift/durovscap-1896",
        //             price: 0,
        //             priceBoost: 1,
        //             users: {},
        //             ticket: 0,
        //             year: 2025,
        //             month: 5,
        //             day: 5,
        //             tasks: [
        //                 {
        //                     // html: "📨 Подпишитесь на <a href=\"https://t.me/tongolos\" target=\"_blank\">@Hayk5545</a>",
        //                     description: "followTo",
        //                     channel: "Hayk5545",
        //                 },
        //                 // {
        //                 //     description: "📨 Подпишитесь на ",
        //                 //     channel: "Hayk5545",
        //                 // }
        //             ]
        //         }
        //     ],
        //     paid: []
        // }
        await f("getGiveAway").then((e) => e.json()).then((e) => {
            dataGiveAway = e;
        }).catch((e) => {
            createMessage("Giveaway error", 0);
        })
        // console.log(JSON.stringify(dataGiveAway));
        giveawayCard.innerHTML = '';
        let html = document.createElement("div");
        const dataReplace = {
            giveawayFree: "free",
            giveawayPay: "paid",
        };
       let arr = dataGiveAway//[dataReplace[giveawayPage]];
       if(giveawayPage === "giveawayEntered"){
           arr = dataGiveAway.filter((e) => JSON.parse(e.users)[userUIdata.user.username]);
       }
       else if(!arr || arr.length === 0){
           return;
       }
        arr.map((el) => {
            let {byUser, imageGift, price, priceBoost, users, date, tasks, id} = el;
            users = JSON.parse(users);
            const giveawayContent = document.createElement("div");
            giveawayContent.className = "giveaway-content giveaway-card";
            const innerDiv = document.createElement("div");
            const giveawayHeader = document.createElement("div");
            giveawayHeader.className = "giveaway-header";

            const giveawayLink = document.createElement("a");
            giveawayLink.href = "#";
            giveawayLink.className = "giveaway-link";
            giveawayLink.textContent = `@${byUser}`;

            giveawayHeader.textContent = `${text.giveawayBy} `;
            giveawayHeader.appendChild(giveawayLink);
            const flexDiv = document.createElement("div");
            flexDiv.className = "flex";

            const giveawayImage = document.createElement("div");
            giveawayImage.className = "giveaway-image";

            const lottiePlayer = document.createElement("lottie-player");
            lottiePlayer.src = `${imageGift}.lottie.json`;
            lottiePlayer.setAttribute("background", "transparent");
            lottiePlayer.setAttribute("speed", "1");
            lottiePlayer.setAttribute("loop", "");
            lottiePlayer.setAttribute("autoplay", "");
            lottiePlayer.style.width = "100px";

            giveawayImage.appendChild(lottiePlayer);

// Giveaway info
            const giveawayInfo = document.createElement("div");
            giveawayInfo.className = "giveaway-info";

// Info items
            const ticketsInfo = document.createElement("p");
            ticketsInfo.className = "giveaway-info-item";
            ticketsInfo.textContent = `${text.tickets}: ${users[userUIdata.user.username] || 0}`;

            const totalTicketsInfo = document.createElement("p");
            totalTicketsInfo.className = "giveaway-info-item";
            totalTicketsInfo.textContent = `${text.totalTicket}: ${Object.values(users).reduce((a,e) => a + e, 0)}`;

            const participantsInfo = document.createElement("p");
            participantsInfo.className = "giveaway-info-item";
            participantsInfo.textContent = `${text.participants}: ${Object.keys(users).length}`;

// Price info
            const priceContainer = document.createElement("div");
            priceContainer.className = "giveaway-info-item";

            const priceFlex = document.createElement("div");
            priceFlex.className = "flex";

            const priceText = document.createElement("p");
            priceText.className = "flex";
            priceText.style.marginBottom = "5px";
            priceText.innerText = text.price + " : "
            const freeText = document.createElement("p");
            freeText.className = "flex align";
            freeText.style.color = "#4cd964";
            freeText.style.marginLeft = "5px";
            freeText.innerHTML = price === 0 ? text.free : `<svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="_iconTon_w1159_129"><path d="M19.4687 6.33953L11.7971 18.52C11.7037 18.6671 11.5745 18.7882 11.4216 18.8721C11.2686 18.956 11.0969 19 10.9223 19C10.7464 19.0003 10.5732 18.956 10.4193 18.8711C10.2653 18.7862 10.1356 18.6636 10.0423 18.5148L2.5209 6.33437C2.31019 5.99296 2.19906 5.59977 2.19996 5.1989C2.2095 4.60707 2.45412 4.04319 2.88016 3.63099C3.30619 3.21879 3.87883 2.99194 4.47243 3.00022H17.5378C18.7854 3.00022 19.8 3.98085 19.8 5.19374C19.8 5.59631 19.6861 5.99373 19.4687 6.33953ZM4.3689 5.93179L9.96466 14.5355V5.06471H4.95384C4.37407 5.06471 4.11525 5.44664 4.3689 5.93179ZM12.0352 14.5355L17.631 5.93179C17.8898 5.44664 17.6258 5.06471 17.0461 5.06471H12.0352V14.5355Z" fill="#0a84ff"></path></svg> <span style="color: #0a84ff">${price}</span>`;

            priceText.appendChild(freeText);
            priceFlex.appendChild(priceText);
            priceContainer.appendChild(priceFlex);

            const timerDiv = document.createElement("div");
            // const timeDivChild = document.createElement("div");
            timerDiv.className = "giveaway-complete";
            timerDiv.style.display = "inline-block";
            // timerDiv.className = "posRelative";
            // timerDiv.appendChild(timeDivChild);

            const buyTickets = document.createElement("div");
            buyTickets.className = "buyTickets textCenter";
            buyTickets.innerText = text.buyTickets;
            // timerDiv.appendChild(buyTickets);

            const timerIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            timerIcon.setAttribute("width", "13");
            timerIcon.setAttribute("height", "12");
            timerIcon.setAttribute("viewBox", "0 0 13 12");
            timerIcon.setAttribute("fill", "none");
            timerIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            timerIcon.classList.add("_timerIcon_yl712_14");

            const circlePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            circlePath.setAttribute("d", "M6.5 11.5C9.53757 11.5 12 9.03757 12 6C12 2.96243 9.53757 0.5 6.5 0.5C3.46243 0.5 1 2.96243 1 6C1 9.03757 3.46243 11.5 6.5 11.5Z");
            circlePath.setAttribute("stroke", "#F7F7F8");
            circlePath.setAttribute("stroke-linecap", "round");
            circlePath.setAttribute("stroke-linejoin", "round");
            const handPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            handPath.setAttribute("d", "M6.5 3.88452V5.99991L8.64923 8.50452");
            handPath.setAttribute("stroke", "#F7F7F8");
            handPath.setAttribute("stroke-linecap", "round");
            handPath.setAttribute("stroke-linejoin", "round");

            timerIcon.appendChild(circlePath);
            timerIcon.appendChild(handPath);
            timerIcon.style.marginRight = "2px"
            const timerText = document.createElement("span");
            timerText.className = "whiteText";
            let parsed = date.split("_");
            const targetDate = new Date(Date.UTC(parsed[4], parsed[3], parsed[2], parsed[1]));
            const now = new Date();
            const diffMs = targetDate - now;
            const diffSec = Math.floor(diffMs / 1000);
            let hours =  Math.floor(diffSec / 3600);
            let minute = Math.floor((diffSec % 3600) / 60);
            let sec = diffSec % 60;
            let isEnded = false;
            const button = document.createElement("a");
            let first = true;
            const intervalDay = setInterval((e) => {
                first = false;
                sec--;
                if(sec < 0){
                    sec = 59;
                    minute--;
                    if(minute < 0){
                        minute = 59;
                        hours--;
                        if(hours < 0){
                            clearInterval(intervalDay);
                            timerText.textContent = text.finished
                            isEnded = true;
                            button.classList.add("completedTask");
                            button.innerText = text.finished;
                            buyTickets.classList.add('hide');
                            button.onclick = () => {};
                            return;
                        }
                    }
                }
                timerText.textContent = `${hours >= 10 ? hours : "0" + hours}:${minute >= 10 ? minute : "0" + minute}:${sec >= 10 ? sec : "0" + sec}`;
            }, first ? 0 : 1000)


            timerDiv.appendChild(timerIcon);
            timerDiv.appendChild(timerText);

            priceContainer.appendChild(timerDiv);

// Append all info items
            giveawayInfo.appendChild(ticketsInfo);
            giveawayInfo.appendChild(totalTicketsInfo);
            giveawayInfo.appendChild(participantsInfo);
            giveawayInfo.appendChild(priceContainer);

// Assemble flex
            flexDiv.appendChild(giveawayImage);
            flexDiv.appendChild(giveawayInfo);


            innerDiv.appendChild(giveawayHeader);
            innerDiv.appendChild(flexDiv);


            button.href = "#";
            button.className = "giveaway-button";
            button.textContent = text.enterGiveAway;
            enterGiveAway.classList.add("complatedTask")
            enterGiveAway.onclick = () => {}
            if(isEnded){
                button.classList.add("completedTask");
                button.innerText = text.finished;
                button.onclick = () => {};
                return;
            }
             if(users[userUIdata.user.username]){
                button.textContent = text.areInGiveAway;
                button.classList.add("complatedTask");
                innerDiv.appendChild(buyTickets)
            }
           else{
                button.onclick = () => {
                    tasksGiveAway.classList.remove("hide");
                    enterGiveAway.classList.remove("hide");
                    buyTicketsElm.classList.add("hide");
                    buyTicketBoard.classList.add("hide");
                    tasksGiveAway.innerHTML = '';
                    let completed = 0;
                    tasks = JSON.parse(tasks);
                    tasks.map((el) => {
                        const div = document.createElement("div");
                        const a = document.createElement("a");
                        a.href = el.link;
                        a.target = "_blank";
                        a.style.fontSize = "15px";
                        a.textContent = `@${el.channel}`;
                        div.className = "action";
                        div.innerText = text[el.description];
                        function check(){
                            div.classList.add("complatedTask");
                            completed++;
                            if(completed >= tasks.length){
                                enterGiveAway.classList.remove("complatedTask")
                                enterGiveAway.onclick = () => {
                                    f("enterGiveAway", {id}).then(() => {
                                        setTimeout(() => {
                                            renderGiveAway();
                                        }, 1000)
                                    })
                                    blurEffectGiveAway.classList.add("hide");
                                    model.classList.add("hide");
                                }
                            }
                        }
                        a.onclick = () => {
                            setTimeout(() => {
                                if(el.description === "followTo"){
                                    f("isInTheChannel", {channel: `@${el.channel}`, id: userUIdata.user.id}).then((el) => el.json()).then((el) => {
                                        if(el.data){
                                            check();
                                        } else{
                                            createMessage(text.errorIsNotSubscribe, 0);
                                        }
                                    })
                                }else{
                                    check();
                                }

                            }, 2000)
                        }
                        div.appendChild(a);
                        tasksGiveAway.appendChild(div);
                    })



                    const lottiePlayer2 = document.createElement("lottie-player");
                    lottiePlayer2.src = `${imageGift}.lottie.json`;
                    lottiePlayer2.setAttribute("background", "transparent");
                    lottiePlayer2.setAttribute("speed", "1");
                    lottiePlayer2.setAttribute("loop", "");
                    lottiePlayer2.setAttribute("autoplay", "");
                    lottiePlayer2.style.width = "100px";
                    modelImg.innerHTML = '';
                    modelImg.appendChild(lottiePlayer2)
                    blurEffectGiveAway.classList.remove("hide");
                    model.classList.remove("hide");
                }
            }
            buyTickets.onclick = () => {
                let count = 1;
               function updateCount(){
                   buyTicketsStar.innerText = count * priceBoost;
                   ticketsCount.innerText = count;
               }

                updateCount();
                decrementTicketCount.onclick = () => {
                    if(count <= 1){
                        return;
                    }
                    count--;
                    updateCount()
                }
                incrementTicketCount.onclick = () => {
                    count++;
                    updateCount()
                }
                buyTicketsElm.onclick = () => {
                    f("buyTickets", {id, tickets: count}).then((el) => {
                        if(el.ok) {
                            createMessage(text.giftWithdraw, 1);
                            setTimeout(() => {
                                renderGiveAway();
                            }, 1000)
                        }
                    })
                    model.classList.add('hide');
                    blurEffectGiveAway.classList.add("hide");
                }
                tasksGiveAway.classList.add("hide");
                enterGiveAway.classList.add("hide");
                buyTicketsElm.classList.remove("hide");
                buyTicketBoard.classList.remove("hide");

                const lottiePlayer2 = document.createElement("lottie-player");
                lottiePlayer2.src = `${imageGift}.lottie.json`;
                lottiePlayer2.setAttribute("background", "transparent");
                lottiePlayer2.setAttribute("speed", "1");
                lottiePlayer2.setAttribute("loop", "");
                lottiePlayer2.setAttribute("autoplay", "");
                lottiePlayer2.style.width = "100px";
                modelImg.innerHTML = '';
                modelImg.appendChild(lottiePlayer2)
                blurEffectGiveAway.classList.remove("hide");
                model.classList.remove("hide");
            }

            giveawayContent.appendChild(innerDiv);
            giveawayContent.appendChild(button);

// Append to body or specific container
            html.appendChild(giveawayContent);

        })
        giveawayCard.appendChild(html)
    }
    renderGiveAway();
    function closePages(){
        users.classList.add('hide');
        main.classList.add('hide');
        profile.classList.add('hide');
        market.classList.add('hide');
        giveaway.classList.add("hide");
        gameFlipCoin.classList.add("hide");
    }
    closePages();
    openPage(page);
    function renderSearchPage(res){
        let html = "";
        for(let i = 0; i < res.length; i++){
            const t = res[i];
            html += `<div class="user ${(t.id === userUIdata.user.id ? 'selected' : '')}">
                    <p>#${t.id}</p>
                    <div>
                        <p>${t.giftCount} ${text.gift + (lang === "en" && t.giftCount > 1 ? 's' : '')}</p>
                    </div>
                </div>`;
        }
        usersList.innerHTML = html;
    }
    function openPage(pageId){
        window.scrollTo(0, 0);
        let el = document.getElementById(pageId);
        if(!el){
            page = "main";
            el = document.getElementById("main");
        }
        page = pageId;
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
                text: text.usersText,
                ref: "users",
                fnc: async () => {
                    await searchUser();
                }
            },
            {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store h-6 w-6"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg>`,
                text: text.marketText,
                ref: "market",
                status:  "NEW",
                fnc: async () => {
                    renderMarket();
                }
            }, {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="512" height="512" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="512" height="512" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_2)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,256,256)"><path  fill-opacity="1" d=" M199.11099243164062,-256 C199.11099243164062,-256 -199.11099243164062,-256 -199.11099243164062,-256 C-230.39999389648438,-256 -256,-230.39999389648438 -256,-199.11099243164062 C-256,-199.11099243164062 -256,199.11099243164062 -256,199.11099243164062 C-256,230.39999389648438 -230.39999389648438,256 -199.11099243164062,256 C-199.11099243164062,256 199.11099243164062,256 199.11099243164062,256 C230.39999389648438,256 256,230.39999389648438 256,199.11099243164062 C256,199.11099243164062 256,-199.11099243164062 256,-199.11099243164062 C256,-230.39999389648438 230.39999389648438,-256 199.11099243164062,-256z M-128,170.66700744628906 C-151.60899353027344,170.66700744628906 -170.66700744628906,151.60899353027344 -170.66700744628906,128 C-170.66700744628906,104.39099884033203 -151.60899353027344,85.33399963378906 -128,85.33399963378906 C-104.39099884033203,85.33399963378906 -85.33300018310547,104.39099884033203 -85.33300018310547,128 C-85.33300018310547,151.60899353027344 -104.39099884033203,170.66700744628906 -128,170.66700744628906z M-128,-85.33300018310547 C-151.60899353027344,-85.33300018310547 -170.66700744628906,-104.39099884033203 -170.66700744628906,-128 C-170.66700744628906,-151.60899353027344 -151.60899353027344,-170.66600036621094 -128,-170.66600036621094 C-104.39099884033203,-170.66600036621094 -85.33300018310547,-151.60899353027344 -85.33300018310547,-128 C-85.33300018310547,-104.39099884033203 -104.39099884033203,-85.33300018310547 -128,-85.33300018310547z M0,42.66699981689453 C-23.608999252319336,42.66699981689453 -42.66699981689453,23.608999252319336 -42.66699981689453,0 C-42.66699981689453,-23.608999252319336 -23.608999252319336,-42.66600036621094 0,-42.66600036621094 C23.608999252319336,-42.66600036621094 42.66699981689453,-23.608999252319336 42.66699981689453,0 C42.66699981689453,23.608999252319336 23.608999252319336,42.66699981689453 0,42.66699981689453z M128,170.66700744628906 C104.39099884033203,170.66700744628906 85.33300018310547,151.60899353027344 85.33300018310547,128 C85.33300018310547,104.39099884033203 104.39099884033203,85.33399963378906 128,85.33399963378906 C151.60899353027344,85.33399963378906 170.66700744628906,104.39099884033203 170.66700744628906,128 C170.66700744628906,151.60899353027344 151.60899353027344,170.66700744628906 128,170.66700744628906z M128,-85.33300018310547 C104.39099884033203,-85.33300018310547 85.33300018310547,-104.39099884033203 85.33300018310547,-128 C85.33300018310547,-151.60899353027344 104.39099884033203,-170.66600036621094 128,-170.66600036621094 C151.60899353027344,-170.66600036621094 170.66700744628906,-151.60899353027344 170.66700744628906,-128 C170.66700744628906,-104.39099884033203 151.60899353027344,-85.33300018310547 128,-85.33300018310547z"></path></g></g></g></svg>`,
                text: text.playText,
                ref: "main"
            },
            {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" viewBox="0 0 592 576" enable-background="new 0 0 592 576" xml:space="preserve">
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M180.000061,268.660675   C282.803162,268.660645 385.106293,268.703369 487.409149,268.558472   C493.691559,268.549561 497.912323,270.581757 501.803406,275.535156   C520.944702,299.902191 540.409973,324.014740 559.759094,348.218567   C560.591125,349.259308 561.440247,350.288910 562.222717,351.366302   C564.325317,354.261414 565.080261,357.324341 563.381165,360.717133   C561.676636,364.120636 558.775757,365.316345 555.181519,365.317139   C539.852722,365.320496 524.523926,365.302704 509.195221,365.338135   C499.306213,365.360992 500.359741,364.313843 500.356506,374.128113   C500.338470,428.778595 500.351471,483.429108 500.346008,538.079590   C500.344696,551.255127 494.293732,557.333252 481.145721,557.333862   C365.679871,557.339050 250.214035,557.338257 134.748184,557.329834   C121.703842,557.328857 115.656517,551.183899 115.655449,537.976257   C115.650993,482.659302 115.655411,427.342316 115.654861,372.025360   C115.654793,365.360443 115.649971,365.344177 109.189079,365.339172   C93.360435,365.326965 77.531410,365.271545 61.703396,365.370667   C57.720798,365.395599 54.389412,364.523743 52.520626,360.732971   C50.673874,356.986938 51.759468,353.622253 54.224159,350.542236   C74.832672,324.788879 95.446732,299.039917 116.044456,273.277954   C118.748413,269.896057 122.163422,268.568787 126.516220,268.602173   C144.176620,268.737610 161.838638,268.660095 180.000061,268.660675  M483.654999,418.500061   C483.655182,403.170715 483.656067,387.841370 483.655182,372.512024   C483.654785,365.352020 483.653259,365.339935 476.690765,365.338959   C429.369446,365.332245 382.048035,365.291260 334.726929,365.392090   C330.198517,365.401764 326.792847,364.178528 323.917816,360.541229   C310.797394,343.942047 297.518005,327.468536 284.298096,310.947998   C281.964905,308.032318 279.642609,305.107910 277.189056,302.029144   C275.964996,303.797546 276.353851,305.160889 276.353577,306.438354   C276.337097,382.585602 276.383118,458.732880 276.251343,534.879883   C276.243256,539.562805 277.683350,540.760803 282.226410,540.751526   C347.376282,540.618774 412.526611,540.606934 477.676392,540.763306   C482.642395,540.775208 483.764191,539.140564 483.744110,534.470459   C483.579651,496.147583 483.653198,457.823700 483.654999,418.500061  M259.651581,465.500092   C259.651581,411.207916 259.651581,356.915710 259.651581,302.623535   C243.283340,321.523590 227.935150,340.572235 212.761322,359.758759   C209.715271,363.610321 206.304367,365.462524 201.301056,365.419800   C180.147598,365.239197 158.991226,365.413300 137.837250,365.267365   C133.912689,365.240295 132.240967,366.139923 132.251266,370.502899   C132.381180,425.472229 132.380234,480.441986 132.263824,535.411316   C132.254852,539.650696 133.709763,540.747314 137.756332,540.734375   C176.567825,540.610168 215.380157,540.588257 254.191345,540.751587   C258.738251,540.770691 259.766479,539.202026 259.733643,534.961609   C259.556763,512.142273 259.650696,489.320831 259.651581,465.500092  M456.499939,348.660095   C483.329498,348.660095 510.159088,348.660095 538.209534,348.660095   C536.080078,345.810150 534.942810,344.194183 533.710938,342.653870   C519.663208,325.089508 505.515686,307.603760 491.617950,289.921661   C488.974182,286.558014 486.219330,285.248322 481.949768,285.256531   C418.631775,285.378723 355.313477,285.329987 291.995300,285.374207   C290.323639,285.375397 288.359344,284.580383 286.819519,286.461426   C287.255341,287.191010 287.598419,287.953217 288.104431,288.584930   C302.893829,307.048157 317.805786,325.414917 332.409760,344.023438   C335.216339,347.599579 338.159760,348.757263 342.527161,348.741028   C380.184326,348.600983 417.842224,348.660065 456.499939,348.660095  M203.500092,285.338074   C180.026688,285.337067 156.552917,285.398224 133.080231,285.267853   C129.568008,285.248352 127.225906,286.362762 125.060822,289.120728   C114.785233,302.210052 104.320007,315.150330 93.943108,328.160278   C88.815063,334.589478 83.731880,341.054413 78.631874,347.498810   C80.482918,349.099701 82.049744,348.638672 83.478882,348.639679   C120.769981,348.665680 158.061188,348.622620 195.352097,348.708099   C198.498825,348.715332 200.594009,347.703339 202.539764,345.250580   C216.814423,327.256317 231.221542,309.367188 245.532135,291.401306   C246.825668,289.777374 248.519089,288.305389 248.931824,285.338684   C233.991257,285.338684 219.245682,285.338684 203.500092,285.338074  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M242.049347,161.953094   C237.007507,157.073196 232.236542,152.421768 227.424393,147.813324   C224.450668,144.965454 222.657425,141.615936 224.038284,137.524582   C225.429276,133.403244 228.900360,132.132278 233.018600,131.579239   C246.843979,129.722702 260.630798,127.580650 274.445496,125.641495   C277.537445,125.207474 279.497101,123.786087 280.876648,120.918823   C286.725189,108.763123 292.807343,96.719955 298.677032,84.574249   C300.583282,80.629837 302.783417,77.118393 307.641388,76.981827   C312.723450,76.838974 315.180084,80.253960 317.196503,84.428215   C323.062988,96.572617 329.198730,108.587036 335.053253,120.737045   C336.421844,123.577324 338.216614,125.181717 341.352478,125.619881   C355.339020,127.574203 369.301788,129.700546 383.294647,131.606918   C387.236633,132.143967 390.469666,133.522797 391.868530,137.401016   C393.345734,141.496429 391.670898,144.811935 388.688660,147.705292   C378.645386,157.449188 368.700867,167.295395 358.605499,176.984695   C356.094604,179.394562 355.224060,181.639374 355.948273,185.311646   C358.614410,198.830673 360.796448,212.446060 363.089111,226.037277   C363.748505,229.946106 363.634033,233.756454 360.023499,236.438309   C356.425842,239.110550 352.887146,238.246857 349.266296,236.317810   C337.507599,230.053253 325.613953,224.034973 313.968384,217.568710   C309.666504,215.180084 306.212616,215.307022 301.942230,217.682251   C290.448425,224.075211 278.683167,229.978775 267.061554,236.144211   C263.317413,238.130524 259.619720,239.326920 255.892029,236.334656   C252.267548,233.425278 252.309662,229.473068 253.033844,225.371124   C255.487503,211.473267 257.868134,197.562088 260.421570,183.682648   C260.922211,180.961487 259.803070,179.240417 258.053589,177.545502   C252.788971,172.445068 247.551132,167.317001 242.049347,161.953094  M338.433990,142.294113   C337.128906,142.040604 335.819214,141.548569 334.519501,141.573654   C327.868134,141.702026 324.302582,138.011215 321.821869,132.265503   C319.251312,126.311790 316.142029,120.589264 313.228973,114.785393   C311.697479,111.734077 310.081757,108.725044 308.034576,104.795837   C306.596344,107.431755 305.611115,109.104042 304.750214,110.838066   C300.826508,118.740921 296.907501,126.646408 293.050354,134.581848   C291.341522,138.097488 288.857819,140.578583 284.871185,141.176926   C279.777374,141.941452 274.642487,142.467300 269.579041,143.390717   C263.673492,144.467697 257.496033,144.359894 252.681152,146.293396   C259.881714,154.081329 266.843933,161.895508 274.142517,169.381729   C277.623627,172.952301 278.850647,176.644806 277.923096,181.550034   C275.957489,191.944687 274.354279,202.407837 272.557800,213.109161   C274.838928,213.206375 276.189087,212.145294 277.599030,211.409500   C285.570007,207.249557 293.596802,203.184586 301.428955,198.775269   C305.973785,196.216599 310.116547,196.211609 314.620789,198.724258   C321.017120,202.292389 327.571808,205.575699 334.034790,209.025757   C336.913666,210.562546 339.638916,212.426987 343.528412,213.466171   C341.671997,202.403809 340.096069,191.931763 338.092041,181.542297   C337.138214,176.597443 338.292419,172.847733 341.934143,169.435287   C348.738342,163.059418 355.365417,156.493271 362.004944,149.944229   C362.968628,148.993668 364.650543,148.407791 364.342346,146.095230   C356.035248,144.857803 347.671509,143.611923 338.433990,142.294113  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M490.665710,159.446960   C492.880066,158.579544 494.708099,157.749008 496.616669,157.196716   C501.992157,155.641190 506.339752,157.704727 507.912109,162.435730   C509.373260,166.832108 507.235352,171.222824 502.232178,173.086105   C494.670746,175.902145 487.786285,179.719391 481.666901,185.023300   C472.302002,193.140198 465.545837,203.070663 460.650757,214.357605   C459.359863,217.334152 457.808258,220.130234 454.408051,220.999741   C451.150055,221.832886 448.135742,221.278732 445.789673,218.571716   C443.186798,215.568436 443.139557,212.238220 444.594116,208.777481   C453.321045,188.014191 466.770996,171.456787 487.165955,161.110367   C488.202759,160.584396 489.265503,160.109528 490.665710,159.446960  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M121.626831,158.015121   C145.950699,167.575714 161.436493,185.306534 171.228012,208.516327   C173.567444,214.061707 171.742722,218.791534 167.149704,220.693344   C162.393387,222.662781 158.114380,220.689240 155.680084,214.972794   C150.289368,202.313812 142.580017,191.422684 131.765076,182.838593   C126.902977,178.979416 121.501152,176.016617 115.715317,173.783325   C109.053513,171.211945 106.454216,167.453720 108.026787,162.503662   C109.675575,157.313690 114.425743,155.647583 121.626831,158.015121  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M82.327240,170.615463   C69.395561,176.566849 57.248398,171.888458 52.648441,159.512634   C48.663845,148.792389 54.793083,137.003235 66.213470,133.421265   C75.449860,130.524307 85.891129,135.038025 90.229912,143.803467   C95.020119,153.480927 92.133652,163.612122 82.327240,170.615463  M68.682007,153.280823   C69.624840,155.429352 70.837830,157.221298 73.517715,155.734207   C74.670761,155.094391 75.644508,153.991562 75.279518,152.474014   C74.950470,151.105911 73.978378,150.063400 72.613998,149.775879   C70.370491,149.303085 69.305511,150.734451 68.682007,153.280823  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M147.244049,58.293129   C150.688126,70.530212 144.623749,81.646355 133.096512,84.815063   C122.527580,87.720329 111.444084,81.252739 108.227608,70.303238   C105.092674,59.631317 111.728302,48.359730 122.983681,45.237885   C132.764175,42.525120 142.233704,47.486584 147.244049,58.293129  M130.465195,66.963737   C132.154907,64.938385 131.385864,63.367069 129.502411,62.072777   C128.234314,61.201355 126.983223,61.524288 125.930176,62.482628   C124.750221,63.556469 124.103653,64.907707 125.131561,66.379898   C126.378220,68.165390 127.936226,69.180138 130.465195,66.963737  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M533.698547,135.386124   C545.960144,129.871979 557.815979,133.799301 562.608093,144.656906   C567.264343,155.206741 562.643494,167.086929 552.075806,171.735123   C542.571472,175.915619 531.367920,172.122391 526.275452,162.999802   C520.776794,153.149750 523.491455,142.660370 533.698547,135.386124  M546.849365,154.437515   C548.223572,152.055923 546.823059,150.699707 544.914673,149.811600   C543.327148,149.072830 542.101746,150.044235 541.201355,151.336395   C540.333740,152.581650 540.497559,153.831741 541.489868,154.909973   C543.098816,156.658340 544.785828,156.883438 546.849365,154.437515  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M470.403687,54.701866   C476.342346,46.234215 485.093140,42.760845 493.459503,45.310520   C502.729919,48.135700 508.417328,55.794312 508.342194,65.351288   C508.271790,74.303162 502.614349,81.973709 493.734558,84.546715   C485.674316,86.882271 478.463440,84.899643 472.918884,78.622093   C466.654297,71.529358 465.944183,63.485649 470.403687,54.701866  M487.092621,68.091980   C489.680176,68.737335 490.840820,67.117378 491.287445,65.062904   C491.596222,63.642498 490.384827,62.648785 489.179382,61.987114   C487.531372,61.082485 486.265594,61.865284 485.334656,63.171410   C483.955353,65.106598 484.829102,66.580208 487.092621,68.091980  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M467.989868,113.986343   C461.395355,122.894745 456.426422,132.290939 452.607910,142.296341   C451.424530,145.397125 449.790955,148.076157 446.436890,148.986237   C443.399231,149.810501 440.500641,149.382309 438.139313,146.958939   C435.517456,144.268219 434.987518,141.061493 436.220886,137.716446   C441.917145,122.267754 449.516968,107.914848 461.116241,95.991829   C465.022369,91.976700 470.138885,91.569069 473.565735,94.718597   C477.285095,98.137054 477.191162,103.091202 473.346771,107.584190   C471.614899,109.608276 469.922607,111.666214 467.989868,113.986343  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M164.360352,144.482025   C158.990448,130.697998 152.426331,118.083344 142.512817,107.397224   C138.677917,103.263458 138.740372,98.332695 142.245529,94.955780   C145.725372,91.603264 150.814636,91.781288 154.665207,95.793335   C166.268768,107.883469 174.258041,122.189873 179.739426,137.924408   C181.312836,142.440903 179.451385,146.653000 175.644608,148.517700   C171.620041,150.489075 168.108170,149.318344 164.360352,144.482025  z"/>
<path fill="#aaaaaa" opacity="1.000000" stroke="none" d=" M426.711121,428.666138   C433.646576,429.282166 436.252838,431.837219 436.314362,438.077393   C436.412964,448.075806 436.417419,458.076691 436.311737,468.074951   C436.247345,474.164490 433.129486,477.296295 426.998901,477.307220   C395.501007,477.363281 364.002838,477.359680 332.504944,477.290253   C326.889404,477.277893 323.781891,474.207916 323.707703,468.642303   C323.572205,458.478027 323.600861,448.310303 323.681458,438.144958   C323.733704,431.556702 326.814331,428.682312 333.752869,428.675903   C364.584320,428.647491 395.415802,428.663483 426.711121,428.666138  M397.499969,445.338257   C381.533081,445.340057 365.566010,445.298737 349.599335,445.359009   C339.159912,445.398438 340.691956,444.065216 340.242645,454.702667   C340.031738,459.696991 341.882721,460.797913 346.538666,460.748749   C367.492859,460.527435 388.451019,460.719330 409.407166,460.629944   C421.095184,460.580078 419.349548,462.423492 419.731018,450.281433   C419.861511,446.127686 418.218811,445.123199 414.464172,445.287384   C409.152130,445.519684 403.822174,445.341431 397.499969,445.338257  z"/>
</svg>`,
                text:  text.giveaway,
                ref: "giveaway",
                fnc: async () => {
                    renderGiveAway();
                }
            },
            {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="512" height="512" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_7"><rect width="512" height="512" x="0" y="0"></rect></clipPath><g id="__lottie_element_8"><g transform="matrix(1,0,0,1,256,256)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(19.692310333251953,0,0,19.692310333251953,0,0)"><path  fill-opacity="1" d=" M0,13 C7.179999828338623,13 13,7.179999828338623 13,0 C13,-7.179999828338623 7.179999828338623,-13 0,-13 C-7.179999828338623,-13 -13,-7.179999828338623 -13,0 C-13,7.179999828338623 -7.179999828338623,13 0,13z"></path></g></g></g><mask id="__lottie_element_8_1" mask-type="alpha"><use xlink:href="#__lottie_element_8"></use></mask></defs><g clip-path="url(#__lottie_element_7)"><g mask="url(#__lottie_element_8_1)" style="display: block;"><g transform="matrix(1,0,0,1,256,256)" opacity="1"><g opacity="1" transform="matrix(19.692310333251953,0,0,19.692310333251953,0,0)"><path  fill-opacity="1" d=" M6.61,5.98 C7.13,6.33 7.39,6.5 7.57,6.92 C7.69,7.22 7.69,7.78 7.57,8.08 C7.39,8.5 7.13,8.67 6.61,9.02 C4.71,10.27 2.44,11 0,11 C-2.44,11 -4.71,10.27 -6.61,9.02 C-7.13,8.67 -7.39,8.5 -7.57,8.08 C-7.69,7.78 -7.69,7.22 -7.57,6.92 C-7.39,6.5 -7.13,6.33 -6.61,5.98 C-4.71,4.73 -2.44,4 0,4 C2.44,4 4.71,4.73 6.61,5.98z M0,1 C-2.21,1 -4,-0.79 -4,-3 C-4,-5.21 -2.21,-7 0,-7 C2.21,-7 4,-5.21 4,-3 C4,-0.79 2.21,1 0,1z M-15.82,3.96 C-15.56,4.31 -15.42,4.48 -15.39,4.84 C-15.36,5.09 -15.45,5.54 -15.58,5.75 C-15.76,6.06 -15.95,6.17 -16.33,6.37 C-17.71,7.12 -19.23,7.4 -20.74,7.08 C-22.24,6.76 -23.52,5.88 -24.47,4.64 C-24.74,4.3 -24.87,4.13 -24.91,3.77 C-24.93,3.52 -24.84,3.07 -24.71,2.85 C-24.53,2.54 -24.34,2.44 -23.96,2.23 C-22.58,1.49 -21.06,1.21 -19.56,1.53 C-18.05,1.85 -16.78,2.72 -15.82,3.96z M-18.86,-1.77 C-20.22,-2.06 -21.02,-3.71 -20.65,-5.46 C-20.28,-7.21 -18.87,-8.4 -17.51,-8.11 C-16.15,-7.82 -15.35,-6.17 -15.72,-4.42 C-16.09,-2.67 -17.49,-1.48 -18.86,-1.77z M0,13 C7.179999828338623,13 13,7.179999828338623 13,0 C13,-7.179999828338623 7.179999828338623,-13 0,-13 C-7.179999828338623,-13 -13,-7.179999828338623 -13,0 C-13,7.179999828338623 -7.179999828338623,13 0,13z"></path><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g opacity="1" transform="matrix(0.6847032904624939,0.14553818106651306,-0.18712051212787628,0.8803328275680542,-18.743759155273438,-2.299665689468384)"><g opacity="1" transform="matrix(0.8999999761581421,0,0,0.8999999761581421,0,0.75)"></g><g opacity="1" transform="matrix(0.8999999761581421,0,0,0.8999999761581421,0,-0.3000001907348633)"></g></g></g></g></g></g></svg>`,
                text: text.profileText,
                ref: "profile",
                fnc: async () => {
                    giftUser  = await f("user").then((e) => e.json());
                    if(giftUser.status !== "ok"){
                        createMessage("USER AUTH ERROR", 0);
                        return;
                    }
                    // giftUser = JSON.parse(giftUser.data);

                    renderUserGift();
                }
            }
        ]
        for(let i = 0; i < data.length; i++) {

            const t = data[i];

            const div = document.createElement("div");
            div.innerHTML = `${t.svg}
                <p>${t.text}</p>`;
            div.className = "buttonsFooter textCenter " + (page === t.ref ? "activeButton" : '');
            div.style.width = (100 /  data.length) + '%';
            if(t.status){
                div.innerHTML += `<div class="statusGift">${t.status}</div>`
            }
            if(t.ref){
                div.onclick = () => {
                    if(t.fnc){
                        t.fnc();
                    }
                    if(div.classList.contains("activeButton") || spinning) {
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
            }

            html.appendChild(div);

        }

        footerButtons.innerHTML = '';
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
<path d="M7.00001 4.10999C6.14022 4.33198 5.37874 4.83376 4.83558 5.53625C4.29241 6.23875 3.99845 7.10201 4.00001 7.98999V17.99C4.00001 19.0509 4.42149 20.0682 5.17164 20.8184C5.92178 21.5685 6.93914 21.99 8.00001 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C19.9993 7.10372 19.7044 6.24269 19.1614 5.54224C18.6184 4.84178 17.8581 4.34156 17 4.12" stroke="#aaaaaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5.98999C8.46957 5.98999 7.96089 5.77925 7.58582 5.40417C7.21074 5.0291 7 4.52042 7 3.98999C7 3.45956 7.21074 2.95088 7.58582 2.57581C7.96089 2.20073 8.46957 1.98999 9 1.98999H15C15.5304 1.98999 16.0392 2.20073 16.4142 2.57581C16.7893 2.95088 17 3.45956 17 3.98999C17 4.52042 16.7893 5.0291 16.4142 5.40417C16.0392 5.77925 15.5304 5.98999 15 5.98999H9Z" stroke="#aaaaaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`});

    }
    userProfile();

    function openGameFlip() {
        openGamePage.classList.remove("hide");
        openGamePage.style.backgroundImage = "url('./images/games/flipCoinGameEventVertical.jpg')";
        gameFlipCoin.classList.remove("hide");
        setTimeout(() => {
            openGamePage.classList.add("hide");
        }, 2000)
        // alert("Игра Flip Coin запущена!");
    }

    function renderGames() {
        const gamesInfo = [
            {
                name: "Flip Coin Game",
                img: "./images/games/flipCoinGameEvent.jpg",
                refF: openGameFlip
            },

        ];

        const games = document.getElementById("games");
        games.innerHTML = '';

        gamesInfo.forEach((el) => {
            const gameContainer = document.createElement("div");
            gameContainer.className = "game-container";

            const img = document.createElement("img");
            img.src = el.img;
            img.className = "gamesImg";
            img.alt = el.name;

            const title = document.createElement("h3");
            title.textContent = el.name;
            title.className = "game-title";

            const playBtn = document.createElement("button");
            playBtn.textContent = text.playText;
            playBtn.className = "play-button";
            playBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                el.refF();
            });

            gameContainer.appendChild(img);
            gameContainer.appendChild(title);
            gameContainer.appendChild(playBtn);
            gameContainer.addEventListener('click', el.refF);

            games.appendChild(gameContainer);
        });
    }

    renderGames();


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
    let dataGift = giftsData[caseId].cases;
    function renderRoulette(){
        const chanceE = document.getElementById("chance");
        let html = '';
        let html2 = '';
        // const scale = 10 + level;
       
        const maxPrice = 999//500 - 100 * (level+1);
        let sum = 0;

        dataGift = giftsData[caseId].cases;
        // console.log(level+(isHotChances ? 0 : 0))
        //+(isHotChances ? 0.04 : 0)
        const biasPower = 1 - ((level + (isHotChances ? 5 : 0)) / 10); // higher level => lower power => less penalty for high prices

        const weights = dataGift.map(c => 1 / Math.pow(c.price, biasPower));
        const totalWeight = weights.reduce((sum, w) => sum + w, 0);

        dataGift =  dataGift.map((c, i) => ({
            giftId: c.giftId,
            price: c.price,
            chance: +(weights[i] / totalWeight * 100).toFixed(3),
            isNft: c.isNft,
            ref: c.ref,
            name: c.name
        }));

        const dataGift2 = [...dataGift];
        dataGift2.sort((a,b) => {
            return a.price - b.price;
        })
        const {caseName, id} = giftsData[caseId];
        if(caseName === "Squid Game"){
            imgCase.src = "./images/closedCaseSquidGame.png";
        } else{
            imgCase.src = "./images/closedCaseBasic.png";
        }
        // console.log(dataGift2)

        for(let i = 0; i < dataGift.length; i++){
            const {giftId, price, isNft, exclusive, ref, chance} = dataGift2[i];
            // const price2 = dataGift2[i].price;
            // const giftId2 = dataGift2[i].giftId;
            // const isNft2 = dataGift2[i].isNft;
            // const ref2 = dataGift2[i].ref;
            // const chance =  dataGift2[i].chance;
            // let chance = Math.max(0, ((maxPrice - price2) / (maxPrice * scale)) * 100);
            // const ratio = (maxPrice - price2) / maxPrice;

            // let chance =;

            // chance =  Math.max(0, Math.min(100, chance));
            // if(dataGift2.length === 1){
            //     chance = 100;
            // }
            // if(chance === 0){
            //     chance =  (100 - sum) / 3
            // }
            sum += chance;
            html2 += ` <div class="rouletteItem textCenter">
                       ${isNft ? `<div style="overflow: hidden;width: 100%; height: 100%;position: absolute;left: 0;top: 0;">
                            <div class="statusGift">NFT</div>
                          </div>` : ''}

                        <p class="${isHotChances ? 'fire-text' : ''}">${Math.abs(+(chance).toFixed(3))}% </p>
                        <img src="./images/gifts/gift${ref || giftId}.png" alt="" class="gift${giftId}">
                        <p class="price starParent"><span class="starIcon"></span> ${isNft ? "???" : price}</p>
                    </div>`;
        }
        // console.log(sum)
        // rouletteItems.innerHTML = html.repeat(7);
        chanceE.innerHTML = html2;
    }
    spinButton.onclick = spinRoulette;
    async function spinRoulette() {

        // rouletteItems.style.transform = `translateX(0)`;
        // rouletteItems.classList.remove("animate")
        const closePage = document.getElementById("closePage");
        const sellOfReciveImg = document.getElementById("sellOfReciveImg");
        const caseID = giftsData[caseId].id;
        const caseName = giftsData[caseId].caseName;
        let random =  {data: {}};
        if(caseName === "Squid Game"){

        }
        if(isDemo){
            getAnim();
            return;
        }
        random = await f("spin", {case:  caseID});
        if(!random.ok){
            random = await random.text();
            createMessage(random, 0);
        } else{
            priceGiftPos.classList.add("hide");
            random = await random.json();
            getAnim();
        }
        // const itemWidth = document.querySelector('.rouletteItem').offsetWidth + 10;
        function getAnim(){
            const demoElm = dataGift[Math.floor(Math.random() * (dataGift.length))];
            let {giftId, uzor, backdrop, name} = random.data;
            const randomIndex = isDemo ? demoElm.giftId: giftId;
            let randomI;
            sellOrSendFriend.classList.add('hide');
            if(isDemo){
                modelTextGift.innerText = demoElm.name;
                fonTextGift.innerText = "Demo";
                uzorTextGift.innerText = "Demo";
            } else{
                modelTextGift.innerText = name;
                fonTextGift.innerText = backdrop;
                uzorTextGift.innerText = uzor;
                backdropDiv.style.backgroundColor = colorsObject[backdrop];
                uzorElms.forEach((e) => {
                    uzor = uzor.replaceAll(" ", "_");
                    uzor = uzor.toLowerCase();
                    e.style.backgroundImage = `url("./images/gifts/giftUzor/${uzor}.webp")`;
                })
            }
            for(let i = 0; i < dataGift.length; i++){
                if(dataGift[i].giftId === randomIndex){
                    randomI = i;
                    break;
                }
            }
            imgCase.classList.add("hide");
            videoCase.classList.remove("hide");
            if(caseName === "Squid Game"){
                videoCase.src = "./images/caseAnimation/squidGameCase.mp4";
            } else{
                videoCase.src = "./images/caseAnimation/basicCase.mp4";
            }

            // = randomIndex
            // const offset = (randomI - 1) * itemWidth;
            // const fullSpin = (dataGift.length * itemWidth) * 3;
            // const finalPosition = fullSpin + offset;
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

            setTimeout(() => {
                let randGft =  dataGift[randomI];
                // for(let i = 0; i < dataGift.length; i++){
                //     if(dataGift[i].giftId === randomIndex){
                //         randGft = dataGift[ind];
                //         break;
                //     }
                // }
                const price = randGft.price;

                giftOfUser.src = `./images/gifts/gift${(randGft.giftId)}.png`;
                footerGiftDesign.classList.add("active")
                blurEffectGift.classList.remove("hide");
                // sellOfReciveImg.src = `./images/gift${(randGft.giftId)}.gif`;
                // priceSell.innerText = price;
                currentPrice = price;
                currentGift = randomIndex;
                selectedGiftIndex = 0;

                // sellOrReciveGift.classList.remove("hide");
                //setting :)
                giftToProfile.classList.remove("hide");

                // toFriend.classList.add("hide");
                spinning = false;
                rouletteItems.classList.add("animate")
                spinButton.disabled = false;
                imgCase.classList.remove("hide");
                videoCase.classList.add("hide")
            }, 2000);
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
            renderUserGift();
        }
        sendFriendPage.classList.remove("active");
        closeGiftPage();
    }
    closeSendFriendPage.onclick = () => {
        sendFriendPage.classList.remove("active");
    }
    toFriendModel.onclick = () => {
        // console.log("dsa")
        // sellOrReciveGift.classList.add("hide");
        sendFriendPage.classList.add("active"); //doto oki

    }
    getGift.onclick = async () => {
        sellOrReciveGift.classList.add("hide");
        const res = await f("getGift", { index: selectedGiftIndex });
        if(!res.ok){
            createMessage(await res.text(), 0);
        } else{
            createMessage(text.giftWithdraw, 1);
            sellOrReciveGift.classList.add("hide");
            giftUser  = await f("user").then((e) => e.json());
            if(giftUser.status !== "ok"){
                createMessage("USER AUTH ERROR", 0);
                return;
            }
            // giftUser = JSON.parse(giftUser.data);
            renderUserGift();
        }
        // console.log("GET")
        //logic claim
    }
    giftToProfile.onclick = () => {
        sellOrReciveGift.classList.add("hide");
    }
    depositButton.onclick = () => {
        depositPage.classList.add("active");
        blurEffect.classList.remove("hide");
    }
    function closeDepositPage(){
        depositPage.classList.remove("active");
        blurEffect.classList.add("hide");
    }
    closePageDeposit.onclick = () => closeDepositPage();
    blurEffect.onclick = () => closeDepositPage();
    renderRoulette();
    function renderUserBalance(){
        f("getBalance").then((e) => e.json()).then((e) => {
            userStars.forEach((el) => {
                el.innerText = e.balance
            })
        }).catch((e) => {
            createMessage("Balance Error", 0);
        })
    }
    function renderUserGift(){
        // const sellOfReciveImg = document.getElementById("sellOfReciveImg");
        renderUserBalance();
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
        giftUser = giftUser.data;
        giftUser = giftUser.reverse();
        sellOrSendFriend.classList.remove("hide");
        for(let i = 0; i < giftUser.length; i++){ // I'm not begginer proggramer :) I'm olympic proggramer and this way is very fast ...
            let {giftId, priceGift, isNft, uzor, fon, model, specialIndex, isSale, salePrice} = giftUser[i];
            const div = document.createElement("div");
            const mainPathImg = "./images/gifts/";
            const uzorChanged = uzor.replaceAll(" ", "_").toLowerCase();
            const uzorDiv = document.createElement("div");
            uzorDiv.className = "uzor";
            for(let i = 0; i < 10; i++){
                const p = document.createElement("p");
                p.style.backgroundImage = `url("${mainPathImg}/giftUzor/${uzorChanged}.webp")`
                uzorDiv.appendChild(p);
            }
            div.className = "giftsUser";
            div.innerHTML = `${isSale ? '<div class="statusGift" style="font-size: 11px">' + text.onsaleText + '</div>' : ''} <img src="${mainPathImg}gift${giftId}.png"  alt="">
                <p class="price starParent"><span class="starIcon"></span> ${isNft ? "???" : priceGift}</p>`;
            div.style.backgroundColor = colorsObject[fon];
            div.appendChild(uzorDiv)
            div.onclick = () => {
                footerGiftDesign.classList.add("active");
                blurEffectGift.classList.remove("hide");
                // document.getElementById("sellOrReciveGift").classList.remove("hide");
                giftToProfile.classList.add("hide");
                giftOfUser.src = `${mainPathImg}gift${giftId}.png`;
                modelTextGift.innerText = model;
                fonTextGift.innerText = fon;
                uzorTextGift.innerText = uzor;
                backdropDiv.style.backgroundColor = colorsObject[fon];
                uzorElms.forEach((e) => {
                    e.style.backgroundImage = `url("./images/gifts/giftUzor/${uzorChanged}.webp")`;
                })
                if(isSale){
                    notDesignLine.classList.remove("hide");
                    sell.innerText = text.notSell;
                    onSaleGift = true;
                    priceGiftPos.classList.remove("hide");
                    priceGiftNumber.innerText = salePrice;
                } else{
                    notDesignLine.classList.add("hide");
                    sell.innerText = text.sell;
                    onSaleGift = false;
                    priceGiftPos.classList.add("hide");
                }
                selectedGiftIndex = specialIndex;
                // selectedGiftIndex = i;
            }
            html.appendChild(div);
        }
        giftsUser.append(html);
    }

    renderUserGift();
    deposit.onclick = () => {
        const input = +depositInput.value;
        if(input < 1 || !input){
            createMessage(text.errorValidNumber, 0)
            return;
        }
        f("deposit", {stars: input}).then((el) => el.json()).then((el) => {
            Telegram.WebApp.openInvoice(el.invoice_link, async (e) => {
                if(e === "paid"){
                    setTimeout(() => {
                        renderUserBalance();
                    }, 2000)
                    createMessage(text.paymentSuccess);
                } else{
                    createMessage(text.paymentError, 0);
                }
                closeDepositPage();
            });
            // console.log(el.invoice_link)
        }).catch(() => {
            createMessage(text.paymentError, 0);
        })
    }
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
    giveawayBttTab.forEach((e) => {
        e.onclick = () => {
            if(giveawayPage === e.id){
                return;
            }
            giveawayPage = e.id;
            giveawayBttTab.forEach((el) => {
                el.classList.remove("giveawayBttActive");
            })
            e.classList.add("giveawayBttActive");
            renderGiveAway();
        }
    })
    let translateXAds = 0;
    const aviablesAds = ["ads4.jpg", "ads5.jpg"]//["ads1.jpg", "ads2.jpg"];
    function renderAds(){
        let html = "";
        aviablesAds.map((el) => {
            html += `<div class="ad" style="background-image: url('./images/ads/${el}')"></div>`
        })
        animateAds.innerHTML = html;
    }
    renderAds();
    let items = aviablesAds.length;
    animateAds.style.width = items * 100 + "%";
    const intervalAds = setInterval((e) => {
        animateAds.style.transform = `translateX(-${translateXAds}%)`;
        translateXAds += 100 / items;
        if(translateXAds === 100){
            translateXAds = 0;
        }
    }, 5000)
    blurEffectGiveAway.onclick = () => {
        model.classList.add('hide');
        blurEffectGiveAway.classList.add("hide");
    }
    closePageGiveaway.onclick = () => {
        model.classList.add('hide');
        blurEffectGiveAway.classList.add("hide");
    }

    toCasesPageButton.onclick = () => {
        toCasesPageButton.classList.add("mainBttActive");
        games.classList.add("hide");

        toGamesPageButton.classList.remove("mainBttActive");
        cases.classList.remove("hide");

    }
    toGamesPageButton.onclick = () => {
        toCasesPageButton.classList.remove("mainBttActive");
        games.classList.remove("hide");

        toGamesPageButton.classList.add("mainBttActive");
        cases.classList.add("hide");
        renderGames();
    }
    renderListLang();

    let flipCoinBet = 5;
    const bttns = betsFlipCoin.querySelectorAll("button");
    const head = document.getElementById("head");
    const tail = document.getElementById("tail");
    bttns.forEach((el) => {
        el.onclick = () => {
            if(el.value == flipCoinBet){
                return;
            }
            flipCoinBet = +(el.value);
            bttns.forEach((e) => {
                e.className = '';
            })
            el.className = "selected";
        }
    })
    function flip(random) {
        const coin = document.querySelector('.coin');
        coin.style.transform = `rotateY(0deg)`;
        setTimeout((e) => {
            coin.style.transform = `rotateY(${random + 1800}deg)`;
        }, 500)
        setTimeout((e) => {
            onGame = false;
        }, 2000)
    }
    let onGame = false;
    head.onclick = () => {
        if(onGame){
            return;
        }

        f("flipGame", {flip: 1, bet: flipCoinBet}).then((el) => el.json()).then((el) => {

            onGame = true;
            if(el.result){
                flip(1800);
                createMessage("You Win " +(flipCoinBet * 2), 1)
            } else{
                flip(1980);
                createMessage("You Loss ", 0)
            }
        }).catch(() => {
            createMessage("Balance unavailable", 0)
        })
    }
    tail.onclick = () => {
        if(onGame){
            return;
        }

        f("flipGame", {flip: 0, bet: flipCoinBet}).then((el) => el.json()).then((el) => {
            onGame = true;
            if(el.result){
                flip(1980);
                createMessage("You Win " +(flipCoinBet * 2), 1)
            } else{
                flip(1800);
                createMessage("You Loss ", 0)
            }
        }).catch(() => {
            createMessage("Balance unavailable", 0)
        })
    }
    closeGame.onclick = () => {
        gameFlipCoin.classList.add("hide");
    }
    function closeGiftPage(){
        blurEffectGift.classList.add("hide");
        footerGiftDesign.classList.remove("active");
        closeGift.classList.remove("hide");
        buyItem.classList.add("hide");
    }
    closeGift.onclick = closeGiftPage;
    blurEffectGift.onclick = closeGiftPage;
    function closeSaleGiftPage(){
        blurCloseSalePage.classList.add("hide");
        salePage.classList.add("hide");
    }
    closePageSaleButton.onclick = closeSaleGiftPage;
    blurCloseSalePage.onclick = closeSaleGiftPage;
    openSalePage.onclick = () => {
        if(onSaleGift){
            f("unlistGift", {giftId: selectedGiftIndex}).then(async (el) => {
                giftUser  = await f("user").then((e) => e.json());
                if(giftUser.status !== "ok"){
                    createMessage("USER AUTH ERROR", 0);
                    return;
                }
                renderUserGift();
                closeGiftPage();
            })

            return;
        }
        blurCloseSalePage.classList.remove("hide");
        salePage.classList.remove("hide");
    }
    const inputSaleGift = document.getElementById("inputSaleGift");
    toSaleButton.onclick = () => {
        const value = +(inputSaleGift.value);
        if(value < 10 || value > 100000){
            createMessage(text.errorSalePageMinMax, 0)
            return;
        }
        f("saleGift", {giftId: selectedGiftIndex, price: value}).then(async (el) => {
            if(el.ok) {
                giftUser  = await f("user").then((e) => e.json());
                if(giftUser.status !== "ok"){
                    createMessage("USER AUTH ERROR", 0);
                    return;
                }
                renderUserGift();
                createMessage(text.giftWithdraw, 1);
            } else{
                createMessage(text.errorSale, 0);
            }
            closeSaleGiftPage();
            closeGiftPage();
        })
    }
    let pageMarket = 0;
    async function renderMarket(clearHtml = true){
        let error = false;
        if(clearHtml){
            pageMarket = 0;
            stopMarket = false;
            giftsMarket.innerHTML = "";
        }

        const giftMarket = await f("market", {page: pageMarket}).then((e) => {
           if(e.ok){
               return e.json();
           }
            error = true;
           return null;
        });
        if(error){
            return;
        }


        if(giftMarket.length === 0){
            stopMarket = true;
            return;
        }
        let html = document.createElement("div");
        for(let i = 0; i < giftMarket.length; i++){ //hey you HI nigga
            let {giftId, priceGift, uzor, fon, model, specialIndex, isSale, salePrice} = giftMarket[i];
            const div = document.createElement("div");
            const uzorDiv = document.createElement("div");
            const mainPathImg = "./images/gifts/";
            const uzorChanged = uzor.replaceAll(" ", "_").toLowerCase();
            uzorDiv.className = "uzor";
            for(let i = 0; i < 10; i++){
                const p = document.createElement("p");
                p.style.backgroundImage = `url("${mainPathImg}/giftUzor/${uzorChanged}.webp")`
                uzorDiv.appendChild(p);
            }


            div.className = "giftsUser";
            div.style.backgroundColor = colorsObject[fon];

            div.innerHTML = `${isSale ? '<div class="statusGift" style="font-size: 11px">' + text.onsaleText + '</div>' : ''} <img src="${mainPathImg}gift${giftId}.png"  alt="">
<p class="price starParent"><span class="starIcon"></span> ${salePrice}</p>`;
            div.appendChild(uzorDiv);
            div.onclick = () => {
                backdropDiv.style.backgroundColor = colorsObject[fon];
                uzorElms.forEach((e) => {

                    e.style.backgroundImage = `url("./images/gifts/giftUzor/${uzorChanged}.webp")`;
                })
                footerGiftDesign.classList.add("active");
                blurEffectGift.classList.remove("hide");
                priceStarToBuy.innerText = salePrice;
                giftToProfile.classList.add("hide");
                giftOfUser.src = `${mainPathImg}gift${giftId}.png`;
                modelTextGift.innerText = model;
                fonTextGift.innerText = fon;
                uzorTextGift.innerText = uzor;
                notDesignLine.classList.remove("hide");
                sell.innerText = text.notSell;
                onSaleGift = true;
                priceGiftPos.classList.remove("hide");
                priceGiftNumber.innerText = salePrice;
                selectedGiftIndex = specialIndex;
                sellOrSendFriend.classList.add("hide");
                buyItem.classList.remove("hide");
                closeGift.classList.add("hide");
            }
            html.appendChild(div);
        }
        giftsMarket.append(html);
    }
    renderMarket();
    let stopMarket = false;
    giftsMarket.addEventListener("scroll", (e) => {
        if(stopMarket){
            return;
        }
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        console.log(scrollTop, scrollHeight, clientHeight)
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            pageMarket++;
            renderMarket(false);
        }
    });
    buyItem.onclick = () => {
        f("buy", {giftId: selectedGiftIndex}).then((e) => {
            if(e.ok){
                renderMarket();
                createMessage(text.giftWithdraw, 1);
            } else{
                createMessage(text.paymentError, 0);
            }
            closeGiftPage();
        })

    }
    withdraw_button.onclick = () => createMessage(text.withdrawStatus, 1);
})())