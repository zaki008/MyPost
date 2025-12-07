import { View } from 'react-native';
import { Control } from 'react-hook-form';
import { RHFTextInput } from '../molecules';
import { Button } from '../atoms';
import { $spacingStyles } from '../../theme/spacing';

interface IProps {
  control: Control<any>;
  onSubmit: (params?: any) => void;
  loading: boolean;
}

const LoginForm = ({ control, onSubmit, loading }: IProps) => {
  return (
    <View>
      <RHFTextInput
        control={control}
        label="Email"
        name="email"
        placeholder="Input Your Email"
        rules={{
          required: 'Email wajib diisi', // harus diisi
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // regex validasi email
            message: 'Format email tidak valid', // pesan error jika regex gagal
          },
        }}
      />
      <RHFTextInput
        control={control}
        label="Password"
        name="password"
        placeholder="Input Your Password"
        secureTextEntry
        rules={{
          required: 'Password wajib diisi',
          minLength: { value: 6, message: 'Minimal Password 6 karakter' },
        }}
      />
      <Button
        stylesContainer={$spacingStyles.mtLg}
        title="Submit"
        onPress={onSubmit}
        disabled={loading}
        loading={loading}
      />
    </View>
  );
};

export default LoginForm;
