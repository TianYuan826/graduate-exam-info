import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

type DropdownCheckboxProps = {
  value: string[];
  onChange: (value: string[]) => void;
  options: { value: string; label: string }[];
  placeholder: string;
};

export function DropdownCheckbox({
  value,
  onChange,
  options,
  placeholder,
}: DropdownCheckboxProps) {
  const handleSelectChange = (val: string) => {
    onChange(
      value.includes(val)
        ? value.filter((item) => item !== val)
        : [...value, val]
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[180px] flex justify-between">
          {value.length > 0
            ? value
                .map(
                  (val) => options.find((option) => option.value === val)?.label
                )
                .join(", ")
            : placeholder}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px]">
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center justify-between cursor-pointer text-sm"
            >
              <span>{option.label}</span>
              <Checkbox
                checked={value.includes(option.value)}
                onCheckedChange={() => handleSelectChange(option.value)}
              />
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
