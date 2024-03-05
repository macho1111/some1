function showTooltip(description) {
    var tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = description;
    tooltip.style.display = 'block';
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#333';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.zIndex = '999';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    // マウスの座標を取得
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // ツールチップをマウスの上に配置
    tooltip.style.left = mouseX + 'px';
    tooltip.style.top = mouseY - tooltip.clientHeight - 10 + 'px';
}

function hideTooltip() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

new Vue({
    el: '#app',
    data: {
        showGallery: true,
        selectedItem: '',
        selectedPrice: 0,
        totalAmount: 0
    },
    methods: {
        showForm(item, price) {
            this.selectedItem = item;
            this.selectedPrice = price;
            this.showGallery = false;
        },
        submitForm() {
            // フォームが送信されたときの処理
            console.log('Form submitted with item:', this.selectedItem, 'and price:', this.selectedPrice);

            // 合計金額を計算
            this.totalAmount += this.selectedPrice;

            // 送信後、ギャラリーに戻す
            this.showGallery = true;
        },
        formatAmount(amount) {
            return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
        }
    }
});

function updateAmount() {
    var amountInput = document.getElementById('amountInput');
    var amountParagraph = document.getElementById('amount');

    // 取得した金額を表示
    var amountValue = parseInt(amountInput.value) || 0;
    amountParagraph.textContent = formatAmount(amountValue);

    // 他に行いたい処理があればここに追加
}

// 金額の表示を整形する関数
function formatAmount(amount) {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
}