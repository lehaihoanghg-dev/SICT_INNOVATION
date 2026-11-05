/**
 * ============================================================================
 * DỰ ÁN: AI ĐỒNG HÀNH CÙNG SINH VIÊN GIẢI VÀ TRÌNH BÀY BÀI TẬP TỰ LUẬN
 * Nhóm thực hiện: The Five Outlaws
 * Nguyên tắc cốt lõi: "ĐỒNG HÀNH TỪNG BƯỚC, LÀM MẪU CÓ ĐIỀU KIỆN"
 * ============================================================================
 */

"use strict";

/* ============================================================================
   1. KHO DỮ LIỆU MẪU (ĐẶT Ở ĐẦU FILE ĐỂ DỄ CHỈNH SỬA / MỞ RỘNG)
   - Gồm 3 đề bài mẫu đại diện cho 3 nhóm ngành:
     1) Bài tính toán (Kinh tế / Kỹ thuật)
     2) Phân tích tình huống (Du lịch)
     3) Bài lập trình / Thuật toán (Công nghệ thông tin)
   ============================================================================ */
const PROBLEM_DATABASE = {
  "prob-calc": {
    id: "prob-calc",
    major: "kinh-te-ky-thuat",
    subject: "tinh-toan",
    badge: "Dạng bài: Bài tính toán",
    criteria: "Tiêu chí: Đủ tóm tắt dữ kiện, công thức gốc, bước thay số, đơn vị & kết luận",
    title: "Đề 1: Tính sản lượng hòa vốn và kiểm tra mục tiêu lợi nhuận",
    description:
      "Một xưởng sản xuất có định phí (FC) là 120 triệu đồng/tháng, biến phí trên mỗi sản phẩm (AVC) là 60.000 đồng, giá bán (P) là 100.000 đồng/sản phẩm. Hãy tính sản lượng hòa vốn (Q0) và cho biết nếu xưởng bán được 4.000 sản phẩm/tháng thì đạt lợi nhuận bao nhiêu?",

    // 3 mức gợi ý từ nhẹ đến chi tiết (Đồng hành bước giải)
    hints: [
      {
        level: 1,
        title: "Mức 1 — Nhắc kiến thức & công thức liên quan",
        content:
          "Điểm hòa vốn là mức sản lượng mà tại đó Tổng doanh thu (TR) bằng Tổng chi phí (TC), tức lợi nhuận bằng 0. Bạn hãy nhớ lại 2 công thức: (1) Sản lượng hòa vốn Q0 = FC / (P - AVC) và (2) Lợi nhuận = (P - AVC) × Q - FC."
      },
      {
        level: 2,
        title: "Mức 2 — Định hướng bước tiếp theo cần làm",
        content:
          "Trước khi thay số, bạn hãy đổi tất cả số liệu về cùng đơn vị (đồng) để tránh sai số: FC = 120.000.000 đồng, P = 100.000 đồng, AVC = 60.000 đồng. Sau đó tính phần lãi trên biến phí đơn vị (P - AVC) rồi suy ra Q0."
      },
      {
        level: 3,
        title: "Mức 3 — Phân tích chi tiết cách giải & trình bày",
        content:
          "Lãi trên biến phí mỗi sản phẩm là 100.000 - 60.000 = 40.000 đồng. Lấy FC chia cho 40.000 sẽ ra Q0. Với Q = 4.000 sản phẩm (vượt Q0 là 1.000 sản phẩm), bạn nhân phần vượt (hoặc thay thẳng vào công thức lợi nhuận) rồi viết câu kết luận đầy đủ đơn vị."
      }
    ],

    // Lời giải mẫu từng bước: mỗi bước có "Làm gì" và "Vì sao làm vậy"
    modelSolution: [
      {
        stepTitle: "Bước 1: Tóm tắt dữ kiện và đồng nhất đơn vị tính",
        whatToDo:
          "Tóm tắt: Định phí FC = 120.000.000 đồng/tháng; Biến phí đơn vị AVC = 60.000 đồng/SP; Giá bán P = 100.000 đồng/SP; Sản lượng dự kiến Q = 4.000 SP/tháng.",
        whyDoIt:
          "Đề bài cho FC theo 'triệu đồng' còn P và AVC theo 'đồng'. Tóm tắt và đổi về cùng đơn vị ngay từ đầu giúp tránh lỗi chia sai hàng nghìn/triệu và giúp người chấm dễ theo dõi."
      },
      {
        stepTitle: "Bước 2: Nêu công thức gốc cần áp dụng",
        whatToDo:
          "Áp dụng công thức sản lượng hòa vốn: Q0 = FC / (P - AVC). Công thức lợi nhuận theo sản lượng Q: LN = TR - TC = (P - AVC) × Q - FC.",
        whyDoIt:
          "Trong bài tự luận tính toán, nêu công thức gốc trước khi thay số là căn cứ lý thuyết bắt buộc. Nếu tính nhầm số học ở bước sau, bạn vẫn giữ được điểm phần công thức."
      },
      {
        stepTitle: "Bước 3: Thay số và biến đổi trung gian từng bước",
        whatToDo:
          "• Tính sản lượng hòa vốn: Q0 = 120.000.000 / (100.000 - 60.000) = 120.000.000 / 40.000 = 3.000 (sản phẩm).\n• Tính lợi nhuận khi Q = 4.000 SP: LN = (100.000 - 60.000) × 4.000 - 120.000.000 = 160.000.000 - 120.000.000 = 40.000.000 (đồng).",
        whyDoIt:
          "Viết rõ phép trừ trung gian (100.000 - 60.000 = 40.000) thể hiện rõ quá trình tư duy, tránh lỗi 'đi thẳng từ đề sang đáp án' gây mất điểm bước giải."
      },
      {
        stepTitle: "Bước 4: Kết luận hoàn chỉnh trả lời câu hỏi đề bài",
        whatToDo:
          "Kết luận: Vậy xưởng cần đạt sản lượng hòa vốn là 3.000 sản phẩm/tháng. Nếu bán được 4.000 sản phẩm/tháng, xưởng sẽ thu được lợi nhuận là 40.000.000 đồng (40 triệu đồng).",
        whyDoIt:
          "Câu kết luận giúp khép lại bài toán trọn vẹn, khẳng định lại đáp số gắn với ngữ cảnh thực tế của đề bài và kèm đơn vị chuẩn."
      }
    ],

    // Khung trình bày chuẩn (Checklist dùng để chấm bố cục & sắp xếp lại bài làm)
    framework: [
      {
        id: "calc-data",
        errorKey: "Thiếu tóm tắt dữ kiện & đơn vị",
        title: "1. Tóm tắt dữ kiện & đơn vị",
        desc: "Liệt kê FC, AVC, P, Q và quy đổi thống nhất đơn vị tính.",
        keywords: ["tóm tắt", "dữ kiện", "ta có", "fc =", "fc=", "avc", "120.000.000", "định phí", "biến phí"],
        missingReason: "Chưa thấy phần tóm tắt dữ kiện và quy đổi đơn vị (120 triệu đồng = 120.000.000 đồng).",
        fixSuggestion: "Mở đầu bài bằng dòng 'Tóm tắt dữ kiện: FC = 120.000.000 đồng, AVC = 60.000 đồng, P = 100.000 đồng...'",
        practiceAdvice: "Luyện tập thói quen viết khối 'Tóm tắt & Đổi đơn vị' ở 2 dòng đầu tiên cho mọi bài toán kinh tế/vật lý."
      },
      {
        id: "calc-formula",
        errorKey: "Thiếu nêu công thức hoặc căn cứ",
        title: "2. Nêu công thức gốc áp dụng",
        desc: "Viết rõ công thức Q0 = FC / (P - AVC) và công thức Lợi nhuận trước khi thay số.",
        keywords: ["công thức", "áp dụng", "P - AVC", "p - avc", "P-AVC", "TR - TC", "tr - tc", "FC /", "fc /"],
        missingReason: "Bạn đã tính toán ngay mà chưa viết công thức tổng quát Q0 = FC / (P - AVC).",
        fixSuggestion: "Bổ sung dòng nêu rõ: 'Áp dụng công thức sản lượng hòa vốn Q0 = FC / (P - AVC) và Lợi nhuận LN = (P - AVC) × Q - FC'.",
        practiceAdvice: "Rèn bài tập: Luôn viết công thức bằng chữ/ký hiệu trước rồi mới xuống dòng thay số."
      },
      {
        id: "calc-steps",
        errorKey: "Bỏ bước biến đổi trung gian",
        title: "3. Thay số & biến đổi từng bước",
        desc: "Thể hiện bước thay số cụ thể (100.000 - 60.000 = 40.000; 160.000.000 - 120.000.000).",
        keywords: ["40.000", "40000", "160.000.000", "160 triệu", "100.000 - 60.000", "thay số", "× 4.000", "* 4000", "* 4.000"],
        missingReason: "Bài làm đi thẳng ra kết quả mà thiếu bước thay số và phép tính trung gian.",
        fixSuggestion: "Viết rõ bước thay số: Q0 = 120.000.000 / (100.000 - 60.000) = 120.000.000 / 40.000 = 3.000.",
        practiceAdvice: "Luyện viết đầy đủ các bước biến đổi đại số trung gian, không bấm máy tính rồi ghi mỗi đáp số."
      },
      {
        id: "calc-result",
        errorKey: "Thiếu đáp số kèm đơn vị chuẩn",
        title: "4. Kết quả tính toán kèm đơn vị",
        desc: "Nêu đúng 2 đáp số: 3.000 sản phẩm và 40.000.000 đồng (hoặc 40 triệu đồng).",
        keywords: ["3.000", "3000", "40.000.000", "40 triệu"],
        missingReason: "Chưa thấy rõ cả hai kết quả tính toán (3.000 sản phẩm và 40 triệu đồng) kèm đơn vị.",
        fixSuggestion: "Kiểm tra lại kết quả: Q0 = 3.000 (sản phẩm) và LN = 40.000.000 (đồng).",
        practiceAdvice: "Sau mỗi phép tính, luôn mở ngoặc ghi rõ đơn vị tính như (sản phẩm), (đồng)."
      },
      {
        id: "calc-conclusion",
        errorKey: "Quên kết luận cuối bài",
        title: "5. Kết luận hoàn chỉnh",
        desc: "Tổng hợp lại câu trả lời cuối cùng bắt đầu bằng 'Vậy...' hoặc 'Kết luận:'.",
        keywords: ["vậy", "kết luận", "tóm lại", "như vậy", "đạt lợi nhuận là"],
        missingReason: "Bài làm dừng lại ngay sau phép tính mà quên câu kết luận tổng hợp.",
        fixSuggestion: "Thêm câu cuối: 'Vậy sản lượng hòa vốn là 3.000 sản phẩm/tháng và lợi nhuận ở mức 4.000 sản phẩm là 40 triệu đồng.'",
        practiceAdvice: "Tập thói quen luôn dành 1 câu cuối bắt đầu bằng chữ 'Vậy...' để chốt lại câu hỏi đề bài."
      }
    ],

    // Bài mẫu điền nhanh để thử nghiệm
    sampleAnswers: {
      flawed:
        "Ta có định phí FC = 120 triệu, giá P = 100.000, biến phí AVC = 60.000.\nSuy ra sản lượng hòa vốn Q0 = 3.000 sản phẩm.\nKhi bán 4.000 sản phẩm thì lợi nhuận đạt được là 40 triệu đồng.",
      good:
        "Tóm tắt dữ kiện: Định phí FC = 120.000.000 đồng/tháng; biến phí đơn vị AVC = 60.000 đồng/sản phẩm; giá bán P = 100.000 đồng/sản phẩm; Q = 4.000 sản phẩm.\nÁp dụng công thức tính sản lượng hòa vốn: Q0 = FC / (P - AVC) và công thức lợi nhuận: LN = (P - AVC) × Q - FC.\nThay số vào công thức: Q0 = 120.000.000 / (100.000 - 60.000) = 120.000.000 / 40.000 = 3.000 (sản phẩm).\nKhi bán Q = 4.000 sản phẩm, thay số ta có: LN = 40.000 × 4.000 - 120.000.000 = 160.000.000 - 120.000.000 = 40.000.000 (đồng).\nKết luận: Vậy sản lượng hòa vốn của xưởng là 3.000 sản phẩm/tháng và khi bán 4.000 sản phẩm thì xưởng đạt lợi nhuận 40.000.000 đồng."
    }
  },

  "prob-tour": {
    id: "prob-tour",
    major: "du-lich",
    subject: "tinh-huong",
    badge: "Dạng bài: Phân tích tình huống Du lịch",
    criteria: "Tiêu chí: Tóm tắt sự cố, phân tích tâm lý/nguyên nhân, quy trình xử lý, căn cứ & phòng ngừa",
    title: "Đề 2: Xử lý sự cố xe đón đoàn khách đến trễ 45 phút tại sân bay",
    description:
      "Đoàn khách du lịch gồm 25 người (trong đó có nhiều người cao tuổi) vừa hạ cánh xuống sân bay nhưng xe ô tô đón đoàn gặp sự cố kẹt xe nghiêm trọng, dự kiến đến trễ 45 phút. Thời tiết oi bức khiến khách bắt đầu mệt mỏi và bức xúc phàn nàn. Là Hướng dẫn viên (HDV), bạn hãy phân tích và trình bày cách xử lý tình huống trên.",

    hints: [
      {
        level: 1,
        title: "Mức 1 — Nhắc kiến thức & quy tắc nghiệp vụ liên quan",
        content:
          "Trong nghiệp vụ hướng dẫn du lịch, khi xảy ra sự cố dịch vụ chậm trễ, bạn cần áp dụng quy trình xử lý phàn nàn chuẩn (Lắng nghe - Xin lỗi - Đưa giải pháp tại chỗ - Đền bù/Dự phòng - Rút kinh nghiệm) và đặc biệt ưu tiên sức khỏe người cao tuổi."
      },
      {
        level: 2,
        title: "Mức 2 — Định hướng các phần cần triển khai",
        content:
          "Đừng chỉ viết gộp một đoạn 'xin lỗi rồi mời uống nước'. Hãy chia bài làm thành các phần: (1) Nhận diện vấn đề & mức độ ảnh hưởng, (2) Nguyên nhân & tâm lý khách, (3) Các bước xử lý tại sân bay, (4) Phương án điều hành dự phòng và (5) Kết luận phòng ngừa."
      },
      {
        level: 3,
        title: "Mức 3 — Phân tích chi tiết giải pháp ăn điểm",
        content:
          "Cụ thể hóa hành động: Đưa đoàn vào khu vực sảnh máy lạnh có ghế ngồi trong nhà ga thay vì đứng ngoài trời nắng; mời nước mát; thông báo trung thực thời gian chờ (45 phút); báo ngay cho bộ phận Điều hành công ty để theo dõi định vị xe hoặc điều xe hỗ trợ nếu kẹt lâu hơn."
      }
    ],

    modelSolution: [
      {
        stepTitle: "Bước 1: Tóm tắt vấn đề cốt lõi của tình huống",
        whatToDo:
          "Sự cố: Xe đón đoàn 25 khách (có người cao tuổi) đến sân bay trễ 45 phút do giao thông giữa thời tiết oi bức, khách mệt mỏi và bức xúc. Mục tiêu cần đạt: Ổn định tâm lý, đảm bảo sức khỏe cho đoàn và giữ uy tín công ty lữ hành.",
        whyDoIt:
          "Mở đầu bằng việc xác định đúng bản chất sự cố và mục tiêu xử lý giúp người chấm thấy bạn đọc hiểu trọn vẹn bối cảnh đề bài trước khi đi vào hành động."
      },
      {
        stepTitle: "Bước 2: Phân tích nguyên nhân và tâm lý các bên liên quan",
        whatToDo:
          "Nguyên nhân khách quan do sự cố giao thông đột xuất, nhưng về mặt dịch vụ, khách hàng vừa trải qua chuyến bay dài, gặp thời tiết nóng và có người già nên rất dễ kiệt sức và mất kiên nhẫn nếu phải đứng chờ bị động.",
        whyDoIt:
          "Phân tích tâm lý và đối tượng đặc thù (người cao tuổi) là cơ sở lập luận giải thích vì sao HDV phải ưu tiên tìm chỗ nghỉ mát trước khi giải thích dài dòng."
      },
      {
        stepTitle: "Bước 3: Đề xuất quy trình xử lý từng bước tại hiện trường",
        whatToDo:
          "1) Tiếp nhận & Xin lỗi: Bình tĩnh lắng nghe, thay mặt công ty xin lỗi chân thành.\n2) Chăm sóc tức thời: Nhanh chóng di chuyển đoàn vào khu vực sảnh chờ có điều hòa và ghế ngồi cho người cao tuổi; chủ động mua nước suối mát mời đoàn.\n3) Minh bạch thông tin: Thông báo rõ lý do bất khả kháng, mốc thời gian xe đến và giữ tương tác tích cực.",
        whyDoIt:
          "Sắp xếp hành động theo trình tự ưu tiên (Tâm lý & Sức khỏe → Thông tin) thể hiện tư duy nghiệp vụ chuyên nghiệp, không bị rối loạn."
      },
      {
        stepTitle: "Bước 4: Phối hợp điều hành & Căn cứ lý thuyết nghiệp vụ",
        whatToDo:
          "Áp dụng quy trình xử lý phàn nàn dịch vụ (LAST: Listen - Apologize - Solve - Thank). Đồng thời, liên hệ chặt với bộ phận Điều hành lữ hành và tài xế qua GPS để cập nhật lộ trình, sẵn sàng phương án thuê xe trung chuyển tại sân bay nếu kẹt xe kéo dài quá 45 phút.",
        whyDoIt:
          "Nêu tên quy trình nghiệp vụ (LAST) và phương án dự phòng với bộ phận Điều hành giúp bài làm có căn cứ lý thuyết vững chắc, vượt trội so với câu trả lời cảm tính."
      },
      {
        stepTitle: "Bước 5: Bài học phòng ngừa & Kết luận",
        whatToDo:
          "Kết luận: Khi xe đến, hỗ trợ hành lý nhanh và gửi lời cảm ơn sự thông cảm của đoàn. Bài học quản trị: Luôn yêu cầu xe đón có mặt tại sân bay trước giờ hạ cánh ít nhất 30–45 phút và theo dõi bản đồ giao thông theo thời gian thực.",
        whyDoIt:
          "Phần rút ra bài học phòng ngừa cho thấy tư duy quản trị rủi ro dài hạn, giúp bài tự luận tình huống hoàn chỉnh tuyệt đối."
      }
    ],

    framework: [
      {
        id: "tour-summary",
        errorKey: "Thiếu tóm tắt vấn đề cốt lõi",
        title: "1. Tóm tắt vấn đề cốt lõi",
        desc: "Xác định rõ sự cố (trễ 45 phút, 25 khách có người cao tuổi, trời nóng) và mục tiêu xử lý.",
        keywords: ["tóm tắt", "sự cố", "vấn đề", "25 khách", "45 phút", "mục tiêu", "tình huống"],
        missingReason: "Bạn đi thẳng vào hành động mà chưa tóm tắt bối cảnh sự cố và mục tiêu cần giải quyết.",
        fixSuggestion: "Mở bài bằng 1-2 câu tóm tắt: Sự cố xe đón trễ 45 phút với đoàn 25 khách có người cao tuổi dưới thời tiết nóng bức.",
        practiceAdvice: "Với bài tình huống, luôn mở đầu bằng mục '1. Nhận diện vấn đề & Mục tiêu xử lý'."
      },
      {
        id: "tour-cause",
        errorKey: "Thiếu phân tích tâm lý & nguyên nhân",
        title: "2. Phân tích nguyên nhân & tâm lý khách",
        desc: "Nêu nguyên nhân khách quan (kẹt xe) và đặc điểm tâm lý/sức khỏe của người cao tuổi sau chuyến bay.",
        keywords: ["nguyên nhân", "tâm lý", "người cao tuổi", "người già", "mệt mỏi", "khách quan", "sức khỏe"],
        missingReason: "Chưa phân tích yếu tố tâm lý khách hàng và đối tượng người cao tuổi trong đoàn.",
        fixSuggestion: "Bổ sung ý phân tích: Khách vừa bay xong, trời oi bức, đặc biệt có người cao tuổi nên ưu tiên hàng đầu là sức khỏe và chỗ ngồi mát.",
        practiceAdvice: "Tập phân tích 'Ai là đối tượng nhạy cảm nhất trong tình huống' trước khi đưa ra giải pháp."
      },
      {
        id: "tour-steps",
        errorKey: "Thiếu quy trình xử lý theo bước",
        title: "3. Giải pháp xử lý theo trình tự bước",
        desc: "Xin lỗi chân thành → Đưa đoàn vào sảnh máy lạnh/ghế ngồi → Mời nước uống → Thông báo thời gian.",
        keywords: ["xin lỗi", "nước", "sảnh", "máy lạnh", "điều hòa", "ghế ngồi", "bước 1", "trước tiên"],
        missingReason: "Các bước xử lý tại chỗ chưa rõ ràng (cần nêu đủ: xin lỗi, đưa vào sảnh mát có ghế ngồi, mời nước).",
        fixSuggestion: "Trình bày rõ từng bước: (1) Xin lỗi & lắng nghe, (2) Đưa đoàn vào sảnh điều hòa có ghế ngồi, (3) Mời nước mát.",
        practiceAdvice: "Sử dụng cách đánh số 1, 2, 3 cho các bước hành động của Hướng dẫn viên."
      },
      {
        id: "tour-theory",
        errorKey: "Thiếu căn cứ nghiệp vụ & phối hợp điều hành",
        title: "4. Căn cứ nghiệp vụ & Phương án điều hành",
        desc: "Nêu quy trình chuẩn (như LAST) và phối hợp bộ phận Điều hành/Tài xế để có phương án dự phòng.",
        keywords: ["điều hành", "quy trình", "last", "dự phòng", "tài xế", "công ty", "nghiệp vụ", "phương án"],
        missingReason: "Thiếu căn cứ lý thuyết nghiệp vụ (quy trình xử lý phàn nàn) và sự phối hợp với bộ phận Điều hành công ty.",
        fixSuggestion: "Bổ sung việc áp dụng quy trình LAST và liên hệ bộ phận Điều hành lữ hành để theo dõi vị trí xe / chuẩn bị xe dự phòng.",
        practiceAdvice: "Luôn gắn giải pháp thực tế với ít nhất 1 thuật ngữ/quy trình môn học và sự phối hợp nội bộ."
      },
      {
        id: "tour-conclusion",
        errorKey: "Quên bài học phòng ngừa & kết luận",
        title: "5. Bài học phòng ngừa & Kết luận",
        desc: "Cảm ơn đoàn khi lên xe và rút ra quy định kiểm soát giờ xe đón để không lặp lại sự cố.",
        keywords: ["kết luận", "phòng ngừa", "bài học", "rút kinh nghiệm", "vậy", "tóm lại", "trước 30"],
        missingReason: "Bài làm thiếu phần kết luận và giải pháp quản trị phòng ngừa sự cố tương tự trong tương lai.",
        fixSuggestion: "Thêm mục cuối: 'Kết luận & Phòng ngừa: Yêu cầu nhà xe có mặt trước giờ hạ cánh 30-45 phút ở các chuyến sau.'",
        practiceAdvice: "Mọi bài Case Study quản trị/du lịch đều cần mục kết bài: 'Bài học kinh nghiệm & Phòng ngừa'."
      }
    ],

    sampleAnswers: {
      flawed:
        "Em sẽ xin lỗi cả đoàn khách ngay lập tức vì sự cố kẹt xe ngoài ý muốn. Sau đó em dẫn đoàn vào chỗ mát trong sân bay ngồi nghỉ và mua nước suối mời mọi người uống để hạ nhiệt rồi đợi xe tới đón.",
      good:
        "1. Tóm tắt vấn đề: Đoàn 25 khách có người cao tuổi gặp sự cố xe đón trễ 45 phút tại sân bay giữa trời nóng, mục tiêu là ổn định tâm lý và sức khỏe cho đoàn.\n2. Phân tích nguyên nhân & tâm lý: Nguyên nhân khách quan do kẹt xe, nhưng khách vừa bay dài, đặc biệt người cao tuổi rất dễ mệt mỏi khi đứng chờ dưới thời tiết oi bức.\n3. Các bước xử lý tại chỗ: Trước tiên, HDV bình tĩnh lắng nghe và xin lỗi chân thành. Tiếp theo, đưa đoàn vào sảnh chờ có điều hòa và ghế ngồi ưu tiên cho người già, chủ động mua nước mát mời đoàn và thông báo rõ thời gian xe đến.\n4. Căn cứ nghiệp vụ & Điều hành: Áp dụng quy trình xử lý phàn nàn LAST, đồng thời báo ngay cho bộ phận Điều hành công ty và tài xế để theo dõi lộ trình hoặc điều phương án xe dự phòng.\n5. Kết luận & Phòng ngừa: Vậy quy trình trên giúp hóa giải bức xúc của khách; bài học rút ra là điều hành cần yêu cầu xe có mặt tại sân bay trước giờ hạ cánh ít nhất 30 phút."
    }
  },

  "prob-algo": {
    id: "prob-algo",
    major: "cntt",
    subject: "lap-trinh",
    badge: "Dạng bài: Lập trình / Thuật toán CNTT",
    criteria: "Tiêu chí: Xác định Input/Output, ý tưởng thuật toán, mã giả/code, độ phức tạp & kiểm thử",
    title: "Đề 3: Trình bày thuật toán kiểm tra mảng đối xứng (Palindrome Array)",
    description:
      "Cho mảng một chiều A gồm n số nguyên (n ≥ 1). Mảng A được gọi là đối xứng nếu đọc từ trái sang phải hay từ phải sang trái đều giống nhau (tức A[i] = A[n - 1 - i] với mọi i). Hãy trình bày thuật toán kiểm tra mảng A có đối xứng hay không và đánh giá độ phức tạp của thuật toán.",

    hints: [
      {
        level: 1,
        title: "Mức 1 — Nhắc kiến thức & tính chất mảng đối xứng",
        content:
          "Trong mảng có chỉ số từ 0 đến n - 1, phần tử đầu tiên A[0] đối xứng với phần tử cuối A[n - 1], phần tử A[i] đối xứng với A[n - 1 - i]. Bạn chỉ cần kiểm tra đến giữa mảng (i < n / 2)."
      },
      {
        level: 2,
        title: "Mức 2 — Định hướng kỹ thuật hai con trỏ (Two Pointers)",
        content:
          "Đặt chỉ số trái left = 0 và phải right = n - 1 (hoặc duyệt i từ 0 đến n/2 - 1). Nếu tại bước bất kỳ mà A[left] != A[right] thì kết luận ngay mảng KHÔNG đối xứng (return false). Nếu duyệt hết mà không vi phạm thì return true."
      },
      {
        level: 3,
        title: "Mức 3 — Lưu ý trình bày bài tự luận thuật toán để đạt điểm tối đa",
        content:
          "Đừng chỉ viết mỗi hàm code! Hãy trình bày đủ 5 mục chuẩn: (1) Đặc tả Input/Output, (2) Ý tưởng thuật toán bằng lời, (3) Mã giả hoặc Code C++/Java, (4) Đánh giá độ phức tạp thời gian O(n), không gian O(1), và (5) Chạy thử với 1 mảng mẫu kèm kết luận."
      }
    ],

    modelSolution: [
      {
        stepTitle: "Bước 1: Xác định rõ Input, Output và điều kiện biên",
        whatToDo:
          "• Input: Số nguyên dương n (n ≥ 1) và mảng số nguyên A[0..n-1].\n• Output: Trả về TRUE (Đúng) nếu mảng A đối xứng, ngược lại trả về FALSE (Sai).",
        whyDoIt:
          "Đặc tả Input/Output ở đầu bài giúp xác định rõ kiểu dữ liệu đầu vào, chỉ số mảng bắt đầu từ 0 và giá trị trả về của thuật toán."
      },
      {
        stepTitle: "Bước 2: Trình bày ý tưởng thuật toán (Kỹ thuật 2 con trỏ)",
        whatToDo:
          "Ý tưởng: Sử dụng hai chỉ số (hoặc duyệt i từ 0 đến n/2 - 1) để so sánh từng cặp phần tử đối xứng nhau qua tâm mảng là A[i] và A[n - 1 - i]. Nếu phát hiện bất kỳ cặp nào khác nhau (A[i] ≠ A[n - 1 - i]), thuật toán dừng sớm và trả về FALSE. Nếu duyệt hết nửa mảng mà mọi cặp đều bằng nhau, trả về TRUE.",
        whyDoIt:
          "Giảng viên chấm tự luận CNTT rất coi trọng phần giải thích ý tưởng bằng lời trước khi viết code để đánh giá tư duy giải quyết vấn đề."
      },
      {
        stepTitle: "Bước 3: Cài đặt thuật toán (Mã giả / C++)",
        whatToDo:
          "bool isPalindrome(int A[], int n) {\n  for (int i = 0; i < n / 2; i++) {\n    if (A[i] != A[n - 1 - i]) return false;\n  }\n  return true;\n}",
        whyDoIt:
          "Viết hàm rõ ràng, thụt lề sạch sẽ và dừng vòng lặp tại n / 2 giúp giảm một nửa số phép so sánh không cần thiết."
      },
      {
        stepTitle: "Bước 4: Đánh giá độ phức tạp thuật toán (Time & Space Complexity)",
        whatToDo:
          "• Độ phức tạp thời gian (Time Complexity): Trường hợp tốt nhất O(1) (khi A[0] ≠ A[n-1]); trường hợp xấu nhất duyệt n/2 phần tử nên độ phức tạp là O(n).\n• Độ phức tạp không gian (Space Complexity): Chỉ dùng biến chạy i nên bộ nhớ phụ là O(1).",
        whyDoIt:
          "Đề bài yêu cầu đánh giá thuật toán; nếu thiếu phân tích O(n) và O(1), sinh viên thường mất 20%–30% số điểm của câu."
      },
      {
        stepTitle: "Bước 5: Kiểm thử với bộ test mẫu & Kết luận",
        whatToDo:
          "Kiểm thử: Với A = [1, 3, 5, 3, 1] (n = 5): i = 0 (A[0]=A[4]=1), i = 1 (A[1]=A[3]=3) → Kết quả trả về TRUE.\nKết luận: Vậy thuật toán kiểm tra chính xác tính đối xứng của mảng trong thời gian tuyến tính O(n) và tối ưu bộ nhớ O(1).",
        whyDoIt:
          "Chạy tay (dry-run) trên một ví dụ nhỏ và chốt lại câu kết luận chứng minh thuật toán của bạn hoạt động đúng với cả mảng có số phần tử lẻ/chẵn."
      }
    ],

    framework: [
      {
        id: "algo-io",
        errorKey: "Thiếu đặc tả Input / Output",
        title: "1. Xác định Input / Output",
        desc: "Nêu rõ đầu vào (mảng A, kích thước n) và đầu ra (True/False hoặc Đối xứng/Không đối xứng).",
        keywords: ["input", "output", "đầu vào", "đầu ra", "trả về", "n phần tử"],
        missingReason: "Bạn chưa đặc tả rõ Input (đầu vào) và Output (đầu ra) của bài toán.",
        fixSuggestion: "Thêm mục đầu tiên: 'Input: Mảng A gồm n số nguyên. Output: True nếu đối xứng, False nếu không đối xứng.'",
        practiceAdvice: "Luôn viết 2 dòng Input / Output ở đầu mọi bài thi tự luận Cấu trúc dữ liệu & Giải thuật."
      },
      {
        id: "algo-idea",
        errorKey: "Thiếu giải thích ý tưởng thuật toán",
        title: "2. Ý tưởng thuật toán",
        desc: "Giải thích bằng lời cách so sánh cặp phần tử đối xứng A[i] và A[n - 1 - i] từ hai đầu vào giữa.",
        keywords: ["ý tưởng", "so sánh", "con trỏ", "duyệt", "n/2", "n / 2", "cặp phần tử", "hai đầu"],
        missingReason: "Bài làm chỉ có code mà thiếu phần trình bày ý tưởng thuật toán bằng lời.",
        fixSuggestion: "Viết 2-3 câu mô tả ý tưởng: Duyệt từ đầu đến giữa mảng (n/2), so sánh cặp A[i] và A[n-1-i].",
        practiceAdvice: "Tránh thói quen nhảy vào viết code ngay; hãy diễn giải ý tưởng thuật toán trong 1 đoạn ngắn trước."
      },
      {
        id: "algo-code",
        errorKey: "Thiếu mã giả hoặc code cài đặt",
        title: "3. Mã giả (Pseudocode) hoặc Code cài đặt",
        desc: "Trình bày vòng lặp for/while kiểm tra điều kiện A[i] != A[n - 1 - i].",
        keywords: ["for", "while", "return", "if", "a[i]", "a[left]", "bool", "void", "!="],
        missingReason: "Chưa thấy đoạn mã giả (pseudocode) hoặc đoạn code cài đặt thuật toán.",
        fixSuggestion: "Bổ sung hàm kiểm tra sử dụng vòng lặp for (i = 0 -> n/2) hoặc while (left < right).",
        practiceAdvice: "Luyện viết mã giả hoặc hàm C++/Java ngắn gọn, rõ điều kiện dừng vòng lặp."
      },
      {
        id: "algo-complexity",
        errorKey: "Thiếu đánh giá độ phức tạp O(n)",
        title: "4. Đánh giá độ phức tạp (Thời gian & Bộ nhớ)",
        desc: "Chỉ rõ độ phức tạp thời gian O(n) và độ phức tạp không gian O(1).",
        keywords: ["độ phức tạp", "o(n)", "o(1)", "thời gian", "bộ nhớ", "không gian", "tuyến tính"],
        missingReason: "Bạn quên đánh giá độ phức tạp thời gian O(n) và không gian bộ nhớ O(1).",
        fixSuggestion: "Thêm dòng: 'Độ phức tạp thời gian là O(n) do duyệt tối đa n/2 bước; độ phức tạp không gian là O(1).'",
        practiceAdvice: "Sau khi viết code xong, luôn tự hỏi: Thuật toán này tốn bao nhiêu thời gian O(?) và bộ nhớ O(?)."
      },
      {
        id: "algo-conclusion",
        errorKey: "Thiếu ví dụ kiểm thử & kết luận",
        title: "5. Kiểm thử ví dụ & Kết luận",
        desc: "Minh họa nhanh với 1 mảng mẫu (ví dụ [1, 2, 1]) và kết luận tính đúng đắn.",
        keywords: ["ví dụ", "kiểm thử", "test", "kết luận", "vậy", "tóm lại"],
        missingReason: "Thiếu ví dụ minh họa chạy thử (test case) và câu kết luận cuối bài.",
        fixSuggestion: "Thêm 1 ví dụ ngắn: 'Ví dụ A = [1, 3, 1] -> trả về True. Kết luận: Thuật toán tối ưu với thời gian O(n).'",
        practiceAdvice: "Luôn lấy 1 mảng nhỏ 3-5 phần tử để chạy thử từng bước ở cuối bài tự luận thuật toán."
      }
    ],

    sampleAnswers: {
      flawed:
        "bool check(int A[], int n) {\n  for(int i = 0; i < n/2; i++) {\n    if(A[i] != A[n - 1 - i]) return false;\n  }\n  return true;\n}",
      good:
        "1. Input / Output: Input là mảng số nguyên A có n phần tử (n >= 1); Output trả về True nếu mảng đối xứng, False nếu ngược lại.\n2. Ý tưởng thuật toán: Duyệt chỉ số i từ 0 đến n/2 - 1 để so sánh cặp phần tử đối xứng A[i] và A[n - 1 - i] từ hai đầu tiến vào giữa.\n3. Cài đặt thuật toán:\nbool isPalindrome(int A[], int n) {\n  for (int i = 0; i < n / 2; i++) {\n    if (A[i] != A[n - 1 - i]) return false;\n  }\n  return true;\n}\n4. Độ phức tạp: Vòng lặp chạy tối đa n/2 lần nên độ phức tạp thời gian là O(n) và độ phức tạp không gian bộ nhớ phụ là O(1).\n5. Kiểm thử & Kết luận: Ví dụ với mảng A = [1, 2, 3, 2, 1], các cặp bằng nhau nên trả về True. Vậy thuật toán giải quyết đúng bài toán với hiệu năng tối ưu."
    }
  }
};

