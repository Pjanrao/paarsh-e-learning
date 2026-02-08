'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CourseCard } from "@/components/CourseCard";
import type { Course } from "@/types";

const ALLOWED_CATEGORIES = [
  "Data Analytics",
  "Data Science",
  "Ethical Hacking",
  "Testing",
  "UI/UX",
  "Game Development",
  "Artificial Intelligence",
  "Marketing",
  "Cyber Security",
  "Backend",
  "Programming",
  "Mobile Development",
  "Full Stack",
  "AI & Machine Learning",
];

const AUTO_TAB_DELAY = 4000; // 4s
const USER_PAUSE_TIME = 5 * 60 * 1000; // 5 minutes

export default function AutoCourseTabs({ courses }: { courses: Course[] }) {
  /* ================= CATEGORIES ================= */
  const categories = useMemo(() => {
    return ALLOWED_CATEGORIES.filter((category) =>
      courses.some(
        (course) => course.category?.trim() === category
      )
    );
  }, [courses]);

  const [activeTab, setActiveTab] = useState<string>("");
  const pauseUntilRef = useRef<number>(0);

  /* ================= INITIAL TAB ================= */
  useEffect(() => {
    if (categories.length && !activeTab) {
      setActiveTab(categories[0]);
    }
  }, [categories, activeTab]);

  /* ================= AUTO TAB ROTATION ================= */
  useEffect(() => {
    if (!categories.length) return;

    const interval = setInterval(() => {
      // ⛔ pause auto switching if user recently interacted
      if (Date.now() < pauseUntilRef.current) return;

      setActiveTab((prev) => {
        const index = categories.indexOf(prev);
        return categories[(index + 1) % categories.length];
      });
    }, AUTO_TAB_DELAY);

    return () => clearInterval(interval);
  }, [categories]);

  /* ================= USER TAB CHANGE ================= */
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    pauseUntilRef.current = Date.now() + USER_PAUSE_TIME; // pause for 5 min
  };

  /* ================= FILTER COURSES ================= */
  const filteredCourses = courses.filter(
    (course) => course.category?.trim() === activeTab
  );

  if (!categories.length) return null;

  const showArrows = filteredCourses.length > 3;

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="mt-12"
    >
      {/* ================= TABS ================= */}
      <TabsList className="mx-auto flex w-fit flex-wrap gap-3 bg-transparent p-1">
        {categories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="p-0 bg-transparent rounded-lg overflow-hidden shadow-none"
          >
            <span
              className={`
                block px-6 py-2 rounded-lg text-sm font-medium capitalize transition-all
                ${
                  activeTab === category
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-background text-foreground border border-border hover:bg-muted"
                }
              `}
            >
              {category}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* ================= SLIDER ================= */}
      <TabsContent value={activeTab} className="mt-12">
        <Carousel
          opts={{ align: "start", loop: showArrows }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {filteredCourses.map((course) => (
              <CarouselItem
                key={course.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3 mt-20"
              >
                <CourseCard course={course} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ✅ Show arrows only if needed */}
          {showArrows && (
            <>
              <CarouselPrevious className="bg-background hover:bg-secondary hover:text-secondary-foreground" />
              <CarouselNext className="bg-background hover:bg-secondary hover:text-secondary-foreground" />
            </>
          )}
        </Carousel>
      </TabsContent>
    </Tabs>
  );
}
