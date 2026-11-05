/**
 * ============================================================================
 * DỰ ÁN: AI ĐỒNG HÀNH CÙNG SINH VIÊN GIẢI VÀ TRÌNH BÀY BÀI TẬP TỰ LUẬN
 * File: script.js (Thuần JavaScript - Không dùng thư viện ngoài)
 * ============================================================================
 */

/* ==========================================================================
   1. DỮ LIỆU MẪU (MOCK DATA) CHO BẢN DEMO TƯƠNG TÁC
   - Tách riêng ở đầu file để dễ dàng chỉnh sửa hoặc thêm đề bài mới
   ========================================================================== */
const DEMO_PROBLEMS = {
  prob_algo: {
    id: "prob_algo",
    majorKey: "cntt",
    majorName: "Công nghệ thông tin",
    subjectName: "Cấu trúc dữ liệu & Giải thuật",
    typeName: "Bài lập trình / Thuật toán",
    title: "Đề bài: Tìm tổng lớn nhất của dãy con liên tiếp độ dài k",
    question:
      "Cho mảng số nguyên A gồm n phần tử và một số nguyên dương k (1 ≤ k ≤ n). Hãy trình bày thuật toán tìm tổng lớn nhất của một dãy con gồm k phần tử liên tiếp trong mảng A (yêu cầu tối ưu hơn cách duyệt 2 vòng lặp lồng nhau) và đánh giá độ phức tạp của thuật toán.",
    hints: [
      "Mức 1 (Kiến thức nền): Nếu tính lại tổng k phần tử từ đầu cho mọi vị trí, độ phức tạp sẽ là O(n*k). Hãy chú ý mối liên hệ giữa tổng của cửa sổ [i..i+k-1] và cửa sổ kế tiếp [i+1..i+k].",
      "Mức 2 (Bước tiếp theo): Áp dụng kỹ thuật Cửa sổ trượt (Sliding Window). Đầu tiên tính tổng của k phần tử đầu tiên (từ chỉ số 0 đến k-1) làm mốc max_sum ban đầu.",
      "Mức 3 (Cấu trúc lời giải): Khi dịch cửa sổ sang phải 1 vị trí (chỉ số i chạy từ k đến n-1), ta chỉ cần lấy tổng cũ cộng thêm phần tử mới vào (A[i]) và trừ đi phần tử vừa rời khỏi cửa sổ (A[i-k]). Đừng quên xét điều kiện biên n < k và kết luận độ phức tạp!"
    ],
    checklist: [
      {
        id: "algo_io_bound",
        title: "1. Xác định Input / Output & Điều kiện biên",
        desc: "Nêu rõ dữ liệu vào/ra và kiểm tra trường hợp đặc biệt (ví dụ n < k hoặc k <= 0).",
        keywords: ["điều kiện", "biên", "n < k", "input", "output", "hợp lệ", "kiểm tra"],
        errorKey: "err_missing_bound",
        errorLabel: "Thiếu điều kiện biên / tóm tắt dữ kiện đầu vào",
        reason: "Trong bài tự luận thuật toán, bỏ qua trường hợp biên (như n < k) sẽ khiến chương trình lỗi hoặc lời giải thiếu chặt chẽ.",
        fixSuggestion: "Bổ sung ở đầu bài: 'Kiểm tra điều kiện biên: Nếu n < k thì không tồn tại dãy con thỏa mãn và kết thúc.'"
      },
      {
        id: "algo_method",
        title: "2. Nêu tên kỹ thuật / Nguyên lý áp dụng",
        desc: "Chỉ rõ phương pháp sử dụng (Kỹ thuật Cửa sổ trượt - Sliding Window).",
        keywords: ["cửa sổ trượt", "sliding window", "kỹ thuật", "ý tưởng", "nguyên lý"],
        errorKey: "err_missing_formula",
        errorLabel: "Thiếu căn cứ lý thuyết / tên phương pháp áp dụng",
        reason: "Người chấm cần biết bạn đang vận dụng kỹ thuật hay nguyên lý nào trước khi đi vào chi tiết các bước.",
        fixSuggestion: "Nêu rõ câu dẫn: 'Áp dụng kỹ thuật Cửa sổ trượt (Sliding Window) để tận dụng tổng của đoạn trước đó.'"
      },
      {
        id: "algo_steps",
        title: "3. Trình bày bước biến đổi / Công thức cập nhật",
        desc: "Mô tả bước tính tổng k phần tử đầu và công thức cộng A[i], trừ A[i-k].",
        keywords: ["a[i]", "a[i-k]", "trừ", "cộng", "window_sum", "max_sum", "cập nhật", "vòng lặp"],
        errorKey: "err_skip_steps",
        errorLabel: "Bỏ bước biến đổi trung gian / thiếu công thức cập nhật",
        reason: "Nếu chỉ nói 'trượt cửa sổ rồi tìm max' mà không ghi công thức chuyển tiếp, bài làm sẽ bị trừ điểm quá trình.",
        fixSuggestion: "Viết rõ công thức cập nhật tại mỗi bước lặp từ i = k đến n - 1: window_sum = window_sum + A[i] - A[i-k], sau đó so sánh với max_sum."
      },
      {
        id: "algo_conclusion",
        title: "4. Đánh giá độ phức tạp & Kết luận",
        desc: "Nêu độ phức tạp thời gian O(n), không gian O(1) và kết luận đáp án.",
        keywords: ["kết luận", "o(n)", "o(1)", "độ phức tạp", "thời gian", "không gian", "vậy"],
        errorKey: "err_missing_conclusion",
        errorLabel: "Quên kết luận tổng hợp & đánh giá độ phức tạp",
        reason: "Đề bài yêu cầu đánh giá độ phức tạp; dừng lại ngay sau khi viết thuật toán khiến bài làm chưa hoàn chỉnh.",
        fixSuggestion: "Thêm câu kết: 'Kết luận: Thuật toán trả về tổng lớn nhất max_sum với độ phức tạp thời gian O(n) và độ phức tạp không gian O(1).'"
      }
    ],
    sampleMissingDraft:
      "Ta tính tổng của k phần tử đầu tiên trong mảng để gán cho max_sum. Sau đó dùng một vòng lặp chạy từ vị trí k đến n-1, ở mỗi bước ta cộng thêm phần tử mới A[i] và trừ đi phần tử cũ A[i-k] để cập nhật lại window_sum và max_sum.",
    sampleGoodDraft:
      "1. Input/Output và điều kiện biên: Đầu vào là mảng A có n phần tử và số nguyên k. Kiểm tra điều kiện biên: nếu n < k thì dữ liệu không hợp lệ.\n2. Ý tưởng phương pháp: Áp dụng kỹ thuật cửa sổ trượt (Sliding Window) để tránh tính lại tổng nhiều lần.\n3. Các bước biến đổi: Bước đầu tính tổng k phần tử đầu tiên gán vào window_sum và max_sum. Tiếp theo duyệt vòng lặp i từ k đến n-1, cập nhật theo công thức window_sum = window_sum + A[i] - A[i-k], nếu lớn hơn max_sum thì cập nhật lại.\n4. Kết luận: Vậy thuật toán tìm được tổng lớn nhất với độ phức tạp thời gian là O(n) và độ phức tạp không gian bộ nhớ phụ là O(1).",
    modelSolution:
      "<strong>Khung lời giải chuẩn tham khảo:</strong><br>1. <em>Điều kiện biên:</em> Kiểm tra nếu $n < k$ thì thông báo không hợp lệ.<br>2. <em>Phương pháp:</em> Sử dụng kỹ thuật Cửa sổ trượt (Sliding Window).<br>3. <em>Quá trình thực hiện:</em> Tính tổng $k$ phần tử đầu tiên từ $A[0]$ đến $A[k-1]$ lưu vào `window_sum` và `max_sum`. Duyệt $i$ từ $k$ đến $n-1$: cập nhật `window_sum = window_sum + A[i] - A[i-k]`, cập nhật `max_sum = max(max_sum, window_sum)`.<br>4. <em>Kết luận:</em> Trả về `max_sum`. Độ phức tạp thời gian là $O(n)$ (chỉ duyệt mảng 1 lần) và không gian phụ là $O(1)$."
  },

  prob_calc: {
    id: "prob_calc",
    majorKey: "kinhte_kythuat",
    majorName: "Kinh tế / Kỹ thuật",
    subjectName: "Kinh tế vi mô & Quản trị sản xuất",
    typeName: "Bài tính toán",
    title: "Đề bài: Tính sản lượng hòa vốn và sản lượng đạt lợi nhuận mục tiêu",
    question:
      "Một xưởng sản xuất có tổng định phí (FC) là 120 triệu đồng/tháng. Chi phí biến đổi bình quân (AVC) là 60.000 đồng/sản phẩm, giá bán (P) là 100.000 đồng/sản phẩm. Hãy tính sản lượng hòa vốn trong tháng và sản lượng cần thiết để xưởng đạt lợi nhuận mục tiêu 40 triệu đồng/tháng.",
    hints: [
      "Mức 1 (Kiến thức nền): Nhớ lại điều kiện hòa vốn khi Tổng doanh thu (TR) bằng Tổng chi phí (TC), tức là phần lãi gộp trên mỗi đơn vị sản phẩm (P - AVC) vừa đủ bù đắp Tổng định phí (FC).",
      "Mức 2 (Bước tiếp theo): Đổi thống nhất đơn vị tính (ví dụ đổi tất cả ra đồng hoặc nghìn đồng). Dùng công thức sản lượng hòa vốn Q0 = FC / (P - AVC).",
      "Mức 3 (Cấu trúc lời giải): Để đạt lợi nhuận mục tiêu (LN), ta dùng công thức mở rộng Q1 = (FC + LN) / (P - AVC). Trình bày đủ 5 bước: Tóm tắt dữ kiện kèm đơn vị → Nêu công thức gốc → Thay số biến đổi → Kết quả kèm đơn vị → Kết luận."
    ],
    checklist: [
      {
        id: "calc_data",
        title: "1. Tóm tắt dữ kiện & Thống nhất đơn vị",
        desc: "Liệt kê FC, AVC, P, LN mục tiêu và quy đổi về cùng đơn vị tiền tệ.",
        keywords: ["tóm tắt", "fc =", "avc =", "p =", "triệu", "đồng", "đơn vị"],
        errorKey: "err_missing_bound",
        errorLabel: "Thiếu điều kiện biên / tóm tắt dữ kiện đầu vào",
        reason: "Trong bài tính toán, không tóm tắt và đổi đơn vị rất dễ dẫn đến sai lệch hàng nghìn/hàng triệu khi chia.",
        fixSuggestion: "Ghi rõ phần Tóm tắt ở đầu bài: FC = 120.000.000 đồng; AVC = 60.000 đồng/sp; P = 100.000 đồng/sp."
      },
      {
        id: "calc_formula",
        title: "2. Nêu công thức gốc trước khi thay số",
        desc: "Viết công thức Q = FC / (P - AVC) và Q_mt = (FC + LN) / (P - AVC).",
        keywords: ["công thức", "fc /", "(p - avc)", "p - avc", "fc + ln"],
        errorKey: "err_missing_formula",
        errorLabel: "Thiếu căn cứ lý thuyết / tên phương pháp áp dụng",
        reason: "Thay số vào tính ngay mà không viết công thức chữ sẽ làm mất điểm căn cứ lý thuyết dù ra đáp số đúng.",
        fixSuggestion: "Bổ sung dòng nêu công thức gốc: 'Áp dụng công thức sản lượng hòa vốn: Q0 = FC / (P - AVC).'"
      },
      {
        id: "calc_steps",
        title: "3. Thay số & Biến đổi trung gian rõ ràng",
        desc: "Thể hiện phép trừ lãi gộp (100.000 - 60.000 = 40.000) rồi mới chia.",
        keywords: ["120", "40.000", "3.000", "3000", "4.000", "4000", "160"],
        errorKey: "err_skip_steps",
        errorLabel: "Bỏ bước biến đổi trung gian / thiếu công thức cập nhật",
        reason: "Đi thẳng từ đề bài ra đáp số 3.000 và 4.000 sản phẩm khiến người chấm không thấy quá trình tính toán.",
        fixSuggestion: "Viết rõ phép thay số: Q0 = 120.000.000 / (100.000 - 60.000) = 120.000.000 / 40.000 = 3.000 (sản phẩm)."
      },
      {
        id: "calc_conclusion",
        title: "4. Kết luận đáp án kèm đơn vị chuẩn",
        desc: "Tổng hợp lại cả 2 câu hỏi của đề bài kèm đơn vị (sản phẩm/tháng).",
        keywords: ["kết luận", "vậy", "sản phẩm", "hòa vốn", "mục tiêu"],
        errorKey: "err_missing_conclusion",
        errorLabel: "Quên kết luận tổng hợp & đánh giá độ phức tạp",
        reason: "Thiếu câu kết luận tổng hợp kèm đơn vị 'sản phẩm/tháng' sẽ bị trừ điểm hoàn thiện bài.",
        fixSuggestion: "Thêm câu kết: 'Vậy xưởng cần đạt 3.000 sản phẩm/tháng để hòa vốn và 4.000 sản phẩm/tháng để đạt lợi nhuận 40 triệu đồng.'"
      }
    ],
    sampleMissingDraft:
      "Lấy 120 triệu chia cho (100.000 - 60.000) là 40.000 thì ra được 3.000. Còn muốn lãi 40 triệu thì lấy 160 triệu chia 40.000 bằng 4.000.",
    sampleGoodDraft:
      "1. Tóm tắt dữ kiện và đổi đơn vị: Định phí FC = 120.000.000 đồng; Chi phí biến đổi AVC = 60.000 đồng/sp; Giá bán P = 100.000 đồng/sp; Lợi nhuận mục tiêu LN = 40.000.000 đồng.\n2. Công thức áp dụng: Sản lượng hòa vốn Q0 = FC / (P - AVC) và sản lượng mục tiêu Q1 = (FC + LN) / (P - AVC).\n3. Thay số và biến đổi:\n- Q0 = 120.000.000 / (100.000 - 60.000) = 120.000.000 / 40.000 = 3.000 (sản phẩm).\n- Q1 = (120.000.000 + 40.000.000) / 40.000 = 160.000.000 / 40.000 = 4.000 (sản phẩm).\n4. Kết luận: Vậy xưởng cần sản xuất và tiêu thụ 3.000 sản phẩm/tháng để hòa vốn và 4.000 sản phẩm/tháng để đạt lợi nhuận 40 triệu đồng.",
    modelSolution:
      "<strong>Khung lời giải chuẩn tham khảo:</strong><br>1. <em>Tóm tắt & Đơn vị:</em> $FC = 120.000.000$ đ, $AVC = 60.000$ đ/sp, $P = 100.000$ đ/sp, $LN = 40.000.000$ đ.<br>2. <em>Công thức:</em> $Q_{0} = \\frac{FC}{P - AVC}$ và $Q_{1} = \\frac{FC + LN}{P - AVC}$.<br>3. <em>Thay số tính toán:</em> $Q_{0} = \\frac{120.000.000}{100.000 - 60.000} = 3.000$ (sản phẩm); $Q_{1} = \\frac{120.000.000 + 40.000.000}{40.000} = 4.000$ (sản phẩm).<br>4. <em>Kết luận:</em> Vậy sản lượng hòa vốn là 3.000 sản phẩm/tháng và sản lượng đạt lợi nhuận mục tiêu là 4.000 sản phẩm/tháng."
  },

  prob_tour: {
    id: "prob_tour",
    majorKey: "dulich",
    majorName: "Quản trị Du lịch & Khách sạn",
    subjectName: "Nghiệp vụ Lễ tân & Chăm sóc khách hàng",
    typeName: "Phân tích tình huống",
    title: "Đề bài: Xử lý sự cố khách đoàn nhận phòng trễ giờ quy định",
    question:
      "Một đoàn khách du lịch 25 người đến khách sạn lúc 14h00 (đúng giờ Check-in quy định) nhưng còn 4 phòng chưa dọn xong do khách ca trước trả phòng muộn. Trưởng đoàn tỏ thái độ bức xúc ngay tại quầy Lễ tân. Với vai trò Giám sát Lễ tân, bạn hãy phân tích và trình bày quy trình xử lý tình huống này.",
    hints: [
      "Mức 1 (Kiến thức nền): Khi khách đang nóng giận tại sảnh đông người, nguyên tắc đầu tiên là hạ nhiệt cảm xúc, tách khách khỏi khu vực trung tâm và áp dụng quy trình chuẩn xử lý phàn nàn (như mô hình LAST: Listen - Apologize - Solve - Thank).",
      "Mức 2 (Bước tiếp theo): Xác định vấn đề cốt lõi (khách mệt mỏi sau chuyến đi và cần thông tin minh bạch). Đưa ra giải pháp tức thời: giao trước các phòng đã xong, mời nước (Welcome Drink), báo thời gian chờ chính xác hoặc đổi phòng tương đương/nâng hạng.",
      "Mức 3 (Cấu trúc lời giải): Trình bày theo 4 phần: (1) Xác định vấn đề & nguyên tắc nghiệp vụ → (2) Các bước xử lý trực tiếp theo trình tự → (3) Dẫn chứng/Phương án đền bù cụ thể → (4) Kết luận & giải pháp phòng ngừa lặp lại."
    ],
    checklist: [
      {
        id: "tour_model",
        title: "1. Xác định vấn đề & Nguyên tắc nghiệp vụ (Căn cứ)",
        desc: "Nêu rõ nguyên tắc xử lý phàn nàn (ví dụ quy trình LAST) và vấn đề cốt lõi tại sảnh.",
        keywords: ["nguyên tắc", "quy trình", "last", "lắng nghe", "vấn đề", "đồng cảm"],
        errorKey: "err_missing_formula",
        errorLabel: "Thiếu căn cứ lý thuyết / tên phương pháp áp dụng",
        reason: "Giải quyết tình huống theo bản năng mà không nêu mô hình nghiệp vụ sẽ làm bài viết giống văn nói, thiếu tính học thuật.",
        fixSuggestion: "Mở đầu bằng việc nêu căn cứ: 'Áp dụng quy trình xử lý phàn nàn chuẩn LAST (Listen - Apologize - Solve - Thank) trong nghiệp vụ khách sạn.'"
      },
      {
        id: "tour_steps",
        title: "2. Trình bày các bước xử lý theo đúng trình tự",
        desc: "Lắng nghe, xin lỗi & tách khu vực → Giao phòng đã xong → Giải quyết 4 phòng còn lại.",
        keywords: ["xin lỗi", "sảnh", "giao trước", "buồng phòng", "thời gian", "bước"],
        errorKey: "err_wrong_order",
        errorLabel: "Trình bày thiếu bước hoặc chưa rõ trình tự ưu tiên",
        reason: "Nếu không tách trưởng đoàn ra khu vực yên tĩnh và giao trước các phòng đã có mà chỉ đứng giải thích lý do sẽ làm sảnh bị ùn tắc.",
        fixSuggestion: "Sắp xếp rõ theo các bước: B1 Lắng nghe, xin lỗi và mời đoàn ngồi khu vực Lounge → B2 Làm thủ tục nhận trước các phòng đã sẵn sàng → B3 Phối hợp bộ phận Housekeeping xử lý 4 phòng còn lại."
      },
      {
        id: "tour_evidence",
        title: "3. Đưa giải pháp cụ thể / Phương án thay thế (Dẫn chứng)",
        desc: "Nêu mốc thời gian cụ thể (15-20 phút), đổi phòng trống cùng hạng/nâng hạng, mời nước.",
        keywords: ["nâng hạng", "welcome drink", "mời nước", "15 phút", "20 phút", "voucher", "hành lý"],
        errorKey: "err_missing_evidence",
        errorLabel: "Thiếu dẫn chứng / phương án xử lý định lượng cụ thể",
        reason: "Chỉ viết 'cố gắng làm nhanh' là nhận định chung chung, chưa thể hiện kỹ năng điều phối thực tế của Giám sát Lễ tân.",
        fixSuggestion: "Bổ sung phương án cụ thể: 'Mời đoàn dùng Welcome Drink, hỗ trợ cất hành lý, kiểm tra phòng trống cùng hạng hoặc nâng hạng (Upgrade) miễn phí cho trưởng đoàn, cam kết giao phòng sau tối đa 15 phút.'"
      },
      {
        id: "tour_conclusion",
        title: "4. Kết luận & Bài học phòng ngừa lâu dài",
        desc: "Kiểm tra lại sự hài lòng của khách sau khi nhận phòng và rút kinh nghiệm điều phối.",
        keywords: ["kết luận", "phòng ngừa", "rút kinh nghiệm", "cảm ơn", "hài lòng", "phối hợp"],
        errorKey: "err_missing_conclusion",
        errorLabel: "Quên kết luận tổng hợp & đánh giá độ phức tạp",
        reason: "Bài phân tích tình huống dừng lại ngay khi giao xong chìa khóa là thiếu bước chăm sóc sau sự cố và bài học quản trị.",
        fixSuggestion: "Thêm phần kết luận: 'Kết luận: Gửi thư xin lỗi/đĩa trái cây lên phòng để cảm ơn sự thông cảm của đoàn, đồng thời họp rút kinh nghiệm giữa Lễ tân và Buồng phòng về quy trình cảnh báo phòng trả muộn.'"
      }
    ],
    sampleMissingDraft:
      "Lễ tân cần xin lỗi trưởng đoàn vì sự cố phòng chưa dọn kịp, mời đoàn ngồi ở sảnh đợi một lát rồi gọi điện giục bộ phận buồng phòng dọn nhanh 4 phòng còn lại để giao cho khách.",
    sampleGoodDraft:
      "1. Nguyên tắc nghiệp vụ: Áp dụng quy trình xử lý phàn nàn LAST (Lắng nghe - Xin lỗi - Giải quyết - Cảm ơn) để hạ nhiệt bức xúc tại sảnh.\n2. Trình tự các bước xử lý: Bước 1, Giám sát Lễ tân trực tiếp lắng nghe, đồng cảm và xin lỗi chân thành trưởng đoàn, mời đoàn di chuyển sang khu vực Lounge yên tĩnh. Bước 2, tiến hành giao chìa khóa trước cho các phòng đã dọn xong và hỗ trợ mang hành lý lên trước.\n3. Phương án cụ thể và đền bù: Mời cả đoàn dùng Welcome Drink miễn phí; kiểm tra hệ thống để đổi sang phòng trống cùng hạng hoặc nâng hạng (Upgrade) cho trưởng đoàn; nếu vẫn phải chờ thì cam kết mốc thời gian chính xác 15 phút và cử nhân viên buồng phòng tăng cường.\n4. Kết luận và phòng ngừa: Sau khi giao đủ phòng, gọi điện hỏi thăm sự hài lòng và gửi quà trái cây cảm ơn. Kết luận: Cần siết chặt quy trình phối hợp thông tin giữa Lễ tân và Buồng phòng vào khung giờ cao điểm.",
    modelSolution:
      "<strong>Khung lời giải chuẩn tham khảo:</strong><br>1. <em>Cơ sở nghiệp vụ:</em> Vận dụng mô hình LAST (Listen - Apologize - Solve - Thank).<br>2. <em>Quy trình xử lý tại chỗ:</em> Lắng nghe & xin lỗi chân thành, mời đoàn ra khu vực chờ riêng dùng Welcome Drink; giao trước các phòng đã sạch để đoàn cất hành lý.<br>3. <em>Giải pháp thay thế cụ thể:</em> Kiểm tra quỹ phòng để đổi phòng tương đương hoặc Upgrade miễn phí cho trưởng đoàn; báo chính xác thời gian hoàn tất (15 phút).<br>4. <em>Kết luận & Phòng ngừa:</em> Gửi thư cảm ơn/quà nhỏ lên phòng; hoàn thiện quy trình cảnh báo sớm Late Check-out giữa Lễ tân và Housekeeping."
  }
};

