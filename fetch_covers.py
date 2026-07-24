import urllib.request
import re
import os

def get_image(url, filename):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Also check for images in the main image block
        match = re.search(r'<img id="landingImage" data-old-hires="(.*?)"', html)
        if not match:
            match = re.search(r'<img id="imgBlkFront" data-a-dynamic-image=".*?&quot;(.*?)&quot;', html)
        if not match:
            match = re.search(r'<img id="ebooksImgBlkFront" src="(.*?)"', html)
        if not match:
             match = re.search(r'\"large\":\"(.*?)\"', html)

        if match:
            img_url = match.group(1)
            print(f"Found image: {img_url}")
            req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req_img) as response, open(filename, 'wb') as out_file:
                out_file.write(response.read())
            print(f"Saved to {filename}")
        else:
            print(f"No image found for {url}")
            
    except Exception as e:
        print(f"Error: {e}")

if not os.path.exists('public/images'):
    os.makedirs('public/images')

get_image('https://www.amazon.com/Trust-Your-Magical-Self-Intuitive-ebook/dp/B07YWFQ13G', 'public/images/book1.jpg')
get_image('https://www.amazon.com/Turning-Other-Things-Were-Supposed-ebook/dp/B0H9VXSGGV', 'public/images/book2.jpg')
