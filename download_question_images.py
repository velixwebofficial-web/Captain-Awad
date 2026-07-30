"""Download question images for fully local/offline use.
Run from the project folder: python download_question_images.py
"""
from pathlib import Path
import json, re, time
from urllib.request import Request, urlopen
from urllib.parse import quote

ROOT=Path(__file__).resolve().parent
text=(ROOT/'data/questions.js').read_text(encoding='utf-8').strip()
text=re.sub(r'^window\.DRIVING_QUESTION_BANK\s*=\s*','',text).rstrip(';')
bank=json.loads(text)
out=ROOT/'assets'/'questions'; out.mkdir(parents=True,exist_ok=True)
questions=[q for section in bank for q in section['questions']]

def fetch(url):
    req=Request(url,headers={'User-Agent':'Mozilla/5.0'})
    with urlopen(req,timeout=20) as r: return r.read()

def candidates(image):
    fn=image.get('filename') or ''
    mid=image.get('mediaId')
    urls=[]
    if mid:
        try:
            data=json.loads(fetch(f'https://trainingdriving.com/wp-json/wp/v2/media/{mid}'))
            u=data.get('source_url') or data.get('guid',{}).get('rendered')
            if u: urls.append(u)
        except Exception: pass
    enc='/'.join(quote(x) for x in fn.split('/'))
    months=[('2023',f'{m:02d}') for m in range(3,13)]
    if 'اياد-اللحام' in fn: months.insert(0,('2023','07'))
    urls += [f'https://trainingdriving.com/wp-content/uploads/{y}/{m}/{enc}' for y,m in months]
    return list(dict.fromkeys(urls))

ok=fail=0
for i,q in enumerate(questions,1):
    image=q.get('image') or {}; fn=image.get('filename')
    if not fn: continue
    dest=out/Path(fn).name
    if dest.exists() and dest.stat().st_size>100: ok+=1; continue
    for url in candidates(image):
        try:
            data=fetch(url)
            if len(data)>100:
                dest.write_bytes(data); ok+=1; print(f'[{i}/{len(questions)}] OK {dest.name}'); break
        except Exception: continue
    else:
        fail+=1; print(f'[{i}/{len(questions)}] FAILED {fn}')
    time.sleep(.05)
print(f'Finished: {ok} downloaded/existing, {fail} failed.')
