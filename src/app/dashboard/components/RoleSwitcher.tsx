'use client';

import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Role } from '@/types';

export function RoleSwitcher({ currentRole }: { currentRole: Role }) {
  const router = useRouter();

  const onRoleChange = (role: Role) => {
    router.push(`/dashboard?role=${role}`);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
        Viewing as:
      </span>
      <Select onValueChange={onRoleChange} defaultValue={currentRole}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="student">Student</SelectItem>
          <SelectItem value="teacher">Teacher</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
