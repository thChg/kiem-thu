## Hướng dẫn cài đặt mã nguồn:

### Yêu cầu:

Đã cài đặt Node.js trên thiết bị với phiên bản từ 18.x.x trở lên.

### Cài đặt mã nguồn:

1. Từ terminal, truy cập vào folder chứa mã nguồn.
2. Chạy lệnh:

```bash
npm install
```

## Hướng dẫn chạy mã nguồn:

### Yêu cầu:

Đã cài đặt xong mã nguồn (xem tại phần trước).

### Chạy mã nguồn:

Với mỗi báo cáo sẽ có 1 thư mục tương ứng chứa các test case để kiểm thử.

1. Xác định thư mục tương ứng với báo cáo (Ví dụ: báo cáo 1 -> report1).

2. Chạy lệnh:

Để chạy các ca kiểm thử trong 1 báo cáo cụ thể:

```bash
npm test [folder-name]
```

Hoặc chạy tất cả các ca kiểm thử cho tất cả báo cáo:

```bash
npm test
```

Kết quả của chương trình sẽ được hiển thị tại terminal. Ví dụ:

```bash
 PASS  report1/decisionTable.test.js
 PASS  report1/boundary.test.js

Test Suites: 2 passed, 2 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        0.229 s, estimated 1 s
```
