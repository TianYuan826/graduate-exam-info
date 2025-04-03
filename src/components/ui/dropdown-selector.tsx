import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import { useEffect, useState } from "react";

type DropdownSelectProps = {
  options: { value: string; label: string }[];
  localStorageKey: string; // 用于存储选中的 key
  placeholder?: string;
  onSelect: (value: string) => void;
};

export function DropdownSelector({
  options,
  localStorageKey,
  placeholder = "请选择",
  onSelect,
}: DropdownSelectProps) {
  // 读取 localStorage 存储的值
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem(localStorageKey); // 获取本地存储的值
    if (storedValue && options.some((opt) => opt.value === storedValue)) {
      setSelected(storedValue); // 如果有存储的值且在选项中存在，则设置选中
    } else {
      setSelected(options[0]?.value || null); // 默认选择第一个
    }
  }, [options, localStorageKey]);

  const handleSelect = (value: string) => {
    setSelected(value);
    localStorage.setItem(localStorageKey, value); // 选中后存入 localStorage
    onSelect(value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[180px] flex justify-between">
          {options.find((o) => o.value === selected)?.label || placeholder}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px]">
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="flex items-center justify-between cursor-pointer text-sm"
            >
              <span>{option.label}</span>
              {selected === option.value && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
