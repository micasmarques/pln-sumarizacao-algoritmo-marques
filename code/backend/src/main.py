# main.py

from marques_algorithm import summarize

texto_artigo = '''
A pandemia da doença pelo coronavírus 2019, COVID-19 ...
... minimizar os efeitos adversos da restrição social prolongada.
'''

summary = summarize(texto_artigo)
for sentenca in summary:
    print(sentenca)