/* ============================================================================
   2. TRẠNG THÁI ỨNG DỤNG (STATE) & LƯU TRỮ AN TOÀN (LOCALSTORAGE)
   ============================================================================ */
const STORAGE_KEYS = {
  THEME: "tfo_ai_tuluan_theme",
  PROFILE: "tfo_ai_tuluan_profile_v1",
  CONSENT: "tfo_ai_tuluan_consent"
};

// Trạng thái phiên làm việc hiện tại của khu vực Demo
const demoState = {
  currentProblemId: "prob-calc",
  unlockedHintLevel: 0, // 0 -> 3
  confirmedTriedAfterHints: false,
  modelSolutionOpen: false,
  unlockedSolutionStep: 1,
  solutionCountedForCurrentProblem: false,
  hasSubmittedCurrent: false,
  lastEvaluation: null
};

// Dữ liệu hồ sơ mặc định (dùng cả khi localStorage bị chặn)
let memoryProfile = {
  submittedCount: 0,
  solutionViewsCount: 0,
  errorCounts: {}, // Ví dụ: { "Quên kết luận cuối bài": 3 }
  errorAdvices: {} // Lưu gợi ý luyện tập tương ứng với lỗi
};

/**
 * Đọc dữ liệu từ localStorage an toàn với try/catch
 */
