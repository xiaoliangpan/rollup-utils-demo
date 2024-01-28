const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'release', 'chore', 'revert'];

export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// 禁止提交信息的类型部分为空。
		'type-empty': [2, 'never'],
		// 要求提交信息的类型部分必须是预定义的一种，由 types 数组定义。
		'type-enum': [2, 'always', types],
		// 不检查提交信息的作用域（scope）的大小写
		'scope-case': [0, 'always'],
		// 禁止提交信息的主题部分为空。
		'subject-empty': [2, 'never'],
		// 不检查提交信息的主题（subject）的大小写。
		'subject-case': [0, 'never'],
		// 要求提交信息的整个头部（type + scope + subject）的最大长度不超过 88 个字符。
		'header-max-length': [2, 'always', 88],
	},
};
