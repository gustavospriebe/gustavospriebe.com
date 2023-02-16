import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ModalEnglish({ modal, setModal }) {
    const [toast, setToast] = useState("none");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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
                },
                (error) => {
                    console.log(error.text);
                    setToast("error");
                }
            );
    };

    return (
        <Modal
            show={modal}
            size="md"
            popup={true}
            onClose={() => setModal(!modal)}
            className="bg-gray-600"
        >
            <Modal.Header className="bg-gray-800" />
            <Modal.Body className="bg-gray-800">
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
                >
                    <h3 className="text-xl font-medium text-white">
                        Submite a message
                    </h3>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="user_name"
                                value="Your Name"
                                class="text-md text-white"
                            />
                        </div>
                        <TextInput
                            id="user_name"
                            name="user_name"
                            required={true}
                            placeholder="Enter your name here"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="user_email"
                                value="Your Email"
                                class="text-md text-white"
                            />
                        </div>
                        <TextInput
                            id="user_email"
                            name="user_email"
                            type="email"
                            required={true}
                            placeholder="Enter your email here"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your Message"
                                class="text-md text-white"
                            >
                                Your message
                            </Label>
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                            placeholder="Write your message here"
                            required={true}
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <Button
                            class="py-1 px-3 text-white rounded bg-indigo-700 hover:bg-transparent hover:border-indigo-700 hover:outline hover:text-indigo-700 hover:text-md
                        "
                            type="submit"
                        >
                            Submit your message
                        </Button>
                    </div>
                </form>
            </Modal.Body>
            {toast === "send" && (
                <div
                    id="toast-simple"
                    class="flex items-center mt-0.5 w-full p-4 space-x-4 bg-gray-800 text-white divide-x divide-gray-200 shadow"
                    role="alert"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-indigo-700 "
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paper-plane"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                        ></path>
                    </svg>
                    <div class="pl-4 text-sm font-normal">
                        Message sent successfully.
                    </div>
                </div>
            )}
            {toast === "error" && (
                <div
                    id="toast-simple"
                    class="flex items-center mt-0.5 w-full p-4 space-x-4 bg-gray-800 text-white divide-x divide-gray-200 shadow"
                    role="alert"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-indigo-700 "
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paper-plane"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                        ></path>
                    </svg>
                    <div class="pl-4 text-sm font-normal">
                        Message was not sent, try again.
                    </div>
                </div>
            )}
        </Modal>
    );
}
