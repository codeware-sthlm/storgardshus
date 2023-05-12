import { z } from 'zod';

const OrderedHumanField = z.object({
  title: z.string(),
  name: z.string(),
  value: z.string()
});

export const FormData = z.object({
  number: z.number(),
  title: z.string(),
  email: z.string(),
  name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  company: z.nullable(z.string()),
  summary: z.string(),
  body: z.string(),
  data: z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
    ip: z.string(),
    user_agent: z.string(),
    referrer: z.string()
  }),
  created_at: z.string(),
  human_fields: z.record(z.string()),
  ordered_human_fields: z.array(OrderedHumanField),
  id: z.string(),
  form_id: z.string(),
  site_url: z.string(),
  form_name: z.string()
});
