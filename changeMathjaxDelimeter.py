def checkInline(s):
    i = 0
    while True:
        try:
            if s[i] == '$':
                return i
        except IndexError:
            return -1

        i += 1


def checkOutline(s):
    return s == "<p class='md-math-block'>$"

def main():
    f = open("./output.txt", "w")
    while True:
        s = input()
        if s == ':qa!':
            f.close()
            break
        else:
            if checkOutline(s):
                f.write('<p>\[\n')
                while True:
                    t = input()
                    if t == '$</p>':
                        f.write('\]</p>\n')
                        break
                    else:
                        f.write(t+'\n')
            elif checkInline(s) >= 0:
                converted_string = str()
                while checkInline(s) >= 0:
                    i = checkInline(s)
                    converted_string += s[:i] + '\('
                    s = s[i+1:]
                    j = checkInline(s)
                    converted_string += s[:j] + '\)'
                    s = s[j+1:]
                f.write(converted_string + '\n')
            else:
                f.write(s+'\n')

main()