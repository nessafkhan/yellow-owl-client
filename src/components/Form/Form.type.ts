import { StudentData } from "../../interfaces/studentData";

export interface FormProps {
  onSubmit: (values: Partial<StudentData>) => void;
  onCancel: () => void;
  isEditing: boolean;
  initialValues?: Partial<StudentData>;
}