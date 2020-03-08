#!/bin/bash
list_name=( 
    Aaron
    Abdul
    Abe
    Abel
    Abraham
    Abram
    Adalberto
    Adam
    Adan
    Adolfo
    Adolph
    Adrian
    Agustin
    Ahmad
    Ahmed
    Alan
    Albert
    Alberto
    Alden
    Aldo
    Alec
    Alejandro
    Alex
    Alexander
    Alexis
    Alfon
)

last_name=(
  Addams
  Adderley
  Adelaide
  Adenauer
  Adhara
  Adidas
  Adkins
  Adolfo
  Adolph
  Adonis
  Adonises
  Adrian
  Adriatic
  Adrienne
  Advent
  Aegean
  Aeneas
  Aeneid
  Aeolus
  Aeroflot
  Afghan
  Africa
  Africans
  Agassi
  Agatha
  Aglaia
)  
url=(
  Americanization
  Butterfingers
  Carboniferous
  Chandrasekhar
  Charlottetown
  Chateaubriand
  Chattahoochee
  Czechoslovakian
  Hellenization
  Huitzilopotchli
  Knickerbocker
  Liebfraumilch
  Liechtenstein
  Machiavellian
  Massachusetts
  Mediterranean
  Mercurochrome
  Messerschmidt
  Mississippian
  Mohammedanism
  Muhammadanism
  Netzahualcoyotl
  Pennsylvanian
  Pontchartrain
  Presbyterianism
  Protestantism
)

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



# JSON_STRING="" 

# for (( c=0; c<=${#list_name[@]}; c++ )) do
#   if [ -n "${list_name[$c]}" ]; then
#     JSON_STRING+='{"name":"'${list_name[$c]}'","last":"'${last_name[$c]}'","email":"'${list_name[$c]}'@'${url[$c]}'.com"},'
#   fi 
# done
  

# mongo social --port 27017  <<EOF
#     use api_test;
#     db.users.insertMany([${JSON_STRING}]);
# EOF




#  echo "JAIL is unset or set to the empty string ${list_name[$c]}"
#echo $JSON_STRING
# for (( c=1; c<=${#list_name[@]}; c++ )) do

#db.users.save( {username:"${list_name[$c]}", last:"${last_name[$c]}" } );
# done



# for (( c=1; c<=${#list_name[@]}; c++ )) do
#   user_json["name"]=${list_name[$c]}
# echo $user_json
# done


# for nome in ${list_name[@]}; do
# mongo social --port 27017  <<EOF
#     use api_test;
#     db.users.save( {username:"${nome}" } );
# EOF
# done


#echo `echo $word | sed  "s/'//g"`
        #ARRAY+=(`echo $word | sed  "s/'//g"`) 
        


#name=${list_name[$RANDOM % ${#list_name[@]} ]}  
# mongo social --port 27017  <<EOF

# use api_test;

# db.users.save( {username:"${name}" } );

# EOF

# dic=/usr/share/dict/words
# LINE="tobacconist's"

# echo ls -la "$dic"


# echo $LINE |sed "s/'//g" 
# echo $comp