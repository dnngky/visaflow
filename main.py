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
        if a in tasks.keys():
            activity = tasks[a]
        else:
            activity = Task(a, int(t))
        
        dependencies = []
        for b in d:
            try:
                dependencies.append(tasks[b])
                tasks[b].dependant_on([activity])
            except KeyError:
                print(f"Activity {b} does not exist.")

        activity.depends_on(dependencies)
        tasks[a] = activity

    for a in tasks.values():
        if a.name in ('START', 'END'):
            continue
        if len(a.precessions) == 0:
            a.depends_on([tasks['START']])
            tasks['START'].dependant_on([a])
        if len(a.successions) == 0:
            tasks['END'].depends_on([a])
            a.dependant_on([tasks['END']])
    
    for i in tasks.values():
        for j in tasks.values():
            j.visited = False
        if has_visited(i, i):
            raise TaskCycleException("Tasks dependencies form a loop")
    
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
            "critical": tk.is_critical()
        }
        task_json[tk.name] = task_info

    json_obj = json.dumps(task_json, indent=4)
    with open("activity_network.json", "w") as outfile:
        outfile.write(json_obj)