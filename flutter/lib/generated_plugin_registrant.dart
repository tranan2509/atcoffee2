//
// Generated file. Do not edit.
//

// ignore_for_file: directives_ordering
// ignore_for_file: lines_longer_than_80_chars

import 'package:cloud_firestore_web/cloud_firestore_web.dart';
import 'package:firebase_core_web/firebase_core_web.dart';
import 'package:firebase_database_web/firebase_database_web.dart';
import 'package:firebase_messaging_web/firebase_messaging_web.dart';
import 'package:fluttertoast/fluttertoast_web.dart';
import 'package:geolocator_web/geolocator_web.dart';
import 'package:location_web/location_web.dart';
import 'package:shared_preferences_web/shared_preferences_web.dart';
import 'package:toast/toast_web.dart';
import 'package:url_launcher_web/url_launcher_web.dart';

import 'package:flutter_web_plugins/flutter_web_plugins.dart';

// ignore: public_member_api_docs
void registerPlugins(Registrar registrar) {
  FirebaseFirestoreWeb.registerWith(registrar);
  FirebaseCoreWeb.registerWith(registrar);
  FirebaseDatabaseWeb.registerWith(registrar);
  FirebaseMessagingWeb.registerWith(registrar);
  FluttertoastWebPlugin.registerWith(registrar);
  GeolocatorPlugin.registerWith(registrar);
  LocationWebPlugin.registerWith(registrar);
  SharedPreferencesPlugin.registerWith(registrar);
  ToastWebPlugin.registerWith(registrar);
  UrlLauncherPlugin.registerWith(registrar);
  registrar.registerMessageHandler();
}
