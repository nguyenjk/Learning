<div id="brinza-task-description" class="protected">
<p>An integer X and a non-empty zero-indexed array A consisting of N integers are given. We are interested in which elements of A are equal to X and which are different from X. The goal is to split array A into two parts, such that the number of elements equal to X in the first part is the same as the number of elements different from X in the other part. More formally, we are looking for an index K such that:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>0 ≤ K &lt; N, and</li>
<li>the number of elements equal to X in A[0..K−1] is the same as the number of elements different from X in A[K..N−1]. (For K = 0, A[0..K−1] does not contain any elements.)</li>
</ul>
</blockquote><p>For example, given integer X = 5 and array A such that:</p>
<p></p><pre><tt>  A[0] = 5
  A[1] = 5
  A[2] = 1
  A[3] = 7
  A[4] = 2
  A[5] = 3
  A[6] = 5</tt></pre>
<p>K equals 4, because:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>two of the elements of A[0..3] are equal to X, namely A[0] = A[1] = X, and</li>
<li>two of the elements of A[4..6] are different from X, namely A[4] and A[5].</li>
</ul>
</blockquote><p>Write a function:</p>
<blockquote><p class="lang-c" style="font-family: monospace; font-size: 9pt; display: block"><tt>
int solution(int X, int A[], int N);
</tt></p></blockquote>
<blockquote><p class="lang-cpp" style="font-family: monospace; font-size: 9pt; display: none"><tt>
int solution(int X, vector&lt;int&gt; &amp;A);
</tt></p></blockquote>
<blockquote><p class="lang-pas" style="font-family: monospace; font-size: 9pt; display: none"><tt>
function solution(X: longint; A: array of longint; N: longint): longint;
</tt></p></blockquote>
<blockquote><p class="lang-java" style="font-family: monospace; font-size: 9pt; display: none"><tt>
class Solution { public int solution(int X, int[] A); }
</tt></p></blockquote>
<blockquote><p class="lang-py" style="font-family: monospace; font-size: 9pt; display: none"><tt>
def solution(X, A)
</tt></p></blockquote>
<blockquote><p class="lang-php" style="font-family: monospace; font-size: 9pt; display: none"><tt>
function solution($X, $A);
</tt></p></blockquote>
<blockquote><p class="lang-cs" style="font-family: monospace; font-size: 9pt; display: none"><tt>
class Solution { public int solution(int X, int[] A); }
</tt></p></blockquote>
<blockquote><p class="lang-js" style="font-family: monospace; font-size: 9pt; display: none"><tt>
function solution(X, A);
</tt></p></blockquote>
<blockquote><p class="lang-pl" style="font-family: monospace; font-size: 9pt; display: none"><tt>
sub solution { my ($X, @A)=@_; ... }
</tt></p></blockquote>
<blockquote><p class="lang-rb" style="font-family: monospace; font-size: 9pt; display: none"><tt>
def solution(x, a)
</tt></p></blockquote>
<blockquote><p class="lang-vb" style="font-family: monospace; font-size: 9pt; display: none"><tt>
Private Function solution(X As Integer, A As Integer()) As Integer
</tt></p></blockquote>
<blockquote><p class="lang-lua" style="font-family: monospace; font-size: 9pt; display: none"><tt>
function solution(X, A)
</tt></p></blockquote>
<blockquote><p class="lang-m" style="font-family: monospace; font-size: 9pt; display: none"><tt>
int solution(int X, NSMutableArray *A);
</tt></p></blockquote>
<blockquote><p class="lang-scala" style="font-family: monospace; font-size: 9pt; display: none"><tt>
object Solution { def solution(X: Int, A: Array[Int]): Int }
</tt></p></blockquote>
<blockquote><p class="lang-go" style="font-family: monospace; font-size: 9pt; display: none"><tt>
func Solution(X int, A []int) int
</tt></p></blockquote>
<p>that, given an integer X and a non-empty zero-indexed array A consisting of N integers, returns the value of index K satisfying the above conditions. If more than one index K satisfies the above conditions, your function may return any of them. If there is no such index, the function should return −1.</p>
<p>For example, given integer X and array A as above, the function should return 4, as explained above.</p>
<p>Assume that:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>N is an integer within the range [<span class="number">1</span>..<span class="number">100,000</span>];</li>
<li>X is an integer within the range [<span class="number">0</span>..<span class="number">100,000</span>];</li>
<li>each element of array A is an integer within the range [<span class="number">0</span>..<span class="number">100,000</span>].</li>
</ul>
</blockquote><p>Complexity:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>expected worst-case time complexity is O(N);</li>
<li>expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).</li>
</ul>
</blockquote><p>Elements of input arrays can be modified.</p>
</div>