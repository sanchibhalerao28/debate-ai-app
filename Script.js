async function generateArguments(){

let topic = document.getElementById("topic").value;

const response = await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{
role:"user",
content:`Give 5 arguments FOR and 5 arguments AGAINST the debate topic: ${topic}`
}
]
})
})

const data = await response.json();

let text = data.choices[0].message.content;

let parts = text.split("AGAINST");

document.getElementById("forArguments").innerText = parts[0];
document.getElementById("againstArguments").innerText = "AGAINST " + parts[1];

}
