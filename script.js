((async () => {
    const test = false;

    const isHotChances = true;
    const maintenance = false;
    const MAINURL = test ? "http://localhost:3000/" : "https://fuckingserverstarjack-production.up.railway.app/";
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
    let stopMarket = false;
    const dataText = {
        ru: {
            errorParsing: "ОШИБКА анализа пользователя",
            errorCreateUsername: "Пожалуйста, создайте имя пользователя(username) в профиле Telegram.",
            gift: "Подарок",
            gifts: "Подарки",
            staking: "🚀 НАЧАТЬ СТЕЙКИНГ",
            tasksText: "Задачи",
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
            enterPromo: "Введите промокод",
            applyText: "Применить",
            successPromocode: "Промокод успешно активирован!",
            errorPromocode: "⚠️ Промокод недействителен. Проверьте правильность ввода.",
            limitPromo: "🚫 Все промокоды уже использованы. Следите за новыми акциями!",
            alreadyUsed: "⚠️ Этот промокод уже был использован.",
            activeTaskText: "Активные",
            completedTaskText: "Выполненные",
            alreadyCompletedTask: "Эта задача уже была выполнена.",
            taskIsNotFound: "Задание не существует.",
            taskSuccess: "Успешно выполнено.",
            taskInProgress: "Задание на проверке и будет рассмотрено в течение 24 часов.",
            ownerText: "Владелец",
            availability: "Наличие",
            releasedText: "выпущено",
            forsale: "Для продажи",
            buyGiftForText: "Купить подарок за",
            limitedText: "ОГРАНИЧЕННЫЙ",
            textSold: "ПРОДАН"
        },
        en: {
            errorParsing: "ERROR parsing user",
            errorCreateUsername: "Please create a username in your Telegram profile.",
            gift: "Gift",
            gifts: "Gifts",
            staking: "🚀 START STAKING",
            tasksText: "Tasks",
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
            withdrawStatus: "Withdrawal will be available soon.",
            enterPromo: "Enter promo code",
            applyText: "Apply",
            successPromocode: "Promo code activated successfully!",
            errorPromocode: "⚠️ Invalid promo code. Please check and try again.",
            limitPromo: "🚫 All promo codes have been used. Stay tuned for future offers!",
            alreadyUsed: "⚠️ This promo code has already been used.",
            activeTaskText: "Active",
            completedTaskText: "Completed",
            alreadyCompletedTask: "This task has already been completed.",
            taskIsNotFound: "The task does not exist.",
            taskSuccess: "Successfully completed.",
            taskInProgress: "Thanks for submitting! Your task is under review and will be processed within 24 hours.",
            ownerText: "Owner",
            availability: "Availability",
            releasedText: "released",
            forsale: "For Sale",
            buyGiftForText: "Buy a gift for",
            limitedText: "LIMITED",
            textSold: "SOLD"
        }
    }
    let lang = localStorage.getItem("lang") === "en" || localStorage.getItem("lang") === "ru" ? localStorage.getItem("lang") : "en";
    function getId(id){
        return  document.getElementById(id);
    }
    let text = dataText[lang];
    // const fondInfoText = getId("fondInfoText");
    const tasks = getId("tasks");
    const main = getId("main");
    const profile = getId("profile");
    const closePage = getId("closePage");
    let spinning = false;
    const sellOrReciveGift = getId("sellOrReciveGift");
    const giftToProfile = getId("giftToProfile");
    const getGift = getId("getGift");
    const blurEffect = getId("blurEffect");
    const depositPage = getId("depositPage");
    const nogiftP = getId("nogiftP");
    const profileIdCopy = getId("profileIdCopy");
    const idInput = getId("idInput");
    const giftsUser = getId("giftsUser");
    const buttonSellOrRecive = getId("buttonSellOrRecive");
    const loading = getId("loading");
    const bodyElm = document.body;
    // const fond = getId("fond");
    // const fondAmount = getId("fondAmount");
    // const fondMaxAmount = getId("fondMaxAmount");
    // const withdraw_button = getId("withdraw-button"); in proggress
    const sendElm = getId("send");
    let isDemo = false;
    let level = 0;
    let caseId = 0;
    let currentGift = null;
    let currentPrice = null;
    let selectedGiftIndex = null;
    const searchInput = getId("searchInput");

    const toFriend = getId("toFriend");
    const language_toggle = getId("language-toggle");
    const closeSendFriendPage = getId("closeSendFriendPage");
    const dialog = getId("dialog");
    const giftTextSellOfRecive = getId("giftTextSellOfRecive");
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
    const spinButton = getId("spinButton");
    const demoButton = getId("demoButton");
    const rouletteItems = getId("rouletteItems");
    const toFriendText = document.querySelectorAll(".toFriendText");
    const demoText = getId("demoText");
    const textInfoSendFriend= getId("textInfoSendFriend");
    const selectCasePage = getId("selectCasePage");
    const casePage = getId("casePage");
    const headerCases = getId("headerCases");
    const closeCases = getId("closeCases");
    const maintenanceElm = getId("maintenance");
    const giveawayBttTabContainer = getId("giveawayBttTabContainer");
    const giveawayPay = getId("giveawayPay");
    const giveawayFree = getId("giveawayFree");
    const giveawayEntered = getId("giveawayEntered");
    const giveawayBttTab = document.querySelectorAll(".giveawayBttTab");
    const animateAds = getId("animateAds");
    const giveawayCard = getId("giveaway-cards");
    const modelImg = getId("modelImg");
    const blurEffectGiveAway = getId("blurEffectGiveAway");
    const model = getId("model");
    const closePageGiveaway = getId("closePageGiveaway");
    const tasksGiveAway = getId("tasksGiveAway");
    const enterGiveAway = getId("enterGiveAway");
    const depositButton = getId("depositButton");
    const userStars = document.querySelectorAll(".userStars");
    const buyTicketsElm = getId("buyTickets");
    const buyTicketsBoard = getId("buyTicketsBoard");
    const decrementTicketCount = getId("decrementTicketCount");
    const ticketsCount = getId("ticketsCount");
    const incrementTicketCount = getId("incrementTicketCount");
    const buyTicketsStar = getId("buyTicketsStar");
    const cases = getId("cases");
    const games = getId("games");
    const toCasesPageButton = getId("toCasesPageButton");
    const toGamesPageButton = getId("toGamesPageButton");
    const openGamePage = getId("openGamePage");
    const betsFlipCoin = getId("betsFlipCoin");
    const betOn = getId("betOn");
    const headsText = getId("headsText");
    const tailsText = getId("tailsText");
    const closeGame = getId("closeGame");
    const gameFlipCoin = getId("gameFlipCoin");
    const imgCase = getId("imgCase");
    const videoCase = getId("videoCase");
    const footerGiftDesign = getId("footerGiftDesign");
    const blurEffectGift = getId("blurEffectGift");
    const closeGift = getId("closeGift");
    const imgGiftModel = getId("imgGiftModel");
    const giftOfUser = getId("giftOfUser");
    const casePrice = getId("casePrice");
    const transfer = getId("transfer");
    const sell = getId("sell");
    const toFriendModel = getId("toFriendModel");
    const modelText = getId("modelText");
    const fonText = getId("fonText");
    const uzorText = getId("uzorText");
    const commentGift = getId("commentGift");
    const sellOrSendFriend = getId("sellOrSendFriend");
    const modelTextGift = getId("modelTextGift");
    const fonTextGift = getId("fonTextGift");
    const uzorTextGift = getId("uzorTextGift");
    const closePageSaleButton = getId("closePageSaleButton");
    const toSaleButton = getId("toSaleButton");
    const blurCloseSalePage = getId("blurCloseSalePage");
    const salePage = getId("salePage");
    const openSalePage = getId("openSalePage");
    const notDesignLine = getId("notDesignLine");
    let onSaleGift = false;
    const priceInStars = getId("priceInStars");
    const enterPrice = getId("enterPrice");
    const priceGiftPos = getId("priceGiftPos");
    const priceGiftNumber = getId("priceGiftNumber");
    const market = getId("market");
    const giftsMarket = getId("giftsMarket");
    const buyItem = getId("buyItem");
    const priceStarToBuy = getId("priceStarToBuy");
    const backdropDiv = getId("backdropDiv");
    const promoButton = getId("promoButton");
    const promoInput = getId("promoInput");
    const activeTasksList = getId("activeTasksList");
    const completedTasksList = getId("completedTasksList");
    const completedTasksLength = getId("completedTasksLength");
    const activeTasksLength = getId("activeTasksLength");
    const activeTaskText = getId("activeTaskText");
    const completedTaskText = getId("completedTaskText");
    const stake_btn = getId("stake_btn");
    const closePageStaking = getId("closePageStaking");
    const stakingPage = getId("stakingPage");
    const ownerText = getId("ownerText");
    const ownerName = getId("ownerName");
    const availabilityText = getId("availabilityText");
    const limitUsed = getId("limitUsed");
    const used = getId("used");
    const releasedText = getId("releasedText");
    const isLimitedField = getId("isLimitedField");
    const toMarketPlace = getId("toMarketPlace");
    const toMainGift = getId("toMainGift");
    const giftsGame =  getId("giftsGame");
    const buyGiftForText = getId("buyGiftForText");
    const blurCloseBuyGift = getId("blurCloseBuyGift");
    const buyGiftModelGame = getId("buyGiftModelGame");
    const giftBuyButton = getId("giftBuyButton");
    const giftBuyImg = getId("giftBuyImg");
    const aviablityFuckingGift = getId("aviablityFuckingGift");
    const priceBuyGift = getId("priceBuyGift");
    const chanceModel = getId("chanceModel");
    const chanceFon = getId("chanceFon");
    const chanceUzor = getId("chanceUzor");
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
        },
        {
            elmsRefs: promoInput,
            to: "enterPromo",
            place: true
        },
        {
            elmsRefs: promoButton,
            to: "applyText"
        },
        {
            elmsRefs: activeTaskText,
            to: "activeTaskText"
        },
        {
            elmsRefs: completedTaskText,
            to: "completedTaskText"
        },
        {
            elmsRefs: stake_btn,
            to: "staking"
        },
        {
            elmsRefs: ownerText,
            to: "ownerText"
        },
        {
            elmsRefs: availabilityText,
            to: "availability"
        },
        {
            elmsRefs: releasedText,
            to: "releasedText"
        },
        {
            elmsRefs: toMainGift,
            to: "gifts",
        },
        {
            elmsRefs: toMarketPlace,
            to: "forsale",
        },
        {
            elmsRefs: buyGiftForText,
            to: "buyGiftForText",
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
    const modelChances  = {
        "Flameshard": "0.05%",
        "Zestbot": "2.50%",
        "Frontman": "1.20%",
        "Player 456": "3.00%",
        "Alien Labubu": "1.80%",
        "Frozen Labubu": "2.00%",
        "Starlight": "12.00%",
        "Lollibun": "10.00%",
        "Sir Hootsworth": "10.00%",
        "Glacier": "8.00%",
        "Nimbus": "6.00%",
        "Tiglet": "5.50%",
        "Shroomie": "5.00%",
        "Guard 1": "8.00%",
        "Guard 2": "5.00%",
        "Guard 3": "3.50%",
        "Doll": "5.00%",
        "LABUBU THE MANUS": "5.00%",
        "Astro Labubu": "5.00%",
        "Mecha Labubu": "5.00%",
        "Shadow Labubu": "3.00%",
        "Labubu in Love": "3.00%",
        "Fire Labubu": "3.00%",
        "Classic Labubu": "5.00%"
    }
    const backdropChances = {
        "Midnight Blue": "0.5%",
        "Silver Blue": "1.0%",
        "Aquamarine": "1.2%",
        "Cappuccino": "1.5%",
        "Desert Sand": "1.7%",
        "Persimmon": "2.0%",
        "Malachite": "2.2%",
        "Pacific Green": "2.5%",
        "Dark Lilac": "2.7%",
        "Emerald": "3.0%",
        "Amber": "3.2%",
        "Black": "3.5%",
        "Turquoise": "3.7%",
        "Lemongrass": "4.0%",
        "Copper": "4.2%",
        "Electric Indigo": "4.5%",
        "Fandango": "4.7%",
        "French Blue": "5.0%",
        "Pine Green": "5.2%",
        "Pistachio": "5.5%",
        "Shamrock Green": "5.7%",
        "Sky Blue": "6.0%",
        "Chestnut": "6.2%",
        "Ivory White": "6.5%",
        "Raspberry": "6.7%",
        "Cyberpunk": "7.0%",
        "Orange": "7.2%",
        "Satin Gold": "7.5%",
        "Steel Grey": "7.7%",
        "Burgundy": "8.0%",
        "Mint Green": "8.2%",
        "Mystic Pearl": "8.5%",
        "Roman Silver": "8.7%",
        "Strawberry": "9.0%",
        "Pacific Cyan": "9.2%",
        "Battleship Grey": "9.5%",
        "Lavender": "9.7%",
        "Neon Blue": "10.0%",
        "English Violet": "10.2%",
        "Light Olive": "10.5%",
        "Navy Blue": "10.7%",
        "Pure Gold": "11.0%",
        "Carrot Juice": "11.2%",
        "Electric Purple": "11.5%",
        "Grape": "11.7%",
        "Sapphire": "12.0%",
        "Hunter Green": "12.2%",
        "Indigo Dye": "12.5%",
        "Cobalt Blue": "12.7%",
        "Jade Green": "13.0%",
        "Rosewood": "13.2%",
        "Azure Blue": "13.5%",
        "Moonstone": "13.7%",
        "Coral Red": "14.0%",
        "Khaki Green": "14.2%",
        "Purple": "14.5%",
        "Caramel": "14.7%",
        "Chocolate": "15.0%",
        "Onyx Black": "15.2%",
        "Platinum": "15.5%"
    };
    const uzorChances = {
        "Alkonost": "0.5%",
        "Bastet": "0.7%",
        "Calm Wolf": "0.9%",
        "Car": "1.1%",
        "Cash": "1.3%",
        "Celtic Cross": "1.5%",
        "Celtic Wolf": "1.7%",
        "Champagne": "1.9%",
        "Coat of Arms": "2.1%",
        "Cobra": "2.3%",
        "Cocktail": "2.5%",
        "Coin": "2.7%",
        "Coin Purse": "2.9%",
        "Crown": "3.1%",
        "Crusader": "3.3%",
        "Diamond": "3.5%",
        "Dice": "3.7%",
        "Eagle": "3.9%",
        "Eikthyrnir": "4.1%",
        "Fehu Rune": "4.3%",
        "Fenrir": "4.5%",
        "Firebird": "4.7%",
        "Flower Cross": "4.9%",
        "Gem": "5.1%",
        "Genie Lamp": "5.3%",
        "Hand of God": "5.5%",
        "Inguz Rune": "5.7%",
        "Ink Pen": "5.9%",
        "Kitsune": "6.1%",
        "Knight": "6.3%",
        "Lion Head": "6.5%",
        "Mafdet": "6.7%",
        "Mask": "6.9%",
        "Mayan Moth": "7.1%",
        "Money Bag": "7.3%",
        "Moon": "7.5%",
        "Moon Cross": "7.7%",
        "Moon Eagle": "7.9%",
        "Mountain Lion": "8.1%",
        "Nordic Wolf": "8.3%",
        "Okami Wolf": "8.5%",
        "Owl": "8.7%",
        "Pearl": "8.9%",
        "Phonenix": "9.1%",
        "Pyramid": "9.3%",
        "Rhino Warrior": "9.5%",
        "Rook": "9.7%",
        "Royal Crown": "9.9%",
        "Scarab": "10.1%",
        "Shield": "10.3%",
        "Sparks": "10.5%",
        "Spirit Impala": "10.7%",
        "Star": "10.9%",
        "Tie": "11.1%",
        "Tribal Shield": "11.3%",
        "Trophy": "11.5%",
        "Unicorn Head": "11.7%",
        "Wolf Rage": "11.9%"
    }

    const giveaway = getId("giveaway");
    if(maintenance){
        loading.classList.add("hide");
        maintenanceElm.classList.remove("hide");
        return;
    }
    // if(userUIdata.user.username === undefined){
    //     createMessage(text.errorCreateUsername, 0);
    //     return;
    // }
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
    async function upgradeGiftData(){
        giftsDataAvailable = await f("giftsInfo").then((e) => e.ok ? e.json() : []);
        objGiftsDataAvaliable = {};
        giftsDataAvailable.map((el) => {
            objGiftsDataAvaliable[el.modelName] = {
                "giftLimit": el.giftLimit,
                "isUsed": el.isUsed
            }
        })
    }
    let giftsDataAvailable = await f("giftsInfo").then((e) => e.ok ? e.json() : []);
    let objGiftsDataAvaliable = {};
    giftsDataAvailable.map((el) => {
        objGiftsDataAvaliable[el.modelName] = {
            "giftLimit": el.giftLimit,
            "isUsed": el.isUsed
        }
    })
    // console.log(objGiftsDataAvaliable)
    function renderListLang(){
        listRender.map((el) => {
            let {elmsRefs, to, html, place, upgrade} = el;
            if(!elmsRefs){
                return;
            }
            // console.log(elmsRefs)
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

    // function renderCases(){
    //     selectCasePage.innerHTML = '';
    //     for(let i = 0; i < giftsData.length; i++){
    //         const {caseName, status, isClosed, price, id} = giftsData[i];
    //         const caseElm = document.createElement("div");
    //         caseElm.className = "case";
    //         caseElm.onclick = () => {
    //             if(isClosed){
    //                 return;
    //             }
    //             headerCases.classList.add("active");
    //             selectCasePage.classList.add("hide");
    //             casePage.classList.remove("hide");
    //             caseId = i;
    //             casePrice.innerText = price || 0;
    //             // isEventSquid
    //             renderRoulette();
    //         }
    //         caseElm.innerHTML = `${status ? `<div class="statusGift">${status}</div>`: ''}
    //                 <div style="width: 120px;" class="textCenter">
    //                     <div style="min-height: 120px">
    //                      <img src="./images/cases/case${id}.png" alt="" class="caseImg" />
    //                     </div>
    //                     <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">${caseName} <span class="caseText"></span></p>
    //                     <div class="starParent" >
    //                         <span>${price || 0}</span>
    //                         <span class="starIcon"></span>
    //                     </div>
    //                 </div>`;
    //         selectCasePage.appendChild(caseElm);
    //     }
    //
    //
    // }
    // renderCases();
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
        renderListLang();
        renderFooter();
        sellOrReciveGift.classList.add("hide");

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
           arr = dataGiveAway.filter((e) => JSON.parse(e.users)[userUIdata.user.username || `user${userUIdata.user.id}`]);
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
            ticketsInfo.textContent = `${text.tickets}: ${users[userUIdata.user.username  || `user${userUIdata.user.id}`] || 0}`;

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
            let isEnded = sec < 0 && minute < 0 && hours < 0;
            const button = document.createElement("a");
            function fn(intervalDay){
                sec--;
                if(sec < 0){
                    sec = 59;
                    minute--;
                    if(minute < 0){
                        minute = 59;
                        hours--;
                        if(hours < 0){
                            intervalDay ? clearInterval(intervalDay): '';
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
            }
            const intervalDay = setInterval((e) => {
                fn(intervalDay)
            }, 1000)
            // fn(intervalDay);

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
                // return;
            }
            else if(users[userUIdata.user.username  || `user${userUIdata.user.id}`]){
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
        tasks.classList.add('hide');
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
        let el = getId(pageId);
        if(!el){
            page = "main";
            el = getId("main");
        }
        page = pageId;
        el.classList.remove('hide');
    }
    // async function searchUser(s = ''){
    //     let res = await f("users", {search: +s}).then((e) => e.json());
    //     res = res.data;
    //     res.sort((a,b) => b.giftCount - a.giftCount);
    //     renderSearchPage(res);
    // }
    // searchUser();
    function renderFooter(){
        const footerButtons = getId("footerButtons");
        let html = document.createElement('div');
        html.className = "flex spaceAround";
        const data = [
            {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 419 511.67"><path d="M314.98 303.62c57.47 0 104.02 46.59 104.02 104.03 0 57.47-46.58 104.02-104.02 104.02-57.47 0-104.02-46.58-104.02-104.02 0-57.47 46.58-104.03 104.02-104.03zM41.73 59.27h23.93v24.38H41.73c-4.54 0-8.7 1.76-11.8 4.61l-.45.49c-3.14 3.13-5.1 7.48-5.1 12.24v315.53c0 4.75 1.96 9.1 5.1 12.24 3.13 3.15 7.48 5.11 12.25 5.11h142.62c1.68 8.44 4.17 16.6 7.36 24.38H41.73c-11.41 0-21.86-4.71-29.42-12.26C4.72 438.44 0 427.99 0 416.52V100.99c0-11.48 4.7-21.92 12.25-29.47l.79-.72c7.5-7.13 17.62-11.53 28.69-11.53zm297.55 217.37V100.99c0-4.74-1.96-9.09-5.12-12.24-3.11-3.15-7.47-5.1-12.24-5.1h-23.91V59.27h23.91c11.45 0 21.86 4.72 29.42 12.26 7.61 7.56 12.32 18.02 12.32 29.46V283.6c-7.79-3.06-15.95-5.41-24.38-6.96zm-206.75-8.07c-7.13 0-12.92-5.79-12.92-12.92s5.79-12.93 12.92-12.93h142.83c7.13 0 12.92 5.8 12.92 12.93s-5.79 12.92-12.92 12.92H132.53zM89.5 241.22c7.98 0 14.44 6.46 14.44 14.44 0 7.97-6.46 14.43-14.44 14.43-7.97 0-14.44-6.46-14.44-14.43 0-7.98 6.47-14.44 14.44-14.44zm0 78.62c7.98 0 14.44 6.46 14.44 14.44 0 7.97-6.46 14.43-14.44 14.43-7.97 0-14.44-6.46-14.44-14.43 0-7.98 6.47-14.44 14.44-14.44zm43.04 27.35c-7.13 0-12.93-5.79-12.93-12.92s5.8-12.93 12.93-12.93h80.96a133.608 133.608 0 0 0-17.26 25.85h-63.7zM89.5 162.6c7.98 0 14.44 6.46 14.44 14.44 0 7.98-6.46 14.44-14.44 14.44-7.97 0-14.44-6.46-14.44-14.44 0-7.98 6.47-14.44 14.44-14.44zm43.03 27.37c-7.13 0-12.92-5.8-12.92-12.93s5.79-12.92 12.92-12.92h142.83c7.13 0 12.92 5.79 12.92 12.92s-5.79 12.93-12.92 12.93H132.53zM93 39.4h46.13C141.84 17.18 159.77 0 181.52 0c21.62 0 39.45 16.95 42.34 38.94l46.76.46c2.61 0 4.7 2.09 4.7 4.71v51.84c0 2.6-2.09 4.7-4.7 4.7H93.05c-2.56 0-4.71-2.1-4.71-4.7V44.11A4.638 4.638 0 0 1 93 39.4zm88.03-19.25c12.3 0 22.26 9.98 22.26 22.27 0 12.3-9.96 22.26-22.26 22.26-12.29 0-22.26-9.96-22.26-22.26 0-12.29 9.97-22.27 22.26-22.27zm118.39 346.9c-.04-4.59-.46-7.86 5.23-7.79l18.45.23c5.95-.04 7.53 1.86 7.46 7.43v25.16h25.02c4.59-.03 7.86-.46 7.78 5.24l-.22 18.44c.03 5.96-1.86 7.54-7.43 7.48h-25.15v25.14c.07 5.57-1.51 7.46-7.46 7.43l-18.45.22c-5.69.09-5.27-3.2-5.23-7.79v-25h-25.16c-5.59.06-7.47-1.52-7.44-7.48l-.22-18.44c-.09-5.7 3.2-5.27 7.79-5.24h25.03v-25.03z"/></svg>`,
                text: text.tasksText,
                ref: "tasks",
                status: "NEW",
                fnc: () => {
                    renderTasks();
                }
            },
            {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store h-6 w-6"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg>`,
                text: text.marketText,
                ref: "market",
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
        userName.forEach(e => {e.innerText = username || `user${id}`});
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
    }

    function renderGames() {
        const gamesInfo = [
            {
                name: "Flip Coin Game",
                img: "./images/games/flipCoinGameEvent.jpg",
                refF: openGameFlip
            },

        ];

        const games = getId("games");
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
                // renderRoulette();
            }
        })
    }
    typeGameFunctional();

    // spinButton.onclick = spinRoulette;
    // async function spinRoulette() {
    //
    //     // rouletteItems.style.transform = `translateX(0)`;
    //     // rouletteItems.classList.remove("animate")
    //     const closePage = getId("closePage");
    //     const sellOfReciveImg = getId("sellOfReciveImg");
    //     const caseID = giftsData[caseId].id;
    //     const caseName = giftsData[caseId].caseName;
    //     let random =  {data: {}};
    //     if(caseName === "Squid Game"){
    //
    //     }
    //     if(isDemo){
    //         getAnim();
    //         return;
    //     }
    //     random = await f("spin", {case:  caseID});
    //     if(!random.ok){
    //         random = await random.text();
    //         createMessage(random, 0);
    //     } else{
    //         priceGiftPos.classList.add("hide");
    //         random = await random.json();
    //         getAnim();
    //     }
    //     // const itemWidth = document.querySelector('.rouletteItem').offsetWidth + 10;
    //     function getAnim(){ todo :)
    //         const demoElm = dataGift[Math.floor(Math.random() * (dataGift.length))];
    //         let {giftId, uzor, backdrop, name} = random.data;
    //         const randomIndex = isDemo ? demoElm.giftId: giftId;
    //         let randomI;
    //         sellOrSendFriend.classList.add('hide');
    //         ownerName.innerText = userUIdata.user.username || "user" + userUIdata.user.id
    //         if(isDemo){
    //             modelTextGift.innerText = demoElm.name;
    //             fonTextGift.innerText = "Demo";
    //             uzorTextGift.innerText = "Demo";
    //         } else{
    //             const mdlObj = objGiftsDataAvaliable[name];
    //             isLimitedField.classList.remove("hide")
    //             used.innerText = mdlObj?.isUsed || 0;
    //             limitUsed.innerText = mdlObj?.giftLimit || isLimitedField.classList.add("hide");
    //             modelTextGift.innerText = name;
    //             fonTextGift.innerText = backdrop;
    //             uzorTextGift.innerText = uzor;
    //             backdropDiv.style.backgroundColor = colorsObject[backdrop];
    //             uzor = uzor.replaceAll(" ", "_");
    //             uzor = uzor.toLowerCase();
    //             renderUzor(uzor)
    //             // uzorElms.forEach((e) => {
    //             //
    //             //     e.style.backgroundImage = `url("./images/gifts/giftUzor/${uzor}.webp")`;
    //             // })
    //         }
    //         for(let i = 0; i < dataGift.length; i++){
    //             if(dataGift[i].giftId === randomIndex){
    //                 randomI = i;
    //                 break;
    //             }
    //         }
    //         imgCase.classList.add("hide");
    //         videoCase.classList.remove("hide");
    //         if(caseName === "Squid Game"){
    //             videoCase.src = "./images/caseAnimation/squidGameCase.gif";
    //         } else{
    //             videoCase.src = "./images/caseAnimation/basicCase.gif";
    //         }
    //
    //         // = randomIndex
    //         // const offset = (randomI - 1) * itemWidth;
    //         // const fullSpin = (dataGift.length * itemWidth) * 3;
    //         // const finalPosition = fullSpin + offset;
    //         // const priceSell =getId("priceSell");
    //         if(isDemo){
    //             buttonSellOrRecive.classList.add("hide");
    //             closePage.classList.remove('hide');
    //         } else{
    //             closePage.classList.add('hide');
    //             buttonSellOrRecive.classList.remove("hide");
    //         }
    //         spinButton.disabled = true;
    //         spinning = true;
    //
    //         setTimeout(() => {
    //             let randGft =  dataGift[randomI];
    //             // for(let i = 0; i < dataGift.length; i++){
    //             //     if(dataGift[i].giftId === randomIndex){
    //             //         randGft = dataGift[ind];
    //             //         break;
    //             //     }
    //             // }
    //             const price = randGft.price;
    //
    //             giftOfUser.src = `./images/gifts/gift${(randGft.giftId)}.png`;
    //             footerGiftDesign.classList.add("active")
    //             blurEffectGift.classList.remove("hide");
    //             // sellOfReciveImg.src = `./images/gift${(randGft.giftId)}.gif`;
    //             // priceSell.innerText = price;
    //             currentPrice = price;
    //             currentGift = randomIndex;
    //             selectedGiftIndex = 0;
    //
    //             // sellOrReciveGift.classList.remove("hide");
    //             //setting :)
    //             giftToProfile.classList.remove("hide");
    //
    //             // toFriend.classList.add("hide");
    //             spinning = false;
    //             rouletteItems.classList.add("animate")
    //             spinButton.disabled = false;
    //             imgCase.classList.remove("hide");
    //             videoCase.classList.add("hide")
    //         }, 2000);
    //     }
    //
    //
    // }
    // demoButton.onclick = () => {
    //     isDemo = !isDemo;
    // }

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
    // renderRoulette();
    function renderUserBalance(){
        f("getBalance").then((e) => e.json()).then((e) => {
            userStars.forEach((el) => {
                el.innerText = e.balance
            })
        }).catch((e) => {
            createMessage("Balance Error", 0);
        })
    }
    async function renderUserGift(){
        giftUser  = await f("user").then((e) => e.json());
        if(giftUser.status !== "ok"){
            createMessage("USER AUTH ERROR", 0);
            return;
        }
        upgradeGiftData();
        // const sellOfReciveImg = getId("sellOfReciveImg");
        renderUserBalance();
        // const priceSell =getId("priceSell");
        const nogift = getId("nogift");
        let html = document.createElement("div");
        giftUser = giftUser.data;
        giftUser = giftUser.reverse();
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

        sellOrSendFriend.classList.remove("hide");
        giftOfUser.classList.remove("centerpos");
        for(let i = 0; i < giftUser.length; i++){ // I'm not begginer proggramer :) I'm olympic proggramer and this way is very fast ...
            let {giftId, priceGift, isNft, uzor, fon, model, specialIndex, isSale, salePrice} = giftUser[i];
            const div = document.createElement("div");
            const mainPathImg = "./images/gifts/";
            const uzorChanged = uzor.replaceAll(" ", "_").toLowerCase();

            const color =  colorsObject[fon] || "black";
            div.className = "giftsUser";
            div.innerHTML = `${isSale ? '<div class="statusGift" style="font-size: 11px">' + text.onsaleText + '</div>' : ''}
                ${0 ? '<div class="statusGiftTh" style ="font-size: 11px; background: linear-gradient(180deg,'  + color +' 1.72%, #34a4fc 94.83%);"><p>#100</p></div>' : ''}
                <img src="${mainPathImg}gift${giftId}.png"  alt="">
                <p class="price starParent"><span class="starIcon"></span> ${isNft ? "???" : priceGift}</p>`;
            div.style.backgroundColor = color;
            div.onclick = () => {
                footerGiftDesign.classList.add("active");
                blurEffectGift.classList.remove("hide");
                ownerName.innerText = userUIdata.user.username || `user${userUIdata.user.id}`;
                chanceModel.innerText = modelChances[model];
                chanceFon.innerText = backdropChances[fon]
                chanceUzor.innerText = uzorChances[uzor];
                const mdlObj = objGiftsDataAvaliable[model];
                isLimitedField.classList.remove("hide")
                used.innerText = mdlObj?.isUsed || 0;
                limitUsed.innerText = mdlObj?.giftLimit  || isLimitedField.classList.add("hide");
                giftToProfile.classList.add("hide");
                giftOfUser.src = `${mainPathImg}gift${giftId}.png`;
                modelTextGift.innerText = model;
                fonTextGift.innerText = fon;
                uzorTextGift.innerText = uzor;
                backdropDiv.style.backgroundColor = colorsObject[fon];
                renderUzor(uzorChanged)
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
            div.appendChild(renderUzorMainPage(`${mainPathImg}/giftUzor/${uzorChanged}.webp`));
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
    const aviablesAds = ["ads7.png"]//["ads1.jpg", "ads2.jpg"];, "ads5.jpg"
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

    // toCasesPageButton.onclick = () => {
    //     toCasesPageButton.classList.add("mainBttActive");
    //     games.classList.add("hide");
    //
    //     toGamesPageButton.classList.remove("mainBttActive");
    //     cases.classList.remove("hide");
    //
    // }
    // toGamesPageButton.onclick = () => {
    //     toCasesPageButton.classList.remove("mainBttActive");
    //     games.classList.remove("hide");
    //
    //     toGamesPageButton.classList.add("mainBttActive");
    //     cases.classList.add("hide");
    //     renderGames();
    // }
    renderGames();
    renderListLang();

    let flipCoinBet = 5;
    const bttns = betsFlipCoin.querySelectorAll("button");
    const head = getId("head");
    const tail = getId("tail");
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
            renderUserBalance();
            if(el.result){
                flip(1800);
                createMessage("You Win " +(flipCoinBet * 2), 1);
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
                renderUserGift();
                closeGiftPage();
            })

            return;
        }
        blurCloseSalePage.classList.remove("hide");
        salePage.classList.remove("hide");
    }
    const inputSaleGift = getId("inputSaleGift");
    toSaleButton.onclick = () => {
        const value = +(inputSaleGift.value);
        if(value < 10 || value > 100000){
            createMessage(text.errorSalePageMinMax, 0)
            return;
        }
        f("saleGift", {giftId: selectedGiftIndex, price: value}).then(async (el) => {
            if(el.ok) {
                // giftUser  = await f("user").then((e) => e.json());
                // if(giftUser.status !== "ok"){
                //     createMessage("USER AUTH ERROR", 0);
                //     return;
                // }
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
            let {giftId, username, uzor, fon, model, specialIndex, isSale, salePrice, id} = giftMarket[i];
            const div = document.createElement("div");
            const mainPathImg = "./images/gifts/";
            const uzorChanged = uzor.replaceAll(" ", "_").toLowerCase();


            const color =  colorsObject[fon] || "black";
            div.className = "giftsUser";
            div.style.backgroundColor = color;

            div.innerHTML = `${isSale ? '<div class="statusGift" style="font-size: 11px">' + text.onsaleText + '</div>' : ''} 
            ${0 ? '<div class="statusGiftTh" style ="font-size: 11px; background: linear-gradient(180deg,'  + color +' 1.72%, #34a4fc 94.83%);"><p>#100</p></div>' : ''} 
<img src="${mainPathImg}gift${giftId}.png"  alt="">
<p class="price starParent"><span class="starIcon"></span> ${salePrice}</p>`;
            div.appendChild(renderUzorMainPage(`${mainPathImg}/giftUzor/${uzorChanged}.webp`));
            div.onclick = () => {
                backdropDiv.style.backgroundColor = colorsObject[fon];
                renderUzor(uzorChanged)
                const mdlObj = objGiftsDataAvaliable[model];
                isLimitedField.classList.remove("hide")
                used.innerText = mdlObj?.isUsed || 0;
                limitUsed.innerText = mdlObj?.giftLimit || isLimitedField.classList.add("hide");
                footerGiftDesign.classList.add("active");
                blurEffectGift.classList.remove("hide");
                priceStarToBuy.innerText = salePrice;
                giftToProfile.classList.add("hide");
                giftOfUser.src = `${mainPathImg}gift${giftId}.png`;
                modelTextGift.innerText = model;
                fonTextGift.innerText = fon;
                uzorTextGift.innerText = uzor;
                ownerName.innerText = username || "user" + id;
                chanceModel.innerText = modelChances[model];
                chanceFon.innerText = backdropChances[fon];
                chanceUzor.innerText = uzorChances[uzor];
                notDesignLine.classList.remove("hide");
                sell.innerText = text.notSell;
                onSaleGift = true;
                priceGiftPos.classList.remove("hide");
                priceGiftNumber.innerText = salePrice;
                selectedGiftIndex = specialIndex;
                sellOrSendFriend.classList.add("hide");
                giftOfUser.classList.add("centerpos");
                buyItem.classList.remove("hide");
                closeGift.classList.add("hide");
            }
            html.appendChild(div);
        }
        giftsMarket.append(html);
    }
    renderMarket();

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
    promoButton.onclick = async () => {// HI nigga do you see my code nigga ? It's not interesting it's very dificult to undertend stupid neri hamar nigga XD
        const input = promoInput.value;
        if(!(input.trim())){
            createMessage(text.errorPromocode, 0);
            return;
        }
        const result = await f("promo", {promo: input})
        const textMessage = await result.text();
        if(textMessage === "Error Limit"){
            createMessage(text.limitPromo, 0);
            return;
        }
        if(textMessage === "Error Already Used"){
            createMessage(text.alreadyUsed, 0);
            return;
        }
        if(result.ok){
            createMessage(text.successPromocode, 1);
            setTimeout(() => {
                renderUserBalance();
            }, 1000)
            return;
        }
        createMessage(text.errorPromocode, 0);
    }
    async function renderTasks(){
        let info = await f("getTasks");
        if(!info.ok){
            createMessage("SERVER ERROR", 0);
        }
        info = await info.json();

        activeTasksList.innerHTML = "";
        completedTasksList.innerHTML = "";
        let completedLength = 0;
        let activeLength = 0;
        info?.tasks.map((el) => {
            const {link, taskId, taskRewardStar, taskTargetName, type} = el;
            let isActive = (info.userCompleted || '').indexOf(taskId) === -1;
            if(isActive){
                activeLength++;
            } else{
                completedLength++;
            }
            let description;
            if(type === "followTg"){
                if(lang === "ru"){
                    description = `Подписаться на канал ${taskTargetName}`;
                }
                else{
                    description = `Subscribe to ${taskTargetName} channel`;
                }
            } else if(type === "vote"){
                if(lang === "ru"){
                    description = `Голосуй за ${taskTargetName}!`
                }
                else{
                    description = `Vote for ${taskTargetName}!`;
                }
            } else if(type === "story"){
                if(lang === "ru"){
                    description = `Сделайте сторис и поделитесь моментом!`
                }
                else{
                    description = `Make a story and share the moment!`;
                }
            }else if(type === "bot"){
                if(lang === "ru"){
                    description = `PLAY ${taskTargetName}!`
                }
                else{
                    description = `PLAY ${taskTargetName}!`;
                }
            }
            const divTask = document.createElement("div");
            divTask.className = "task " + (isActive ? "" : "inactive");
            const taskInfo = document.createElement("div");
            taskInfo.className = "task-info";
            const taskDescription = document.createElement("div");
            taskDescription.innerText = description;
            const taskReward = document.createElement("div");
            taskReward.className = "reward";
            taskReward.innerHTML = `<div class="starParent" style="justify-content: start">
                        <span>+ ${taskRewardStar}</span>
                        <span class="starIcon"></span>
                    </div>`;
            taskInfo.appendChild(taskDescription);
            taskInfo.appendChild(taskReward);
            const taskButtonComplete = document.createElement("button");
            taskButtonComplete.className = `button ${!isActive ? "in" : ''}active`;
            taskButtonComplete.innerText = lang === "ru" ? "Выполнить" : "Go";
            taskButtonComplete.onclick = () => {
                if(type === "story"){
                    Telegram.WebApp.shareToStory(`https://raw.githubusercontent.com/hamstermod/StarJack.github.io/refs/heads/main/images/story${lang === "en" ? "En" : "Ru"}.jpg`,
                        {
                            text: "Play Star Jack and Win NFT Gifts @StarJackOrig_bot https://t.me/StarJackOrig_bot",
                            widget_link: {
                                url: "https://t.me/StarJackOrig_bot",
                                name: "Play Star Jack",
                            },
                        },
                    );
                }
                else{
                    window.open(link, "_blank");
                }
                if(isActive){
                    taskButtonComplete.innerText = lang === "ru" ? "Проверить" : "Check";
                    taskButtonComplete.onclick = async () => {
                        let res = await f("completeTask", {id: taskId});
                        if(res.ok){
                            if(type === "story"){
                                createMessage(text.taskInProgress, 1);
                            }
                            else{
                                createMessage(text.taskSuccess, 1);
                            }
                            renderTasks();
                        } else{
                            res = await res.text();
                            if(res === "AlreadyCompleted"){
                                createMessage(text.alreadyCompletedTask, 0);
                            }
                            else{
                                createMessage(text.taskIsNotFound, 0);
                            }
                        }
                    }
                }
            }
            divTask.appendChild(taskInfo);
            divTask.appendChild(taskButtonComplete);
            isActive ? activeTasksList.appendChild(divTask) : completedTasksList.appendChild(divTask);
        })
        completedTasksLength.innerText = completedLength;
        activeTasksLength.innerText = activeLength;
    }
    renderTasks();
    // const xpLevelsChild = document.getElementById("xpLevelsChild");
    // let html = "";
    // for(let i = 0; i < 20; i++){
    //     html += `<div class="xpLevel  ${i > 5 ? 'disabled' : ''}">
    //             <p>${i+1}</p>
    //         </div>`;
    // }
    // xpLevelsChild.innerHTML = html;
    // withdraw_button.onclick = () => createMessage(text.withdrawStatus, 1);

    stake_btn.onclick = () => {
        createMessage(lang === 'ru' ? "СКОРО" : "COMING SOON!",1)
        // stakingPage.classList.add("active");
    }
    closePageStaking.onclick = () => {
        stakingPage.classList.remove("active");
    }




    const canvas = document.getElementById("canvasUzor");
    const ctx = canvas.getContext("2d");

   function renderUzor(uzorName){
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       const centerX = canvas.width / 2;
       const centerY = canvas.height / 2;
       let radius = 50;
       const count = 18;

       const img = new Image();
       img.src = `./images/gifts/giftUzor/${uzorName}.webp`;

       img.onload = () => {
           for(let j = 0; j < 2; j++){
               radius += 50;
               for (let i = 0; i < count; i++) {
                   const angle = (i / count) * 2 * Math.PI;
                   const x = centerX + radius * Math.cos(angle) - 15;
                   const y = centerY + radius * Math.sin(angle) - 15;

                   ctx.globalAlpha = 0.2 + 0.3 * Math.sin(angle + Math.PI);
                   ctx.drawImage(img, x, y, 20, 20);
               }
           }
       };
   }

   function renderUzorMainPage(imgHref){
       const m = document.createElement("canvas");


       const img = new Image();
       img.src = imgHref;

       img.onload = () => {
           const g = m.getContext("2d");
           const f = m.dpr = window.devicePixelRatio || 1;


           const r = [
               [2, 2, 0.2],
               [2, 30, 0.2],
               [120, 2, 0.25],
               [120, 30, 0.2],
               [60, 0, 0.1],
           ];

           r.forEach(([v, y, b]) => {
               g.globalAlpha = b;
               g.drawImage(img, v * f, y * f, 30, 20);
           });

           g.globalAlpha = 1;
       };
       return m;
   }
    let selectedGiftForBuyStarJack = null;
    let targetGiftDataObj = {};
    async function renderMarketByGame(){
        // const gifts = await f("giftsInfo").then((e) => e.ok ? e.json() : []);
        await upgradeGiftData();
        const html = document.createElement("div");
        html.className = "flex wrap";
        html.style.justifyContent = "center";
        giftsDataAvailable = giftsDataAvailable.sort((a, b) => {
            const getPriority = (gift) => {
                if (gift.giftLimit === 0) return 0; // нелимитные
                if (gift.giftLimit - gift.isUsed > 0) return 1; // доступные лимитные
                return 2; // проданные лимитные
            };

            return getPriority(a) - getPriority(b);
        });
        for(let i = 0; i < giftsDataAvailable.length; i++){
            let {modelName, giftLimit, isUsed, giftPrice, giftID} = giftsDataAvailable[i];
            const div = document.createElement("div");
            const mainPathImg = "./images/gifts/";

            const color =  "black";
            div.className = "giftsUser";
            div.innerHTML = `
                ${giftLimit !== 0 ? giftLimit <= isUsed ? ('<div class="statusGiftTh" style="background: red;"><p>' + text.textSold +'</p></div>') : ('<div class="statusGiftTh" style="background: red;"><p>LIMITED</p></div>') : ''}
                <img src="${mainPathImg}gift${giftID}.png"  alt="">
                <p class="price starParent"><span class="starIcon"></span> ${giftPrice}</p>`;
            div.style.backgroundColor = color;
            div.onclick = () => {
                selectedGiftForBuyStarJack = giftID;
                targetGiftDataObj = giftsDataAvailable[i];
                giftBuyImg.src = `${mainPathImg}gift${giftID}.png`;
                aviablityFuckingGift.innerText = `${giftLimit-targetGiftDataObj.isUsed} / ${giftLimit}`;
                priceBuyGift.innerText = giftPrice;
                buyGiftModelGame.classList.add("active");
                blurCloseBuyGift.classList.remove("hide");
                giftBuyButton.classList.remove("hide")
                if(giftLimit === 0){
                    aviablityFuckingGift.classList.add("hide");
                } else{
                    aviablityFuckingGift.classList.remove("hide");
                }
                if(giftLimit-isUsed <= 0 && giftLimit !== 0){
                    buyGiftModelGame.classList.add("full");
                    giftBuyButton.classList.add("hide")
                } else{
                    buyGiftModelGame.classList.remove("full");
                }
            }
            // div.appendChild(renderUzorMainPage(`${mainPathImg}/giftUzor/${uzorChanged}.webp`));
            html.appendChild(div);
        }// giftsGame.innerHTML = html;
        giftsGame.innerHTML = "";
        giftsGame.appendChild(html);
    }
    giftBuyButton.onclick = () => {
        if(!selectedGiftForBuyStarJack){
            return;
        }
        f("buyGift", {giftId: selectedGiftForBuyStarJack}).then((e) => {
            if(!e.ok){
                createMessage(text.paymentError, 0);
            } else{
                targetGiftDataObj.isUsed++;
                createMessage(text.paymentSuccess, 1);
                blurCloseBuyGift.classList.add("hide");
                buyGiftModelGame.classList.remove("active");
            }
        })
    }
   let marketPage = "forsale";
    toMarketPlace.onclick = () => {
        if(marketPage === "forsale"){
            return;
        }
        marketPage = "forsale";
        toMarketPlace.classList.add("marketBttActive");
        toMainGift.classList.remove("marketBttActive");
        giftsMarket.classList.remove("hide");
        giftsGame.classList.add("hide");
        renderMarket();
    }
    toMainGift.onclick = () => {
        if(marketPage === "market"){
            return;
        }
        marketPage = "market";
        toMarketPlace.classList.remove("marketBttActive");
        toMainGift.classList.add("marketBttActive");
        giftsMarket.classList.add("hide");
        giftsGame.classList.remove("hide");
        renderMarketByGame();
    }

    blurCloseBuyGift.onclick = () => {
        blurCloseBuyGift.classList.add("hide");
        buyGiftModelGame.classList.remove("active");
    }

})())