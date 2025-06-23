function calculateY(x) {
    try {
        if (x === 0) {
            alert("Ошибка: деление на ноль недопустимо (x = 0)");
            return "Ошибка";
        }
        let y = (2 * x - 7) / (5 * x);
        return y.toFixed(2); // округление до 2 знаков
    } catch (e) {
        alert("Произошла ошибка: " + e.message);
        return "Ошибка";
    }
}
