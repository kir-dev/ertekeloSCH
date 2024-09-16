'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  interesting: z.number().min(1).max(10),
  useful: z.number().min(1).max(10),
  difficult: z.number().min(1).max(10),
  anonymous: z.boolean(),
  comment: z.string().max(500).optional(),
});

export default function SubjectRatingForm({ subjectName }: { subjectName: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interesting: 3,
      useful: 3,
      difficult: 3,
      anonymous: true,
      comment: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('Rating submitted!', { className: 'bg-green-500', description: JSON.stringify(data) });
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6'>{subjectName} értékelése</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='interesting'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Érdekesség ({field.value})</FormLabel>
                <FormControl>
                  <Slider
                    min={1}
                    max={5}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='useful'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hasznosság ({field.value})</FormLabel>
                <FormControl>
                  <Slider
                    min={1}
                    max={5}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='difficult'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nehézség ({field.value})</FormLabel>
                <FormControl>
                  <Slider
                    min={1}
                    max={5}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='anonymous'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Anonim értékelés</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='comment'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comments (optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder='Vélemény kifejtése' {...field} />
                </FormControl>
                <FormDescription>Maximum 500 karakter.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Értékelés beküldése
          </Button>
        </form>
      </Form>
    </div>
  );
}
