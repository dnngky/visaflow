from task import *
from helpers import *
import json

if __name__ == '__main__':

    tasks = {}
    tasks['START'] = Task('START', 0)
    tasks['END'] = Task('END', 0)

    while True:
        try:
            inp = input()
            if len(inp.strip()) == 0: break
        except EOFError:
            break

        a,t,d = inp.split(' ', maxsplit=2)
        d = d.split()

        if d == ['_']:
            d = []
        if a not in tasks.keys():
            tasks[a] = Task(a, int(t))
        else:
            tasks[a].length = int(t)
        
        dependencies = []
        for b in d:
            if b not in tasks.keys():
                tasks[b] = Task(b, 0)
            tasks[a].depends_on(tasks[b])
            tasks[b].dependant_on(tasks[a])

    for i in tasks.values():
        for j in tasks.values():
            j.visited = False
        if has_visited(i, i):
            raise TaskCycleException("Task dependencies form a loop")

    for a in tasks.values():
        if a.name in ('START', 'END'):
            continue
        if len(a.precessions) == 0:
            a.depends_on(tasks['START'])
            tasks['START'].dependant_on(a)
        if len(a.successions) == 0:
            tasks['END'].depends_on(a)
            a.dependant_on(tasks['END'])
    
    task_json = {}
    for tk in tasks.values():
        task_info = {
            "name": tk.name,
            "length": tk.length,
            "dependencies": [str(t) for t in tk.precessions],
            "earliest_start": tk.earliest_start(),
            "earliest_completion": tk.earliest_completion(),
            "latest_start": tk.latest_start(),
            "latest_completion": tk.latest_completion(),
            "float_time": tk.float_time(),
            "drag_time": tk.drag_time(tasks),
            "critical": tk.is_critical()
        }
        task_json[tk.name] = task_info

    json_obj = json.dumps(task_json, indent=4)
    with open("activity_network.json", "w") as outfile:
        outfile.write(json_obj)