import { useState } from "react";
import { useInputModal, useSuccessModal } from "../stores/modalsStore";

const EmailInput = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const closeInputModal = useInputModal((state) => state.closeModal);
  const openSuccessModal = useSuccessModal((state) => state.openModal);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(event.target.value)) setIsValid(true);
    else setIsValid(false);
  };

  const handleClick = () => {
    if (!isValid) return;
    closeInputModal();
    openSuccessModal();
  };

  return (
    <div className="grid grid-cols-2 place-content-center items-center gap-x-4 gap-y-2 border-t border-DarkGray/50 p-5 text-center md:grid-cols-5 md:px-8">
      <label
        htmlFor="email"
        className="col-span-2 font-medium md:col-span-2 md:justify-self-start md:text-base"
      >
        Enter your Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="username@example.com"
        value={email}
        onChange={handleInputChange}
        className={`my-4 rounded-full border px-4 py-2.5 text-DarkGray focus:outline-none focus:ring-1 md:col-span-2 ${email && !isValid ? "border-red-500 text-pink-600 focus:border-red-500 focus:ring-red-500" : "border-DarkGray/50 focus:border-ModerateCyan focus:ring-ModerateCyan"}`}
      />
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-full bg-ModerateCyan py-3 font-medium text-white hover:bg-DarkCyan"
      >
        Continue
      </button>
    </div>
  );
};

export default EmailInput;
