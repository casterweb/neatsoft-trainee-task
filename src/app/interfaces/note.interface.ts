export interface Note {
  id: string;
  note: string;
  categoryId: string;
  targetId: string;
  questionOfDayId: string;
  targetProgress: number;
  day: number;
  month: number;
  year: number;
  createdAt: string;
  isTask: true;
  isComplete: true;
  order: number;
  files: [
    {
      id: string;
      originalName: string;
    }
  ];
  tagIds: [string];
  checklist: [
    {
      id: string;
      text: string;
      isComplete: true;
    }
  ];
}
