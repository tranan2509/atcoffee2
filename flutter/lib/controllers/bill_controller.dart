import 'package:at_coffee/controllers/user_controller.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:get/get.dart';
import 'package:get/state_manager.dart';
import 'package:at_coffee/models/bill.dart';

class BillController extends GetxController {
  var isLoading = false.obs;
  var selected = 'REQUESTED'.obs;
  var billsList = <Bill>[].obs;
  final UserController userController = Get.put(UserController());
  @override
  void onInit() {
    //fetchPromotions();
    super.onInit();
  }

  void updateSelected(String index) async {
    try {
      isLoading(true);
      selected.value = index;
    } finally {
      isLoading(false);
    }
  }

  void getBill() {
    DatabaseReference listOrder = FirebaseDatabase.instance.ref('bills');
    isLoading(true);
    listOrder.onValue.listen((DatabaseEvent event) {
      List<Bill> bills = [];
      final data = event.snapshot.value;
      Map<Object, Object> mydata = data;
      mydata.forEach((key, values) {
        //print(values);
        var mybill = Bill.fromDocumentSnapshot(values);
        if (mybill.customerId == userController.user.value.id) {
          bills.add(mybill);
        }
      });

      //print("my data");
      billsList.value = bills;
      //print(bills.length);
      //return bills;
    });
    isLoading(false);
    //return [];
  }

  Future<void> updateBill(idBill, idItem) async {
    DatabaseReference listOrder = FirebaseDatabase.instance
        .ref('bills/${idBill}/billDetails/${idItem - 1}');
    isLoading(true);
    await listOrder.update({"state": false});
    isLoading(false);
    //return [];
  }

  Future<void> updateBillStatus(idBill) async {
    DatabaseReference listOrder =
        FirebaseDatabase.instance.ref('bills/${idBill}');
    isLoading(true);
    await listOrder.update({"status": "CANCELED"});
    isLoading(false);
    //return [];
  }

  void saveData(billList) {
    try {
      isLoading(true);
      billsList.value = billList;
    } finally {
      isLoading(false);
    }
  }
}
