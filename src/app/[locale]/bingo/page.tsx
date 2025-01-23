'use client';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'next/dist/server/utils';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { BiLoaderAlt } from 'react-icons/bi';
import { PrimaryButton, SecondaryButton } from '@/app/[locale]/bingo/button';
import Cell from '@/app/[locale]/bingo/cell';

const allNumbers = new Array(25).fill(0).map((_, index) => index + 1);
const allInLine = new Array(5).fill(0).map((_, index) => index);
const Bingo = () => {
  const [init, setInit] = useState(false);
  const [complete, setComplete] = useState(false);
  const methods = useForm({
    defaultValues: {
      cells: new Array(25).fill({ value: undefined }) as { value: string }[],
      selected: new Array(25).fill({ value: false }) as {
        value: boolean;
      }[],
    },
  });
  const { register, handleSubmit, watch, setValue, reset, control, formState } =
    methods;
  register('cells', {
    validate: (cells) => {
      const missing = allNumbers.reduce(
        (missing, shouldExist) =>
          !cells.some((cell) => cell.value === shouldExist.toString())
            ? [...missing, shouldExist]
            : missing,
        [] as number[],
      );
      return missing.length === 0 || `缺少數字 ${missing.join(', ')}`;
    },
  });
  const selectedFields = useFieldArray({
    control,
    name: 'selected',
  });
  const { fields: selected } = selectedFields;
  const [size, setSize] = useState<number>(
    0.9 * Math.min(window.innerHeight, window.innerWidth),
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSize = useCallback(
    debounce(() => {
      const listener = () => {
        setSize(0.9 * Math.min(window.innerHeight, window.innerWidth));
      };
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }, 500),
    [setSize],
  );

  useEffect(() => updateSize(), [updateSize]);

  useEffect(() => {
    setTimeout(() => {
      setComplete(localStorage.getItem('complete') === 'true');
      const storedData = localStorage.getItem('bingo');
      if (storedData)
        reset(JSON.parse(storedData), { keepDefaultValues: true });

      setInit(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () =>
      watch((data) => localStorage.setItem('bingo', JSON.stringify(data)))
        .unsubscribe,
    [watch],
  );

  return (
    <form
      onSubmit={handleSubmit((data) => {
        localStorage.setItem('complete', 'true');
        setComplete(true);
      })}
      className="relative flex flex-col items-center gap-2 p-4"
    >
      <FormProvider {...methods}>
        <div className="relative">
          <div
            className={`
          grid grid-cols-5 grid-rows-5 border-4 border-teal-700
          [&>:not(:nth-child(5n))]:border-r-2 [&>:not(:nth-last-child(-n+5))]:border-b-2
          ${!init && 'opacity-50'}`}
            style={{ width: `${size}px`, height: `${size}px` }}
          >
            {allNumbers.map((_, index) => (
              <Cell
                index={index}
                complete={complete}
                selectedFields={selectedFields}
                key={index}
              />
            ))}
          </div>
          {allInLine.map(
            (row) =>
              allInLine.every((i) => selected[row * 5 + i].value) && (
                <div
                  key={row}
                  className="absolute h-1 w-full bg-lime-600"
                  style={{ top: `${(row + 0.5) * (size / 5)}px` }}
                />
              ),
          )}
          {allInLine.map(
            (col) =>
              allInLine.every((i) => selected[i * 5 + col].value) && (
                <div
                  key={col}
                  className="absolute top-0 h-full w-1 bg-lime-600"
                  style={{ left: `${(col + 0.5) * (size / 5)}px` }}
                />
              ),
          )}
          {allInLine.every((i) => selected[i * 5 + i].value) && (
            <div
              className="absolute top-1/2 h-1 rotate-45 bg-lime-600"
              style={{
                left: `-${size / 5}px`,
                width: `${Math.sqrt(2 * size * size)}px`,
              }}
            />
          )}
          {allInLine.every((i) => selected[i * 5 + 4 - i].value) && (
            <div
              className="absolute top-1/2 h-1 -rotate-45 bg-lime-600"
              style={{
                left: `-${size / 5}px`,
                width: `${Math.sqrt(2 * size * size)}px`,
              }}
            />
          )}
        </div>
        <span className="text-sm text-red-500">
          <ErrorMessage errors={formState.errors} name="cells.root" />
        </span>
        <div className="flex w-full items-center justify-center gap-4">
          <PrimaryButton
            className={complete ? undefined : 'hidden'}
            onClick={() => {
              setValue('selected', new Array(25).fill({ value: false }));
              setComplete(false);
              localStorage.removeItem('complete');
            }}
          >
            再來一局
          </PrimaryButton>
          <PrimaryButton
            disabled={!init}
            className={complete ? 'hidden' : undefined}
            type="submit"
          >
            完成填寫
          </PrimaryButton>
          <SecondaryButton
            disabled={!init}
            className={complete ? 'hidden' : undefined}
            onClick={() => {
              reset();
              localStorage.removeItem('bingo');
            }}
          >
            重新填寫
          </SecondaryButton>
        </div>
        {!init && (
          <BiLoaderAlt className="absolute bottom-0 left-0 right-0 top-0 m-auto h-16 w-16 animate-spin" />
        )}
      </FormProvider>
    </form>
  );
};

export default Bingo;
