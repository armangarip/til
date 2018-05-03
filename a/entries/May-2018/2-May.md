# 2 Mayıs

- IKEv2 VPN baglantisi WiFi degistirince veya bilgisayar uyuyup kalkinca dusmuyor. Simdiye kadar L2TP kullaniyordum ancak IKEv2 ye gececegim sanirim. Guvenlik karislastirmalarinda ve uyuyumlulukta daha onde gorunuyor.
- AWS KMS key generation dedicated fiziksel HSA'ler ile yapiliyormus
  - > Entropy and Random Number Generation: AWS KMS key generation is performed on dedicated HSAs. These are physical devices without a virtualization layer, such as a hypervisor that would share the physical device among several logical tenants. The HSAs implement a hybrid random number generator. An initial cryptographically secure pseudo-random number generator (CSPRNG) is seeded with system entropy and periodically updated with additional entropy. Calls for cryptographic material use this hybrid random number generator. [AWS KMS Cryptographic Details Whitepaper](https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf)
- Git commit mesajlarinda emoji kullanmamak en iyisi. Farkli farkli yerlerde patlak verebiliyor. Bugun yarim saatimi bu yuzden kaybettim https://github.com/travis-ci/dpl/issues/604
