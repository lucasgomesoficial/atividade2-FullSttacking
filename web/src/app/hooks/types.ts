export interface LoginInputs {
  email: string;
  password: string;
}

export interface FormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
}