function safeGetStorage(key, fallbackValue = null) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallbackValue;
  } catch (err) {
    return fallbackValue;
  }
}

/**
 * Ghi dữ liệu vào localStorage an toàn với try/catch
 */
function safeSetStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Xóa dữ liệu khỏi localStorage an toàn với try/catch
 */
function safeRemoveStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    // Bỏ qua nếu trình duyệt chặn localStorage
  }
}

/* ============================================================================
   3. KHỞI TẠO GIAO DIỆN CHUNG (THEME, MENU MOBILE, SCROLL REVEAL, TABS)
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Đánh dấu trình duyệt đã bật JS để kích hoạt hiệu ứng cuộn mượt
  document.body.classList.add("js-enabled");

  initThemeToggle();
  initMobileNavigation();
  initScrollRevealAndSpy();
  initCycleNodesInteraction();
  initFeasibilityStepper();
  initRiskAccordion();
  initExampleTabs();
  initDemoWorkspace();
});

/**
 * 3.1 Chuyển đổi chế độ Sáng / Tối (Lưu lựa chọn vào localStorage)
 */
function initThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = safeGetStorage(STORAGE_KEYS.THEME, null);

  if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  if (!themeBtn) return;
  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    safeSetStorage(STORAGE_KEYS.THEME, nextTheme);
  });
}

