-- Chạy MỘT LẦN trong Supabase > SQL Editor (an toàn nếu đã chạy trước đó)
alter table results drop constraint if exists results_text_len;
alter table results add constraint results_text_len
  check (length(coalesce(data->>'name','')) <= 80 and length(coalesce(data->>'cls','')) <= 30);
