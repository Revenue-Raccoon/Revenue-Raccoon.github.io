import requests


def main():
    a = requests.post(url="http://127.0.0.1:5000/chat-room",
                      json={'action': '1', 'chat_id': 'an_id', 'value': 'a value'}, cookies={"authCookie": "test"})
    print(a.text)


if __name__ == '__main__':
    main()
