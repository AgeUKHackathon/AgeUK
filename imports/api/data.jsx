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
                question: "Are you worried about where you're going to be living",
                category: 'Homelessness',
                type: 'boolean',
                prompts: [
                    { actions: [5] },
                    { actions: [4] },
                ],
            },
            {
                question: 'Can you afford your housing?',
                category: 'Bills & big jobs',
                type: 'boolean',
                prompts: [
                    { actions: [5] },
                    { actions: [7] },
                    { actions: [10] },
                ],
            },
            {
                question: "Have you checked you're getting the benefits you're entitled to?",
                category: 'Lack income and benefits',
                type: 'boolean',
                prompts: [
                    { actions: [5] },
                    { actions: [7] },
                    { actions: [10] },
                ],
            },
        ],
        suitability: [
            {
                question: 'Is your housing suitable?',
                category: 'Size & type & options',
                type: 'boolean',
                conditional: 'If not, why not?',
                prompts: [
                    {
                        prompt: 'House is too big',
                        actions: [1],
                    },
                    {
                        prompt: 'Need more support at home and considering moving',
                        actions: [2],
                    },
                    {
                        prompt: 'Need more support at home and wish to stay at current property',
                        actions: [3],
                    },
                    {
                        prompt: 'Risk of homelessness',
                        actions: [5],
                    },
                    {
                        prompt: 'Problems with neighbours/noise',
                        actions: [6],
                    },
                    {
                        prompt: 'Worried about home not being safe and/or secure',
                        actions: [8],
                    },
                    {
                        prompt: 'Maintenance and repairs',
                        actions: [9],
                    },
                    {
                        prompt: 'Struggling to manage bills (incl. cold)',
                        actions: [10],
                    },
                    {
                        prompt: 'Looking to move to a care home',
                        actions: [11],
                    },
                    {
                        prompt: 'Issue related to living in a Park Home',
                        actions: [12],
                    },
                ],
            },
            {
                question: 'Are you comfortable at home?',
                category: 'Support / manageable',
                type: 'boolean',
                conditional: 'If not, why not?',
                prompts: [
                    {
                        prompt: 'House is too big to manage',
                        actions: [1],
                    },
                    {
                        prompt: 'Need more support at home and considering moving',
                        actions: [2],
                    },
                    {
                        prompt: 'Need more support at home and wish to stay at current property',
                        actions: [3],
                    },
                    {
                        prompt: 'Problems with neighbours/noise',
                        actions: [6],
                    },
                    {
                        prompt: 'Worried about home not being safe and/or secure',
                        actions: [8],
                    },
                    {
                        prompt: 'Maintenance and repairs',
                        actions: [9],
                    },
                    {
                        prompt: 'Struggling to manage bills (incl. cold)',
                        actions: [10],
                    },
                    {
                        prompt: 'Looking to move to a care home',
                        actions: [11],
                    },
                    {
                        prompt: 'Issue related to living in a Park Home',
                        actions: [12],
                    },
                ],
            },
            {
                question: 'Can you use everything easily?',
                category: 'Support / manageable',
                type: 'boolean',
                conditional: 'If not, why not?',
            },
            {
                question: 'Are you able to use all of your house?',
                category: 'Use all house?',
                type: 'boolean',
                conditional: 'If not, why not?',
                prompts: [
                    { actions: [1] },
                ],
            },
        ],
        maintenance: [
            {
                question: 'Do you have someone you trust who can do repairs?',
                category: 'Trusted help / traders',
                type: 'boolean',
                prompts: [
                    { actions: [9] },
                ],
            },
            {
                question: 'Do you find it easy or difficult to manage daily tasks?',
                category: 'Daily living tasks',
                type: 'boolean',
                prompts: [
                    { actions: [3] },
                ],
            },
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
