import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const YoutubeSVG = (props: SvgPropTypes | any): React.ReactElement => (
  <svg width={28} height={32} viewBox="0 0 28 32" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.8499 16.1694C26.5407 15.0213 25.6355 14.1161 24.4874 13.807C22.3899 13.233 14 13.233 14 13.233C14 13.233 5.61003 13.233 3.51255 13.7849C2.38653 14.094 1.45922 15.0213 1.15011 16.1694C0.598145 18.2669 0.598145 22.6165 0.598145 22.6165C0.598145 22.6165 0.598145 26.9881 1.15011 29.0635C1.45922 30.2116 2.36445 31.1168 3.51255 31.4259C5.63211 31.9999 14 31.9999 14 31.9999C14 31.9999 22.3899 31.9999 24.4874 31.448C25.6355 31.1389 26.5407 30.2336 26.8499 29.0855C27.4018 26.9881 27.4018 22.6385 27.4018 22.6385C27.4018 22.6385 27.4239 18.2669 26.8499 16.1694ZM21.3767 24.7406V25.1307C21.3767 25.622 21.3912 25.9977 21.4201 26.2434C21.449 26.489 21.5068 26.6769 21.6079 26.778C21.6946 26.8936 21.8391 26.9514 22.0414 26.9514C22.3015 26.9514 22.4749 26.8503 22.5761 26.648C22.6772 26.4457 22.7206 26.1133 22.735 25.6365L24.2233 25.7232C24.2378 25.7954 24.2378 25.8821 24.2378 25.9977C24.2378 26.7058 24.0499 27.2404 23.6598 27.5872C23.2697 27.934 22.7206 28.1074 22.0125 28.1074C21.16 28.1074 20.5675 27.8328 20.2207 27.2982C19.8739 26.7636 19.7006 25.9399 19.7006 24.8128V23.469C19.7006 22.313 19.874 21.4749 20.2352 20.9403C20.5964 20.4056 21.2033 20.1455 22.0559 20.1455C22.6483 20.1455 23.1107 20.2611 23.4286 20.4779C23.7465 20.6946 23.9633 21.0414 24.0933 21.4894C24.2233 21.9518 24.2811 22.5876 24.2811 23.3967V24.7117H21.3767V24.7406ZM21.5935 21.5038C21.5068 21.6194 21.449 21.7928 21.4201 22.0385C21.3912 22.2841 21.3767 22.6598 21.3767 23.1656V23.7146H22.6483V23.1656C22.6483 22.6743 22.6339 22.2986 22.605 22.0385C22.5761 21.7784 22.5038 21.605 22.4171 21.5038C22.3304 21.4027 22.1859 21.3449 22.0125 21.3449C21.8102 21.3304 21.6802 21.3882 21.5935 21.5038ZM13.0247 28.0207V20.3189H11.2907V26.4312C11.2329 26.5757 11.1318 26.6913 10.9873 26.778C10.8428 26.8792 10.6983 26.9225 10.5538 26.9225C10.3804 26.9225 10.2503 26.8503 10.1781 26.7058C10.1058 26.5613 10.0625 26.3156 10.0625 25.9688V20.3189H8.3285V26.07C8.3285 26.7925 8.4441 27.3126 8.68975 27.645C8.93539 27.9773 9.31109 28.1507 9.81683 28.1507C10.5538 28.1507 11.1173 27.7895 11.4786 27.0815H11.5219L11.6664 28.0207H13.0247ZM8.84868 18.874H7.12915V28.0062H5.43852V18.874H3.71899V17.4723H8.84868V18.874ZM18.2555 20.4923C18.4867 20.7091 18.6601 21.0559 18.7613 21.5472C18.8624 22.024 18.9058 22.7032 18.9202 23.5846V24.7984C18.9202 25.9399 18.7757 26.7925 18.5012 27.3271C18.2267 27.8617 17.8076 28.1363 17.2152 28.1363C16.8828 28.1363 16.5938 28.0496 16.3193 27.9051C16.0447 27.7461 15.8424 27.5438 15.7124 27.2837H15.669L15.4956 28.0062H14.0651V17.0822H15.7413V21.1426H15.7557C15.9002 20.8536 16.117 20.6079 16.3915 20.4345C16.6661 20.2467 16.9695 20.16 17.2874 20.16C17.692 20.16 18.0244 20.2756 18.2555 20.4923ZM17.0996 25.9977C17.1429 25.6798 17.1718 25.2463 17.1718 24.6828H17.1863V23.6713C17.1863 23.0789 17.1718 22.6165 17.1285 22.2841C17.0851 21.9662 17.0273 21.735 16.9262 21.5905C16.8395 21.4605 16.695 21.3882 16.5216 21.3882C16.3626 21.3882 16.2037 21.4605 16.0592 21.5905C15.9147 21.735 15.8135 21.9084 15.7557 22.1107V26.4746C15.828 26.6046 15.9291 26.7058 16.0447 26.778C16.1603 26.8503 16.2904 26.8792 16.4349 26.8792C16.6083 26.8792 16.7528 26.8069 16.8684 26.6769C16.9695 26.5468 17.0562 26.3156 17.0996 25.9977Z"
      fill="white"
    />
    <path
      d="M12.3746 10.3172C12.0278 10.086 11.7821 9.72478 11.6376 9.21903C11.4931 8.72774 11.4209 8.06305 11.4209 7.25386V6.14122C11.4209 5.31758 11.5076 4.65289 11.6665 4.14715C11.8399 3.6414 12.1 3.28016 12.4468 3.04896C12.8081 2.81776 13.2705 2.70216 13.8485 2.70216C14.412 2.70216 14.8744 2.81776 15.2212 3.04896C15.568 3.28016 15.8136 3.65585 15.9726 4.14715C16.1315 4.63844 16.2182 5.30313 16.2182 6.14122V7.25386C16.2182 8.0775 16.146 8.72774 15.987 9.23348C15.8281 9.72478 15.5824 10.1005 15.2357 10.3317C14.8889 10.5629 14.412 10.6785 13.8196 10.6785C13.2127 10.664 12.7214 10.5484 12.3746 10.3172ZM14.3253 9.10343C14.4265 8.85779 14.4698 8.43874 14.4698 7.8752V5.47653C14.4698 4.92744 14.4265 4.52284 14.3253 4.26274C14.2242 4.00265 14.0652 3.88705 13.8196 3.88705C13.5884 3.88705 13.415 4.0171 13.3283 4.26274C13.2271 4.52284 13.1838 4.92744 13.1838 5.47653V7.8752C13.1838 8.43874 13.2271 8.85779 13.3283 9.10343C13.415 9.34908 13.5884 9.47913 13.834 9.47913C14.0652 9.47913 14.2242 9.36353 14.3253 9.10343Z"
      fill="white"
    />
    <path
      d="M8.15512 7.12381L6.18994 4.57764e-05H7.90947L8.60306 3.22236C8.77646 4.0171 8.90651 4.69624 8.99321 5.25978H9.03655C9.09435 4.85519 9.2244 4.19049 9.4267 3.2368L10.1492 4.57764e-05H11.8687L9.87464 7.12381V10.534H8.16957V7.12381H8.15512Z"
      fill="white"
    />
    <path
      d="M21.8104 2.84666V10.5484H20.4522L20.3077 9.60918H20.2643C19.9031 10.3172 19.3395 10.6785 18.6026 10.6785C18.0968 10.6785 17.7212 10.5051 17.4755 10.1727C17.2299 9.84038 17.1143 9.32018 17.1143 8.59769V2.84666H18.8482V8.49654C18.8482 8.84334 18.8916 9.08899 18.9638 9.23348C19.0361 9.37798 19.1661 9.45023 19.3395 9.45023C19.484 9.45023 19.6285 9.40688 19.773 9.30573C19.9175 9.21903 20.0187 9.10344 20.0765 8.95894V2.84666H21.8104Z"
      fill="white"
    />
  </svg>
)

export default YoutubeSVG
