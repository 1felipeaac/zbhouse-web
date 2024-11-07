import { format } from 'date-fns';
export function formatDate(data: Date): string {
    return format(data, "dd/MM/yyyy HH:mm")
}

export const valueFormatter = (item: { value: number }) => `${item.value}%`;