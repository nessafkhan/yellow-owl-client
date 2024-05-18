import { StudentData } from "../../interfaces/studentData";

export interface TableProps {
  data: StudentData[];
  onPrevPage: () => void;
  onNextPage: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  onEdit?: () => void;
}