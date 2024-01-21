import {
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useForm } from "react-hook-form";
  
  const CreateNewDataScreen = ({ onAdd }) => {
    const form = useForm();

    const [input, setInput] = useState("");

    const handleSubmitAdd = (data) => {
      onAdd(data);
    };
  
    return (
      <View>

        <form onSubmit={form.handleSubmit(handleSubmitAdd)}>
        <FormControl>
            <FormLabel>Enter First Name</FormLabel>
            <Input
            {...form.register("firstName")}
            placeholder="Example: AJX"
            />
            <FormLabel>Enter Last Name</FormLabel>
            <Input
            {...form.register("lastName")}
            placeholder="Example: Ahmad"
            />
            <FormLabel>Enter Email</FormLabel>
            <Input
            {...form.register("email")}
            placeholder="Example: ajx@gmail.com"
            />
            <FormLabel>Enter Age</FormLabel>
            <Input {...form.register("age")} placeholder="Example: 19" />
            <FormLabel>Enter Address</FormLabel>
            <Input
            {...form.register("address")}
            placeholder="Example: Bhagalpur,Biahr"
            />
            <Button mt={4} colorScheme="teal" type="submit">
            Add
            </Button>
        </FormControl>
        </form>
    </View>
   
    );
  }

  export default CreateNewDataScreen;
  