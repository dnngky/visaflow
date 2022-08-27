class TaskCycleException(Exception):

    def __init__(self, msg):
        self.msg = msg


class Task:

    def __init__(self, name, length):
        self.name = name
        self.length = length
        self.precessions = []
        self.successions = []
    
    def __str__(self):
        return self.name

    def depends_on(self, precession):
        self.precessions.extend(precession)

    def dependant_on(self, succession):
        self.successions.extend(succession)

    def earliest_start(self):
        return self.earliest_completion() - self.length

    def earliest_completion(self):
        return self.length + max(map(lambda x: x.earliest_completion(), \
            self.precessions), default=0)

    def latest_start(self):
        return self.latest_completion() - self.length

    def latest_completion(self):
        return min(map(lambda x: x.latest_completion() - x.length, \
            self.successions), default=self.earliest_completion())

    def float_time(self):
        return self.latest_completion() - self.earliest_completion()

    def is_critical(self):
        return self.float_time() == 0

    def drag_time(self, tasks):
        n1 = max(map(lambda x: x.earliest_completion(), tasks))
        length = self.length
        self.length = 0
        n2 = max(map(lambda x: x.earliest_completion(), tasks))
        self.length = length
        return n1 - n2