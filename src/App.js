import { useState } from "react";
import { Formik, Form } from "formik";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Section from "./components/Section";
import Balance from "./components/Balance";
import * as Yup from "yup";
import NavBrand from "./components/NavBrand";
import H1 from './components/H1'

const compoundInterest = (deposit, contribution, year, rate) => {
  let total = deposit;
  for (let i = 0; i < year; i++) {
    total = (total + contribution) * (rate + 1);
  }

  return Math.round(total);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const [balance, setBalance] = useState("");
  const handleSubmit = ({ deposit, contribution, year, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(year),
      Number(rate)
    );
    setBalance(formatter.format(val));
  };

  return (
    <>
      <NavBrand>
        <H1>Juan Bianco</H1>
      </NavBrand>
      <Container>
        <Section>
          <h1>Interes Compuesto</h1>
          <Formik
            initialValues={{
              deposit: "",
              contribution: "",
              year: "",
              rate: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              deposit: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un numero"),
              contribution: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un numero"),
              year: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un numero"),
              rate: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un numero")
                .min(0, "Debe ser mayor o igual a 0")
                .max(1, "Debe ser menor a 1"),
            })}
          >
            <Form>
              <Input name="deposit" label="Deposito inicial" />
              <Input name="contribution" label="Contribucion anual" />
              <Input name="year" label="Año" />
              <Input name="rate" label="Interes" />
              <Button type="submit" className="button">Calcular</Button>
            </Form>
          </Formik>
          {balance !== "" ? <Balance>Balance final: {balance}</Balance> : null}
        </Section>
      </Container>
    </>
  );
}

export default App;
