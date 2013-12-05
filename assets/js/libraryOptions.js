/*
 * ATVLogger
 */
function log(msg, level)
{
    level = level || 1;
    var req = new XMLHttpRequest();
    var url = "{{URL(/)}}" + "&PlexConnectATVLogLevel=" + level.toString() + "&PlexConnectLog=" + encodeURIComponent(msg);
    req.open('GET', url, true);
    req.send();
};


/*
 * refresh library section
 */
function refreshSection(PMS_baseURL, accessToken, key)
{
    var url = PMS_baseURL + key + "/refresh";
    /*
    // only for local servers - no token needed/allowed
    if (accessToken!='')
        url = url + '&X-Plex-Token=' + accessToken;
    */
    
    log(url);
    
    var req = new XMLHttpRequest();
    req.open('PUT', url, false);
    req.send();
}
