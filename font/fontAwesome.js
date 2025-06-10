// This file is used to import FontAwesome icons for use in footer (social media links).
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome brand icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(fab);
