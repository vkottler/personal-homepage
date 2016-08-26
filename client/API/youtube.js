angular.module('controllers')

.controller('ytController', function($scope, $http) {

    // Channel Meta Data
    var myAPIkey = "AIzaSyAahGzhrax7P_SQxAvW83j5njzjiwi81UQ";
    var myChannelId = "UCUv6jGq7Ab87TXkVQoT1udg";
    var channelUrl = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=";
    channelUrl += myChannelId + "&key=" + myAPIkey;

    // Uploaded videos
    var playlistUrl = "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&key=";
    playlistUrl += myAPIkey + "&playlistId="

    function getInitialVideos() {
        $http({ method: 'GET', url: channelUrl})
        .then(function successCallback(response1) {
            var playlistIds = response1.data.items[0].contentDetails.relatedPlaylists;
            playlistUrl += playlistIds.uploads;
            $http({ method: 'GET', url: playlistUrl}).then(
            function successCallback(response2) {
                $scope.nextPageToken = response2.data.nextPageToken;
                $scope.pageInfo = response2.data.pageInfo;
                $scope.videos = response2.data.items;
                $scope.videoIds = [];
                for (var i = 0; i < $scope.videos.length; i++) 
                    $scope.videoIds.push($scope.videos[i].contentDetails.videoId);
            }, function errorCallback(response2) { console.log('Failed to retrieve videos from playlist.'); });
        }, function errorCallback(response1) { console.log('Failed to retrieve channel metadata.'); });

        $scope.getUrl = function(videoId) {
          return "https://www.youtube.com/embed/" + videoId;
        };
    }

    getInitialVideos();
});