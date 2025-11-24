<script>
  import { mdsvex } from "mdsvex";
  import { goto } from "$app/navigation";
</script>

<h1>Game explanation</h1>

<p>You will play a series of game rounds with other players.</p>

<p>Each game round will follow a similar format.</p>

<p>
  In each game round, you and another player will choose between two colors.
</p>

Rewards are earned as such:
<ul>
  <li>
    In every round, if you and the other player <strong>choose the same
      color</strong>, you will <strong>both earn a reward</strong> for that
    round.
  </li>
  <li>
    In every round, if you do <strong>not choose the same color</strong>, you
    will both earn <strong>no reward</strong> for that round.
  </li>
  <li>
    In some rounds, choosing the same color <strong>will earn both of you the
      same reward</strong>, regardless of which color you chose.
  </li>
  <li>
    In other rounds, choosing the same color <strong>will earn different rewards
      for you and the other player</strong>.
  </li>
</ul>
<br>

Players are represented by portraits:
<ul>
  <li>Portraits come from an organic, free-range farm.</li>
  <li>You will pick a portrait on the next page.</li>
  <li>
    (If we have them pick a portrait and use that for a bit, we'd get some
    rounds where portraits are taken as "actually representative." After a bit,
    we could start assigning new portraits each round, where portraits can be
    taken as a coordination device. Then, we could introduce portrait selection
    last.)
  </li>
</ul>

<br>

<button
  id="next-button"
  class="next-button"
  onclick={() => goto("/exp/ccg/comprehension")}
>
  Next
</button>
