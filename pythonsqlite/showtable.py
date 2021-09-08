from flask import Flask, render_template, request
import sqlite3 as sql
app = Flask(__name__)

@app.route('/')
def list():
    con = sql.connect("AssetManager.db")
    con.row_factory = sql.Row
    cur = con.cursor()
    cur.execute("select * from students")

    rows = cur.fetchall();
    return render_template("list.html", rows = rows)

    
