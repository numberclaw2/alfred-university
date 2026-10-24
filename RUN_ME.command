#!/bin/bash
cd "$(dirname "$0")" || exit 1
python3 apply_v2_1.py
printf '\nPress Return to close this window.'
read -r
