import sys
from googletrans import Translator

translatr =Translator()

userText = sys.argv[1]

result = translatr.translate(userText, dest='nl') # translate to Dutch
sys.argv.append(result.text)

print(sys.argv[2])