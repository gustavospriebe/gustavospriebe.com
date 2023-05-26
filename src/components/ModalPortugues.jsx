import emailjs from "@emailjs/browser";
import { Label, Modal, TextInput, Alert } from "flowbite-react";
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
                    <h3 className="text-xl font-semibold text-whiter ">
                        Envie uma mensagem
                    </h3>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="user_name"
                            value="Nome"
                            class="text-md text-whiter"
                        />
                    </div>
                    <TextInput
                        id="user_name"
                        name="user_name"
                        required={true}
                        placeholder="Insira seu nome"
                    />
                    <div className="mb-2 block">
                        <Label
                            htmlFor="user_email"
                            value="Email"
                            class="text-md text-whiter"
                        />
                    </div>
                    <TextInput
                        id="user_email"
                        name="user_email"
                        type="email"
                        required={true}
                        placeholder="Insira seu email"
                    />
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Mensagem"
                            class="text-md text-whiter"
                        />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                        placeholder="Escreva sua mensagem"
                        required={true}
                    ></textarea>
                    <button
                        className="block h-12 w-full rounded-lg bg-header3 font-semibold text-whiter transition hover:border-header3 hover:bg-transparent hover:text-header3 hover:outline"
                        type="submit"
                    >
                        Envie sua mensagem
                    </button>
                </form>
            </Modal.Body>      
            {toast === 'send' && <Alert color="success" rounded>
                    <p>
                        <span className="font-medium">
                            Sucesso! {' '}
                        </span>
                        Sua mensagem foi enviada.
                    </p>
            </Alert>}
            {toast === 'error' && <Alert color="failure" rounded>
                    <p>
                        <span className="font-medium">
                            Sucesso! {' '}
                        </span>
                        Sua mensagem foi enviada.
                    </p>
            </Alert>}
        </Modal>
    );
}
