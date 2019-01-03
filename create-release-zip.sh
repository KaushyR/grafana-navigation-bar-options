#!/bin/bash

REV=`git rev-parse --short HEAD`
mv grafana-navigation-bar-options grafana-navigation-bar-options-$REV
zip -r grafana-navigation-bar-options-$REV grafana-navigation-bar-options-$REV
