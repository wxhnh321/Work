
/**
 * Created by Administrator on 2016/6/24.
 */



(function () {

    var p, targetContainer, currentDragged;

    function getElements() {
        p = document.getElementById("p");
        targetContainer = document.getElementById("target-container");
    }

    function implement1() {
        p.ondragstart = function (event) {
            currentDragged = p;
        };

        targetContainer.ondragover = function (event) {
            //阻止事件默认行为,默认不接受拖入元素,阻止后可接受拖入元素
            event.preventDefault();
        };

        targetContainer.ondrop = function (event) {
            targetContainer.appendChild(currentDragged);
        }
    }

    function init() {
        getElements();

        p.ondragstart = function (event) {
            event.dataTransfer.setData("domId", this.id);
        };

        //document.querySelectorAll(".container").forEach(function (item) {
        //    item.acceptDrop = true;
        //});

        var result=document.querySelectorAll(".container");
        for(var i=0;i<result.length;i++){
            result[i].acceptDrop=true;

        }
    }

    init();
})();