# 1. Base image
FROM node:24-alpine AS builder
WORKDIR /app

# 2. 패키지 설치 및 Prisma 생성
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci
RUN npx prisma generate

# 3. 소스코드 복사 및 빌드
COPY . .
RUN npm run build

# 4. 프로덕션 실행 이미지
FROM node:24-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Next.js 실행
CMD ["npm", "run", "start"]