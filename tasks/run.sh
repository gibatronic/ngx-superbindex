set -o pipefail

run() {
	local task_log=$(mktemp)
	local task_name=$(basename $0)

	echo -n "${task_name}… "
	main &> "$task_log"
	local exit_code=$?

	if [ "$exit_code" = '0' ]; then
		echo 'done'
	else
		echo 'fail'
		cat "$task_log"
	fi

	rm "$task_log"

	return "$exit_code"
}

run
