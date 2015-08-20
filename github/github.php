<?php
class github extends plxPlugin {

 
    public function __construct($default_lang){

    # Appel du constructeur de la classe plxPlugin (obligatoire)
    parent::__construct($default_lang);
    
    # Pour accéder à une page de configuration
    $this->setConfigProfil(PROFIL_ADMIN,PROFIL_MANAGER);

    # Déclaration des hooks
    $this->addHook('github', 'github'); //hook pour l'affichage manuel

    $this->addHook('ThemeEndBody', 'ThemeEndBody');

    } 

    
    public function github() {?>

            <ul id="github_repos"></ul>

      <?php 
    }

    public function ThemeEndBody(){ ?>

        <script type="text/javascript">
        /* <![CDATA[ */
           if(typeof(jQuery) === "undefined") document.write(\'<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"><\/script>\');
        /* !]]> */
        </script>

        <script>
            var username = '<?php echo $this->getParam("username");?>';
        </script>

        <script src="<?php echo PLX_PLUGINS ?>github/js/github-feed.min.js"></script>

        <?php
    }
      
} // class github
?>