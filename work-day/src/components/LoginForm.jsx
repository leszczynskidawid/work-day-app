import { useForm } from "react-hook-form";
import { CustomButton } from "./Button";
import Form from "./Form";
import { CustomTextField } from "./TexFields";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { errorHandler } from "../firebase/firebase-actions/errorhandler";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const methods = useForm({
    defaultValues: {
      cardNumber: "",
      password: "",
    },
  });

  const { login, loading, user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const card = methods.getValues().cardNumber;
      const password = methods.getValues().password;

      await login(card, password);
      showToast("Zalogowano pomyślnie!", "success");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      const errorMessage = errorHandler(error.message);
      showToast(errorMessage, "error");
      methods.reset();
    }
  };

  const cardNumberRules = {
    required: "Card number is required",
    maxLength: {
      value: 4,
      message: "Card number cannot exceed 4 characters",
    },
    minLength: {
      value: 3,
      message: "Card number must be at least 3 characters",
    },
  };

  return (
    <>
      <Form title={"Zaloguj sie "} onSubmit={onSubmit} methods={methods}>
        <CustomTextField
          name="cardNumber"
          label="Numer karty"
          control={methods.control}
          rules={cardNumberRules}
        />
        <CustomTextField
          name="password"
          label="Numer karty"
          control={methods.control}
        />
        <CustomButton text={"zaloguj"} type="submit" />
      </Form>
    </>
  );
};
export default LoginForm;
