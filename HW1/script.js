        let cornPrice = 15.678;
        let avocadoPrice = 123.965;
        let tomatoprice = 90.2345;

        document.writeln(`Максимальна ціна: <b> ${Math.max(cornPrice,avocadoPrice,tomatoprice)} грн; </b> <br>`);
        document.writeln(`Мінімальна ціна: <b>${Math.min(cornPrice,avocadoPrice,tomatoprice)} грн; </b> <br>`);

        let sumPrice = cornPrice + avocadoPrice + tomatoprice;

        document.writeln(`Вартість всіх товарів: <b>${sumPrice} грн; </b> <br>`);

        let sumPriceWithoutCoins = Math.trunc(cornPrice) + Math.trunc(avocadoPrice) + Math.trunc(tomatoprice);

        document.writeln(`Вартість всіх товарів без копійок: <b>${sumPriceWithoutCoins} грн; </b> <br>`);

        document.writeln(`Вартість всіх товарів округлена до сотень: <b>${Math.ceil(sumPrice/100)*100} грн; </b> <br>`);

        document.writeln(`Вартість всіх товарів парне число: <b>${ Math.floor(sumPrice) % 2 == 0 ? true : false }; </b> <br>`);

        document.writeln(`Решта: <b>${ 500 - sumPrice } грн; </b> <br>`);

        let avgPrice = (cornPrice + avocadoPrice + tomatoprice)/3;

        document.writeln(`Середнє значення: <b>${ avgPrice.toFixed(2)} грн; </b> <br>`);

        let discountRandom = Math.random()*100;

        document.writeln(`Рандомна знижка: <b>${Math.floor(discountRandom)} %; </b> <br>`);

        let paidCash = (sumPrice-((sumPrice*discountRandom)/100)).toFixed(2);

        document.writeln(`Сума до оплати: <b>${paidCash} грн; </b> <br>`);

        document.writeln(`Чистий прибуток: <b>${paidCash-sumPrice/2} грн; </b> <br>`);

        