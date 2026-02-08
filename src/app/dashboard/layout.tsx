import type { ReactNode } from 'react';
import {
  Home,
  BookOpen,
  Bot,
  Briefcase,
  User,
  Users,
  Settings,
  LogOut,
  GraduationCap,
  ShieldCheck,
  FileCheck,
  CreditCard,
  Calendar,
  Newspaper,
  PanelLeft,
} from 'lucide-react';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Logo } from '@/components/common/Logo';
import { UserNav } from './components/UserNav';
import { RoleSwitcher } from './components/RoleSwitcher';
import type { Role } from '@/types';

type NavLink = {
  href: string;
  label: string;
  icon: React.ElementType;
  roles: Role[];
};

const navLinks: NavLink[] = [
  // Student
  { href: '/dashboard', label: 'Dashboard', icon: Home, roles: ['student'] },
  { href: '/dashboard/my-courses', label: 'My Courses', icon: BookOpen, roles: ['student'] },
  { href: '/dashboard/ai-recommendations', label: 'AI Recommendations', icon: Bot, roles: ['student'] },
  { href: '/dashboard/interviews', label: 'Interviews', icon: Briefcase, roles: ['student'] },
  { href: '/dashboard/profile', label: 'Profile', icon: User, roles: ['student'] },
  // Teacher
  { href: '/dashboard', label: 'Dashboard', icon: Home, roles: ['teacher'] },
  { href: '/dashboard/assigned-students', label: 'My Students', icon: Users, roles: ['teacher'] },
  { href: '/dashboard/assigned-courses', label: 'My Courses', icon: BookOpen, roles: ['teacher'] },
  // Admin
  { href: '/dashboard', label: 'Dashboard', icon: Home, roles: ['admin'] },
  { href: '/dashboard/users', label: 'User Management', icon: Users, roles: ['admin'] },
  { href: '/dashboard/courses', label: 'Course Management', icon: BookOpen, roles: ['admin'] },
  { href: '/dashboard/blogs', label: 'Blog Management', icon: Newspaper, roles: ['admin'] },
  { href: '/dashboard/events', label: 'Event Management', icon: Calendar, roles: ['admin'] },
  { href: '/dashboard/payments', label: 'Payment Management', icon: CreditCard, roles: ['admin'] },
  { href: '/dashboard/enrollments', label: 'Enrollments', icon: FileCheck, roles: ['admin'] },
  { href: '/dashboard/consents', label: 'Consents', icon: ShieldCheck, roles: ['admin'] },
];

function SidebarNav({ role }: { role: Role }) {
  const links = navLinks.filter(link => link.roles.includes(role));

  return (
    <nav className="flex flex-col items-start gap-2 px-2 text-sm font-medium lg:px-4">
      {links.map((link) => (
        <Link
          key={`${role}-${link.href}`}
          href={`${link.href}?role=${role}`}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary w-full"
        >
          <link.icon className="h-4 w-4" />
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default function DashboardLayout({
  children,
  searchParams,
}: {
  children: ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const currentRole = (searchParams?.role as Role) || 'student';

  return (
    <TooltipProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Logo />
            </div>
            <div className="flex-1">
              <SidebarNav role={currentRole} />
            </div>
            <div className="mt-auto p-4">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 mb-4">
                     <Logo />
                  </div>
                  <SidebarNav role={currentRole} />
                </nav>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <RoleSwitcher currentRole={currentRole} />
            </div>
            <UserNav />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-secondary/40">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