/* Danh mục mô tả gợi ý luyện tập cho Bảng Hồ sơ lỗi (Bước 4 Demo) */
const ERROR_CATALOG = {
  err_missing_bound: {
    label: "Thiếu điều kiện biên / tóm tắt dữ kiện đầu vào",
    practiceAdvice:
      "Luyện thói quen viết dòng 'Tóm tắt & Điều kiện xác định' ở 2 dòng đầu tiên trước khi bắt tay vào giải bất kỳ bài toán hay thuật toán nào."
  },
  err_missing_formula: {
    label: "Thiếu căn cứ lý thuyết / tên phương pháp áp dụng",
    practiceAdvice:
      "Thực hành quy tắc 'Nêu tên trước - Làm sau': Luôn viết câu dẫn nêu tên định lý, công thức gốc hoặc mô hình nghiệp vụ trước khi thay số/phân tích."
  },
  err_skip_steps: {
    label: "Bỏ bước biến đổi trung gian / thiếu công thức cập nhật",
    practiceAdvice:
      "Rèn luyện viết tối thiểu 1 dòng phép tính thay số hoặc công thức chuyển tiếp trung gian trước khi ghi kết quả cuối cùng."
  },
  err_missing_evidence: {
    label: "Thiếu dẫn chứng / phương án xử lý định lượng cụ thể",
    practiceAdvice:
      "Với mỗi nhận định trong bài phân tích tình huống/bài luận, hãy kèm theo ít nhất 1 con số, mốc thời gian hoặc ví dụ thực tế."
  },
  err_wrong_order: {
    label: "Trình bày thiếu bước hoặc chưa rõ trình tự ưu tiên",
    practiceAdvice:
      "Sử dụng cách đánh số thứ tự (Bước 1, Bước 2, Bước 3) để người chấm dễ dàng theo dõi mạch tư duy."
  },
  err_missing_conclusion: {
    label: "Quên kết luận tổng hợp ở cuối bài",
    practiceAdvice:
      "Dành 30 giây cuối cùng để kiểm tra từ khóa 'Vậy / Kết luận:' ở dòng cuối bài viết, đảm bảo trả lời khớp câu hỏi đề bài."
  }
};

