nums=[3,3,5,0,2,0,1]

def check(nums):
    i=0
    for j in range(len(nums)):
        if nums[j]>0:
            nums[i]=nums[j]
            i+=1
    while i<len(nums):       
        nums[i]=0
        i+=1
    return nums

result=check(nums)
print(result)