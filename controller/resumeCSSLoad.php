<?php
                    $handle2 = @fopen("../css/resumeStyles.css", "r");
                    if ($handle2) {
                        while (($buffer2 = fgets($handle2, 4096)) !== false) {
                            echo $buffer2;
                        }
                        if (!feof($handle2)) {
                            echo "Error: unexpected fgets() fail\n";
                        }
                        fclose($handle2);
                    }
                    ?>