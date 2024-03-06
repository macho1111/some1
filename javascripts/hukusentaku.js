new Vue({
    el: '#app',
    data: {
        showGallery: true,
        selectedItem: '',
        selectedPrice: 0,
        totalAmount: 0,
        selectedColor: '#ffffff', // デフォルトの色
        selectedImage: '../somemono/images/T-shirt_ffffff.png', // デフォルトの画像
    },
    methods: {
        showTooltip(description, event) {
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
            var mouseX = event.clientX;
            var mouseY = event.clientY;
            tooltip.style.left = mouseX + 'px';
            tooltip.style.top = mouseY - tooltip.clientHeight - 10 + 'px';
        },
        hideTooltip(event) {
            var tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'none';
        },
        showForm(item, price, event) {
            this.selectedItem = item;
            this.selectedPrice = price;
            this.showGallery = false;
            this.updateImage(); // 画像の更新を呼び出す
            this.showTooltip(`　${item}　`, event);
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
        },

        updateColor(color) {
            this.selectedColor = color;
            this.updateImage();
        },
        updateImage() {
            // 選択した色に応じて画像を更新
            this.selectedImage = `../somemono/images/${this.selectedItem}_${this.selectedColor.substring(1)}.png`;
            
            // 他の服についても同様に追加
        },
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



