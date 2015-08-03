<?php if (!defined('PLX_ROOT')) exit; 

# Control du token du formulaire
plxToken::validateFormToken($_POST);

if(!empty($_POST)) {
	$plxPlugin->setParam('username', $_POST['username'], 'cdata');
	$plxPlugin->saveParams();
	header('Location: parametres_plugin.php?p=github');
	exit;
}

?>

<p>
	Pour afficher la liste de vos dépots Github:
</p>

<code>&lt;?php eval($plxShow->callHook('github')); ?&gt;</code>

<style>
	input, textarea {border-radius: 5px;width: 40%}
	textarea {min-height: 50px}
	label{font-style: italic}
</style>

<form action="parametres_plugin.php?p=github" method="post">

	<p>
		<label for="username">Votre compte Github</label>
		<input id="username" name="username"  maxlength="255" value="<?php echo $plxPlugin->getParam("username"); ?>">
	</p>	

	
	<p>
		<?php echo plxToken::getTokenPostMethod() ?>
		<input type="submit" name="submit" value="Valider" />
		
	</p>

</form>