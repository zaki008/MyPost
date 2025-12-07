import React from 'react';
import { TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { TextInput } from '../atoms';

interface RHFTextInputProps extends TextInputProps {
  control: Control<any>;
  name: string;
  rules?: object;
  label?: string;
  stylesTextInput?: TextInputProps['style'];
  stylesLabel?: TextInputProps['style'];
}

const RHFTextInput: React.FC<RHFTextInputProps> = ({
  control,
  name,
  rules,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => {
        return (
          <TextInput
            {...props}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            errors={errors[name]?.message as string | undefined}
          />
        );
      }}
    />
  );
};

export default RHFTextInput;
