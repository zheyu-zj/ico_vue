<?php

Route::get('/{vue_capture?}', 'HomeController@index')->where('vue_capture', '[\/\w\.-]*');