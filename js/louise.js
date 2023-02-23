'use strict';

function generateLouiseCopypasta(louise, tail = 'u') {
	const tailTab = {
		'a': { small: 'ぁ', large: 'あ' },
		'i': { small: 'ぃ', large: 'い' },
		'u': { small: 'ぅ', large: 'う' },
		'e': { small: 'ぇ', large: 'え' },
		'o': { small: 'ぉ', large: 'お' },
		'n': { small: 'ん', large: 'ん' },
	};
	const t = tailTab[tail] || tailTab['u'];
	return `${louise}！${louise}！${louise}！${louise}${t.small}${t.small}うううわぁああああああああああああああああああああああん！！！
あぁああああ…ああ…あっあっー！あぁああああああ！！！${louise}${louise}${louise}${t.small}ううぁわぁああああ！！！
あぁクンカクンカ！クンカクンカ！スーハースーハー！スーハースーハー！いい匂いだなぁ…くんくん
んはぁっ！${louise}・フランソワーズたんの桃色ブロンドの髪をクンカクンカしたいお！クンカクンカ！あぁあ！！
間違えた！モフモフしたいお！モフモフ！モフモフ！髪髪モフモフ！カリカリモフモフ…きゅんきゅんきゅい！！
小説12巻の${louise}たんかわいかったよぅ！！あぁぁああ…あああ…あっあぁああああ！！ふぁぁあああんんっ！！
アニメ2期放送されて良かったね${louise}たん！あぁあああああ！かわいい！${louise}たん！かわいい！あっああぁああ！
コミック2巻も発売されて嬉し…いやぁああああああ！！！にゃああああああああん！！ぎゃああああああああ！！
ぐあああああああああああ！！！コミックなんて現実じゃない！！！！あ…小説もアニメもよく考えたら…
${[...louise].join(' ')} ち ゃ ん は 現実 じ ゃ な い？にゃあああああああああああああん！！うぁああああああああああ！！
そんなぁああああああ！！いやぁぁぁあああああああああ！！はぁああああああん！！ハルケギニアぁああああ！！
この！ちきしょー！やめてやる！！現実なんかやめ…て…え！？見…てる？表紙絵の${louise}ちゃんが僕を見てる？
表紙絵の${louise}ちゃんが僕を見てるぞ！${louise}ちゃんが僕を見てるぞ！挿絵の${louise}ちゃんが僕を見てるぞ！！
アニメの${louise}ちゃんが僕に話しかけてるぞ！！！よかった…世の中まだまだ捨てたモンじゃないんだねっ！
いやっほぉおおおおおおお！！！僕には${louise}ちゃんがいる！！やったよケティ！！ひとりでできるもん！！！
あ、コミックの${louise}ちゃああああああああああああああん！！いやぁあああああああああああああああ！！！！
あっあんああっああんあアン様ぁあ！！シ、シエスター！！アンリエッタぁああああああ！！！タバサｧぁあああ！！
ううっうぅうう！！俺の想いよ${louise}へ届け！！ハルゲニアの${louise}へ届け！`;
}

function handleSubmit(_) {
	copypasta.value = generateLouiseCopypasta(
		louise_name.value,
		louise_tail.value,
	);
}

louise.addEventListener('submit', e => {
	e.preventDefault();
	handleSubmit(e);
	return false;
});

copy.addEventListener('click', _ => {
	copypasta.select();
	document.execCommand('copy');
});

twitter.addEventListener('click', _ => {
	const louiseUrl = 'https://kusaremkn.github.io/louise/';
	const tweetUrl = new URL('https://twitter.com/intent/tweet/');
	tweetUrl.search += 'text=' + encodeURIComponent(copypasta.value);
	tweetUrl.search += '&url=' + encodeURIComponent(louiseUrl);
	window.open(tweetUrl.toString());
});
