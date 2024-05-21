import { useRealm } from "@realm/react";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Movie } from "../models/Movie";
import { Controller, useForm } from "react-hook-form";
import { createMovieSchema } from "../schemas/movie.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextInput from "../components/Inputs/CustomTextInput";
import useMoviesStore from "../store/useMovies";
import { useNavigation } from "@react-navigation/native";

const CreateMovieView = () => {
  const navigate = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Movie, "_id | createdAt">>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(createMovieSchema),
  });
  const realm = useRealm();
  const { addMovie } = useMoviesStore();

  const onSubmit = (values: Omit<Movie, "_id | createdAt">) => {
    console.log(values);
    realm.write(() => {
      const demo = realm.create(Movie, {
        title: values.title,
        description: values.description,
      });
      addMovie(demo);
      console.log(demo);
      navigate.navigate("ListMovies");
    });
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            placeholder="title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          ></CustomTextInput>
        )}
        name="title"
      />
      {errors.title && <Text>{errors.title.message}</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      <Button title="Create Movie" onPress={handleSubmit(onSubmit)} />

      <Button
        title="error"
        onPress={() => {
          console.log(formState);
        }}
      ></Button>
    </View>
  );
};

export default CreateMovieView;
