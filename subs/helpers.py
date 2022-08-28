def has_visited(node, start):

    if not node.visited:
        node.visited = True

        for i in node.precessions:
            if i == start:
                return True
            if has_visited(i, start):
                return True
    
    return False


def get_critical_path(start):

    critical_path = [start]

    for a in start.successions:
        if not a.is_critical():
            continue
        critical_path += get_critical_path(a)

    return critical_path