/**
 * 3.2 Menu Hamburger trên thiết bị di động
 */
function initMobileNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mainNav = document.getElementById("main-nav");
  if (!menuBtn || !mainNav) return;

  const toggleMenu = (forceClose = false) => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    const nextState = forceClose ? false : !isExpanded;
    menuBtn.setAttribute("aria-expanded", String(nextState));
    mainNav.classList.toggle("open", nextState);
  };

  menuBtn.addEventListener("click", () => toggleMenu(false));

  // Tự động đóng menu khi bấm vào một mục điều hướng trên mobile
  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(true));
  });
}

/**
 * 3.3 Hiệu ứng Fade-in khi cuộn (IntersectionObserver) & Đánh dấu mục Menu đang xem
 */
function initScrollRevealAndSpy() {
  const revealElements = document.querySelectorAll(".reveal");
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // Highlight mục menu tương ứng với section đang cuộn tới
  const sections = document.querySelectorAll("main section[id], footer[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const isMatch = link.getAttribute("href") === `#${currentId}`;
              link.classList.toggle("active", isMatch);
            });
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((sec) => spyObserver.observe(sec));
  }
}

/**
 * 3.4 Sơ đồ "Vòng lặp mất điểm" (Mục 1): Hỗ trợ chạm/bấm hoặc nhấn phím Enter/Space
 */
