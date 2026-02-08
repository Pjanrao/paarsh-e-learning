'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bot, Loader2, Lightbulb } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getRecommendationsAction } from './actions';
import { courses as allCourses } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  learningHistory: z.string().min(10, {
    message: 'Please describe your learning history in at least 10 characters.',
  }),
  goals: z.string().min(10, {
    message: 'Please describe your goals in at least 10 characters.',
  }),
});

type FormData = z.infer<typeof formSchema>;

export function PersonalizedRecommendationsForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string[] | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learningHistory: '',
      goals: '',
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setRecommendations(null);

    const result = await getRecommendationsAction({
      studentId: 'student-123', // This would be dynamic in a real app
      ...values,
    });

    setIsLoading(false);

    if (result.success && result.data) {
      setRecommendations(result.data.courseRecommendations);
      toast({
        title: 'Recommendations Ready!',
        description: 'We have generated your personalized course list.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Something went wrong.',
      });
    }
  }

  const recommendedCourses = recommendations
    ? allCourses.filter(course => recommendations.includes(course.id))
    : [];

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="learningHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Learning History</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'Completed a course on basic JavaScript, familiar with HTML/CSS. Have some experience with Python for data analysis.'"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Career Goals</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'I want to become a full-stack developer specializing in the MERN stack. I am aiming for a job at a mid-sized tech company.'"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Bot className="mr-2 h-4 w-4" />
                Get Recommendations
              </>
            )}
          </Button>
        </form>
      </Form>

      {recommendations && (
        <div className="mt-12">
            <h3 className="text-2xl font-headline font-bold mb-4">Your Recommended Courses</h3>
            {recommendedCourses.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {recommendedCourses.map(course => (
                     <Card key={course.id}>
                         <CardHeader>
                             <CardTitle>{course.title}</CardTitle>
                         </CardHeader>
                         <CardContent>
                             <p className="text-sm text-muted-foreground">{course.description}</p>
                         </CardContent>
                     </Card>
                 ))}
             </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center p-8 border-dashed border-2 rounded-lg">
                    <Lightbulb className="w-12 h-12 text-muted-foreground mb-4" />
                    <h4 className="font-semibold">No Specific Recommendations Found</h4>
                    <p className="text-muted-foreground mt-2">Based on your input, you have a wide range of options! Try exploring our full course catalog.</p>
                </div>
            )}
        </div>
      )}
    </>
  );
}
