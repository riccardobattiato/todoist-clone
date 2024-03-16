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
  placeholderClassName,
  onInput,
}: InputAutogrowProps) => {
  const contentEditableRef = useRef<HTMLDivElement>(null);
  // Main div's after acts as placeholder text
  const appliedPlaceholderClassNames = useMemo(
    () =>
      placeholderClassName
        ?.split(" ")
        .map((className) => `after:${className}`)
        .join(" "),
    [placeholderClassName]
  );

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
            "input-name__input relative outline-none break-words",
            "after:absolute after:content-[attr(data-placeholder)] after:inset-0",
            inputClassName,
            appliedPlaceholderClassNames,
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
