import { StudentData } from "../../interfaces/studentaData";

export interface TableProps {
  data: StudentData[];
  onPrevPage: () => void;
  onNextPage: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}