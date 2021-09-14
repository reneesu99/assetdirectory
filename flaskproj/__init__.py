from flask import Flask, render_template
import sqlite3

import sqlite3
import csv

# connect to database
conn = sqlite3.connect("AssetManager.db")
cur = conn.cursor()

#refresh and pull in new fridges database
cur.execute("DROP TABLE IF EXISTS fridges;")

cur.execute("""CREATE TABLE fridges(
    "EnergyStarID" TEXT,
    "brand_name" TEXT,
    "model_number" TEXT,
    "fridge_type" TEXT,
    "product_class" TEXT,
    "defrost_type" TEXT,
    "compact" TEXT,
    "built_in" TEXT,
    "thru_the_door" TEXT,
    "ice_maker" TEXT,
    "capacity_total_volume_ft3" INT,
    "adjusted_volume_ft3" INT,
    "annual_energy_use_kwh_yr" TEXT,
    "us_federal_standard_kwh_yr" TEXT,
    "percent_less_energy_use_than_us_federal_standard" TEXT,
    "meets_ENERGYSTAR_most_efficient_2021" TEXT
);
""")

#connect CSV file to database

file = open("C:/Users/renee/Downloads/ENERGY_STAR_Certified_Residential_Refrigerators.csv")
rows = csv.reader(file)
cur.executemany("INSERT INTO fridges VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", rows)



#pass data from database to a dictionary
cur.execute("SELECT * FROM fridges")
desc = cur.description
column_names = [col[0] for col in desc]

data = [
    dict(zip(column_names, row))
    for row in cur.fetchall()
]
print(data[0])

#generate HTML page and pass dictionary to webpage
app = Flask(__name__)

conn.commit()
conn.close()




@app.route("/")
def index():
    return render_template("table.html", data = data) 

@app.route("/details/<model_number>/")
def details(model_number):
    conn = sqlite3.connect("AssetManager.db")
    cur = conn.cursor()
    model_number= model_number.replace("%2f","/")
    cur.execute ("SELECT * FROM fridges WHERE model_number=(?)", (model_number,))
    data = cur.fetchone()
    headers = [col[0] for col in cur.description]
    entry = zip(headers, data)
    cur.execute("SELECT * FROM fridges WHERE adjusted_volume_ft3 > (?) AND adjusted_volume_ft3 < (?)", (data[11], 10+data[11],))
    print(data[11])
    similar_long = cur.fetchall()
    similar = similar_long[:5]
    return render_template("details.html", entry = entry, data = data, similar=similar)



if __name__ == '__main__':
    app.run()



