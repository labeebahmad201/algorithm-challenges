from collections import defaultdict

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:

        key_to_index_map = {}

        for i in range(len(nums)):
            
            if(nums[i] in key_to_index_map and i - key_to_index_map[nums[i]] <= k):
                return True
            key_to_index_map[nums[i]] = i

        return False
