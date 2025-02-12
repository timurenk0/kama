export const songs = {
    congratulations: {
        before: "And this mornin' you cooked the eggs with the kale\nI tried to hit it while you was gettin' dressed\nYou said, ",
        after: "I'm like \"Oh well, you know me so well\"",
        isCorrect: (input) => {
            return input.toLowerCase() === "all you ever think about is sex";
        }
    },
    utro: {
        before: "Я провожу тебя до лифта и обниму\nЯ твоей матери не нравлюсь по-моему\nПридумай где ты была все четыре дня\n",
        after: "",
        isCorrect: (input) => {
            return input.toLowerCase() === "засосы замаскируй не сдавай меня";
        }
    },
    vampir: {
        before: "",
        after: "Какая твоя группа крови?\nДай мне укусить\nЯ клянусь, не будет больно приходи ко мне",
        isCorrect: (input) => {
            return input.toLowerCase() === "детка я вампир";
        }
    },
    koti: {
        before: "Значит, снова будут в моде тёплые коты\nБудем гладить всех мурчащих",
        after: "Запуская руки в меховые животы",
        isCorrect: (input) => {
            return input.toLowerCase() === "тёплых, сонных, настоящих";
        }
    },
    vselennaya: {
        before: "Но, я надеюсь, это позже случится гораздо\nЯ туда совершенно не тороплюсь\nКак бы круто там ни было, мне одно ясно",
        after: "",
        isCorrect: (input) => {
            return input.toLowerCase() === "eщё сильнее я в тебя всё равно не влюблюсь";
        }
    }
}
