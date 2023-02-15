import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ModalEnglish({ modal, setModal }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current);

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
                },
                (error) => {
                    console.log(error.text);
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
        </Modal>
    );
}
