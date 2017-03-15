;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M407.859 574.347c-15.395 1.61-26.392 14.995-26.392 27.765 0 12.799 12.41 21.669 27.719 19.871 15.221-1.762 27.718-13.596 27.718-26.312C436.905 582.782 425.425 572.633 407.859 574.347zM446.197 478.184c-81.6 3.708-147.581 47.4-147.581 101.98 0 54.469 65.981 95.343 147.581 91.562 81.6-3.712 147.736-54.854 147.736-109.274C593.933 508.018 527.796 474.398 446.197 478.184zM501.715 615.269c-24.915 32.244-74.336 48.024-122.438 22.02-22.807-12.378-22.025-36.741-22.025-36.741s-9.447-76.924 72.618-86.526C512.104 504.454 526.785 582.979 501.715 615.269zM446.742 563.765c-5.315 3.871-6.321 11.09-3.516 15.667 2.735 4.604 9.062 5.187 14.296 1.318 5.073-4.021 7.102-11.019 4.368-15.659C459.16 560.563 452.833 559.276 446.742 563.765zM499.997 51.393c-246.834 0-446.896 200.066-446.896 446.896 0 246.875 200.062 446.905 446.896 446.905 246.841 0 446.902-200.03 446.902-446.905C946.899 251.459 746.838 51.393 499.997 51.393zM666.875 598.561c-33.661 71.478-144.543 106.237-226.844 99.796-78.096-6.125-178.508-32.026-188.978-126.664 0 0-5.464-42.746 35.999-98.185 0 0 59.737-83.487 129.389-107.219 69.662-23.703 77.7 16.399 77.7 40.094-3.666 20.107-10.7 31.855 15.457 23.779 0 0 68.494-31.741 96.597-3.599 22.807 22.766 3.753 54.037 3.753 54.037s-9.453 10.398 9.992 14.168C639.311 498.601 700.53 526.947 666.875 598.561zM599.405 401.071c-7.419 0-13.429-6.001-13.429-13.395 0-7.494 6.01-13.547 13.429-13.547 0 0 83.869-15.493 73.871 74.615 0 0.584-0.081 0.98-0.155 1.402-1.091 6.4-6.556 11.323-13.118 11.323-7.579 0-13.589-6.012-13.589-13.396C646.414 448.075 659.692 387.749 599.405 401.071zM741.212 463.892h-0.075c-2.264 32.577-9.837 21.163-18.898 21.163-10.773 0-19.365-5.382-19.365-16.248 0-9.331 3.821-17.207 3.821-17.207 1.092-3.908 10.309-27.576-6.004-64.157-29.839-50.082-89.96-50.405-97.069-47.513-7.027 2.763-17.727 4.416-17.727 4.416-10.774 0-19.519-8.669-19.519-19.366 0-9.066 5.93-16.482 14.21-18.828 0 0 0.23-0.024 0.545-0.115 0.546-0.109 1.173-0.233 1.873-0.307 8.281-1.563 38.109-13.002 67.162-6.216C702.086 311.584 773.236 366.548 741.212 463.892z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-94" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M906.083 865.481c-65.494 0-102.844-39.16-146.092-84.504-15.315-16.049-31.151-32.656-49.649-49.161-48.431-43.226-97.175-49.178-142.629-49.178-8.149 0-16.055 0.188-23.662 0.369-7.315 0.182-14.364 0.348-21.105 0.348l-21.891 0c-6.741 0-13.789-0.166-21.096-0.348-7.615-0.181-15.521-0.369-23.672-0.369-45.453 0-94.198 5.952-142.627 49.178-18.498 16.505-34.334 33.112-49.651 49.161-43.248 45.344-80.598 84.504-146.092 84.504-25.506 0-46.839-9.379-63.408-27.877-42.414-47.366-52.745-154.588-32.531-337.44 27.861-251.897 143.038-341.646 241.534-341.646 35.492 0 59.825 14.6 85.591 30.067 35.515 21.308 75.771 45.468 162.897 45.468s127.381-24.16 162.896-45.468c25.767-15.467 50.099-30.067 85.591-30.067 98.497 0 213.674 89.749 241.535 341.646 20.214 182.852 9.883 290.074-32.531 337.44C952.924 856.103 931.59 865.481 906.083 865.481zM567.713 650.384c49.359 0 107.459 6.811 164.111 57.366 19.458 17.372 35.751 34.452 51.508 50.967 41.257 43.255 71.07 74.51 122.751 74.51 16.167 0 29.05-5.606 39.382-17.144 34.87-38.939 43.106-144.037 24.49-312.375-25.514-230.73-124.932-312.935-209.468-312.935-26.562 0-45.287 11.237-68.991 25.467-37.176 22.302-83.44 50.067-179.496 50.067-96.056 0-142.32-27.766-179.497-50.067-23.703-14.229-42.429-25.467-68.991-25.467-84.535 0-183.954 82.204-209.468 312.935C35.428 672.046 43.665 777.144 78.535 816.083c10.332 11.537 23.215 17.144 39.382 17.144 51.682 0 81.496-31.255 122.751-74.51 15.757-16.515 32.05-33.595 51.509-50.967 66.305-59.179 134.603-58.272 188.553-56.988 7.04 0.172 13.827 0.338 20.324 0.338l21.891 0c6.497 0 13.285-0.166 20.325-0.338C551.129 650.572 559.296 650.384 567.713 650.384z"  ></path>' +
    '' +
    '<path d="M811.705 365.326c0 26.727-21.663 48.382-48.382 48.382-26.721 0-48.383-21.655-48.383-48.382 0-26.728 21.662-48.383 48.383-48.383C790.042 316.942 811.705 338.598 811.705 365.326z"  ></path>' +
    '' +
    '<path d="M811.705 558.855c0 26.727-21.663 48.383-48.382 48.383-26.721 0-48.383-21.656-48.383-48.383 0-26.728 21.662-48.383 48.383-48.383C790.042 510.472 811.705 532.128 811.705 558.855z"  ></path>' +
    '' +
    '<path d="M860.08 510.472c-26.72 0-48.383-21.655-48.383-48.382 0-26.727 21.663-48.382 48.383-48.382 26.718 0 48.383 21.656 48.383 48.382C908.463 488.817 886.798 510.472 860.08 510.472z"  ></path>' +
    '' +
    '<path d="M666.549 510.472c-26.719 0-48.382-21.655-48.382-48.382 0-26.727 21.663-48.382 48.382-48.382 26.721 0 48.384 21.656 48.384 48.382C714.933 488.817 693.27 510.472 666.549 510.472z"  ></path>' +
    '' +
    '<path d="M387.02 429.835l-80.646 0 0-80.637c0-17.813-14.442-32.255-32.255-32.255-17.813 0-32.255 14.442-32.255 32.255l0 80.637-80.63 0c-17.813 0-32.254 14.442-32.254 32.255 0 17.813 14.442 32.255 32.254 32.255l80.63 0 0 80.637c0 17.813 14.442 32.257 32.255 32.257 17.813 0 32.255-14.443 32.255-32.257l0-80.637 80.646 0c17.813 0 32.254-14.442 32.254-32.255C419.274 444.277 404.833 429.835 387.02 429.835z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lushi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.242062 505.637082l-167.915337-101.833293c0 0-7.643074-29.698392-38.167275-66.191538l30.524201-112.011096-114.486474 35.637662c0 0-38.168298-29.697369-58.512648-33.093722L511.999488 62.671365l-101.769848 173.113733c0 0-20.352537 9.334599-61.063751 25.454742l-106.850563-45.822628 33.06814 119.652124c0 0-27.986401 39.882336-33.06814 71.28044L66.755892 505.637082l170.468486 99.283214c0 0 14.408151 44.972261 30.524201 66.195631l-38.160111 109.458971 117.030413-28.002774c0 0 55.129598 39.037085 76.335572 45.827745l86.498026 162.92979 96.679923-162.92979c0 0 58.519812-25.459858 76.333526-38.183647l114.489544 30.53955-35.618219-117.105115c0 0 30.525224-49.207725 40.705074-73.828472L957.242062 505.637082zM636.664789 653.293003c0 0-47.701418 39.458687-109.404736 43.271526 0 0-107.48706 14.002922-145.017838-35.638685l83.962274-30.546713c0 0 127.84983-42.004673 129.756249-86.559425 0 0 38.797631-71.91489-15.261589-134.925992l-5.089925-12.729929-10.17985 2.549056c0 0-55.974849-19.095917-104.313787 30.547737 0 0-27.349905 47.096644 7.633864 78.919421 0 0 19.084661 10.819416 17.807574-10.18292l-5.090948-28.002774c0 0 77.597309-36.915771 78.872349 81.464383 0 0-62.96403 62.372559-129.757273 22.913872 0 0-84.599793-75.102489-68.691475-134.927015l-2.544963-30.55183L415.312402 360.527147l73.789587-43.277666 25.441439 5.090948 22.895453-10.184967 12.719696 15.274892 71.243601 17.822924c0 0 62.963007 64.914452 63.602573 91.64935C685.005774 436.900581 730.79975 577.547879 636.664789 653.293003z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tieba" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M356.848485 682.666667 356.848485 387.878788 356.848485 139.636364C356.848485 122.492121 342.962424 108.606061 325.818182 108.606061L227.033212 108.606061 155.151515 108.606061 139.636364 108.606061C122.492121 108.606061 108.606061 122.492121 108.606061 139.636364L108.606061 227.033212 108.606061 682.666667C108.606061 699.810909 94.72 713.69697 77.575758 713.69697 60.431515 713.69697 46.545455 699.810909 46.545455 682.666667L46.545455 186.181818 46.545455 139.636364C46.545455 88.219152 88.219152 46.545455 139.636364 46.545455 144.942545 46.545455 150.109091 47.041939 155.151515 47.895273L356.848485 46.545455C391.121455 46.545455 418.909091 74.333091 418.909091 108.606061L418.909091 139.636364 418.909091 325.818182 418.909091 682.666667C418.909091 699.810909 405.02303 713.69697 387.878788 713.69697 370.734545 713.69697 356.848485 699.810909 356.848485 682.666667ZM418.909091 965.042424C336.942545 940.962909 269.668848 883.060364 232.727273 807.579152 195.785697 883.060364 128.512 940.962909 46.545455 965.042424L46.545455 961.939394C29.401212 961.939394 15.515152 948.053333 15.515152 930.909091 15.515152 913.764848 29.401212 899.878788 46.545455 899.878788 134.873212 865.947152 198.221576 781.994667 201.386667 682.666667L201.69697 232.727273C201.69697 215.58303 215.58303 201.69697 232.727273 201.69697 249.871515 201.69697 263.757576 215.58303 263.757576 232.727273L263.757576 682.666667C267.23297 781.994667 330.581333 865.947152 418.909091 899.521939 436.053333 899.878788 449.939394 913.764848 449.939394 930.909091 449.939394 948.053333 436.053333 961.939394 418.909091 961.939394L418.909091 965.042424ZM729.212121 294.787879 729.212121 496.484848 899.878788 496.484848C934.151758 496.484848 961.939394 524.272485 961.939394 558.545455L961.939394 853.333333 899.878788 853.333333 899.878788 589.575758C899.878788 572.431515 885.992727 558.545455 868.848485 558.545455L605.090909 558.545455C587.946667 558.545455 574.060606 572.431515 574.060606 589.575758L574.060606 868.848485C574.060606 885.992727 587.946667 899.878788 605.090909 899.878788L842.007273 899.878788C842.007273 899.878788 860.853347 896.542444 868.848485 892.121212 884.061322 883.708664 894.112292 869.453081 899.878788 853.333333L961.939394 853.333333C961.232607 857.286986 960.374845 861.181038 959.371141 865.006881 945.348361 918.457864 902.83944 958.59479 845.575758 961.939394L574.060606 961.939394C539.787636 961.939394 512 934.151758 512 899.878788L512 558.545455C512 524.272485 539.787636 496.484848 574.060606 496.484848L667.151515 496.484848 667.151515 77.575758C667.151515 60.431515 681.037576 46.545455 698.181818 46.545455 715.326061 46.545455 729.212121 60.431515 729.212121 77.575758L729.212121 232.727273 961.939394 232.727273C979.083636 232.727273 992.969697 246.613333 992.969697 263.757576 992.969697 280.901818 979.083636 294.787879 961.939394 294.787879L729.212121 294.787879Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanjunhuojiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M549.558857 600.868571c95.085714-21.284571 179.638857-120.539429 239.981714-234.825143 15.396571 4.132571 31.561143 6.326857 48.274286 6.326857 102.838857 0 186.185143-83.346286 186.185143-186.185143 0-102.838857-83.346286-186.185143-186.185143-186.185143-47.213714 0-90.331429 17.590857-123.136 46.555429-124.013714 0-281.014857 0-405.357714 0-32.804571-28.964571-75.922286-46.555429-123.136-46.555429-102.838857 0-186.185143 83.346286-186.185143 186.185143 0 102.838857 83.346286 186.185143 186.185143 186.185143 16.713143 0 32.877714-2.194286 48.274286-6.326857 60.342857 114.285714 144.896 213.540571 239.981714 234.825143 4.022857 17.188571 6.546286 34.486857 6.546286 50.761143 0 81.078857-62.061714 186.185143-62.061714 186.185143l186.148571 0c0 0-62.061714-105.106286-62.061714-186.185143 0-16.274286 2.523429-33.572571 6.546286-50.761143ZM879.798857 103.058286c30.317714 15.36 51.126857 46.811429 51.126857 83.126857 0 51.419429-41.691429 93.074286-93.110857 93.074286-2.669714 0-5.339429-0.109714-7.936-0.329143 24.868571-61.805714 42.166857-123.428571 49.92-175.872ZM194.121143 278.930286c-2.596571 0.219429-5.266286 0.329143-7.936 0.329143-51.419429 0-93.110857-41.654857-93.110857-93.074286 0-36.315429 20.809143-67.766857 51.126857-83.126857 7.753143 52.443429 25.051429 114.066286 49.92 175.872ZM325.814857 910.884571c0-40.374857 33.060571-73.069714 73.142857-73.069714l226.084571 0c40.411429 0 73.142857 32.438857 73.142857 73.069714l0 113.115429-372.370286 0 0-113.115429ZM512 371.2l-86.308571 47.725714 16.493714-101.046857-69.814857-71.570286 96.475429-14.738286 43.154286-91.940571 43.154286 91.940571 96.475429 14.738286-69.814857 71.570286 16.493714 101.046857-86.308571-47.725714Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wangzhan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.341333 435.395048c55.929905-191.634286 178.371048-328.362667 402.334477-347.818667 15.408762-1.365333 37.010286-0.146286 54.613333-3.510857 15.164952-2.974476 33.694476-13.945905 51.151238-21.162667 70.948571-29.159619 227.718095-80.359619 306.907429-17.554286 68.705524 54.662095 56.027429 187.440762 13.604571 274.090667a471.381333 471.381333 0 0 1 44.324571 270.57981c-198.948571 8.192-430.762667 1.121524-624.054857 3.559619 6.485333 103.082667 71.143619 182.02819 167.107048 193.194666 93.769143 10.922667 158.573714-42.130286 201.191619-101.863619h238.640762c-62.025143 178.322286-219.623619 316.611048-463.676953 298.666667-55.491048-4.144762-98.742857-20.333714-146.675809-38.716952-79.969524 43.78819-256.926476 108.836571-327.338667 17.554285-53.443048-69.290667-19.114667-195.34019 10.24-277.504 59.392-166.521905 172.422095-331.483429 283.014095-425.203809 0.633905-2.876952 3.413333-3.559619 3.413334-7.021715-87.381333 44.665905-146.285714 118.637714-214.796191 182.710858z m838.802286-259.998477c-3.267048-119.612952-157.354667-107.861333-238.738286-59.733333 90.843429 36.376381 157.159619 98.06019 211.382857 172.129524 11.849143-37.546667 28.574476-68.705524 27.355429-112.396191zM377.222095 466.992762h378.489905c-10.971429-244.394667-366.592-224.646095-378.489905 0z m-279.600762 428.714667c18.968381 108.202667 170.325333 76.702476 238.689524 28.135619-89.770667-50.468571-145.749333-135.655619-190.951619-232.009143-20.967619 52.175238-60.269714 132.437333-47.737905 203.873524z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-Battlenet" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.818 451.656s83.608 4.238 83.608-44.962c0-64.242-111.302-122.192-111.302-122.192s17.418-37.016 28.308-57.694c10.89-20.68 41.528-101.386 44.262-119.818 3.452-23.16-1.802-30.448-1.802-30.448-7.564 49.664-88.376 192.6-94.796 197.516-78.862-36.974-187.198-47.272-187.198-47.272S554.852 3.484 455.12 3.484c-98.884 0-98.398 191.224-98.398 191.224s-27.948-54.22-63.014-54.22c-51.254 0-68.098 77.57-68.098 161.666-101.258 0-186.436 22.63-194.04 24.81-7.628 2.182-31.57 19.598-20.678 17.416 22.142-7.098 126.176-23.202 217.264-15.276 5 79.942 51.656 184.04 51.656 184.04s-100.05 144.948-100.05 248.494c0 27.248 11.866 77.062 83.714 77.062 60.154 0 127.722-36.188 140.456-43.54-11.104 15.87-19.324 46.042-19.324 59.876 0 11.356 6.738 43.54 53.118 43.54 59.602 0 126.174-45.682 126.174-45.682s62.844 104.48 116.576 152.364c14.492 12.904 28.328 15.256 28.328 15.256s-53.374-51.402-123.696-183.828c65.344-40.404 133.422-135.668 133.422-135.668s8.01 0.254 70.068 0.254c97.254 0 235.4-20.468 235.4-97.762 0-79.774-124.182-151.856-124.182-151.856z m10.87-48.012c0 28.202-26.846 27.862-26.846 27.862l-20.384 1.356s-38.73-20.382-62.188-29.896c0 0 36.36-56.064 44.856-71.7 6.462 3.728 64.562 40.088 64.562 72.38zM503.79 115.994c45.702 0 110.962 107.912 110.962 107.912s-101.83-9.132-185.63 40.13c2.288-77.698 28.456-148.042 74.668-148.042z m-181.114 87.444c14.514 0 28.752 17.67 34.6 32.652 0 9.896 5.15 67.696 5.15 67.696l-83.926-3.158c0-75.728 29.664-97.19 44.178-97.19z m-8.688 525.678c-45.85 0-55.322-25.552-55.322-48.562 0-52.1 41.57-124.948 41.57-124.948s46.55 97.996 127.892 139.354c-40.362 23.688-73.65 34.156-114.142 34.156z m148.91 102.614c-32.142 0-36.062-20.85-36.062-25.702 0-14.958 11.696-32.63 11.696-32.63s54.05-36.528 57.462-40.428l39.94 74.518s-40.894 24.24-73.036 24.24z m100.304-40.662c-19.558-34.22-33.986-69.962-33.986-69.962s80.388 5.212 123.568-39.452c-26.93 12.12-69.814 27.376-119.776 22.778 104.414-91.978 165.288-158.614 216.818-227.498-4.45-5.338-27.99-21.782-33.774-24.558-31.106 37.44-151.962 166.728-263.918 230.718-141.728-77.316-171.498-304.79-174.504-352.04l77.42 7.438s-29.092 51.594-29.092 89.562 4.536 39.962 4.536 39.962-0.976-66.17 39.896-117.276c31.106 165.734 63.564 250.634 88.862 301.252 12.882-5.34 36.89-15.996 36.89-15.996s-71.532-206.16-67.526-345.684c32.44-17.332 80.43-35.192 134.628-35.192 142.616 0 257.266 61.404 257.266 61.404l-44.876 62.654s-39.982-72.42-96.406-85.302c29.77 22.204 63.098 51.55 80.43 93.758-118.188-46.212-260.804-70.642-306.572-75.98-4.004 16.888-3.452 41-3.452 41s191.264 35.32 330.472 114.966c-0.976 174.188-190.692 307.928-216.904 323.458z m181.178-130.178s59.412-77.928 58.438-181.178c0 0 95.938 59.412 95.938 117.382 0 64.772-154.376 63.798-154.376 63.798z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)