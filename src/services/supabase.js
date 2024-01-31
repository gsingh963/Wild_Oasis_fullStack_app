import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://udoxzxydwtwbtddlqouh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkb3h6eHlkd3R3YnRkZGxxb3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTM2MTIsImV4cCI6MjAyMTQyOTYxMn0.Q9aaZeZgkirl0_NtV0xUkBoYV3OsPr0BzJ_7aXnYbDw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