function initCycleNodesInteraction() {
  const nodes = document.querySelectorAll(".cycle-node");
  nodes.forEach((node) => {
    node.addEventListener("click", () => {
      nodes.forEach((n) => n.classList.remove("is-active"));
      node.classList.add("is-active");
    });

    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        nodes.forEach((n) => n.classList.remove("is-active"));
        node.classList.add("is-active");
      }
    });
  });
}

/**
 * 3.5 Quy trình 4 bước dạng Stepper ngang (Mục 2)
 */
function initFeasibilityStepper() {
  const stepButtons = document.querySelectorAll(".stepper-btn");
  const stepPanels = document.querySelectorAll(".step-panel");
  if (!stepButtons.length) return;

  stepButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetStep = btn.getAttribute("data-step");

      stepButtons.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle("active", isCurrent);
        b.setAttribute("aria-selected", String(isCurrent));
      });

      stepPanels.forEach((panel) => {
        const isMatch = panel.id === `step-panel-${targetStep}`;
        panel.classList.toggle("active", isMatch);
        panel.hidden = !isMatch;
      });
    });
  });
}

/**
 * 3.6 Bảng "Rủi ro và cách giảm thiểu" dạng Accordion (Mục 2)
 */
function initRiskAccordion() {
  const accordionContainer = document.getElementById("risk-accordion");
  if (!accordionContainer) return;

  const headers = accordionContainer.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";
      const bodyId = header.getAttribute("aria-controls");
      const bodyEl = document.getElementById(bodyId);
      const iconEl = header.querySelector(".accordion-icon");

      const nextState = !isExpanded;
      header.setAttribute("aria-expanded", String(nextState));
      if (bodyEl) bodyEl.hidden = !nextState;
      if (iconEl) iconEl.textContent = nextState ? "−" : "+";
    });
  });
}

/**
 * 3.7 Tab chuyển đổi 2 ví dụ minh họa Trước / AI phản hồi / Sau (Mục 3)
 */
function initExampleTabs() {
  const tabBtns = document.querySelectorAll(".example-tab-btn");
  const tabPanels = document.querySelectorAll(".example-panel");
  if (!tabBtns.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetKey = btn.getAttribute("data-example");

      tabBtns.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle("active", isCurrent);
        b.setAttribute("aria-selected", String(isCurrent));
      });

      tabPanels.forEach((panel) => {
        const isMatch = panel.id === `ex-panel-${targetKey}`;
        panel.classList.toggle("active", isMatch);
        panel.hidden = !isMatch;
      });
    });
  });
}

/* ============================================================================
   4. LOGIC BẢN DEMO TƯƠNG TÁC (MỤC 5)
   ============================================================================ */
