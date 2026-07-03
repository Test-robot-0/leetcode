
# 412. Fizz Buzz


## Info

<table>
<tr>

<td valign="top">

<h3> Info</h3>

|Property   |Value        |
|-----------|-------------|
|Problem ID |412|
|Difficulty |Easy |
|Language   |Python3   |
|Runtime    |3 ms    |
|Memory     |19.6 MB     |

</td>

<td valign="top">
<h3> Info</h3>

|Tags   |
|-------|
| Math | 
| String | 
| Simulation |

</td>

<td valign="top">
<h3> Stats</h3>

| Metric          | Count                                               |
|-----------------|----------------------------------------------------:|
|Accepted         |**1,827,929/2.4M** |
|Total Accepted   |**1.8M**                                 |
|Total Submission |**2.4M**                               |
|Acceptance Rate  |**75.6%**                                        |


</td>

</tr>
</table>



## Question
<p>Given an integer <code>n</code>, return <em>a string array </em><code>answer</code><em> (<strong>1-indexed</strong>) where</em>:</p>

<ul>
	<li><code>answer[i] == &quot;FizzBuzz&quot;</code> if <code>i</code> is divisible by <code>3</code> and <code>5</code>.</li>
	<li><code>answer[i] == &quot;Fizz&quot;</code> if <code>i</code> is divisible by <code>3</code>.</li>
	<li><code>answer[i] == &quot;Buzz&quot;</code> if <code>i</code> is divisible by <code>5</code>.</li>
	<li><code>answer[i] == i</code> (as a string) if none of the above conditions are true.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> ["1","2","Fizz"]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> ["1","2","Fizz","4","Buzz"]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> n = 15
<strong>Output:</strong> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>

