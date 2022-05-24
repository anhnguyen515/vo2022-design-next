import {
  faAppStore,
  faDiscord,
  faFacebook,
  faGooglePlay,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "secondary.main", color: "text.main" }}>
        <Container maxWidth="xl" sx={{ pt: 5, pb: 2 }}>
          <Grid container spacing={2}>
            {/* về vietnovel origin */}
            <Grid
              item
              xs={12}
              lg={3}
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              <Typography {...headingProps}>Về Vietnovel Origin</Typography>

              <Link href="/" passHref>
                <Typography {...infoProps}>Trang Chủ</Typography>
              </Link>
              <Link href="/page/gioi-thieu">
                <Typography {...infoProps}>Giới Thiệu</Typography>
              </Link>
              <Link href="/page/quy-dinh-rieng-tu" passHref>
                <Typography {...infoProps}>Quy Định Riêng Tư</Typography>
              </Link>
              <Link href="/page/dieu-khoan-dich-vu" passHref>
                <Typography {...infoProps}>Điều Khoản Dịch Vụ</Typography>
              </Link>
              <Link href="/contact" passHref>
                <Typography {...infoProps}>
                  Liên Hệ Với Vietnovel Origin
                </Typography>
              </Link>
              <Link href="/apps" passHref>
                <Typography {...infoProps}>Tải App Sáng Tác Truyện</Typography>
              </Link>
              <Link href="/forum" passHref>
                <Typography {...infoProps}>
                  Diễn Đàn Vietnovel Origin
                </Typography>
              </Link>
              <Link href="#" passHref>
                <Typography {...infoProps}>Vietnovel Blog</Typography>
              </Link>
            </Grid>

            {/* thể loại truyện */}
            <Grid
              item
              xs={12}
              lg={5}
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              <Typography {...headingProps}>Thể loại truyện</Typography>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Typography {...genreProps}>Truyện Huyền Huyễn</Typography>
                  <Typography {...genreProps}>Truyện Tiên Hiệp</Typography>
                  <Typography {...genreProps}>Truyện Hệ Thống</Typography>
                  <Typography {...genreProps}>Truyện Ngôn Tình</Typography>
                  <Typography {...genreProps}>Truyện Xuyên Không</Typography>
                  <Typography {...genreProps}>Truyện Dị Năng</Typography>
                  <Typography {...genreProps}>
                    Truyện Đam Mỹ/ Boy Love
                  </Typography>
                  <Typography {...genreProps}>Truyện Bách Hợp</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography {...genreProps}>Truyện Võng Du</Typography>
                  <Typography {...genreProps}>Truyện Kiếm Hiệp</Typography>
                  <Typography {...genreProps}>Truyện Đô Thị</Typography>
                  <Typography {...genreProps}>Truyện LGBT+</Typography>
                  <Typography {...genreProps}>Truyện FanFic</Typography>
                  <Typography {...genreProps}>Truyện Nữ Hiệp</Typography>
                  <Typography {...genreProps}>Truyện Sủng</Typography>
                  <Typography {...genreProps}>Truyện Thám Hiểm</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography {...genreProps}>Truyện Thương Nghiệp</Typography>
                  <Typography {...genreProps}>Truyện Ma Pháp</Typography>
                  <Typography {...genreProps}>Truyện Dị Giới</Typography>
                  <Typography {...genreProps}>Truyện Nữ Phụ</Typography>
                  <Typography {...genreProps}>Truyện Tình Cảm</Typography>
                  <Typography {...genreProps}>Truyện Trinh Thám</Typography>
                  <Typography {...genreProps}>Truyện Nữ Cường</Typography>
                  <Typography {...genreProps}>Truyện Quân Sự</Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* thông tin liên hệ */}
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              <Typography {...headingProps}>Thông tin liên hệ</Typography>
              <Typography {...infoProps}>
                <ApartmentIcon /> Công Ty Cổ Phần Vietnovel.
              </Typography>
              <Typography {...infoProps}>
                <LocationOnIcon /> 22 Nguyễn Trọng Lội, P.4, Q.Tân Bình, TP.HCM.
              </Typography>
              <Typography {...infoProps}>
                <LocalPhoneIcon /> 0282-253-6700 (9.00 sáng - 18.00 chiều).
              </Typography>
              <Typography {...infoProps}>
                <EmailIcon /> support@vietnovel.com
              </Typography>
              <Typography sx={{ mt: 4 }}>
                ĐKKD số <span style={{ fontWeight: "bold" }}>0314817138</span>{" "}
                do Sở Kế Hoạch Đầu Tư TP.HCM cấp ngày 04/01/2018. Chịu trách
                nhiệm nội dung: Ông Trần Tuấn Dũng.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* thông tin về Vietnovel */}
      <Box sx={{ backgroundColor: "secondary.dark", color: "text.main" }}>
        <Container maxWidth="xl" sx={{ pt: 2, pb: 2 }}>
          <Link href="/">
            <a>
              <Image
                alt="Vietnovel logo"
                src="/origin-logo.svg"
                width={120}
                height={60}
              />
            </a>
          </Link>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Typography variant="h6" color="text.light" gutterBottom>
                Vienovel Origin - Khởi Nguồn Tiểu Thuyết Việt
              </Typography>
              <Typography>
                Chào mừng bạn đến với nền tảng nội dung số dành cho người Việt.
                Tại đây chúng tôi cho phép đăng tải những tác phẩm văn học, tiểu
                thuyết do chính bạn sáng tạo ra. Với tôn chỉ vì một nền văn học
                mạng Việt Nam phát triển bền vững, chúng tôi sẽ mang đến cho tác
                giả và người đọc Tiếng Việt trên toàn thế giới một môi trường
                công nghệ tiên tiến, công cụ quản lý chuyên nghiệp, mô hình hoạt
                động công bằng nhằm thúc đẩy sáng tạo đến tận cùng.
              </Typography>
            </Grid>
            <Grid container item xs={12} lg={4} rowSpacing={5}>
              <Grid {...descriptionProps}>
                <Image
                  alt="dmca"
                  src="/dmca_protected_28_120.png"
                  width={100}
                  height={50}
                />
              </Grid>
              <Grid {...descriptionProps}>
                <Link href="/bao-mat-ssl-la-gi">
                  <a>
                    <Image alt="ssl" src="/ssl.png" width={120} height={50} />
                  </a>
                </Link>
              </Grid>
              <Grid {...descriptionProps}>
                <Image
                  alt="bộ công thương"
                  src="/bo-cong-thuong.png"
                  width={110}
                  height={40}
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            sx={{ mt: 5, backgroundColor: "text.dark" }}
          />

          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                mt: 5,
                mb: 5,
              }}
            >
              <a
                href={
                  "https://apps.apple.com/us/app/vietnovel-origin/id1359621195?l=vi&ls=1"
                }
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    gap: 1,
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faAppStore} width={16} />
                  <Typography>Tải App Đọc Truyện iOS</Typography>
                </Box>
              </a>
              <a
                href={
                  "https://play.google.com/store/apps/details?id=com.vietnovel.app"
                }
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    gap: 1,
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faGooglePlay} width={16} />
                  <Typography>Tải App Đọc Truyện Android</Typography>
                </Box>
              </a>
            </Box>
            <Typography variant="caption" fontStyle="italic">
              Tất cả hình ảnh, logo, tác phẩm văn học, văn bản, lời giới thiệu
              đều thuộc bản quyền của Công Ty Cổ Phần Vietnovel. Nghiêm cấm sao
              chép, in ấn, tái xuất bản dưới mọi hình thức. Nếu vi phạm sẽ bị
              nghiêm trị theo luật pháp của nước Cộng Hòa Xã Hội Chủ Nghĩa Việt
              Nam và Công ước toàn cầu về bản quyền (UCC).
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <a
                href="https://twitter.com/vietnovel"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faTwitter} width={26} />
                </Typography>
              </a>
              <a
                href="https://www.facebook.com/VietnovelOrigin/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faFacebook} width={26} />
                </Typography>
              </a>
              <a
                href="https://www.facebook.com/groups/vietnovel"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faUserGroup} width={26} />
                </Typography>
              </a>
              <a
                href="https://discord.com/invite/xfTsM9m"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faDiscord} width={26} />
                </Typography>
              </a>
            </Box>
            <Typography sx={{ mt: 2, fontWeight: 500 }}>
              &copy; 2016-{new Date().getFullYear()}{" "}
              <a
                href="https://company.vietnovel.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                Vietnovel Corporation
              </a>
              . All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const headingProps = {
  variant: "h6",
  fontWeight: "bold",
  textTransform: "uppercase",
  sx: {
    color: "text.light",
    mb: 2,
  },
};

const infoProps = {
  variant: "body1",
  gutterBottom: true,
  sx: {
    display: "flex",
    alignItem: "center",
    justifyContent: {
      xs: "center",
      lg: "flex-start",
    },
    gap: 2,
    cursor: "pointer",
    mb: 2,
    "&:hover": {
      color: "text.light",
    },
  },
};

const genreProps = {
  variant: "body2",
  sx: {
    cursor: "pointer",
    mb: 2,
    "&:hover": {
      color: "text.light",
    },
  },
};

const descriptionProps = {
  item: true,
  xs: 6,
  sx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
