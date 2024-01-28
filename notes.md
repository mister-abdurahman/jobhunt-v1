# Benefits of react native:
Allows us to use native components,
cross platform
Hot reloading
Community support

# Expo
as create-react-app and vite is to react, expo is to react native.

It simplifies development process   

With expo, we do not worry about:
- setting developemnt environment
- native dependencies

Expo also provides pre-buit components and apis for: navigation, camera, gestures, maps...

# NB:
When coding in react native, we use javascript but onstead of rendering html, we render native mobile components

Some components:
View, Text, TouchableComponent, ActivityIndicator (spinner/loading indicator), Flatlist (for rendering long list of items that need to be scrolled efficiently), ScrollView (for holding containers or views and providing a scrolling container for them), SafeViewArea (ensures that your content is rendered within the visible area)

# Set up:
install: npx create-expo-app@latest -e with-router || use the manual install guide on docs
set up routing in _layout file.