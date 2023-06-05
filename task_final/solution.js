function sendRequest(name, phone, address, goods, sum) {
    let clientToString = name + ' ' + phone;
    let addressToString = 'ул. ' + address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж, кв. ' + address.flat;

    let result = {
        data: {
            client: clientToString,
            order: {
                address: addressToString, 
                sum
            }
        }
    };

    let goodsInfo = [];
    for (let i = 0; i < goods.length; i++) {  
        let good = {
            "title": goods[i].title,
            "count": goods[i].count
        };

        goodsInfo.push(good);
    }

    result.data.goods = goodsInfo;

    let jsonData = JSON.stringify(result);

    return jsonData;
}