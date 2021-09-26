export class Constant {
  public static LIST_ELEMENT = [
    { id: 'kim', name: 'Kim' },
    { id: 'thuy', name: 'Thuỷ' },
    { id: 'moc', name: 'Mộc' },
    { id: 'hoa', name: 'Hoả' },
    { id: 'tho', name: 'Thổ' },
  ];

  public static LIST_CAN = [
    { id: 'giap', name: 'Giáp', elementId: 'moc', weight: 10 },
    { id: 'at', name: 'Ất', elementId: 'moc', weight: 10 },
    { id: 'binh', name: 'Bính', elementId: 'hoa', weight: 10 },
    { id: 'dinh', name: 'Đinh', elementId: 'hoa', weight: 10 },
    { id: 'mau', name: 'Mậu', elementId: 'tho', weight: 10 },
    { id: 'ky', name: 'Kỷ', elementId: 'tho', weight: 10 },
    { id: 'canh', name: 'Canh', elementId: 'kim', weight: 10 },
    { id: 'tan', name: 'Tân', elementId: 'kim', weight: 10 },
    { id: 'nham', name: 'Nhâm', elementId: 'thuy', weight: 10 },
    { id: 'quy', name: 'Quý', elementId: 'thuy', weight: 10 },
  ];

  public static LIST_CHI = [
    {
      id: 'ti', name: 'Tí', elementId: 'thuy', weight: 10, tangCanIds: [
        { canId: 'quy', elementId: 'thuy', weight: 10 },
      ]
    },
    {
      id: 'suu', name: 'Sửu', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'ky', elementId: 'tho', weight: 6 },
        { canId: 'quy', elementId: 'thuy', weight: 3 },
        { canId: 'tan', elementId: 'kim', weight: 1 },
      ]
    },
    {
      id: 'dan', name: 'Dần', elementId: 'moc', weight: 10, tangCanIds: [
        { canId: 'giap', elementId: 'moc', weight: 6 },
        { canId: 'binh', elementId: 'hoa', weight: 3 },
        { canId: 'mau', elementId: 'tho', weight: 1 },
      ]
    },
    {
      id: 'mao', name: 'Mão', elementId: 'moc', weight: 10, tangCanIds: [
        { canId: 'at', elementId: 'moc', weight: 10 },
      ]
    },
    {
      id: 'thin', name: 'Thìn', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'mau', elementId: 'tho', weight: 6 },
        { canId: 'at', elementId: 'moc', weight: 3 },
        { canId: 'quy', elementId: 'thuy', weight: 1 },
      ]
    },
    {
      id: 'ty', name: 'Tỵ', elementId: 'hoa', weight: 10, tangCanIds: [
        { canId: 'binh', elementId: 'hoa', weight: 6 },
        { canId: 'mau', elementId: 'tho', weight: 3 },
        { canId: 'canh', elementId: 'kim', weight: 1 },
      ]
    },
    {
      id: 'ngo', name: 'Ngọ', elementId: 'hoa', weight: 10, tangCanIds: [
        { canId: 'dinh', elementId: 'hoa', weight: 7 },
        { canId: 'ky', elementId: 'tho', weight: 3 },
      ]
    },
    {
      id: 'mui', name: 'Mùi', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'ky', elementId: 'tho', weight: 6 },
        { canId: 'dinh', elementId: 'hoa', weight: 3 },
        { canId: 'at', elementId: 'moc', weight: 1 },
      ]
    },
    {
      id: 'than', name: 'Thân', elementId: 'kim', weight: 10, tangCanIds: [
        { canId: 'canh', elementId: 'kim', weight: 6 },
        { canId: 'nham', elementId: 'thuy', weight: 3 },
        { canId: 'mau', elementId: 'tho', weight: 1 },
      ]
    },
    {
      id: 'dau', name: 'Dậu', elementId: 'kim', weight: 10, tangCanIds: [
        { canId: 'tan', elementId: 'kim', weight: 10 },
      ]
    },
    {
      id: 'tuat', name: 'Tuất', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'mau', elementId: 'tho', weight: 6 },
        { canId: 'tan', elementId: 'kim', weight: 3 },
        { canId: 'dinh', elementId: 'hoa', weight: 1 },
      ]
    },
    {
      id: 'hoi', name: 'Hợi', elementId: 'thuy', weight: 10, tangCanIds: [
        { canId: 'nham', elementId: 'thuy', weight: 7 },
        { canId: 'giap', elementId: 'moc', weight: 3 },
      ]
    },
  ];

  /* Thai, Dưỡng: hành khí có tác dụng khá tốt;
  Tràng Sinh, Lâm Quan, Đế Vượng: hành khí hưng thịnh, có tác dụng rất tốt, nhất là Tràng Sinh và Đế Vượng;
  Mộc Dục, Quan Đới: hành khí cần kết hợp với sao tốt thì mới tốt, gặp sao xấu dễ đưa đến phúc lộc không bền, mau tàn, mang đến tai họa, nhất là Mộc Dục. Nơi Mộc Dục thủ thường gọi là bại địa. Phú có câu Sinh phùng bại địa phát dã hư hoa nghĩa là tuy phát nhưng không bền vững
  Suy, Bệnh, Tử, Mộ, Tuyệt: hành khí không có tác dụng tốt, xấu nhất là Tử, Tuyệt. Đỡ xấu nhất là Mộ vì là dư khí. */
  public static LIST_TRANG_SINH = [
    { id: 'truongSinh', name: 'Tràng sinh', luckyNote: 'Rất Tốt (4/4)' },
    { id: 'mocDuc', name: 'Mộc dục', luckyNote: 'Tốt nhưng cần tránh Xấu, kết hợp với Tốt thì mới được lâu bền (0.9/4)' },
    { id: 'quanDoi', name: 'Quan đới', luckyNote: 'Tốt nhưng cần tránh Xấu, kết hợp với Tốt thì mới được lâu bền (1.1/4)' },
    { id: 'lamQuan', name: 'Lâm quan', luckyNote: 'Tốt (3/4)' },
    { id: 'deVuong', name: 'Đế vượng', luckyNote: 'Rất Tốt (4/4)' },
    { id: 'suy', name: 'Suy', luckyNote: 'Xấu (-2/-3)' },
    { id: 'benh', name: 'Bệnh', luckyNote: 'Xấu (-2/-3)' },
    { id: 'tu', name: 'Tử', luckyNote: 'Rất Xấu (-3/-3)' },
    { id: 'mo', name: 'Mộ', luckyNote: 'Xấu (-1/-3)' },
    { id: 'tuyet', name: 'Tuyệt', luckyNote: 'Rất Xấu(-3/-3)' },
    { id: 'thai', name: 'Thai', luckyNote: 'Khá Tốt (2/4)' },
    { id: 'duong', name: 'Dưỡng', luckyNote: 'Khá Tốt (2/4)' },
  ];

  public static LIST_TRANG_SINH_LOOKUP = [
    {
      canId: 'giap',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'suu',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'dan',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'mao',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'thin',
          trangSinhId: 'suy'
        },
        {
          chiId: 'ty',
          trangSinhId: 'benh'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'tu'
        },
        {
          chiId: 'mui',
          trangSinhId: 'mo'
        },
        {
          chiId: 'than',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'dau',
          trangSinhId: 'thai'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'duong'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'truongSinh'
        }
      ]
    },
    {
      canId: 'at',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'benh'
        },
        {
          chiId: 'suu',
          trangSinhId: 'suy'
        },
        {
          chiId: 'dan',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'mao',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'thin',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'ty',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'mui',
          trangSinhId: 'duong'
        },
        {
          chiId: 'than',
          trangSinhId: 'thai'
        },
        {
          chiId: 'dau',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'mo'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'tu'
        }
      ]
    },
    {
      canId: 'binh',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'thai'
        },
        {
          chiId: 'suu',
          trangSinhId: 'duong'
        },
        {
          chiId: 'dan',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'mao',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'thin',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'ty',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'mui',
          trangSinhId: 'suy'
        },
        {
          chiId: 'than',
          trangSinhId: 'benh'
        },
        {
          chiId: 'dau',
          trangSinhId: 'tu'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'mo'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'tuyet'
        }
      ]
    },
    {
      canId: 'dinh',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'suu',
          trangSinhId: 'mo'
        },
        {
          chiId: 'dan',
          trangSinhId: 'tu'
        },
        {
          chiId: 'mao',
          trangSinhId: 'benh'
        },
        {
          chiId: 'thin',
          trangSinhId: 'suy'
        },
        {
          chiId: 'ty',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'mui',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'than',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'dau',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'duong'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'thai'
        }
      ]
    },
    {
      canId: 'mau',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'thai'
        },
        {
          chiId: 'suu',
          trangSinhId: 'duong'
        },
        {
          chiId: 'dan',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'mao',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'thin',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'ty',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'mui',
          trangSinhId: 'suy'
        },
        {
          chiId: 'than',
          trangSinhId: 'benh'
        },
        {
          chiId: 'dau',
          trangSinhId: 'tu'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'mo'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'tuyet'
        }
      ]
    },
    {
      canId: 'ky',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'suu',
          trangSinhId: 'mo'
        },
        {
          chiId: 'dan',
          trangSinhId: 'tu'
        },
        {
          chiId: 'mao',
          trangSinhId: 'benh'
        },
        {
          chiId: 'thin',
          trangSinhId: 'suy'
        },
        {
          chiId: 'ty',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'mui',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'than',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'dau',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'duong'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'thai'
        }
      ]
    },
    {
      canId: 'canh',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'tu'
        },
        {
          chiId: 'suu',
          trangSinhId: 'mo'
        },
        {
          chiId: 'dan',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'mao',
          trangSinhId: 'thai'
        },
        {
          chiId: 'thin',
          trangSinhId: 'duong'
        },
        {
          chiId: 'ty',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'mui',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'than',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'dau',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'suy'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'benh'
        }
      ]
    },
    {
      canId: 'tan',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'suu',
          trangSinhId: 'duong'
        },
        {
          chiId: 'dan',
          trangSinhId: 'thai'
        },
        {
          chiId: 'mao',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'thin',
          trangSinhId: 'mo'
        },
        {
          chiId: 'ty',
          trangSinhId: 'tu'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'benh'
        },
        {
          chiId: 'mui',
          trangSinhId: 'suy'
        },
        {
          chiId: 'than',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'dau',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'mocDuc'
        }
      ]
    },
    {
      canId: 'nham',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'deVuong'
        },
        {
          chiId: 'suu',
          trangSinhId: 'suy'
        },
        {
          chiId: 'dan',
          trangSinhId: 'benh'
        },
        {
          chiId: 'mao',
          trangSinhId: 'tu'
        },
        {
          chiId: 'thin',
          trangSinhId: 'mo'
        },
        {
          chiId: 'ty',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'thai'
        },
        {
          chiId: 'mui',
          trangSinhId: 'duong'
        },
        {
          chiId: 'than',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'dau',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'lamQuan'
        }
      ]
    },
    {
      canId: 'quy',
      lookups: [
        {
          chiId: 'ti',
          trangSinhId: 'lamQuan'
        },
        {
          chiId: 'suu',
          trangSinhId: 'quanDoi'
        },
        {
          chiId: 'dan',
          trangSinhId: 'mocDuc'
        },
        {
          chiId: 'mao',
          trangSinhId: 'truongSinh'
        },
        {
          chiId: 'thin',
          trangSinhId: 'duong'
        },
        {
          chiId: 'ty',
          trangSinhId: 'thai'
        },
        {
          chiId: 'ngo',
          trangSinhId: 'tuyet'
        },
        {
          chiId: 'mui',
          trangSinhId: 'mo'
        },
        {
          chiId: 'than',
          trangSinhId: 'tu'
        },
        {
          chiId: 'dau',
          trangSinhId: 'benh'
        },
        {
          chiId: 'tuat',
          trangSinhId: 'suy'
        },
        {
          chiId: 'hoi',
          trangSinhId: 'deVuong'
        }
      ]
    }
  ];
}
