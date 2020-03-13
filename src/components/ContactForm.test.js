import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('find first name label', () => {
    const { getByText } = render(<ContactForm />);
    getByText(/First Name/i)
});

test('adds new name into first name input', () => {
    const {getByLabelText} = render(<ContactForm />);

    const firstName = getByLabelText(/first name/i);

    expect(firstName).toBeInTheDocument();

    fireEvent.change(firstName, {
        target: {name: 'firstName', value: '123'}
    });
});