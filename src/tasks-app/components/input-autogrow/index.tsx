import clsx from "clsx";
import {
  useCallback,
  type FormEventHandler,
  useMemo,
  useRef,
  useEffect,
} from "react";

export interface InputAutogrowProps {
  value?: string;
  placeholder?: string;
  onInput?: (value: string) => void;
  inputClassName?: string;
  placeholderClassName?: string;
}

const InputAutogrow = ({
  value,
  placeholder,
  inputClassName,
  onInput,
}: InputAutogrowProps) => {
  const contentEditableRef = useRef<HTMLDivElement>(null);

  const handleInput = useCallback<FormEventHandler<HTMLDivElement>>(
    (e) => {
      onInput?.(e.currentTarget.textContent || "");
    },
    [onInput]
  );

  /**
   * Reacting to external value modifications
   * The only case where DOM's textContent !== value is when the latter
   * has been changed from outside
   */
  useEffect(() => {
    if (
      contentEditableRef.current &&
      contentEditableRef.current.textContent !== value
    )
      contentEditableRef.current.textContent = value || null;
  }, [value]);

  return (
    <div className="input-name">
      <div
        ref={contentEditableRef}
        className={clsx(
          [
            "input-name__input relative outline-none cursor-text break-words",
            "after:absolute after:content-[attr(data-placeholder)] after:inset-0 after:text-zinc-400",
            inputClassName,
          ],
          {
            "after:hidden": !!value,
          }
        )}
        data-placeholder={placeholder}
        role="textbox"
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
      ></div>
    </div>
  );
};

export default InputAutogrow;
