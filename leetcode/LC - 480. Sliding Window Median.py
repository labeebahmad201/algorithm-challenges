from sortedcontainers import SortedList

class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        ans = []

        # would stay same for the window as the window stays same
        medianIndex = k // 2

        # would stay same for the window as the window stays same
        is_even = k % 2 == 0        
        sorted_list = SortedList()
        for right, num in enumerate(nums):
            sorted_list.add(num)
            
            if right >= k - 1 :
                if (is_even):
                    median = (sorted_list[medianIndex - 1] + sorted_list[medianIndex]) / 2
                else :
                    median = sorted_list[medianIndex]

                ans.append(median)                
                sorted_list.remove(nums[right - k + 1])

        return ans
