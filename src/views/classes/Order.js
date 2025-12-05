import i18n from "../../services/i18n.js";


class Order {
    constructor(total, newDate, number) {
        if(newDate == null) {
            this.orderDate = new Date(); 
        }else {
            this.orderDate = newDate;
        }
        if(number == null) {
            this.orderNumber = Math.floor(Math.random() * (99999999 - 10000000) + 10000);
        }
        else {
            this.orderNumber = number;
        }
        this.total = total;
    }

    getOrderDate() {
        return i18n.formatDate(this.orderDate);
    }

    //create a dummy "order status" string
    getOrderStatus() {
        let oneDay = 24*60*60*1000; 
        let now = new Date(); 
        var diffDays = Math.floor(Math.abs((this.orderDate.getTime() - now.getTime())/(oneDay))); 

        if(diffDays < 2) {
            return i18n.getString("Order", "statusProcessing");
        }
        if(diffDays < 4) {
            return i18n.getString("Order", "statusShipped");
        }
        else{
            // [修复 2] 移除了硬编码 "Delivered"，改为从资源文件获取
            return i18n.getString("Order", "statusDelivered");
        }
    }

}

export {Order};