import socket
import pickle
import json
import os
import time

# TODO: Before while loop, send 2 information to the server indicating username and password.


def json_to_dict(input_file):
    file = open(input_file, 'r')
    data = json.load(file)
    return data


def dict_to_pickle(dictionary):
    return pickle.dumps(dictionary)


def pickle_to_dict(pickled_msg):
    return pickle.loads(pickled_msg)


def dict_to_json(dictionary, outfile_name='coordinates.json'):
    outfile = open(outfile_name, 'w')
    json.dump(dictionary, outfile)


def receive_data(address, port, header_size=10, chunk_size=16, create_json=False):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((address, port))
    full_msg = b''
    msg_len = 0
    new_msg = True
    while True:
        msg = s.recv(chunk_size)
        if new_msg:
            try:
                msg_len = int(msg[:header_size])
            except ValueError as err:
                print(err)
            new_msg = False
        full_msg += msg
        if len(full_msg) - header_size == msg_len:
            dict_data = pickle.loads(full_msg[header_size:])
            #print(dict_data)
            if not create_json:
                return dict_data
            if create_json:
                dict_to_json(pickle.loads(dict_data), outfile_name='coordinates.json')
                print('Full message received, json file generated successfully.')
                return None
            break
    s.close()
    

def main():
    one_minute_dir = "one_minute_data"
    three_secs_dir = "three_secs_data"
    try:
        cwd = os.getcwd()
        path = f"{cwd}/{one_minute_dir}"
        os.mkdir(path)
        path_3secs = f"{cwd}/{three_secs_dir}"
        os.mkdir(path_3secs)
    except OSError as e:
        print(e)
        pass
    while True:
        try:
            data = receive_data("192.168.1.59", 12345)
            print(data)
            if len(data) < 10:
                dict_to_json(data, outfile_name=f"{cwd}/three_secs_data/three_secs_data#{time.time()}.json")
            else:
                dict_to_json(data, outfile_name=f"{cwd}/one_minute_data/one_minute_data#{time.time()}.json")
        except Exception as err:
            print(err)
            pass
        


main()
# receive_data('127.0.0.1', 1243, create_json=True)