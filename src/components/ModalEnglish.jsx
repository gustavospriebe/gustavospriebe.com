import emailjs from "@emailjs/browser";
import { Alert, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export default function ModalEnglish({ modal, setModal }) {
    const [toast, setToast] = useState("none");
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setToast("none");

        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_KEY,
                import.meta.env.VITE_TEMPLATE_KEY,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setToast("send");
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                    setToast("error");
                    setLoading(false);
                }
            );
    };

    return (
        <Modal
            show={modal}
            size="md"
            popup={true}
            dismissible={true}
            onClose={() => {
                setModal(!modal);
                form.current.reset();
                setToast("none");
            }}
            className="min-h-screen bg-gray-600"
        >
            <Modal.Header className="bg-gray-800" />
            <Modal.Body className="bg-gray-800 font-inter">
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-4"
                >
                    <h3 className="text-xl font-semibold text-whiter">
                        Submite a message
                    </h3>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="user_name"
                            value="Your Name"
                            class="text-md text-whiter"
                        />
                    </div>
                    <TextInput
                        id="user_name"
                        name="user_name"
                        required={true}
                        placeholder="Enter your name here"
                    />
                    <div className="mb-2 block">
                        <Label
                            htmlFor="user_email"
                            value="Your Email"
                            class="text-md text-whiter"
                        />
                    </div>
                    <TextInput
                        id="user_email"
                        name="user_email"
                        type="email"
                        required={true}
                        placeholder="Enter your email here"
                    />
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your Message"
                            class="text-md text-whiter"
                        />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                        placeholder="Write your message here"
                        required={true}
                    ></textarea>
                    <button className="button w-full" type="submit">
                        {loading === true ? (
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="mr-3 inline h-6 w-6 animate-spin text-white"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                />
                            </svg>
                        ) : (
                            "Send your message"
                        )}
                    </button>
                </form>
            </Modal.Body>
            {toast === "send" && (
                <Alert color="success" rounded>
                    <p>
                        <span className="font-medium">Sucess! </span>
                        Your message was sent.
                    </p>
                </Alert>
            )}
            {toast === "error" && (
                <Alert color="failure" rounded>
                    <p>
                        <span className="font-medium">Error! </span>
                        Your message was not sent, try again.
                    </p>
                </Alert>
            )}
        </Modal>
    );
}