/* Dữ liệu khởi tạo mặc định cho bảng Hồ sơ lỗi để người xem thấy ngay cách hoạt động */
const DEFAULT_ERROR_HISTORY = {
  err_missing_conclusion: 2,
  err_skip_steps: 1,
  err_missing_formula: 1
};

const STORAGE_KEYS = {
  THEME: "ai_tuluan_theme_pref",
  ERROR_HISTORY: "ai_tuluan_error_profile",
  CONSENT: "ai_tuluan_storage_consent"
};

/* ==========================================================================
   2. TIỆN ÍCH AN TOÀN CHO LOCALSTORAGE (CHỐNG LỖI TRÌNH DUYỆT CHẶN COOKIE)
   ========================================================================== */
const SafeStorage = {
  getItem(key, fallback = null) {
    try {
      const val = window.localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : fallback;
    } catch (err) {
      return fallback;
    }
  },
  setItem(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      return false;
    }
  },
  removeItem(key) {
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch (err) {
      return false;
    }
  }
};

/* ==========================================================================
   3. KHỞI TẠO GIAO DIỆN & SỰ KIỆN KHI TRANG TẢI XONG
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNavigation();
  initScrollSpyAndReveal();
  initStepperProcess();
  initRiskAccordion();
  initExampleTabs();
  initInteractiveDemo();
});

/* ==========================================================================
   4. CHẾ ĐỘ SÁNG / TỐI (LIGHT / DARK MODE)
   ========================================================================== */
