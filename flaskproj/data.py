from flask import Flask, render_template
import sqlite3

import sqlite3
import csv

# connect to database
conn = sqlite3.connect("AssetManager.db")
cur = conn.cursor()



file = open("C:/Users/renee/Downloads/ENERGY_STAR_Certified_Residential_Refrigerators.csv")


class File:
    def __init__(self, headers, number_of_columns, number_of_entries):
        self.headers = file(open)

def create_headings(file):
    file = open(file)
    rows = csv.reader(file)
    table_headings = []
    i = 0
    for row in rows:
        for entry in row:
            table_headings.append(entry)
        break
    stringed_headings = ""
    for heading in table_headings:
        print(heading)
        stringed_headings += "'" + str(heading) + "'"
        if heading.isdecimal():
            stringed_headings += " FLOAT"
        else:
            stringed_headings += " TEXT"
        if heading != table_headings[-1]:
            stringed_headings += ","
    print(stringed_headings)
    return stringed_headings

def drop_table(table_name):
    conn = sqlite3.connect("AssetManager.db")
    cur = conn.cursor()
    query = "DROP TABLE IF EXISTS " + table_name + ";"
    cur.execute(query)

def create_table(create_query):
    conn = sqlite3.connect("AssetManager.db")
    cur = conn.cursor()
    
    cur.execute(create_query)

#    """CREATE TABLE fridges(
#     "EnergyStarID" TEXT,
#     "brand_name" TEXT,
#     "model_number" TEXT,
#     "fridge_type" TEXT,
#     "product_class" TEXT,
#     "defrost_type" TEXT,
#     "compact" TEXT,
#     "built_in" TEXT,
#     "thru_the_door" TEXT,
#     "ice_maker" TEXT,
#     "capacity_total_volume_ft3" INT,
#     "adjusted_volume_ft3" INT,
#     "annual_energy_use_kwh_yr" TEXT,
#     "us_federal_standard_kwh_yr" TEXT,
#     "percent_less_energy_use_than_us_federal_standard" TEXT,
#     "meets_ENERGYSTAR_most_efficient_2021" TEXT
# );
# """

def read_table(file, insert_query):
    file = open(file)
    rows = csv.reader(file)
    conn = sqlite3.connect("AssetManager.db")
    cur = conn.cursor()
    cur.executemany(insert_query, rows)

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

    insert_query = '"' +"INSERT INTO " + table_name  +  " VALUES " + placeholder + '"'
    return insert_query


def big_kahuna(file, table_name):
    table_headings = create_headings(file)
    create_query = create_table_query(table_name, table_headings)
    variable_number = column_number(file)
    insert_query = insert_values_query(table_name, variable_number)
    drop_table(table_name)
    create_table(create_query)
    read_table(file, insert_query)


big_kahuna("C:/Users/renee/Downloads/ENERGY_STAR_Certified_Residential_Refrigerators.csv", "fridges")



# #refresh and pull in new fridges database
# cur.execute("DROP TABLE IF EXISTS fridges;")


# cur.execute("""CREATE TABLE fridges(
#     "EnergyStarID" TEXT,
#     "brand_name" TEXT,
#     "model_number" TEXT,
#     "fridge_type" TEXT,
#     "product_class" TEXT,
#     "defrost_type" TEXT,
#     "compact" TEXT,
#     "built_in" TEXT,
#     "thru_the_door" TEXT,
#     "ice_maker" TEXT,
#     "capacity_total_volume_ft3" INT,
#     "adjusted_volume_ft3" INT,
#     "annual_energy_use_kwh_yr" TEXT,
#     "us_federal_standard_kwh_yr" TEXT,
#     "percent_less_energy_use_than_us_federal_standard" TEXT,
#     "meets_ENERGYSTAR_most_efficient_2021" TEXT
# );
# """)

# """" CREATE TABLE fridges('ENERGY STAR Unique ID' TEXT, 'Brand Name' TEXT, 'Model Number' TEXT, 'Type' TEXT, 'Product Class' TEXT, 'Defrost Type' TEXT, 'Compact' TEXT, 'Built-in' TEXT, 'Thru the Door Dispenser' TEXT, 'Ice Maker' TEXT, 'Capacity (Total Volume) (ft3)' TEXT, 'Adjusted Volume (ft3)' TEXT, 'Annual Energy Use (kWh/yr)' TEXT, 'US Federal Standard (kWh/yr)' TEXT, 'Percent Less Energy Use than US Federal Standard' TEXT, 'Meets ENERGY STAR Most Efficient 2021 Criteria' TEXT);
# """"

# #connect CSV file to database
