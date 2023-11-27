function cleanText(text) {
        var pattern = /(\d{2}\/\d{4})/;
        var match = text.match(pattern);
        return match ? match[1] : "";
    }

    jQuery(document).ready(function($) {
        // Iterace přes všechny produkty s třídou "product-item"
        $('.product-item').each(function() {
            var productElement = $(this);

            var birthdateText = productElement.find("#birthdate").text().trim();
            var cleanedBirthdateText = cleanText(birthdateText);

            var [birthMonth, birthYear] = cleanedBirthdateText.split("/").map(part => parseInt(part, 10));

            var today = new Date();
            var currentMonth = today.getMonth() + 1;
            var currentYear = today.getFullYear();

            var years = currentYear - birthYear;
            var months = currentMonth - birthMonth;

            if (months < 0) {
                years--;
                months = 12 + months;
            }

            // Aktualizuje pole "age" s výsledkem výpočtu věku pro tento produkt
            var ageText = years;

            if (years === 0) {
                ageText = "";
            } else if (years === 1) {
                ageText += " rok";
            } else if (years > 1 && years < 5) {
                ageText += " roky";
            } else {
                ageText += " rokov";
            }

            if (months === 0) {
                ageText += "";
            } else if (months === 1) {
                ageText += " " + months + " mesiac";
            } else if (months > 1 && months < 5) {
                ageText += " " + months + " mesiace";
            } else {
                ageText += " " + months + " mesiacov";
            }

            // Aktualizuje pole "age_2" s výsledkem výpočtu věku pro tento produkt
            var age2Field = productElement.find("#age_2");

            if (years < 0 || (years === 0 && months < 8)) {
    console.log("Šteniatko");
    age2Field.text("Šteniatko");
} else if ((years === 0 && months >= 8 && months < 24) || (years > 0 && years < 2) || (years === 2 && months === 0)) {
    console.log("Puberťák");
    age2Field.text("Puberťák");
} else if ((years >= 2 && years < 6) || (years === 6 && months <= 6)) {
    console.log("Dospelák");
    age2Field.text("Dospelák");
} else {
    console.log("Senior");
    age2Field.text("Senior");
}
    
        });
    });