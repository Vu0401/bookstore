import pandas as pd

book_details_df = pd.read_csv("data/archive/books_data.csv") # 2 x 10^5 
rating_df = pd.read_csv("data/archive/Books_rating.csv") # 3 x 10^6

# filtered_book = rating_df[rating_df["Price"].isna()]
print(book_details_df.info())
print(rating_df.info())