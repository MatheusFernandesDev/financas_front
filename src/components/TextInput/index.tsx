import React, { useState, useEffect } from "react";

import { Container, Input, Label } from "./styles";

const TextInput = ({
    // name_field,
    // errors,
    // required,
    // value,
    // param,
}) => {
	// name_field = name_field || "";
    // useEffect(() => {
	// 	if (errors) {
	// 		setError(errors.find((err) => err.param === param));
	// 	}
	// }, [errors, param]);

    return (
        <Container>
            <Label 
                // errors={errors}
            >
                {/* { name_field } */}
            </Label>
            <Input 
				// errors={errors}
				// autoComplete="new-password"
				// onFocus={() => setError(null)}
				// required={required}
                // value={value}
            />
        </Container>
    )
}

export default TextInput;