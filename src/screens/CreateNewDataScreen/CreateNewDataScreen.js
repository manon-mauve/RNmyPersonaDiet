
  import React, { useState } from "react";
  import { useForm } from "react-hook-form";
  
  /*const CreateNewDataScreen = ({ onAdd }) => {
    const form = useForm();

    const [input, setInput] = useState("");

    const handleSubmitAdd = (data) => {
      onAdd(data);
    };
  
    return (
      <View>

        <form onSubmit={form.handleSubmit(handleSubmitAdd)}>
        <FormControl>
            <Input
            {...form.register("date")}
            placeholder="Date"
            />
     
            <Input
            {...form.register("time")}
            placeholder="Heure"
            />
   
            <Input
            {...form.register("food")}
            placeholder="Aliment"
            />

            <Input 
            {...form.register("quantity")} 
            placeholder="Quantité" />

            <Input
            {...form.register("weight")}
            placeholder="Poids"
            />

            <Button mt={4} colorScheme="teal" type="submit">
            Ajouter
            </Button>
        </FormControl>
        </form>
    </View>
   
    );
  }

  export default CreateNewDataScreen;
  */