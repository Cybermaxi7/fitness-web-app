import Button from "../components/Button";

export default function Contact() {
    const formSubmitHandler = async (event) => {
        event.preventDefault();
    
        // Your Formspree endpoint URL
        const formspreeEndpoint = 'https://formspree.io/f/meqyjqwr';
    
        const formData = new FormData(event.target);
    
        try {
          const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
            },
          });
    
          if (response.ok) {
            alert('Message sent successfully! We will get back to you soon.');
          } else {
            alert('Error sending message. Please try again later.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An unexpected error occurred. Please try again later.');
        }
      };
    return (
        <div className="container mx-auto mt-[4.7rem] text-stone-800 px-6 py-10 font-open">
            <div className="bg-white max-w-[50rem] h-full flex flex-col items-center rounded-lg shadow-md px-4 py-10 mx-auto">
                <div className="flex items-center flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className=" mb-8 text-center">
                        We'd love to hear from you! Reach out to us with any
                        questions, feedback, or inquiries.
                    </p>
                </div>
                <form className="w-full" onSubmit={formSubmitHandler}>
                    <div className="mb-4 w-full flex flex-col">
                        <label
                            className="block  text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Your Name
                        </label>
                        <input
                            className="shadow-sm appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block  text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Your Email
                        </label>
                        <input
                            className="shadow-sm appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="john.doe@example.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Your Message
                        </label>
                        <textarea
                            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="4"
                            name="body"
                            required
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>

                    <Button className="text-white" type="button">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
}
