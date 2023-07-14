//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


let ai_response;

let chat = [
{role: "user" , content: "hi"},
{role: "assistant" , content: "hello how are u Today, how can i help u"}
];

async function userChatAdd(feeling , question)
{chat.push({role: "user", content: "My happiness from 0-10: " + feeling + "my input is:" + question});}

async function userAssistantAdd(res)
{chat.push({role: "assistant", content: res});}

async function openai_test()
{
console.log("Hello");
let url = "https://api.openai.com/v1/chat/completions";

let part1 = "sk";
let part2 = "-LLDtZIQbt300rIyi";
let part3 = "Bm5LT3BlbkFJwntYQJzMl3xlkgLt63pM";
let apikey = part1 + part2 + part3;


let data = {
    model: "gpt-3.5-turbo",
    messages: chat
};

try {
    const response = await fetch(url , {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Authorization : `Bearer ${apikey}`
    },
    body: JSON.stringify(data)
    })
    if (response.ok) {
        const responseData = await response.json();
        const message = responseData.choices[0].message.content;

        userAssistantAdd(message);

        const speech = new SpeechSynthesisUtterance(message);
        speechSynthesis.speak(speech);
        return message;

    }
} catch (error) {
console.log("oh no error: "+error);
}

}