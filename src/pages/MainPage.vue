<!-- @format -->

<script>
import NextButton from "@/components/UI/NextButton.vue";

export default {
    name: "MainPage",
    components: { NextButton },
};
</script>

<template>
    <article class="main-page">
        <div class="container container-1">
            <p class="text font__pt-serif font__size-18 color__white">Пройдіть точний і швидкий</p>
            <h1 class="text font__yeseva-one text__title">Тест на оприділення<br />IQ</h1>
            <next-button>Пройти тест</next-button>
            <div
                style="line-height: 19px"
                class="text"
            >
                <p class="text font__pt-serif font__weight-700 font__sz-15 color__yellow">
                    Та отримайте рекомендації щодо розвитку свого інтелекту
                </p>
                <p class="text font__merriweather font__sz-15 color__white">
                    та покращення фінансового добробуту та особистого життя
                </p>
            </div>
            <button class="font__pt-serif font__sz-8 to-top">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="8"
                        cy="8"
                        r="8"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.45453 11.6364L8.45453 6.10454L10.9954 8.64545L11.6364 8L7.99999 4.36363L4.36362 8L5.00453 8.6409L7.54544 6.10454L7.54544 11.6364L8.45453 11.6364Z"
                        fill="#0C0B10"
                    />
                </svg>
                Докладніше
            </button>
        </div>
        <div class="container container-2 font__yeseva-one">
            Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать
            список рекомендаций для повышения этого показателя.
        </div>
        <div class="container container-3">
            <p
                style="text-align: left"
                class="text font__pt-serif color__black"
            >
                Також за результатами тесту <span class="font__uppercase font__weight-700">ви отримаєте</span> докладні
                <span class="font__uppercase font__weight-700">поради</span> щодо визначення найбільш перспективної
                <span class="font__uppercase font__weight-700">для вашого типу</span>&thinsp;
                <span class="font__weight-700">інтелекту</span>&nbsp;
                <span class="font__uppercase font__weight-700">сфери діяльності</span>, яка принесе вам якнайшвидший
                фінансовий результат.
            </p>

            <img
                style="max-width: 400px; margin: 0 auto"
                src="../images/325-01.jpg"
                alt="Brain"
            />
            <next-button>Пройти тест</next-button>
        </div>
        <div class="container container-4">
            <p class="text color__white">
                Прохождение теста займет у вас не более
                <span class="text__merriweather font__weight-900 color__yellow">12 минут</span>, а его
                <span class="font__weight-700">результаты</span> вы сможете
                <span class="color__yellow">использовать всю жизнь</span>.
            </p>
            <p class="box-grey font__merriweather">
                Профессиональная интерпретация и детально проработанные рекомендации позволят вам качественно изменить
                все аспекты своей жизни: от финансового до любовного.
            </p>
            <next-button class="btn__transparent">Пройти тест</next-button>
        </div>
    </article>
</template>

<style scoped>
.main-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 46px;
    width: 100%;
    height: 100%;
    background-color: #0d0d11;
}

.text__title {
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;
    color: #ffc700;
    margin-bottom: 140px;
}

.container-1 {
    background-image: url("../images/rain_bk.jpg");
    background-repeat: no-repeat;
    background-position: top;
    height: 568px;
    padding: 22px 30px 11px;
}

.to-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    outline: none;
    background-color: transparent;
}

.container-2 {
    background-image: url("../images/container-2.jpg");
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    padding: 36px 36px 28px 36px;
}

.container-2::before {
    content: url("../images/open-quote.svg");
    margin-left: -12px;
    padding-bottom: 17px;
    align-self: start;
}

.container-2::after {
    content: url("../images/close-quote.svg");
    align-self: flex-end;
}

.container-3 {
    padding: 38px 11px;
    background: white;
}

.container-4 {
    background-image: url("../images/container-4.jpg");
    padding: 12px;
}

.box-grey {
    background-color: rgba(243, 243, 242, 0.8);
    border-radius: 20px;
    padding: 30px 15px;
}
</style>
