from flask import Flask, render_template
import sqlite3

import sqlite3
import csv
import copy

# connect to database
conn = sqlite3.connect("AssetManager.db")
cur = conn.cursor()





def create_headings(file):
    file = open(file)
    rows = csv.reader(file)
    table_headings = []
    value =[]
    for row in rows:
        for entry in row:
            table_headings.append(entry)
        break
    for row in rows:
        for entry in row:
            value.append(entry)
        break
    print(value)
    stringed_headings = ""
    j=0
    for heading in table_headings:
        heading1 = copy.deepcopy(heading)
        heading = str(heading)
        heading = heading.replace(" ","_")
        heading = heading.replace("-", "_")
        heading = heading.replace("(", "")
        heading = heading.replace(")", "")
        heading = heading.replace("/", "")
        stringed_headings += heading
        # print(rows[j])
        print(type(value[j]))
        if any(c.isalpha() for c in value[j]) == False:
            stringed_headings += " FLOAT"
        else:
            stringed_headings += " TEXT"
        if heading1 != table_headings[-1]:
            stringed_headings += ","
        # print(stringed_headings)
        print(table_headings[-1])
        j+=1
    return stringed_headings

def drop_table(table_name):
    conn = sqlite3.connect("AssetManager.db")
    cur = conn.cursor()
    query = "DROP TABLE IF EXISTS " + table_name + ";"
    cur.execute(query)

def create_table(create_query):
    conn = sqlite3.connect("AssetManager.db")
    cur = conn.cursor()
    print(create_query)
    cur.execute(create_query)


def read_table(file, insert_query):
    file = open(file)
    rows = csv.reader(file)
    rows2 = []
    for row in rows:
        rows2.append(tuple(row))
    conn = sqlite3.connect("AssetManager.db")
    cur = conn.cursor()
    cur.executemany(insert_query, list(rows2))
    conn.commit()

def column_number(file):
    file = open(file)
    rows = csv.reader(file)
    column_number = 0
    for row in rows:
        column_number = len(row)
    return column_number


def create_table_query(table_name, stringed_headings):
    
    create_query =  "CREATE TABLE " + table_name + "(" + stringed_headings + ");"
    return create_query

def insert_values_query(table_name, variable_number):
    i=0
    placeholder="("
    while i < variable_number:
        placeholder += "?"
        if i != variable_number - 1:
            placeholder += ","
            i+=1
        else:
            placeholder += ")"
            i+=1

    insert_query = "INSERT INTO " + table_name  +  " VALUES " + placeholder
    return insert_query


def createsqltable(file, table_name):
    table_headings = create_headings(file)
    create_query = create_table_query(table_name, table_headings)
    variable_number = column_number(file)
    insert_query = insert_values_query(table_name, variable_number)
    drop_table(table_name)
    create_table(create_query)
    read_table(file, insert_query)


createsqltable("C:/Users/renee/Downloads/ENERGY_STAR_Certified_Residential_Refrigerators.csv", "fridges")
# createsqltable("C:/Users/renee/Downloads/ENERGY_STAR_Certified_Dehumidifiers.csv", "dehum")


