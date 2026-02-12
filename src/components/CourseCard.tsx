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
          />
        </div>
      </CardHeader>

      {/* Content */}
<CardContent className="p-4 sm:p-6">
        
        {/* ✅ Title - Smaller on Mobile */}
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

        {/* Rating + Price */}
<div className="mt-3 sm:mt-4 flex items-center justify-between text-xs sm:text-sm">
          
          {/* Rating */}
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
            <span className="font-semibold">{course.rating}</span>
            <span className="text-muted-foreground">
              ({course.reviews})
            </span>
          </div>

          {/* ✅ Price - Smaller on Mobile + spacing */}
<div className="font-bold text-sm sm:text-lg text-primary">
            ₹{course.price}
          </div>
        </div>

      </CardContent>

      {/* Footer */}
<CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/courses/${course.slug}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>

    </Card>
  );
}
