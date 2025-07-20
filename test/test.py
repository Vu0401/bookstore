import pandas as pd

# 1. Đọc lại 2 file đã làm sạch từ thư mục /data
book_details_loaded = pd.read_csv("data/books_data_remove_nan.csv")
rating_loaded = pd.read_csv("data/Books_rating_remove_nan.csv")

# 2. Mô tả nhanh
print("\n📚 books_data_remove_nan.csv:")
print(f"- Rows: {len(book_details_loaded)}")
print(f"- Columns: {book_details_loaded.columns.tolist()}")
print(book_details_loaded.info())

print("\n⭐ Books_rating_remove_nan.csv:")
print(f"- Rows: {len(rating_loaded)}")
print(f"- Columns: {rating_loaded.columns.tolist()}")
print(rating_loaded.info())
