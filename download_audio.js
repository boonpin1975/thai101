import fs from 'fs';
import path from 'path';

const CONSONANTS_DATA = [
  { id: 1, text: "ก ไก่" },
  { id: 2, text: "ข ไข่" },
  { id: 3, text: "ฃ ขวด" },
  { id: 4, text: "ค ควาย" },
  { id: 5, text: "ฅ คน" },
  { id: 6, text: "ฆ ระฆัง" },
  { id: 7, text: "ง งู" },
  { id: 8, text: "จ จาน" },
  { id: 9, text: "ฉ ฉิ่ง" },
  { id: 10, text: "ช ช้าง" },
  { id: 11, text: "ซ โซ่" },
  { id: 12, text: "ฌ เฌอ" },
  { id: 13, text: "ญ หญิง" },
  { id: 14, text: "ฎ ชฎา" },
  { id: 15, text: "ฏ ปฏัก" },
  { id: 16, text: "ฐ ฐาน" },
  { id: 17, text: "ฑ มณโฑ" },
  { id: 18, text: "ฒ ผู้เฒ่า" },
  { id: 19, text: "ณ เณร" },
  { id: 20, text: "ด เด็ก" },
  { id: 21, text: "ต เต่า" },
  { id: 22, text: "ถ ถุง" },
  { id: 23, text: "ท ทหาร" },
  { id: 24, text: "ธ ธง" },
  { id: 25, text: "น หนู" },
  { id: 26, text: "บ ใบไม้" },
  { id: 27, text: "ป ปลา" },
  { id: 28, text: "ผ ผึ้ง" },
  { id: 29, text: "ฝ ฝา" },
  { id: 30, text: "พ พาน" },
  { id: 31, text: "ฟ ฟัน" },
  { id: 32, text: "ภ สำเภา" },
  { id: 33, text: "ม ม้า" },
  { id: 34, text: "ย ยักษ์" },
  { id: 35, text: "ร เรือ" },
  { id: 36, text: "ล ลิง" },
  { id: 37, text: "ว แหวน" },
  { id: 38, text: "ศ ศาลา" },
  { id: 39, text: "ษ ฤๅษี" },
  { id: 40, text: "ส เสือ" },
  { id: 41, text: "ห หีบ" },
  { id: 42, text: "ฬ จุฬา" },
  { id: 43, text: "อ อ่าง" },
  { id: 44, text: "ฮ นกฮูก" }
];

const audioDir = path.join(process.cwd(), 'public', 'audio');

if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

async function downloadAll() {
  console.log("Starting download of all 44 Thai consonant audio MP3 files...");

  for (const item of CONSONANTS_DATA) {
    const filePath = path.join(audioDir, `${item.id}.mp3`);
    const encoded = encodeURIComponent(item.text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=th&client=gtx`;

    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });

      if (!res.ok) {
        console.error(`Failed ${item.id} (${item.text}): HTTP ${res.status}`);
        continue;
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved [${item.id}/44] ${item.text} -> public/audio/${item.id}.mp3 (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.id} (${item.text}):`, err.message);
    }

    // Small delay between requests to be polite to the TTS server
    await new Promise(r => setTimeout(r, 150));
  }

  console.log("🎉 All 44 Thai consonant MP3 audio files downloaded successfully!");
}

downloadAll();