function initDemoWorkspace() {
  const selectMajor = document.getElementById("select-major");
  const selectSubject = document.getElementById("select-subject");
  const selectProblem = document.getElementById("select-problem");

  const btnHint = document.getElementById("btn-hint");
  const btnConfirmTried = document.getElementById("btn-confirm-tried");
  const btnModelSolution = document.getElementById("btn-model-solution");
  const btnNextSolutionStep = document.getElementById("btn-next-solution-step");

  const studentAnswerInput = document.getElementById("student-answer");
  const btnFillFlawed = document.getElementById("btn-fill-flawed");
  const btnFillGood = document.getElementById("btn-fill-good");
  const btnSubmitAnswer = document.getElementById("btn-submit-answer");
  const btnRewriteFrame = document.getElementById("btn-rewrite-frame");

  const consentCheckbox = document.getElementById("consent-storage");
  const btnClearStorage = document.getElementById("btn-clear-storage");

  if (!selectProblem || !studentAnswerInput) return;

  // Khởi tạo hồ sơ học tập từ localStorage
  loadProfileFromStorage();

  // Đồng bộ khi chọn Ngành học
  if (selectMajor) {
    selectMajor.addEventListener("change", () => {
      const majorVal = selectMajor.value;
      if (majorVal === "kinh-te-ky-thuat") {
        selectSubject.value = "tinh-toan";
        selectProblem.value = "prob-calc";
      } else if (majorVal === "du-lich") {
        selectSubject.value = "tinh-huong";
        selectProblem.value = "prob-tour";
      } else if (majorVal === "cntt") {
        selectSubject.value = "lap-trinh";
        selectProblem.value = "prob-algo";
      }
      loadProblem(selectProblem.value);
    });
  }

  // Đồng bộ khi chọn Môn học & Dạng bài
  if (selectSubject) {
    selectSubject.addEventListener("change", () => {
      const subVal = selectSubject.value;
      if (subVal === "tinh-toan") {
        selectProblem.value = "prob-calc";
        if (selectMajor) selectMajor.value = "kinh-te-ky-thuat";
      } else if (subVal === "tinh-huong") {
        selectProblem.value = "prob-tour";
        if (selectMajor) selectMajor.value = "du-lich";
      } else if (subVal === "lap-trinh") {
        selectProblem.value = "prob-algo";
        if (selectMajor) selectMajor.value = "cntt";
      }
      loadProblem(selectProblem.value);
    });
  }

  // Đồng bộ khi chọn trực tiếp Đề bài mẫu
  selectProblem.addEventListener("change", () => {
    const probId = selectProblem.value;
    const probData = PROBLEM_DATABASE[probId];
    if (probData) {
      if (selectMajor) selectMajor.value = probData.major;
      if (selectSubject) selectSubject.value = probData.subject;
      loadProblem(probId);
    }
  });

  // Sự kiện nút "Mình bí hướng giải" (Mở gợi ý 3 mức)
  if (btnHint) {
    btnHint.addEventListener("click", handleUnlockNextHint);
  }

  // Sự kiện nút xác nhận "Mình đã thử suy nghĩ rồi, cho mình xem lời giải mẫu"
  if (btnConfirmTried) {
    btnConfirmTried.addEventListener("click", () => {
      demoState.confirmedTriedAfterHints = true;
      const confirmBox = document.getElementById("confirm-tried-box");
      if (confirmBox) confirmBox.hidden = true;
      updateModelSolutionLockState();
      openModelSolution();
    });
  }

  // Sự kiện nút "Xem lời giải mẫu"
  if (btnModelSolution) {
    btnModelSolution.addEventListener("click", openModelSolution);
  }

  // Sự kiện nút "Bước tiếp theo" trong lời giải mẫu
  if (btnNextSolutionStep) {
    btnNextSolutionStep.addEventListener("click", () => {
      const prob = PROBLEM_DATABASE[demoState.currentProblemId];
      if (!prob) return;
      if (demoState.unlockedSolutionStep < prob.modelSolution.length) {
        demoState.unlockedSolutionStep += 1;
        renderModelSolutionSteps();
      }
    });
  }

  // Theo dõi khi sinh viên gõ bài làm
  studentAnswerInput.addEventListener("input", () => {
    updateEditorStats();
    updateModelSolutionLockState();
    const errBox = document.getElementById("editor-error-msg");
    if (errBox && studentAnswerInput.value.trim().length > 0) {
      errBox.hidden = true;
    }
  });

  // Hai nút điền nhanh bài mẫu ("Điền thử bài thiếu bước" & "Điền thử bài đủ khung")
  if (btnFillFlawed) {
    btnFillFlawed.addEventListener("click", () => {
      const prob = PROBLEM_DATABASE[demoState.currentProblemId];
      if (!prob) return;
      studentAnswerInput.value = prob.sampleAnswers.flawed;
      updateEditorStats();
      updateModelSolutionLockState();
      const errBox = document.getElementById("editor-error-msg");
      if (errBox) errBox.hidden = true;
    });
  }

  if (btnFillGood) {
    btnFillGood.addEventListener("click", () => {
      const prob = PROBLEM_DATABASE[demoState.currentProblemId];
      if (!prob) return;
      studentAnswerInput.value = prob.sampleAnswers.good;
      updateEditorStats();
      updateModelSolutionLockState();
      const errBox = document.getElementById("editor-error-msg");
      if (errBox) errBox.hidden = true;
    });
  }

  // Nút "Nộp để nhận phản hồi"
  if (btnSubmitAnswer) {
    btnSubmitAnswer.addEventListener("click", handleEvaluateSubmission);
  }

  // Nút "Gợi ý trình bày lại bài của tôi"
  if (btnRewriteFrame) {
    btnRewriteFrame.addEventListener("click", handleRewriteByFramework);
  }

  // Quản lý đồng ý lưu dữ liệu & xóa dữ liệu localStorage
  if (consentCheckbox) {
    consentCheckbox.addEventListener("change", () => {
      safeSetStorage(STORAGE_KEYS.CONSENT, consentCheckbox.checked);
      if (consentCheckbox.checked) {
        saveProfileToStorage();
      } else {
        safeRemoveStorage(STORAGE_KEYS.PROFILE);
      }
    });
  }

  if (btnClearStorage) {
    btnClearStorage.addEventListener("click", () => {
      memoryProfile = {
        submittedCount: 0,
        solutionViewsCount: 0,
        errorCounts: {},
        errorAdvices: {}
      };
      safeRemoveStorage(STORAGE_KEYS.PROFILE);
      renderUserProfile();
    });
  }

  // Nạp đề bài mặc định ban đầu
  loadProblem(demoState.currentProblemId);
}

/**
 * Nạp dữ liệu một đề bài mẫu vào toàn bộ khu vực Demo
 */
function loadProblem(problemId) {
  const prob = PROBLEM_DATABASE[problemId];
  if (!prob) return;

  demoState.currentProblemId = problemId;
  demoState.unlockedHintLevel = 0;
  demoState.confirmedTriedAfterHints = false;
  demoState.modelSolutionOpen = false;
  demoState.unlockedSolutionStep = 1;
  demoState.solutionCountedForCurrentProblem = false;
  demoState.hasSubmittedCurrent = false;
  demoState.lastEvaluation = null;

  // Cập nhật thông tin đề bài
  const badgeEl = document.getElementById("demo-problem-badge");
  const criteriaEl = document.getElementById("demo-problem-criteria");
  const titleEl = document.getElementById("demo-problem-title");
  const descEl = document.getElementById("demo-problem-desc");

  if (badgeEl) badgeEl.textContent = prob.badge;
  if (criteriaEl) criteriaEl.textContent = prob.criteria;
  if (titleEl) titleEl.textContent = prob.title;
  if (descEl) descEl.textContent = prob.description;

  // Xóa ô nhập và ẩn các hộp kết quả cũ
  const answerInput = document.getElementById("student-answer");
  if (answerInput) answerInput.value = "";
  updateEditorStats();

  const errBox = document.getElementById("editor-error-msg");
  const feedbackBox = document.getElementById("feedback-result");
  const rewriteBox = document.getElementById("rewrite-result");
  const confirmTriedBox = document.getElementById("confirm-tried-box");
  const solutionContainer = document.getElementById("model-solution-container");
  const btnRewrite = document.getElementById("btn-rewrite-frame");

  if (errBox) errBox.hidden = true;
  if (feedbackBox) feedbackBox.hidden = true;
  if (rewriteBox) rewriteBox.hidden = true;
  if (confirmTriedBox) confirmTriedBox.hidden = true;
  if (solutionContainer) solutionContainer.hidden = true;

  if (btnRewrite) {
    btnRewrite.disabled = true;
    btnRewrite.setAttribute("aria-disabled", "true");
  }

  // Render lại Checklist Khung trình bày, Gợi ý 3 mức & Khóa lời giải mẫu
  renderFrameworkChecklist(null);
  renderHints();
  updateModelSolutionLockState();
}

/**
 * Render danh sách Checklist Khung trình bày
 * @param {Object|null} evaluationMap - Map kết quả kiểm tra từng mục (true/false)
 */
function renderFrameworkChecklist(evaluationMap) {
  const listEl = document.getElementById("framework-checklist");
  const prob = PROBLEM_DATABASE[demoState.currentProblemId];
  if (!listEl || !prob) return;

  listEl.innerHTML = "";
  prob.framework.forEach((item) => {
    const li = document.createElement("li");
    li.className = "checklist-item";

    let iconText = "⬜";
    let statusLabel = "";

    if (evaluationMap && Object.prototype.hasOwnProperty.call(evaluationMap, item.id)) {
      const isPresent = evaluationMap[item.id];
      li.classList.add(isPresent ? "is-present" : "is-missing");
      iconText = isPresent ? "✅" : "⚠️";
      statusLabel = isPresent ? " — Đã có trong bài" : " — Đang thiếu";
    }

    li.innerHTML = `
      <span class="check-status-icon" aria-hidden="true">${iconText}</span>
      <div>
        <span class="check-item-title">${escapeHtml(item.title)}${statusLabel}</span>
        <span class="check-item-desc">${escapeHtml(item.desc)}</span>
      </div>
    `;
    listEl.appendChild(li);
  });
}

/**
 * Mở tuần tự từng mức gợi ý (Mức 1 -> Mức 2 -> Mức 3)
 */
function handleUnlockNextHint() {
  const prob = PROBLEM_DATABASE[demoState.currentProblemId];
  if (!prob) return;

  if (demoState.unlockedHintLevel < prob.hints.length) {
    demoState.unlockedHintLevel += 1;
    renderHints();
    updateModelSolutionLockState();
  }
}

/**
 * Render các mức gợi ý đã mở
 */
function renderHints() {
  const prob = PROBLEM_DATABASE[demoState.currentProblemId];
  const counterEl = document.getElementById("hint-counter");
  const btnHint = document.getElementById("btn-hint");
  const containerEl = document.getElementById("hints-container");
  if (!prob || !containerEl) return;

  const totalHints = prob.hints.length;
  if (counterEl) {
    counterEl.textContent = `${demoState.unlockedHintLevel}/${totalHints}`;
  }

  if (btnHint) {
    const allUnlocked = demoState.unlockedHintLevel >= totalHints;
    btnHint.disabled = allUnlocked;
    btnHint.setAttribute("aria-disabled", String(allUnlocked));
    if (allUnlocked) {
      btnHint.innerHTML = `✅ Đã mở đủ <span id="hint-counter">${totalHints}/${totalHints}</span> mức gợi ý`;
    } else {
      btnHint.innerHTML = `🤔 Mình bí hướng giải (<span id="hint-counter">${demoState.unlockedHintLevel}/${totalHints}</span>)`;
    }
  }

  if (demoState.unlockedHintLevel === 0) {
    containerEl.innerHTML = `
      <p class="empty-hint-msg">
        Bạn hãy thử suy nghĩ hướng giải trước. Nếu bí, bấm nút <strong>“Mình bí hướng giải”</strong> để AI mở gợi ý từng mức nhé!
      </p>
    `;
    return;
  }

  containerEl.innerHTML = "";
  for (let i = 0; i < demoState.unlockedHintLevel; i++) {
    const hint = prob.hints[i];
    const div = document.createElement("div");
    div.className = "hint-item";
    div.innerHTML = `
      <span class="hint-level-badge">${escapeHtml(hint.title)}</span>
      <p>${escapeHtml(hint.content)}</p>
    `;
    containerEl.appendChild(div);
  }
}

