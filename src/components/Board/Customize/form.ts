import { DEFAULT_THEME, MANTINE_COLORS, MantineColor } from '@mantine/core';
import { createFormContext } from '@mantine/form';
import { z } from 'zod';

const schema = z.object({
  layout: z.object({
    leftSidebarEnabled: z.boolean(),
    rightSidebarEnabled: z.boolean(),
    pingsEnabled: z.boolean(),
  }),
  gridstack: z.object({
    sm: z.number().min(1).max(8),
    md: z.number().min(3).max(16),
    lg: z.number().min(5).max(20),
  }),
  pageMetadata: z.object({
    pageTitle: z.string(),
    metaTitle: z.string(),
    logoSrc: z.string(),
    faviconSrc: z.string(),
  }),
  appearance: z.object({
    backgroundSrc: z.string(),
    primaryColor: z.custom<MantineColor>(
      (value) => typeof value === 'string' && MANTINE_COLORS.includes(value)
    ),
    secondaryColor: z.custom<MantineColor>(
      (value) => typeof value === 'string' && MANTINE_COLORS.includes(value)
    ),
    shade: z
      .number()
      .min(0)
      .max(DEFAULT_THEME.colors['blue'].length - 1),
    opacity: z.number().min(10).max(100),
    customCss: z.string(),
  }),
});

export const [
  BoardCustomizationFormProvider,
  useBoardCustomizationFormContext,
  useBoardCustomizationForm,
] = createFormContext<z.infer<typeof schema>>();
