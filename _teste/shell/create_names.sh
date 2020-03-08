#!/bin/bash

dictionary="/usr/share/dict/american-english"
word=""
wordlist="./wordlist"


function choose_words(){
characters=$1
  for word in $(cat $dictionary); do
    word_length=$(expr length $word)
    if [ $word_length == $characters ]; then
      echo $word >> ./wordlist$characters
    fi
  done

}

function get_word(){
characters=$1
  if [ -f "$wordlist$characters" ]; then
    random=$RANDOM
    range=$( wc -l $wordlist$characters | grep -o [0-9]*[0-9])
    random=$(($random%$range))
    random_word=$(awk NR==$random $wordlist) | sed "s/'//g"
  else
    choose_words $characters
  fi
}

echo "Word length?: "
read word_length

get_word $word_length
echo $random_word
