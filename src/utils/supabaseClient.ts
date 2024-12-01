import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wuhtirjprsulgcmuetlb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aHRpcmpwcnN1bGdjbXVldGxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0MTY1MDcsImV4cCI6MjAwOTk5MjUwN30.j9xwVrBUTqPS-tfVMEnmv1bbNfBEOdrCIFT-JPEvyY4';

export const supabase = createClient(supabaseUrl, supabaseKey);
