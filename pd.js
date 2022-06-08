while ( document.innerHTML.match( /[0-9]+\.99/ ) )
{
	document.innerHTML = document.innerHTML.replace( /([0-9]+)\.99/, '($1).00' );
}
