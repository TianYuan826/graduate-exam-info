"use client";

import { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import ExamInfoContent from "@/components/demo/exam-info";
import { DropdownCheckbox } from "@/components/ui/dropdown-checkbox";
import { DropdownSelector } from "@/components/ui/dropdown-selector";

// 入試情報のページ
const UNIVERSITY_TYPES = [
  { value: "1", label: "国立大学" },
  { value: "2", label: "私立大学" },
  { value: "3", label: "公立大学" },
];

const FIELDS = [
  { value: "1", label: "情報学" },
  { value: "2", label: "機械学" },
  { value: "3", label: "電気学" },
  { value: "4", label: "環境学" },
  { value: "5", label: "生物学" },
  { value: "6", label: "経営工学" },
];

const AREAS = [
  { value: "1", label: "関東" },
  { value: "5", label: "関西" },
  { value: "4", label: "東北" },
  { value: "2", label: "北海道" },
  { value: "3", label: "九州" },
];

export default function ExamInfoPage() {
  const [selectedUniversityType, setSelectedUniversityType] = useState("1");
  const [selectedFiled, setSelectedFiled] = useState("1");
  const [selectedAreas, setSelectedAreas] = useState<string[]>(["1"]);

  return (
    <ContentLayout>
      <div className="flex gap-4">
        {/* 单选：选择大学类型（值会存入 localStorage） */}
        <DropdownSelector
          options={UNIVERSITY_TYPES}
          localStorageKey="selectedUniversityType" // 使用一个字符串作为键
          onSelect={setSelectedUniversityType}
        />

        {/* 单选：选择分野（值会存入 localStorage） */}
        <DropdownSelector
          options={FIELDS}
          localStorageKey="selectedFiled" // 使用另一个字符串作为键
          onSelect={setSelectedFiled}
        />

        {/* 多选：选择地区 */}
        <DropdownCheckbox
          value={selectedAreas}
          onChange={setSelectedAreas}
          options={AREAS}
          placeholder="エリアを選択する"
        />
      </div>
      {/* 内容区域 */}
      <ExamInfoContent />
    </ContentLayout>
  );
}
