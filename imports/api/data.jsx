const data = {
    housing: {
        basic: [
            { question: 'Where do you live at the moment?' },
            {
                question: 'Do you rent or own your home?',
                type: 'boolean',
            },
            {
                question: 'Do you live on your own?',
                type: 'boolean',
                conditional: 'If not, who with?',
            },
            { question: 'What are your concerns about where you are living at the moment? ' },
            {
                question: 'Do you feel safe and comfortable at home?',
                type: 'boolean',
                conditional: 'If not, why not?',
            },
            {
                question: 'Do you have someone you can call in an emergency?',
                type: 'boolean',
            },
        ],
        affordability: [
            {
                question: 'Can you afford your housing?',
                category: 'Bills & big jobs',
                type: 'boolean',
            },
            {
                question: "Have you checked you're getting the benefits you're entitled to?",
                category: 'Lack income and benefits',
                type: 'boolean',
            },
        ],
        suitability: [
            {
                question: 'Is your housing suitable?',
                category: 'Size & type & options',
                type: 'boolean',
                conditional: 'If not, why not?',
            },
            { question: 'q6' },
        ],
        maintenance: [
            {
                question: 'q3',
                type: 'boolean',
            },
            { question: 'q4' },
        ],
        warmth: [
            {
                question: 'q7',
                type: 'boolean',
            },
            { question: 'q8' },
        ],
    },
    money: {},
    care: {},
    health: {},
    social: {},
    familty: {},
};

export default data;
