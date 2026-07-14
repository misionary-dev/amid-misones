#!/bin/bash
cd /home/guido/workspace/amid-misiones
git add -A
git commit -m "fix: mejorar servicios, equipo, noticias y footer Misionary"
git push origin feat/nextjs-clone
rm -f do_commit.sh
