<?php
                    $handle = @fopen("../resumephtml.php", "r");
                    if ($handle) {
                        while (($buffer = fgets($handle, 4096)) !== false) {
                            echo $buffer;
                        }
                        if (!feof($handle)) {
                            echo "Error: unexpected fgets() fail\n";
                        }
                        fclose($handle);
                    }
                    ?>