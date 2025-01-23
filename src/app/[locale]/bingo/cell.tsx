import React from 'react';
import {
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
} from 'react-hook-form';

const Cell: React.FC<{
  index: number;
  complete: boolean;
  selectedFields: UseFieldArrayReturn<
    {
      cells: { value: string }[];
      selected: { value: boolean }[];
    },
    'selected',
    'id'
  >;
}> = (props) => {
  const { control, formState, register } = useFormContext<{
    cells: { value: string }[];
    selected: { value: boolean }[];
  }>();
  const { fields } = useFieldArray({
    control,
    name: 'cells',
  });
  return (
    <div
      className={`
        relative h-full w-full border-teal-700 text-4xl
        ${props.complete && (props.selectedFields.fields[props.index].value ? 'bg-amber-200 hover:bg-amber-300' : 'hover:bg-amber-100')}
      `}
    >
      <input
        type="number"
        disabled={props.complete}
        className={`
          h-full w-full text-center focus-visible:outline-none
          ${formState.errors.cells?.[props.index] ? 'bg-red-100' : 'bg-transparent'}
        `}
        key={fields[props.index].id}
        {...register(`cells.${props.index}.value`, {
          required: '請輸入數字',
          min: 1,
          max: 25,
          validate: (value, values) =>
            values.cells.reduce(
              (count, curr) =>
                count + (curr.value === value.toString() ? 1 : 0),
              0,
            ) === 1 || '數字重複',
        })}
      />
      {props.complete && (
        <div
          className={`absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center`}
          onClick={() =>
            props.selectedFields.update(props.index, {
              value: !props.selectedFields.fields[props.index].value,
            })
          }
        >
          {fields[props.index].value}
        </div>
      )}
    </div>
  );
};

export default Cell;
