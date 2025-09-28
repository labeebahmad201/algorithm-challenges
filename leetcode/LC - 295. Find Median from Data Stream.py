from sortedcontainers import SortedList

class MedianFinder:

    def __init__(self):
        self.sorted_list = SortedList()         

    def addNum(self, num: int) -> None:
        self.sorted_list.add(num)

    def findMedian(self) -> float:
        length = len(self.sorted_list)
        is_even = length % 2 == 0

        medianIndex = length // 2
        if(is_even and medianIndex > 0) :
            median = (self.sorted_list[medianIndex-1] + self.sorted_list[medianIndex]) / 2
        else :
            median = self.sorted_list[medianIndex]

        return median
        



# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
