import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zsbfprwmqtjmzsydfnoe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzYmZwcndtcXRqbXpzeWRmbm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1MjYyMjIsImV4cCI6MjAxNTEwMjIyMn0.K-HPsswtQVhZSvYU5inFwwo1amkzvMZKw8lYidZrPn8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
