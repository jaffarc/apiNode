#!/bin/bash
echo "Total de nomes ?: "
read tamanho

dictionary="/usr/share/dict/words"
word=""
ARRAY=()

a=0
  characters=10
    for word in $(cat $dictionary); do
      word_length=$(expr length $word)
      if [ $word_length == $characters ]; then
        if [ $a -eq ${tamanho} ];  then
          break
        fi
        name=`echo $word | sed  "s/'//g"`
        ARRAY+=(${name,,})
       ((a++))
      fi
    done

for (( c=0; c<=${#ARRAY[@]}; c++ )) do
  echo ${ARRAY[$c]}
done