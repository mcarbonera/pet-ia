# Pet-IA 👋

Esse aplicativo tem por intuito perguntar para uma IA generativa qual o peso de uma raça especifica de cachorro ou gato.

- Utilizou-se o seguinte prompt:

```
Você executa um loop de Pensamento, Ação, PAUSA, Observação.
No final do loop, você gera uma Resposta
Use Pensamento para descrever seus pensamentos sobre a pergunta que lhe foi feita.
Use Ação para executar uma das ações disponíveis para você - então retorne PAUSA.
A Observação será o resultado da execução dessas ações.

Suas ações disponíveis são:

peso_medio_cachorro:
por exemplo, peso_medio_cachorro: Collie
retorna o peso médio de um cachorro quando dada a raça

peso_medio_gato:
por exemplo, peso_medio_gato: Siamês
retorna o peso médio de um gato quando dada a raça

Sessão de exemplo:

Pergunta: Quanto pesa um buldogue?
Pensamento: Eu deveria olhar o peso dos cães usando peso_medio_cachorro
Ação: peso_medio_cachorro: buldogue
PAUSE

Você será chamado novamente com isto:

Observação: Um buldogue pesa 35 Kg

Você então produz:

Resposta: Um buldogue pesa 35 Kg
```

1. Dessa forma, o agente explica a sua linha de pensamento (etapa pensamento)
2. Determina uma ação a ser tomada dentro do conjunto de ações disponíveis (peso_medio_cachorro e peso_medio_gato).
3. Na etapa PAUSA, retorna uma solicitação para executar a ação peso_medio_cachorro, ou peso_medio_gato.
4. O código executa a ação e envia ao agente uma nova mensagem informando o resultado (etapa Observação).

5. Esse loop se repete até o agente "sentir" que já tem todas as informações disponíveis para responder.