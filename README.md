# fatal: unable to access 'https://github.com/dj49846917/vue3-ts.git/': OpenSSL SSL_read: Connection was reset, errno 10054

# 解决办法：
    git config --global http.sslVerify false
