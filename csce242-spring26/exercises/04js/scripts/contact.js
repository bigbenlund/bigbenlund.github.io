document.getElementById('contact-form').onsubmit = async(e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    formData.append("access_key", "d6f289ef-f51d-4154-9d9f-e581b5d97306");
    const result = document.getElementById("result");
    result.innerHTML = "sending...";

 try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Message Sent";
            form.reset();
        } else {
            result.innerHTML = ("Error: " + data.message);
        }
    } catch (error) {
        result.innerHTML = "sorry, something went wrong";
    } finally {
        result.innerHTML = "";
    }
};

