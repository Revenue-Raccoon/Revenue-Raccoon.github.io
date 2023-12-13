from affilateLink import AffiliateLink
from dataBaseConstetnts import *
from link import Link


# Modify the get_link function
def get_link(url: str) -> Link:
    with get_connection() as connection:
        cursor = connection.cursor()
        query = "SELECT * FROM links WHERE link = ?"
        cursor.execute(query, (url,))
        row = cursor.fetchone()

        if row:
            link = Link(
                title=row[1],
                price_per_customer=row[2],
                profit_for_sale=row[3],
                link=row[4],
                description=row[5],
                money_made=row[6],
                related_tags=row[7].split(','),
                people_using_link=row[8],
                image=row[9]
            )
            return link
        else:
            return None


def add_link(link: Link):
    with get_connection() as connection:
        cursor = connection.cursor()
        new_data = (
            link.title,
            link.price_per_customer,
            link.profit_for_sale,
            link.link,
            link.description,
            link.money_made,
            ','.join(link.related_tags),
            link.people_using_link,
            link.image
        )
        insert_query = f'INSERT INTO links (title, price_per_customer, profit_for_sale, link, description, money_made, related_tags, people_using_link, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        cursor.execute(insert_query, new_data)
        connection.commit()


def get_affiliate_links_by_url(url):
    with get_connection() as connection:
        cursor = connection.cursor()
        query = f"SELECT * FROM {AFFILATE_TABLE} WHERE url = ?"
        cursor.execute(query, (url,))
        rows = cursor.fetchall()
        return rows  # Each row represents an affiliate link


def add_affiliate_link(affLink: AffiliateLink):
    with get_connection() as connection:
        cursor = connection.cursor()
        people_clicking_str = ','.join(affLink.peopleClicking) if affLink.peopleClicking else ''
        query = f"INSERT INTO {AFFILATE_TABLE} (id, title, url, user_id, people_clicking, affilateLink) VALUES (?, ?, ?, ?, ?, ?)"
        cursor.execute(query, (
        affLink.id, affLink.title, affLink.url, affLink.user_id,  people_clicking_str, affLink.affiliateLink))
        connection.commit()


def add_ip_to_affiliate_link(ip_address, url):
    with get_connection() as connection:
        cursor = connection.cursor()
        # First, get the current IP list
        select_query = f"SELECT people_clicking FROM {AFFILATE_TABLE} WHERE url = ?"
        cursor.execute(select_query, (url,))
        result = cursor.fetchone()
        if result:
            current_ips = set(result[0].split(',')) if result[0] else set()
            # Add new IP if not already present
            if ip_address not in current_ips:
                current_ips.add(ip_address)
                update_query = f"UPDATE {AFFILATE_TABLE} SET people_clicking = ? WHERE url = ?"
                cursor.execute(update_query, (','.join(current_ips), url))
                connection.commit()


def get_ip_list_of_affiliate_link(url):
    with get_connection() as connection:
        cursor = connection.cursor()
        query = f"SELECT people_clicking FROM {AFFILATE_TABLE} WHERE url = ?"
        cursor.execute(query, (url,))
        result = cursor.fetchone()
        if result:
            return result[0].split(',')  # Returns a list of IPs
        else:
            return []


def get_url_of_affiliate_link(affiliate_link: str):
    with get_connection() as connection:
        cursor = connection.cursor()
        query = f"SELECT url FROM {AFFILATE_TABLE} WHERE affilateLink = ?"
        cursor.execute(query, (affiliate_link,))
        result = cursor.fetchone()
        if result:
            return result[0]  # Returns the URL
        else:
            return None
        
def print_table_names_sqlite():
    with get_connection() as connection:
        cursor = connection.cursor()
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()
        for table in tables:
            print(table[0])
            