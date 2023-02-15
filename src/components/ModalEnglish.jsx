import { Button, Modal, Label, TextInput } from "flowbite-react";

export default function ModalEnglish({ modal, setModal }) {
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
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
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
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                            placeholder="Write your message here"
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <Button
                            class="py-1 px-3 text-white rounded bg-indigo-700 hover:bg-transparent hover:border-indigo-700 hover:outline hover:text-indigo-700 hover:text-md
                        "
                        >
                            Submit your message
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
