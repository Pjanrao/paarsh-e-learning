import Image from 'next/image';
import Link from 'next/link';
import { Star, Users } from 'lucide-react';
import type { Course } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover"
            data-ai-hint={course.imageHint}
          />
        </div>
      </CardHeader>

      {/* 🔹 Reduce padding on mobile */}
      <CardContent className="p-4 sm:p-6 flex-grow">
        {/* 🔹 Course title: smaller on mobile */}
        <CardTitle
          className="
            font-headline
            text-base sm:text-xl
            leading-snug
            line-clamp-2
            min-h-[2.6rem] sm:min-h-[3.2rem]
          "
        >
          {course.title}
        </CardTitle>

        {/* 🔹 Rating + Price row */}
        <div className="mt-3 flex items-center justify-between gap-3 text-sm">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
            <span className="font-semibold">{course.rating}</span>
            <span className="text-muted-foreground">
              ({course.reviews})
            </span>
          </div>

          {/* 🔹 Price: smaller on mobile */}
          <div className="font-bold text-sm sm:text-lg text-primary">
            ₹{course.price}
          </div>
        </div>
      </CardContent>

      {/* 🔹 Reduce footer padding on mobile */}
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/courses/${course.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
