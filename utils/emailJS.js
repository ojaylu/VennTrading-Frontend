import emailjs from "@emailjs/browser";

export function sendEmail(fields) {
    emailjs.send("ss200600090", "template_86f7a2i", fields, "ufAYUeYeDM8dmz8Se");
}