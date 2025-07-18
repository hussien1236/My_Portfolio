import React from "react";
import SectionTitle from "../components/SectionTitle"
import { toast } from 'react-toastify';
import { Loader2, Mail, Phone, MapPin } from "lucide-react"
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget; 
    const formData = new FormData(form);

    formData.append("access_key", "3f15e2a9-c18d-439b-af62-deddd87018a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast(result);
      form.reset();
    } else {
      toast("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact">
      <div className="flex flex-col items-center md:mt-40 mt-20">
        <SectionTitle title={"Get in touch"}/>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 w-full justify-between md:mt-20 mt-10 gap-10">
           <div className="flex flex-col gap-5">
            <h1 className="gradient-text font-bold">Let's talk</h1>
            <p className="text-md text-gray-300">I'm a Fullstack Web Developer with a Bachelor's degree in Computer Science, specializing in building modern, responsive web applications using React.js and ASP.NET Core. I enjoy creating efficient, scalable solutions and continuously exploring new technologies. I'm excited to contribute to meaningful projects and grow professionally in the world of web development.
            <br/><span className="font-bold">Feel free to reach out — I'm always open to new opportunities and collaborations.
            </span></p>
            <div className="flex flex-col gap-5 mt-2">
               <div className="flex items-center gap-2"><Mail className="text-gray-300" /><span>hussienhamdan06@gmail.com</span></div>
               <div className="flex items-center gap-2"><Phone className="text-gray-300" /><span>+961 81 707 397</span></div>
               <div className="flex items-center gap-2"><MapPin className="text-gray-300" /><span>Beirut, Lebanon</span></div>
            </div>
           </div>
           <form onSubmit={onSubmit} className="flex flex-col w-full gap-5">
            <div className="flex flex-col gap-2">
           <label htmlFor="Name" className=" font-semibold">Your Name</label>
           <input type="text" name="Name" placeholder="Enter your name" className="contact_input" required/>
           </div>
           <div className="flex flex-col gap-2">
           <label htmlFor="Email" className=" font-semibold">Your Email</label>
           <input type="Email" name="Email" placeholder="Enter your email" className="contact_input" required/>
           </div>
           <div className="flex flex-col gap-2">
           <label htmlFor="message" className=" font-semibold">Write your message here</label>
           <textarea name="message" rows={8} placeholder="Enter your message" className="contact_input" required/>
           </div>
           <button type="submit" className="primary_button w-2/6 min-w-fit whitespace-nowrap" disabled={result === "Sending...."}>
             {result === "Sending...." ? (
               <span className="flex items-center justify-center">
                 <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
               </span>
             ) : (
               "Submit now"
             )}
           </button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Contact