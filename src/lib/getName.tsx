import { Control, Path } from "react-hook-form";

type GetTypeFromControl<T> = T extends Control<infer R, infer L> ? R : never;

type UseGetFormNameReturnType<T> = {
  name: (arg: T) => T;
};

export const getName = <T, U extends GetTypeFromControl<T>>({
  control,
}: {
  control: T;
}): UseGetFormNameReturnType<Path<U>> => {
  return {
    name: (identity) => identity,
  };
};
