import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { type AppDispatch, type RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useSessionsDispatch: DispatchFunction = useDispatch;

export const useSessionsSelector: TypedUseSelectorHook<RootState> = useSelector;