function initThemeToggle() {
  const htmlEl = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  // Đọc lựa chọn đã lưu hoặc mặc định chế độ Sáng
  const savedTheme = SafeStorage.getItem(STORAGE_KEYS.THEME, "light");
  htmlEl.setAttribute("data-theme", savedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    htmlEl.setAttribute("data-theme", nextTheme);
    SafeStorage.setItem(STORAGE_KEYS.THEME, nextTheme);
  });
}

/* ==========================================================================
   5. MENU DI ĐỘNG (HAMBURGER) & ĐÓNG KHI CHỌN MỤC
   ========================================================================== */
function initMobileNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mainNav = document.getElementById("main-nav");
  if (!menuBtn || !mainNav) return;

  const navLinks = mainNav.querySelectorAll(".nav-link");

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("is-open", !isExpanded);
  });

  // Đóng menu khi người dùng bấm vào một liên kết trên mobile
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });
}

/* ==========================================================================
   6. HIỆU ỨNG CUỘN (INTERSECTION OBSERVER) & HIGHLIGHT MENU HIỆN TẠI
   ========================================================================== */
function initScrollSpyAndReveal() {
  // 6.1. Hiệu ứng fade-in khi cuộn tới từng phần tử .reveal-item
  const revealItems = document.querySelectorAll(".reveal-item");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // 6.2. Tự động làm nổi bật mục menu tương ứng với section đang xem
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              link.classList.toggle("active", href === `#${currentId}`);
            });
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((sec) => spyObserver.observe(sec));
  }
}

