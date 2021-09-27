from flask import Flask, render_template
import sqlite3

import sqlite3
import csv

def insert_values_query(table_name, table_headings, variable_number):
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

    insert_query = '"' +"INSERT INTO " + table_name  + table_headings +  "VALUES " + placeholder + '"'
    print(insert_query)
    return insert_query

insert_values_query("vax", "mumps, measles, malaria", 3)