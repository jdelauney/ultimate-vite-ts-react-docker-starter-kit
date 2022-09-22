module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [
			2,
			'never',
			['pascal-case', 'upper-case', 'snake-case'],
		],
		'subject-empty': [2, 'never'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
			],
		],
	},
};
