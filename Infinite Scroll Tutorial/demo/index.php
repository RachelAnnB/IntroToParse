<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>

        <!-- requirements -->
        <script language="javascript" type="text/javascript" src="../js/requirements/jquery-min.js"></script>
        <script language="javascript" type="text/javascript" src="../js/requirements/underscore-min.js"></script>
        <script language="javascript" type="text/javascript" src="../js/requirements/backbone-min.js"></script>

        <!-- model -->
        <script language="javascript" type="text/javascript" src="../js/release/scroll-model.js"></script>

        <!-- views -->
        <script language="javascript" type="text/javascript" src="../js/release/scroll-view.js"></script>        
    </head>

    <body>
        <div class="header">
            <div class='titles'>
                <h1>Responsive Infinite Scroll - DEMO SITE</h1>
                <h4><a href="https://github.com/dizzyn/responsive-infinite-scroll">See the project page</a></h4>
            </div>
            <div class='btn-download'>
                <iframe src="http://ghbtns.com/github-btn.html?user=dizzyn&repo=responsive-infinite-scroll&type=watch&count=true&size=large" height="30" width="170" frameborder="0" scrolling="0" style="width:170px; height: 30px;" allowTransparency="true"></iframe>
            </div>
        </div>

        <?php

        $script = strtok($_SERVER["REQUEST_URI"], "?");
        ?>

        <div class="menu">
            <ul>
                <li class="<?php echo ($script === "/" ? "active" : "") ?>"><a href="/">Basic demo</a></li>
                <li class="<?php echo ($script === "/static-data" ? "active" : "") ?>"><a href="/static-data">Offline data</a></li>
                <li class="<?php echo ($script === "/manual-loading" ? "active" : "") ?>"><a href="/manual-loading">Manual loading</a></li>
                <li class="<?php echo ($script === "/alternative-layout" ? "active" : "") ?>"><a href="/alternative-layout">Alternative layout</a></li>
                <li class="<?php echo ($script === "/16-columns" ? "active" : "") ?>"><a href="/16-columns">16 columns</a></li>
                <li class="<?php echo ($script === "/css-manipulation" ? "active" : "") ?>"><a href="/css-manipulation">CSS tricks</a></li>
                <!-- li><a href="/16columns">16 columns</a></li -->
                <!-- li><a href="/ads-inside">Ads inside</a></li>
                <li><a href="/big-pod">Big first pod</a></li -->
            </ul>
        </div>

        <div class="inner">

            <?php
            switch ($script) {
                case "/16columns":
                    include "./demos/16columns.phtml";
                    break;
                case "/static-data":
                    include "./demos/_static-data.phtml";
                    break;
                case "/manual-loading":
                    include "./demos/_manual-loading.phtml";
                    break;
                case "/alternative-layout":
                    include "./demos/_alternative-layout.phtml";
                    break;
                case "/16-columns":
                    include "./demos/_16columns.phtml";
                    break;
                case "/css-manipulation":
                    include "./demos/_css-manipulation.phtml";
                    break;
                default:
                    include "./demos/_basic.phtml";
            }
            ?>

        </div>

    </body>
</html>
