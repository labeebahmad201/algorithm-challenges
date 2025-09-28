from sortedcontainers import SortedSet;

class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], indexDiff: int, valueDiff: int) -> bool:
        
        # i != j
        # j, j+1, j+2...i 

        # k items. 1

        # abs(nums[i] - nums[j]) <= valueDiff
        '''
            -valueDiff <= nums[i] - num[j] <= valueDiff
            
            num[j] - valueDiff <= nums[i] <= nums[j] + valueDiff

            >= num[j] - valueDiff => p
            p <= nums[j] + valueDiff 

            y = 10, diff = 2
            [8, 12] range array
            arr = []

            num[j] - valueDiff <= nums[i] <= nums[j] + valueDiff
            8 <= <= 12

            then |nums[i] - nums[j]| <= valueDiff

            indexDiff = 3

            0 -> 1 ..... 
            1 -> 2
            2 -> 3 items
            3 -> 4 ... indexDiff + 1 items

        
        '''
        


        sorted_window = SortedSet()

        for index, number in enumerate(nums):

            lower_bound_index = sorted_window.bisect_left(nums[index] - valueDiff)

            if (lower_bound_index < len(sorted_window) and sorted_window[lower_bound_index] <= nums[index] + valueDiff):
                return True

            sorted_window.add(number)

            if index >= indexDiff:
                sorted_window.remove(nums[index - indexDiff])
        
        return False







