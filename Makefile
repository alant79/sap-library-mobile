run:
	docker run  --rm -p 19002:19002 -p 19006:19006 -p 19000:19000 -p 19001:19001 -e REACT_NATIVE_PACKAGER_HOSTNAME=192.168.100.16 -e EXPO_DEBUG=true -e EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0 aalekseev7910/sap-library-mobile