/* ==========================================================================
   7. MỤC 2: QUY TRÌNH 4 BƯỚC DẠNG STEPPER NGANG
   ========================================================================== */
function initStepperProcess() {
  const stepButtons = document.querySelectorAll(".stepper-nav .step-btn");
  const stepPanels = document.querySelectorAll(".stepper-content-box .step-panel");

  if (!stepButtons.length || !stepPanels.length) return;

  stepButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const stepNum = btn.getAttribute("data-step");

      // Cập nhật trạng thái nút
      stepButtons.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle("active", isCurrent);
        b.setAttribute("aria-selected", String(isCurrent));
      });

      // Hiển thị nội dung bước tương ứng
      stepPanels.forEach((panel) => {
        const isTarget = panel.id === `step-panel-${stepNum}`;
        panel.classList.toggle("active", isTarget);
        if (isTarget) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    });
  });
}

/* ==========================================================================
   8. MỤC 2: ACCORDION 5 RỦI RO VÀ CÁCH GIẢM THIỂU
   ========================================================================== */
function initRiskAccordion() {
  const triggers = document.querySelectorAll("#risk-accordion .accordion-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      const contentId = trigger.getAttribute("aria-controls");
      const contentEl = document.getElementById(contentId);
      const iconEl = trigger.querySelector(".accordion-icon");

      // Đổi trạng thái đóng/mở của mục được bấm
      trigger.setAttribute("aria-expanded", String(!isExpanded));
      if (iconEl) {
        iconEl.textContent = !isExpanded ? "−" : "+";
      }
      if (contentEl) {
        if (!isExpanded) {
          contentEl.removeAttribute("hidden");
        } else {
          contentEl.setAttribute("hidden", "");
        }
      }
    });
  });
}

/* ==========================================================================
   9. MỤC 3: CHUYỂN TAB VÍ DỤ TRƯỚC / AI PHẢN HỒI / SAU (CNTT & DU LỊCH)
   ========================================================================== */
function initExampleTabs() {
  const tabButtons = document.querySelectorAll(".example-tabs-nav .example-tab-btn");
  const tabPanels = document.querySelectorAll(".example-panel");

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabButtons.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle("active", isCurrent);
        b.setAttribute("aria-selected", String(isCurrent));
      });

      tabPanels.forEach((panel) => {
        const isMatch = panel.id === targetId;
        panel.classList.toggle("active", isMatch);
        if (isMatch) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    });
  });
}

/* ==========================================================================
   10. MỤC 5: LOGIC BẢN DEMO TƯƠNG TÁC (PROTOTYPE)
   ========================================================================== */
