import sqlite3
import csv

conn = sqlite3.connect("AssetManager.db")

cur = conn.cursor()

cur.execute("DROP TABLE IF EXISTS fridges;")

cur.execute("""CREATE TABLE fridges(
    "type" TEXT,
    "pd_id" TEXT,
    "brand_name" TEXT,
    "model_number" TEXT,
    "fridge_type" TEXT,
    "product_class" TEXT,
    "defrost_type" TEXT,
    "compact" TEXT,
    "built_in" TEXT,
    "thru_the_door" TEXT,
    "ice_maker" TEXT,
    "capacity_total_volume_ft3" TEXT,
    "adjusted_volume_ft3" TEXT,
    "annual_energy_use_kwh_yr" TEXT,
    "us_federal_standard_kwh_yr" TEXT,
    "percent_less_energy_use_than_us_federal_standard" TEXT,
    "meets_ENERGYSTAR_most_efficient_2021" TEXT
);
""")

file = open("C:/Users/renee/Downloads/ENERGY_STAR_Certified_Residential_Refrigerators.csv")
rows = csv.reader(file)
cur.executemany("INSERT INTO fridges VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", rows)

cur.execute("SELECT * FROM fridges")

print(cur.fetchall())

conn.commit()
conn.close()