/**
 * Kiểm tra điều kiện mở khóa nút "Xem lời giải mẫu" (Làm mẫu có điều kiện):
 * 1) Sinh viên đã tự nhập bài làm (ít nhất 2 dòng HOẶC >= 50 ký tự)
 * 2) HOẶC sinh viên đã mở hết 3 mức gợi ý và bấm nút xác nhận đã tự thử
 */
function updateModelSolutionLockState() {
  const answerInput = document.getElementById("student-answer");
  const statusEl = document.getElementById("solution-lock-status");
  const btnSolution = document.getElementById("btn-model-solution");
  const confirmBox = document.getElementById("confirm-tried-box");
  const prob = PROBLEM_DATABASE[demoState.currentProblemId];

  if (!answerInput || !statusEl || !btnSolution || !prob) return;

  const text = answerInput.value.trim();
  const lineCount = text ? text.split(/\r?\n/).filter((l) => l.trim().length > 0).length : 0;
  const hasWrittenAttempt = text.length >= 50 || lineCount >= 2;
  const hasUsedAllHints = demoState.unlockedHintLevel >= prob.hints.length;

  const canUnlock = hasWrittenAttempt || (hasUsedAllHints && demoState.confirmedTriedAfterHints);

  if (canUnlock) {
    btnSolution.disabled = false;
    btnSolution.setAttribute("aria-disabled", "false");
    if (confirmBox) confirmBox.hidden = true;
    statusEl.textContent = hasWrittenAttempt
      ? "🔓 Đã mở khóa: Hệ thống ghi nhận bạn đã tự viết nháp bài làm. Bạn có thể xem lời giải mẫu từng bước để đối chiếu."
      : "🔓 Đã mở khóa: Bạn đã xem đủ 3 mức gợi ý và xác nhận đã tự suy nghĩ.";
  } else {
    btnSolution.disabled = true;
    btnSolution.setAttribute("aria-disabled", "true");

    if (hasUsedAllHints && !demoState.confirmedTriedAfterHints) {
      if (confirmBox) confirmBox.hidden = false;
      statusEl.textContent =
        "⏳ Bạn đã mở hết 3 mức gợi ý. Hãy bấm nút xác nhận bên dưới nếu bạn vẫn cần xem lời giải mẫu từng bước.";
    } else {
      if (confirmBox) confirmBox.hidden = true;
      statusEl.textContent =
        "🔒 Đang khóa: Chỉ mở khi bạn đã tự viết nháp bài làm (ít nhất 2 dòng / 50 ký tự) HOẶC đã mở hết 3 mức gợi ý và xác nhận đã tự thử.";
    }
  }
}

/**
 * Mở khu vực hiển thị Lời giải mẫu từng bước và ghi nhận thống kê
 */
function openModelSolution() {
  const container = document.getElementById("model-solution-container");
  if (!container) return;

  demoState.modelSolutionOpen = true;
  container.hidden = false;

  // Chỉ cộng số lần xem lời giải mẫu 1 lần cho mỗi lượt chọn đề
  if (!demoState.solutionCountedForCurrentProblem) {
    demoState.solutionCountedForCurrentProblem = true;
    memoryProfile.solutionViewsCount += 1;
    saveProfileToStorage();
    renderUserProfile();
  }

  renderModelSolutionSteps();
}

/**
 * Render từng bước của Lời giải mẫu (Làm gì + Vì sao làm vậy)
 */
function renderModelSolutionSteps() {
  const prob = PROBLEM_DATABASE[demoState.currentProblemId];
  const indicatorEl = document.getElementById("solution-step-indicator");
  const btnNextStep = document.getElementById("btn-next-solution-step");
  const listEl = document.getElementById("solution-steps-list");
  if (!prob || !listEl) return;

  const totalSteps = prob.modelSolution.length;
  const currentStep = Math.min(demoState.unlockedSolutionStep, totalSteps);

  if (indicatorEl) {
    indicatorEl.textContent = `Đang hiển thị ${currentStep}/${totalSteps} bước giải mẫu`;
  }

  if (btnNextStep) {
    const isAllShown = currentStep >= totalSteps;
    btnNextStep.disabled = isAllShown;
    btnNextStep.setAttribute("aria-disabled", String(isAllShown));
    btnNextStep.textContent = isAllShown
      ? "Đã hiển thị đầy đủ các bước ✓"
      : `Mở bước tiếp theo (${currentStep + 1}/${totalSteps}) →`;
  }

  listEl.innerHTML = "";
  for (let i = 0; i < currentStep; i++) {
    const step = prob.modelSolution[i];
    const card = document.createElement("div");
    card.className = "solution-step-card";
    card.innerHTML = `
      <div class="solution-step-header">${escapeHtml(step.stepTitle)}</div>
      <div class="solution-what">
        <strong>🛠️ Làm gì (Trình bày theo khung):</strong><br/>
        <span>${escapeHtml(step.whatToDo).replace(/\n/g, "<br/>")}</span>
      </div>
      <div class="solution-why">
        <strong>💡 Vì sao làm vậy:</strong> ${escapeHtml(step.whyDoIt)}
      </div>
    `;
    listEl.appendChild(card);
  }
}

/**
 * Cập nhật bộ đếm số ký tự và số dòng dưới ô nhập bài làm
 */
function updateEditorStats() {
  const answerInput = document.getElementById("student-answer");
  const statsEl = document.getElementById("answer-stats");
  if (!answerInput || !statsEl) return;

  const rawText = answerInput.value;
  const charCount = rawText.length;
  const lineCount = rawText.trim()
    ? rawText.trim().split(/\r?\n/).filter((line) => line.trim().length > 0).length
    : 0;

  statsEl.textContent = `${charCount} ký tự • ${lineCount} dòng`;
}

/**
 * Xử lý khi sinh viên bấm "Nộp để nhận phản hồi"
 */
function handleEvaluateSubmission() {
  const answerInput = document.getElementById("student-answer");
  const errBox = document.getElementById("editor-error-msg");
  const feedbackBox = document.getElementById("feedback-result");
  const rewriteBox = document.getElementById("rewrite-result");
  const btnRewrite = document.getElementById("btn-rewrite-frame");
  const prob = PROBLEM_DATABASE[demoState.currentProblemId];

  if (!answerInput || !prob) return;

  const studentText = answerInput.value.trim();
  if (!studentText) {
    if (errBox) errBox.hidden = false;
    if (feedbackBox) feedbackBox.hidden = true;
    answerInput.focus();
    return;
  }

  if (errBox) errBox.hidden = true;

  const normalizedText = studentText.toLowerCase();
  const evaluationMap = {};
  const detailsResult = [];
  let matchedCount = 0;

  // Kiểm tra từng mục trong khung trình bày bằng từ khóa & cấu trúc
  prob.framework.forEach((sec) => {
    const hasKeyword = sec.keywords.some((kw) => normalizedText.includes(kw.toLowerCase()));
    evaluationMap[sec.id] = hasKeyword;

    if (hasKeyword) {
      matchedCount += 1;
    } else {
      // Ghi nhận lỗi lặp lại vào hồ sơ cá nhân
      const errName = sec.errorKey;
      memoryProfile.errorCounts[errName] = (memoryProfile.errorCounts[errName] || 0) + 1;
      memoryProfile.errorAdvices[errName] = sec.practiceAdvice;
    }

    detailsResult.push({
      section: sec,
      isPresent: hasKeyword
    });
  });

  // Cập nhật thống kê số bài tự nộp
  memoryProfile.submittedCount += 1;
  saveProfileToStorage();
  renderUserProfile();

  demoState.hasSubmittedCurrent = true;
  demoState.lastEvaluation = {
    studentText,
    evaluationMap,
    detailsResult,
    matchedCount,
    totalCount: prob.framework.length
  };

  // Cập nhật Checklist bên cột trái
  renderFrameworkChecklist(evaluationMap);

  // Hiển thị hộp Đánh giá & Phản hồi
  renderFeedbackPanel(demoState.lastEvaluation);

  // Mở khóa nút "Gợi ý trình bày lại bài của tôi"
  if (btnRewrite) {
    btnRewrite.disabled = false;
    btnRewrite.setAttribute("aria-disabled", "false");
  }

  // Nếu hộp Gợi ý viết lại đang mở từ lần trước thì cập nhật luôn
  if (rewriteBox && !rewriteBox.hidden) {
    handleRewriteByFramework();
  }
}

/**
 * Hiển thị chi tiết kết quả đánh giá bố cục (Mục nào ĐÃ CÓ / THIẾU)
 */
