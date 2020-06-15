import React from "react";
import { render, screen ,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText("First Name:");
    const lastName = screen.getByLabelText("Last Name:");
    const address = screen.getByLabelText("Address:");
    const city = screen.getByLabelText("City:");
    const state = screen.getByLabelText("State:");
    const zip = screen.getByLabelText("Zip:");


    fireEvent.change(firstName, { target: { value: "Blake"} });
    fireEvent.change(lastName, { target: { value: "Davis"} });
    fireEvent.change(address, { target: { value: "123 Street"} });
    fireEvent.change(city, { target: { value: "Cheeseburger Town"} });
    fireEvent.change(state, { target: { value: "OH"} });
    fireEvent.change(zip, { target: { value: "45678"} });


    const submitButton = screen.getByTestId("checkout-button");
    fireEvent.click(submitButton);

    const successScreen = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    const newFirstName = screen.getByText(/blake/i);
    const newLastName = screen.getByText(/davis/i);
    const newAddress = screen.getByText(/123 street/i);
    const newCity = screen.getByText(/cheeseburger town/i);
    const newState = screen.getByText(/oh/i);
    const newZip = screen.getByText(/45678/i);


    expect(successScreen).toBeInTheDocument();
    expect(newFirstName).toBeInTheDocument();
    expect(newLastName).toBeInTheDocument();
    expect(newAddress).toBeInTheDocument();
    expect(newCity).toBeInTheDocument();
    expect(newState).toBeInTheDocument();
    expect(newZip).toBeInTheDocument();

});
