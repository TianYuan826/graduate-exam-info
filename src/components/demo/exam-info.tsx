import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const examData = [
  {
    type: "国立",
    university: "东京大学",
    faculty: "工学研究科",
    major: "计算机科学",
    region: "东京",
    applicationDate: "2024-06-01",
    examDate: "2024-08-15",
    examContent: "笔试 + 面试",
  },
  {
    type: "私立",
    university: "早稻田大学",
    faculty: "信息科学研究科",
    major: "人工智能",
    region: "东京",
    applicationDate: "2024-05-15",
    examDate: "2024-07-20",
    examContent: "面试",
  },
];

export default function ExamInfoContent() {
  return (
    <Card className="rounded-lg border-none mt-4">
      <CardContent className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>大学名</TableHead>
              <TableHead>研究科</TableHead>
              <TableHead>专攻</TableHead>
              <TableHead>地区</TableHead>
              <TableHead>出愿时间</TableHead>
              <TableHead>考试时间</TableHead>
              <TableHead>考试内容</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {examData.map((exam, index) => (
              <TableRow key={index}>
                <TableCell>{exam.university}</TableCell>
                <TableCell>{exam.faculty}</TableCell>
                <TableCell>{exam.major}</TableCell>
                <TableCell>{exam.region}</TableCell>
                <TableCell>{exam.applicationDate}</TableCell>
                <TableCell>{exam.examDate}</TableCell>
                <TableCell>{exam.examContent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