function initInteractiveDemo() {
  // Các phần tử DOM trong khu vực Demo
  const selectMajor = document.getElementById("select-major");
  const selectSubject = document.getElementById("select-subject");
  const selectType = document.getElementById("select-type");
  const selectProblem = document.getElementById("select-problem");

  const metaMajor = document.getElementById("demo-meta-major");
  const metaType = document.getElementById("demo-meta-type");
  const problemTitle = document.getElementById("demo-problem-title");
  const problemText = document.getElementById("demo-problem-text");

  const btnUnlockHint = document.getElementById("btn-unlock-hint");
  const btnResetHint = document.getElementById("btn-reset-hint");
  const hintCounter = document.getElementById("hint-counter");

  const solutionLockBox = document.getElementById("solution-lock-box");
  const solutionLockIcon = document.getElementById("solution-lock-icon");
  const solutionLockStatus = document.getElementById("solution-lock-status");
  const solutionContent = document.getElementById("solution-content");

  const checklistEl = document.getElementById("framework-checklist");
  const btnFillMissing = document.getElementById("btn-fill-missing");
  const btnFillGood = document.getElementById("btn-fill-good");

  const essayInput = document.getElementById("student-essay-input");
  const essayErrorMsg = document.getElementById("essay-error-msg");
  const wordCountEl = document.getElementById("essay-word-count");
  const btnClearEssay = document.getElementById("btn-clear-essay");
  const btnSubmitEssay = document.getElementById("btn-submit-essay");

  const feedbackContainer = document.getElementById("ai-feedback-container");
  const feedbackOverviewText = document.getElementById("feedback-overview-text");
  const feedbackConfidence = document.getElementById("feedback-confidence");
  const feedbackScoreRatio = document.getElementById("feedback-score-ratio");
  const feedbackDetailsGrid = document.getElementById("feedback-details-grid");

  const consentCheckbox = document.getElementById("consent-storage-checkbox");
  const btnClearHistory = document.getElementById("btn-clear-history");
  const storageStatusNote = document.getElementById("storage-status-note");
  const errorProfileTbody = document.getElementById("error-profile-tbody");

  if (!selectProblem || !essayInput) return;

  // Trạng thái hiện tại của phiên Demo
  let currentProblemKey = selectProblem.value || "prob_algo";
  let unlockedHintLevel = 0;
  let errorHistoryState = loadErrorHistoryState();

  // Khởi tạo trạng thái đồng ý lưu dữ liệu
  const savedConsent = SafeStorage.getItem(STORAGE_KEYS.CONSENT, true);
  if (consentCheckbox) {
    consentCheckbox.checked = Boolean(savedConsent);
  }

  /* ------------------------------------------------------------------------
     Hàm tải dữ liệu đề bài và đặt lại trạng thái khi chuyển đề
     ------------------------------------------------------------------------ */
  function renderProblem(problemKey) {
    const prob = DEMO_PROBLEMS[problemKey] || DEMO_PROBLEMS.prob_algo;
    currentProblemKey = prob.id;

    // Cập nhật thông tin Ngành, Môn, Dạng bài
    if (selectSubject) selectSubject.value = prob.subjectName;
    if (selectType) selectType.value = prob.typeName;
    if (selectMajor && selectMajor.value !== "all") {
      selectMajor.value = prob.majorKey;
    }

    if (metaMajor) metaMajor.textContent = `Ngành: ${prob.majorName}`;
    if (metaType) metaType.textContent = `Dạng: ${prob.typeName}`;
    if (problemTitle) problemTitle.textContent = prob.title;
    if (problemText) problemText.textContent = prob.question;

    // Đặt lại 3 mức gợi ý về trạng thái khóa
    resetHintsUI();

    // Khóa lại lời giải mẫu
    lockModelSolutionUI();

    // Render lại danh sách Checklist khung trình bày (trạng thái chờ ⬜)
    renderChecklistUI(prob.checklist, null);

    // Xóa bài nháp cũ và ẩn khung kết quả chấm cũ
    essayInput.value = "";
    updateWordCount();
    if (essayErrorMsg) essayErrorMsg.setAttribute("hidden", "");
    if (feedbackContainer) feedbackContainer.setAttribute("hidden", "");
  }

  /* ------------------------------------------------------------------------
     Xử lý mở khóa gợi ý từng mức (1 -> 2 -> 3)
     ------------------------------------------------------------------------ */
  function resetHintsUI() {
    unlockedHintLevel = 0;
    if (hintCounter) hintCounter.textContent = "0/3";
    if (btnUnlockHint) {
      btnUnlockHint.disabled = false;
      btnUnlockHint.innerHTML = `💡 Mình bí hướng giải (Mở gợi ý <span id="hint-counter">0/3</span>)`;
    }

    const defaultTexts = [
      'Bấm nút "Mình bí hướng giải" lần 1 để xem gợi ý kiến thức nền tảng.',
      'Bấm nút "Mình bí hướng giải" lần 2 để xem bước chuyển tiếp.',
      'Bấm nút "Mình bí hướng giải" lần 3 để xem phân tích luồng giải.'
    ];

    for (let i = 1; i <= 3; i++) {
      const itemEl = document.getElementById(`hint-level-${i}`);
      const textEl = document.getElementById(`hint-text-${i}`);
      if (itemEl) {
        itemEl.classList.remove("unlocked");
        itemEl.classList.add("locked");
        const statusSpan = itemEl.querySelector(".hint-status");
        if (statusSpan) statusSpan.textContent = "🔒 Chưa mở";
      }
      if (textEl) {
        textEl.textContent = defaultTexts[i - 1];
      }
    }
  }

  function unlockNextHint() {
    const prob = DEMO_PROBLEMS[currentProblemKey];
    if (!prob || unlockedHintLevel >= 3) return;

    unlockedHintLevel += 1;
    const itemEl = document.getElementById(`hint-level-${unlockedHintLevel}`);
    const textEl = document.getElementById(`hint-text-${unlockedHintLevel}`);

    if (itemEl) {
      itemEl.classList.remove("locked");
      itemEl.classList.add("unlocked");
      const statusSpan = itemEl.querySelector(".hint-status");
      if (statusSpan) statusSpan.textContent = "✓ Đã mở";
    }

    if (textEl) {
      textEl.textContent = prob.hints[unlockedHintLevel - 1];
    }

    // Cập nhật nút bấm
    if (unlockedHintLevel < 3) {
      btnUnlockHint.innerHTML = `💡 Mở tiếp gợi ý mức ${unlockedHintLevel + 1} (Đã mở ${unlockedHintLevel}/3)`;
    } else {
      btnUnlockHint.innerHTML = `✅ Đã mở hết 3/3 mức gợi ý (Hãy tự viết bài để mở khóa đáp án đối chiếu)`;
      btnUnlockHint.disabled = true;
    }
  }

  /* ------------------------------------------------------------------------
     Xử lý Khóa / Mở khóa Lời giải mẫu (Chỉ mở sau khi sinh viên nộp bài)
     ------------------------------------------------------------------------ */
  function lockModelSolutionUI() {
    if (!solutionLockBox || !solutionContent) return;
    solutionLockBox.classList.remove("unlocked");
    solutionLockBox.classList.add("locked");
    if (solutionLockIcon) solutionLockIcon.textContent = "🔒";
    if (solutionLockStatus) {
      solutionLockStatus.textContent =
        'Đang khóa để đảm bảo nguyên tắc "Đồng hành, không làm hộ". Chỉ mở sau khi bạn nhập bài làm và bấm Nộp.';
    }
    solutionContent.setAttribute("hidden", "");
    solutionContent.innerHTML = "";
  }

  function unlockModelSolutionUI(htmlContent) {
    if (!solutionLockBox || !solutionContent) return;
    solutionLockBox.classList.remove("locked");
    solutionLockBox.classList.add("unlocked");
    if (solutionLockIcon) solutionLockIcon.textContent = "🔓";
    if (solutionLockStatus) {
      solutionLockStatus.textContent =
        "Đã mở khóa sau khi bạn tự nộp bài! Bạn có thể đối chiếu cách trình bày chuẩn bên dưới:";
    }
    solutionContent.innerHTML = htmlContent;
    solutionContent.removeAttribute("hidden");
  }

  /* ------------------------------------------------------------------------
     Render danh sách Checklist Khung trình bày
     ------------------------------------------------------------------------ */
  function renderChecklistUI(checklistItems, evaluationResults) {
    if (!checklistEl) return;
    checklistEl.innerHTML = "";

    checklistItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "checklist-item";

      let indicator = "⬜";
      if (Array.isArray(evaluationResults) && evaluationResults[index]) {
        const isPresent = evaluationResults[index].isPresent;
        li.classList.add(isPresent ? "is-present" : "is-missing");
        indicator = isPresent ? "✅" : "⚠️";
      }

      li.innerHTML = `
        <span class="check-indicator" aria-hidden="true">${indicator}</span>
        <div class="check-info">
          <strong>${item.title}</strong>
          <small>${item.desc}</small>
        </div>
      `;
      checklistEl.appendChild(li);
    });
  }

  /* ------------------------------------------------------------------------
     Đếm số từ trong ô nhập bài làm của sinh viên
     ------------------------------------------------------------------------ */
  function countWords(text) {
    const trimmed = text.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }

  function updateWordCount() {
    if (!wordCountEl || !essayInput) return;
    const words = countWords(essayInput.value);
    wordCountEl.textContent = `Độ dài: ${words} từ`;
  }

  /* ------------------------------------------------------------------------
     Chấm đối chiếu bài làm của sinh viên với Khung trình bày
     ------------------------------------------------------------------------ */
  function evaluateStudentEssay() {
    const rawText = essayInput.value.trim();
    const wordTotal = countWords(rawText);

    // Kiểm tra lỗi để trống hoặc quá ngắn (< 5 từ)
    if (!rawText || wordTotal < 5) {
      if (essayErrorMsg) {
        essayErrorMsg.removeAttribute("hidden");
      }
      if (feedbackContainer) {
        feedbackContainer.setAttribute("hidden", "");
      }
      essayInput.focus();
      return;
    }

    if (essayErrorMsg) {
      essayErrorMsg.setAttribute("hidden", "");
    }

    const normalizedText = rawText.toLowerCase();
    const prob = DEMO_PROBLEMS[currentProblemKey];
    let matchedItemsCount = 0;

    // Kiểm tra từng mục trong Checklist bằng từ khóa kết hợp độ dài
    const evaluationResults = prob.checklist.map((item) => {
      const hasKeyword = item.keywords.some((kw) =>
        normalizedText.includes(kw.toLowerCase())
      );
      if (hasKeyword) {
        matchedItemsCount += 1;
      } else {
        // Ghi nhận lỗi thiếu mục này vào Hồ sơ lỗi của người học
        recordMissingError(item.errorKey);
      }

      return {
        ...item,
        isPresent: hasKeyword
      };
    });

    // Cập nhật lại Checklist bên trên với tích xanh / cảnh báo cam
    renderChecklistUI(prob.checklist, evaluationResults);

    // Mở khóa lời giải mẫu vì sinh viên đã tự nộp bài làm
    unlockModelSolutionUI(prob.modelSolution);

    // Hiển thị chi tiết kết quả phản hồi của AI
    renderFeedbackDetails(evaluationResults, matchedItemsCount, prob.checklist.length, wordTotal);

    // Cập nhật bảng Hồ sơ lỗi cá nhân (LocalStorage)
    renderErrorProfileTable();
  }

  function renderFeedbackDetails(results, matchedCount, totalCount, wordTotal) {
    if (!feedbackContainer || !feedbackDetailsGrid) return;

    // Ước lượng độ tin cậy dựa trên độ dài bài viết
    let confidenceLabel = "Trung bình - Cao (Đối chiếu từ khóa & cấu trúc)";
    if (wordTotal >= 45) {
      confidenceLabel = "Cao (Bài viết đủ độ dài & ngữ cảnh phân tích)";
    } else if (wordTotal < 15) {
      confidenceLabel = "Trung bình (Bài viết khá ngắn, nên diễn đạt đầy đủ câu)";
    }

    if (feedbackConfidence) feedbackConfidence.textContent = confidenceLabel;
    if (feedbackScoreRatio) feedbackScoreRatio.textContent = `${matchedCount}/${totalCount} mục đạt`;

    if (feedbackOverviewText) {
      if (matchedCount === totalCount) {
        feedbackOverviewText.textContent =
          "Tuyệt vời! Bài làm của bạn đã đáp ứng đầy đủ các phần trong khung trình bày đề xuất.";
      } else {
        const missingCount = totalCount - matchedCount;
        feedbackOverviewText.textContent =
          `AI ghi nhận ý tưởng giải của bạn, nhưng phát hiện bài viết còn thiếu ${missingCount} mục quan trọng trong khung trình bày. Xem chi tiết bên dưới để bổ sung:`;
      }
    }

    feedbackDetailsGrid.innerHTML = "";

    results.forEach((res) => {
      const card = document.createElement("div");
      card.className = `feedback-item-card ${res.isPresent ? "status-ok" : "status-missing"}`;

      if (res.isPresent) {
        card.innerHTML = `
          <h5>✅ [ĐÃ CÓ] ${res.title}</h5>
          <p><strong>Nhận xét:</strong> Bài làm của bạn đã trình bày được nội dung thuộc phần này. AI giữ nguyên cách diễn đạt của bạn.</p>
        `;
      } else {
        card.innerHTML = `
          <h5>⚠️ [THIẾU] ${res.title}</h5>
          <p><strong>Lý do mất điểm:</strong> ${res.reason}</p>
          <p><strong>💡 Gợi ý bổ sung:</strong> ${res.fixSuggestion}</p>
        `;
      }

      feedbackDetailsGrid.appendChild(card);
    });

    feedbackContainer.removeAttribute("hidden");
    feedbackContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ------------------------------------------------------------------------
     Quản lý Hồ sơ lỗi lặp lại của người dùng bằng LocalStorage
     ------------------------------------------------------------------------ */
  function loadErrorHistoryState() {
    const saved = SafeStorage.getItem(STORAGE_KEYS.ERROR_HISTORY, null);
    if (saved && typeof saved === "object") {
      return saved;
    }
    return { ...DEFAULT_ERROR_HISTORY };
  }

  function recordMissingError(errorKey) {
    if (!errorKey || !ERROR_CATALOG[errorKey]) return;

    errorHistoryState[errorKey] = (errorHistoryState[errorKey] || 0) + 1;

    // Chỉ lưu vào LocalStorage khi người dùng tích chọn đồng ý
    if (consentCheckbox && consentCheckbox.checked) {
      const ok = SafeStorage.setItem(STORAGE_KEYS.ERROR_HISTORY, errorHistoryState);
      if (storageStatusNote) {
        storageStatusNote.textContent = ok
          ? "✓ Đã cập nhật lỗi mới vào Hồ sơ lỗi trên trình duyệt của bạn."
          : "ℹ️ Trình duyệt đang chặn LocalStorage; dữ liệu hiển thị tạm thời trong phiên hiện tại.";
      }
    } else if (storageStatusNote) {
      storageStatusNote.textContent =
        "ℹ️ Bạn đang tắt tùy chọn lưu dữ liệu: Hồ sơ lỗi chỉ cập nhật tạm thời trên màn hình, không lưu vào trình duyệt.";
    }
  }

  function renderErrorProfileTable() {
    if (!errorProfileTbody) return;
    errorProfileTbody.innerHTML = "";

    const entries = Object.entries(errorHistoryState)
      .filter(([key, count]) => count > 0 && ERROR_CATALOG[key])
      .sort((a, b) => b[1] - a[1]);

    if (entries.length === 0) {
      errorProfileTbody.innerHTML = `
        <tr>
          <td colspan="3" style="text-align: center; color: var(--text-muted);">
            Chưa có dữ liệu lỗi trình bày nào được ghi nhận. Hãy thử nộp một bài nháp ở Bước 3!
          </td>
        </tr>
      `;
      return;
    }

    entries.forEach(([errorKey, count]) => {
      const info = ERROR_CATALOG[errorKey];
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${info.label}</strong></td>
        <td><span class="badge badge-warning">Lặp lại x${count} lần</span></td>
        <td>${info.practiceAdvice}</td>
      `;
      errorProfileTbody.appendChild(tr);
    });
  }

  /* ------------------------------------------------------------------------
     Gắn sự kiện tương tác cho các nút và dropdown trong Demo
     ------------------------------------------------------------------------ */
  // Đổi Ngành học -> Tự động chọn đề mẫu tương ứng với ngành đó
  if (selectMajor) {
    selectMajor.addEventListener("change", () => {
      const majorVal = selectMajor.value;
      if (majorVal === "cntt") {
        selectProblem.value = "prob_algo";
      } else if (majorVal === "kinhte_kythuat") {
        selectProblem.value = "prob_calc";
      } else if (majorVal === "dulich") {
        selectProblem.value = "prob_tour";
      }
      renderProblem(selectProblem.value);
    });
  }

  // Đổi đề bài mẫu trong dropdown
  selectProblem.addEventListener("change", () => {
    renderProblem(selectProblem.value);
  });

  // Nút mở gợi ý 3 mức & Đặt lại gợi ý
  if (btnUnlockHint) {
    btnUnlockHint.addEventListener("click", unlockNextHint);
  }
  if (btnResetHint) {
    btnResetHint.addEventListener("click", resetHintsUI);
  }

  // Hai nút điền nhanh bài nháp mẫu (Thiếu bước / Đầy đủ bước)
  if (btnFillMissing) {
    btnFillMissing.addEventListener("click", () => {
      const prob = DEMO_PROBLEMS[currentProblemKey];
      essayInput.value = prob.sampleMissingDraft;
      updateWordCount();
      if (essayErrorMsg) essayErrorMsg.setAttribute("hidden", "");
      essayInput.focus();
    });
  }

  if (btnFillGood) {
    btnFillGood.addEventListener("click", () => {
      const prob = DEMO_PROBLEMS[currentProblemKey];
      essayInput.value = prob.sampleGoodDraft;
      updateWordCount();
      if (essayErrorMsg) essayErrorMsg.setAttribute("hidden", "");
      essayInput.focus();
    });
  }

  // Sự kiện gõ phím trong ô bài làm
  essayInput.addEventListener("input", () => {
    updateWordCount();
    if (essayErrorMsg && countWords(essayInput.value) >= 5) {
      essayErrorMsg.setAttribute("hidden", "");
    }
  });

  // Nút xóa trắng bài làm
  if (btnClearEssay) {
    btnClearEssay.addEventListener("click", () => {
      essayInput.value = "";
      updateWordCount();
      if (essayErrorMsg) essayErrorMsg.setAttribute("hidden", "");
      if (feedbackContainer) feedbackContainer.setAttribute("hidden", "");
      renderChecklistUI(DEMO_PROBLEMS[currentProblemKey].checklist, null);
      lockModelSolutionUI();
    });
  }

  // Nút Nộp bài để nhận phản hồi
  if (btnSubmitEssay) {
    btnSubmitEssay.addEventListener("click", evaluateStudentEssay);
  }

  // Checkbox đồng ý lưu dữ liệu LocalStorage
  if (consentCheckbox) {
    consentCheckbox.addEventListener("change", () => {
      const isAllowed = consentCheckbox.checked;
      SafeStorage.setItem(STORAGE_KEYS.CONSENT, isAllowed);
      if (!isAllowed) {
        SafeStorage.removeItem(STORAGE_KEYS.ERROR_HISTORY);
        if (storageStatusNote) {
          storageStatusNote.textContent =
            "🔒 Đã tắt lưu trữ trình duyệt và xóa dữ liệu đã lưu trong LocalStorage.";
        }
      } else {
        SafeStorage.setItem(STORAGE_KEYS.ERROR_HISTORY, errorHistoryState);
        if (storageStatusNote) {
          storageStatusNote.textContent =
            "✓ Đã bật lưu trữ lịch sử lỗi trình bày trên trình duyệt này.";
        }
      }
    });
  }

  // Nút xóa toàn bộ lịch sử lỗi
  if (btnClearHistory) {
    btnClearHistory.addEventListener("click", () => {
      errorHistoryState = {};
      SafeStorage.removeItem(STORAGE_KEYS.ERROR_HISTORY);
      renderErrorProfileTable();
      if (storageStatusNote) {
        storageStatusNote.textContent = "🗑️ Đã xóa toàn bộ dữ liệu lịch sử lỗi cá nhân.";
      }
    });
  }

  // Khởi chạy lần đầu với đề bài mặc định
  renderProblem(currentProblemKey);
  renderErrorProfileTable();
}