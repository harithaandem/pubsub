var listOfPublishes = {};
var listOfSubscribers = {};

const pubSubBroker = function () {
    this.publish = function () {
        var titlePub = document.getElementById("titlepub").value;
        var message = document.getElementById("message").value;
        if (!listOfPublishes[titlePub]) {
            listOfPublishes[titlePub] = message;
        }
        else {
            listOfPublishes[titlePub] = message;
            for (sub in listOfSubscribers[titlePub]) {
                listOfSubscribers[titlePub][sub](titlePub);
            }
        }
    }

    this.subscribe = function () {
        var titleSub = document.getElementById("titlesub").value;
        var flag = 0;
        for (title in listOfPublishes) {
            if (titleSub === title) {

                if (!listOfSubscribers[title]) {
                    listOfSubscribers[titleSub] = [];
                }
                listOfSubscribers[title].push(sub.notify);
            }
            flag = 1;
        }
        if (flag === 0) {
            alert("no such title");
        }
    }

    this.unsubscribe = function (notify) {
        var titleSub = document.getElementById("titlesub").value;
        var subindex;
        if (listOfSubscribers[titleSub]) {
            listOfSubscribers[titleSub].map((sub, index) => {
                if (sub === notify) {
                    subindex = index;
                }
            })
            listOfSubscribers[titleSub].splice(subindex, 1);
        }
    }
}

const publisher = function () {
    this.publish = function () {
        pubsubbroker.publish();
    }
}

const subscriber = function () {
    this.subscribe = function () {
        pubsubbroker.subscribe();
    }
    this.notify = function (title) {
        alert("your publisher \'" + title + " has published");
    }
    this.unsubscribe = () => {
        pubsubbroker.unsubscribe(this.notify);
    }
}
var pubsubbroker = new pubSubBroker();
var subscriber = new subscriber();
var publisher = new publisher();
var publishTitle = document.getElementById("publish").addEventListener('click', publisher.publish);
var subscribeTitle = document.getElementById("subscribe").addEventListener('click', subscriber.subscribe);
var unsubscribeTitle = document.getElementById("unsubscribe").addEventListener('click', subscriber.unsubscribe)



