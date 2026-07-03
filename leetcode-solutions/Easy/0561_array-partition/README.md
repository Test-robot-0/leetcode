
# 561.  Array Partition

🟢 Easy &nbsp;&nbsp;&nbsp; ⚙️ Java &nbsp;&nbsp;&nbsp; ⏱ 2306 ms &nbsp;&nbsp;&nbsp; 💾 47.5 MB



`Array`&nbsp;&nbsp;&nbsp;`Greedy`&nbsp;&nbsp;&nbsp;`Sorting`&nbsp;&nbsp;&nbsp;`Counting Sort`


## Overview

<div align="center">
<table>
<tr>

<td valign="top">

<h3> Problem</h3>

|Property            |Value        |
|--------------------|-------------|
|Problem ID          |**561**|
|Difficulty          |**Easy**|
|Leetcode Link       |[link!](https://leetcode.com/problems/array-partition/description/)

</td>

<td valign="top">
<h3> Community Stats</h3>


| Metric          | Count                         |
|-----------------|------------------------------:|
|Total Submission |**846.2K** |
|Total Accepted   |**693K**   |
|Acceptance Rate  |**81.9%**          |


</td>


</tr>
</table>
</div>


## Question
<p>Given an integer array <code>nums</code> of <code>2n</code> integers, group these integers into <code>n</code> pairs <code>(a<sub>1</sub>, b<sub>1</sub>), (a<sub>2</sub>, b<sub>2</sub>), ..., (a<sub>n</sub>, b<sub>n</sub>)</code> such that the sum of <code>min(a<sub>i</sub>, b<sub>i</sub>)</code> for all <code>i</code> is <strong>maximized</strong>. Return<em> the maximized sum</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,3,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -&gt; min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -&gt; min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -&gt; min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [6,2,6,5,1,2]
<strong>Output:</strong> 9
<strong>Explanation:</strong> The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>nums.length == 2 * n</code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


<br>
Last Updated = (8, 1, 'Array Partition', 561, 'array-partition', '[{"name": "Array", "nameTranslated": "", "slug": "array"}, {"name": "Greedy", "nameTranslated": "", "slug": "greedy"}, {"name": "Sorting", "nameTranslated": "", "slug": "sorting"}, {"name": "Counting Sort", "nameTranslated": "", "slug": "counting-sort"}]', 'Easy', 1598494039, 'Java', '.java', '47.5 MB', '2306 ms', 'import java.util.Arrays;\nclass Solution {\n    public int arrayPairSum(int[] nums) {\n \n        for (int i = 0; i < nums.length; i++){\n            for (int j = 0; j < nums.length - 1; j++){\n                if (nums[j] > nums[j + 1]){\n                    int temp = nums[j];\n                    nums[j] = nums[j + 1];\n                    nums[j + 1] = temp;\n                }   \n            }\n        }\n        \n        int sum = 0;\n        for (int t = 0; t < nums.length; t += 2){\n            sum = sum + nums[t];\n        }\n\n        return sum;\n    }\n}', 'https://api.github.com/repos/Test-robot-0/leetcode/contents/leetcode-solutions/Easy/0561_array-partition/Solution.java', '22c20eec4daecaae05acb6f5b0758fe083444825', '8c02ff9f9500c0095eefa6173258b5ce2d61df61', '2026-07-03 16:22:00', '2026-07-03 20:45:14', None)