function renderFeedbackPanel(evalData) {
  const feedbackBox = document.getElementById("feedback-result");
  const scoreBadge = document.getElementById("feedback-score-badge");
  const confBadge = document.getElementById("feedback-confidence-badge");
  const summaryEl = document.getElementById("feedback-summary");
  const detailsListEl = document.getElementById("feedback-details-list");

  if (!feedbackBox || !summaryEl || !detailsListEl) return;

  const { matchedCount, totalCount, detailsResult, studentText } = evalData;
  const missingCount = totalCount - matchedCount;

  if (scoreBadge) {
    scoreBadge.textContent = `Độ phủ khung: ${matchedCount}/${totalCount} mục`;
  }

  if (confBadge) {
    const confidenceLevel = studentText.length >= 90 ? "Cao" : "Trung bình (bài viết ngắn)";
    confBadge.textContent = `Mức độ tin cậy: ${confidenceLevel}`;
  }

  if (missingCount === 0) {
    summaryEl.innerHTML = `
      🎉 <strong>Rất tốt!</strong> Bài làm của bạn đã có đầy đủ <strong>${totalCount}/${totalCount}</strong> phần trong khung trình bày đề xuất. Bạn có thể bấm nút <em>“Gợi ý trình bày lại bài của tôi”</em> để xem cách tách mục rõ ràng hơn nữa.
    `;
  } else {
    summaryEl.innerHTML = `
      💡 Hệ thống ghi nhận bạn đã có <strong>${matchedCount}/${totalCount}</strong> phần của khung trình bày, nhưng đang <strong>thiếu ${missingCount} mục quan trọng</strong> dễ làm mất điểm bố cục. Xem chi tiết lý do và hướng bổ sung bên dưới:
    `;
  }

  detailsListEl.innerHTML = "";
  detailsResult.forEach(({ section, isPresent }) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `feedback-item ${isPresent ? "is-ok" : "is-missing"}`;

    if (isPresent) {
      itemDiv.innerHTML = `
        <strong>✅ [ĐÃ CÓ] ${escapeHtml(section.title)}</strong>
        <p class="text-xs text-muted">Bài làm của bạn đã đề cập đến nội dung thuộc phần này.</p>
      `;
    } else {
      itemDiv.innerHTML = `
        <strong>⚠️ [THIẾU] ${escapeHtml(section.title)}</strong>
        <p><strong>Lý do mất điểm:</strong> ${escapeHtml(section.missingReason)}</p>
        <p><strong>Gợi ý bổ sung:</strong> ${escapeHtml(section.fixSuggestion)}</p>
      `;
    }
    detailsListEl.appendChild(itemDiv);
  });

  feedbackBox.hidden = false;
}

/**
 * 6. GỢI Ý VIẾT LẠI THEO KHUNG:
 * Giữ nguyên câu chữ & cách giải của sinh viên, tự động phân loại vào các mục của khung;
 * phần nào sinh viên chưa viết thì chừa ô trống kèm chú thích "Bạn cần bổ sung phần này".
 */
function handleRewriteByFramework() {
  const rewriteBox = document.getElementById("rewrite-result");
  const containerEl = document.getElementById("rewrite-sections-container");
  const answerInput = document.getElementById("student-answer");
  const prob = PROBLEM_DATABASE[demoState.currentProblemId];

  if (!rewriteBox || !containerEl || !answerInput || !prob) return;

  const rawText = answerInput.value.trim();
  if (!rawText) return;

  // Tách bài làm của sinh viên thành các câu / dòng riêng biệt
  const segments = rawText
    .split(/\r?\n|(?<=[.?!;])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const usedSegmentIndices = new Set();
  const sectionBuckets = {};
  prob.framework.forEach((sec) => {
    sectionBuckets[sec.id] = [];
  });

  // Phân loại từng câu của sinh viên vào mục phù hợp nhất trong khung
  segments.forEach((seg, idx) => {
    const lowerSeg = seg.toLowerCase();
    for (const sec of prob.framework) {
      const matched = sec.keywords.some((kw) => lowerSeg.includes(kw.toLowerCase()));
      if (matched) {
        sectionBuckets[sec.id].push(seg);
        usedSegmentIndices.add(idx);
        break;
      }
    }
  });

  // Nếu còn câu nào của sinh viên chưa khớp từ khóa, gắn vào mục đầu tiên có dữ liệu để không làm mất chữ của sinh viên
  const leftoverSegments = segments.filter((_, idx) => !usedSegmentIndices.has(idx));
  if (leftoverSegments.length > 0 && prob.framework.length > 0) {
    const fallbackSectionId = prob.framework[0].id;
    sectionBuckets[fallbackSectionId].push(...leftoverSegments);
  }

  containerEl.innerHTML = "";
  prob.framework.forEach((sec) => {
    const studentLines = sectionBuckets[sec.id];
    const hasContent = studentLines && studentLines.length > 0;

    const block = document.createElement("div");
    block.className = `rewrite-block ${hasContent ? "is-filled" : "is-empty"}`;

    if (hasContent) {
      block.innerHTML = `
        <div class="rewrite-block-header">
          <span>${escapeHtml(sec.title)}</span>
          <span class="status-pill status-ok">Giữ nguyên ý từ bài của bạn</span>
        </div>
        <div class="rewrite-block-body">
          <p>${escapeHtml(studentLines.join(" "))}</p>
        </div>
      `;
    } else {
      block.innerHTML = `
        <div class="rewrite-block-header">
          <span>${escapeHtml(sec.title)}</span>
          <span class="status-pill status-warn">Bạn cần bổ sung phần này</span>
        </div>
        <div class="rewrite-block-body">
          <p class="text-muted">
            <em>[Ô trống chờ bạn tự viết bổ sung]</em> — <strong>Gợi ý:</strong> ${escapeHtml(sec.fixSuggestion)}
          </p>
        </div>
      `;
    }

    containerEl.appendChild(block);
  });

  rewriteBox.hidden = false;
  rewriteBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ============================================================================
   5. QUẢN LÝ HỒ SƠ CÁ NHÂN & THEO DÕI LỖI LẶP LẠI (LOCALSTORAGE)
   ============================================================================ */
function loadProfileFromStorage() {
  const consentCheckbox = document.getElementById("consent-storage");
  const savedConsent = safeGetStorage(STORAGE_KEYS.CONSENT, true);

  if (consentCheckbox) {
    consentCheckbox.checked = Boolean(savedConsent);
  }

  if (savedConsent) {
    const savedProfile = safeGetStorage(STORAGE_KEYS.PROFILE, null);
    if (savedProfile && typeof savedProfile === "object") {
      memoryProfile = {
        submittedCount: Number(savedProfile.submittedCount) || 0,
        solutionViewsCount: Number(savedProfile.solutionViewsCount) || 0,
        errorCounts: savedProfile.errorCounts || {},
        errorAdvices: savedProfile.errorAdvices || {}
      };
    }
  }

  renderUserProfile();
}

function saveProfileToStorage() {
  const consentCheckbox = document.getElementById("consent-storage");
  const isConsented = consentCheckbox ? consentCheckbox.checked : true;
  if (!isConsented) return;

  safeSetStorage(STORAGE_KEYS.PROFILE, memoryProfile);
}

/**
 * Hiển thị dữ liệu lên bảng "Hồ sơ của bạn"
 */
function renderUserProfile() {
  const statSubmitted = document.getElementById("stat-submitted");
  const statSolutionViews = document.getElementById("stat-solution-views");
  const statSelfSolveRate = document.getElementById("stat-self-solve-rate");
  const repeatedErrorsList = document.getElementById("repeated-errors-list");
  const practiceSuggestions = document.getElementById("practice-suggestions");

  const { submittedCount, solutionViewsCount, errorCounts, errorAdvices } = memoryProfile;

  if (statSubmitted) statSubmitted.textContent = String(submittedCount);
  if (statSolutionViews) statSolutionViews.textContent = String(solutionViewsCount);

  if (statSelfSolveRate) {
    if (submittedCount === 0 && solutionViewsCount === 0) {
      statSelfSolveRate.textContent = "Chưa có dữ liệu";
    } else if (submittedCount > 0 && solutionViewsCount === 0) {
      statSelfSolveRate.textContent = "100% Tự giải";
    } else {
      const totalActions = submittedCount + solutionViewsCount;
      const ratio = Math.round((submittedCount / totalActions) * 100);
      statSelfSolveRate.textContent = `${ratio}% (${submittedCount} nộp / ${solutionViewsCount} xem mẫu)`;
    }
  }

  const errorEntries = Object.entries(errorCounts).sort((a, b) => b[1] - a[1]);

  if (repeatedErrorsList) {
    if (errorEntries.length === 0) {
      repeatedErrorsList.innerHTML = `<li class="text-muted">Chưa ghi nhận lỗi lặp lại nào. Hãy thử nộp bài ở trên!</li>`;
    } else {
      repeatedErrorsList.innerHTML = errorEntries
        .map(
          ([errName, count]) =>
            `<li><strong>${escapeHtml(errName)}</strong> — lặp lại <span class="badge badge-warning">x${count} lần</span></li>`
        )
        .join("");
    }
  }

  if (practiceSuggestions) {
    if (errorEntries.length === 0) {
      practiceSuggestions.innerHTML = `<li class="text-muted">Gợi ý bài tập sẽ xuất hiện dựa trên mục bạn hay bỏ sót.</li>`;
    } else {
      practiceSuggestions.innerHTML = errorEntries
        .slice(0, 3)
        .map(([errName]) => {
          const advice =
            errorAdvices[errName] ||
            "Luyện viết nháp dàn ý khung trình bày trước khi bắt đầu làm bài.";
          return `<li>${escapeHtml(advice)}</li>`;
        })
        .join("");
    }
  }
}

/**
 * Hàm tiện ích chống XSS khi chèn chuỗi văn bản vào HTML
 */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}