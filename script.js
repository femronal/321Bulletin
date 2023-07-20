const randomSelector = () => {
    return Math.floor(Math.random() * 20)
}

const financialIdeas = [
    "Create a Budget",
    "Emergency Fund",
    "Debt Management",
    "Invest Early",
    "Diversify Investments",
    "Retirement Planning",
    "Live Below Your Means",
    "Educate Yourself",
    "Avoid Impulse Buying",
    "Set Financial Goals",
    "Monitor Credit Score",
    "Insurance Coverage",
    "Teach Kids About Money",
    "Negotiate Smartly",
    "Cut Unnecessary Expenses",
    "Avoid Debt Traps",
    "Build Multiple Streams of Income",
    "Plan Major Purchases",
    "Monitor Investments",
    "Seek Professional Advice"
  ];

  const financialQuotes = [
    "“Don't tell me where your priorities are. Show me where you spend your money and I'll tell you what they are.” – James W. Frick",
    "“The individual investor should act consistently as an investor and not as a speculator.” – Ben Graham",
    "“The stock market is filled with individuals who know the price of everything, but the value of nothing.” – Philip Fisher",
    "“Formal education will make you a living; self-education will make you a fortune.” – Jim Rohn",
    "“The more you learn, the more you earn.” – Warren Buffett",
    "“It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.” – Robert Kiyosaki",
    "“An investment in knowledge pays the best interest.” – Benjamin Franklin",
    "“Do not save what is left after spending, but spend what is left after saving.” – Warren Buffett",
    "“The most important investment you can make is in yourself.” – Warren Buffett",
    "“The only way to permanently change the temperature in the room is to reset the thermostat. In the same way, the only way to change your level of financial success 'permanently' is to reset your financial thermostat. But it is your choice whether you choose to change.” – T. Harv Eker",
    "“Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.” – Warren Buffett",
    "“Do not save what is left after spending, but spend what is left after saving.” – Warren Buffett",
    "“The big money is not in the buying and selling... but in the waiting.” – Charlie Munger",
    "“In investing, what is comfortable is rarely profitable.” – Robert Arnott",
    "“The four most dangerous words in investing are: 'This time it's different.'” – Sir John Templeton",
    "“It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.” – Robert Kiyosaki",
    "“The individual investor should act consistently as an investor and not as a speculator.” – Ben Graham",
    "“The stock market is filled with individuals who know the price of everything, but the value of nothing.” – Philip Fisher",
    "“The more you learn, the more you earn.” – Warren Buffett",
    "“Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.” – Warren Buffett"
  ];
  
  const financialQuestions = [
    "Are you tracking your expenses regularly?",
    "Do you have a clear budget in place to manage your finances?",
    "What are your financial goals, and how do you plan to achieve them?",
    "Are you saving enough for emergencies?",
    "How much debt do you currently have, and what steps are you taking to pay it off?",
    "What investments are you making to grow your wealth?",
    "Have you diversified your investment portfolio to manage risk?",
    "Do you understand the impact of inflation on your savings?",
    "Are you regularly contributing to a retirement account?",
    "What steps are you taking to improve your financial literacy?",
    "Do you have a plan to increase your income?",
    "How do you differentiate between needs and wants when making financial decisions?",
    "What are some of the potential risks and rewards of your investment strategies?",
    "Have you reviewed your insurance coverage to ensure adequate protection?",
    "What strategies do you use to avoid impulsive spending?",
    "Are you educating your children about money and financial responsibility?",
    "How do you handle financial setbacks or unexpected expenses?",
    "What are your long-term financial aspirations, and how will you achieve them?",
    "Have you sought advice from financial experts to optimize your financial plans?",
    "How can you use your money to make a positive impact on your community or society?"
  ];
  
  const message = {
    ideas: financialIdeas,
    quotes: financialQuotes,
    questions: financialQuestions,
    selectIdeas () {
        const idea1 = message.ideas[randomSelector()];
        const idea2 = message.ideas[randomSelector()];
        const idea3 = message.ideas[randomSelector()];

        if (idea1 === idea2){
            return `Three Financial Ideas: \n 1. ${idea1}  \n 2. ${idea2} \n 3. ${idea3} \n`
        } else if (idea2 === idea3) {
            return `Three Financial Ideas: \n 1. ${idea1}  \n 2. ${idea2} \n 3. ${idea3} \n`
        } else if (idea1 === idea3) {
            return `Three Financial Ideas: \n 1. ${idea1}  \n 2. ${idea2} \n 3. ${idea3} \n`
        } else {
            return `Three Financial Ideas: \n 1. ${idea1}  \n 2. ${idea2} \n 3. ${idea3} \n`
        }
    
    },
    selectQuotes () {
        const quote1 = message.quotes[randomSelector()];
        const quote2 = message.quotes[randomSelector()];

        return `Three Quotes From Financial Experts: \n 1. ${quote1} \n 2. ${quote2} \n`
    },
    selectQuestions () {
        const question1 = message.questions[randomSelector()];
        return `Here is a thought-provoking question for you before you go: ${question1}`
    }, 
    email () {
        return ` \n 3-2-1 Financial Bulletin \n \n ${this.selectIdeas()} \n ${this.selectQuotes()} \n ${this.selectQuestions()} \n`
    }
  }

  
  console.log(message.email())