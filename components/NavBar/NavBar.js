import React, { useEffect } from 'react'
import Link from 'next/link'
import { useStateValue } from '../../context'

const NavBar = () => {
  
  const [state] = useStateValue()

  return (
    <div className="bg-white sticky">
        <nav className="flex px-4 border-b md:shadow-lg items-center relative">
            <div className="text-lg font-bold md:py-0 py-4 w-10 md:ml-40">
                <Link
                    href={{
                        pathname: '/',
                    }}
                >
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#002554" viewBox="0 0 160 48" width="160" height="48">
                            <path d="M40.81.277v30.487h-6.97V9.554L20.47 25.885h-.346L6.75 9.553v21.211H0V.277h7.58l12.89 16.118L33.363.277h7.446zm39.73 24.651v5.836H49.136V.277h30.967v5.836h-24.04v6.272H76.14v5.836H56.062v6.71l24.477-.003zm33.079 5.836L104.866 20.4h-11.02v10.365h-6.925V.277h21.037c7.447 0 13.066 3.441 13.066 10.06 0 5.183-3.442 8.406-8.494 9.583l9.408 10.844h-8.319zm-6.053-16.114c3.658 0 6.359-.872 6.359-4.268s-2.698-4.269-6.359-4.269H93.8v8.54l13.766-.003zM160 .277v16.118c0 9.146-6.054 15.33-17.116 15.33-11.063 0-17.117-6.184-17.117-15.33V.277h6.969V15.87c0 6.098 3.571 9.754 10.148 9.754 6.576 0 10.148-3.659 10.148-9.754V.277H160zM6.636 44.756h-4.68L.948 47H.024l3.84-8.4h.876L8.58 47h-.936l-1.008-2.244zm-.324-.72l-2.016-4.512-2.016 4.512h4.032zm5.111 3.024a5.03 5.03 0 01-1.476-.216c-.464-.152-.828-.34-1.092-.564l.384-.672c.264.208.596.38.996.516.4.128.816.192 1.248.192.576 0 1-.088 1.272-.264a.87.87 0 00.42-.768c0-.232-.076-.412-.228-.54a1.41 1.41 0 00-.576-.3 7.263 7.263 0 00-.924-.204 11.681 11.681 0 01-1.236-.288 1.908 1.908 0 01-.804-.516c-.216-.24-.324-.572-.324-.996 0-.528.22-.96.66-1.296.44-.336 1.052-.504 1.836-.504.408 0 .816.056 1.224.168.408.104.744.244 1.008.42l-.372.684c-.52-.36-1.14-.54-1.86-.54-.544 0-.956.096-1.236.288-.272.192-.408.444-.408.756 0 .24.076.432.228.576.16.144.356.252.588.324.232.064.552.132.96.204.504.096.908.192 1.212.288.304.096.564.26.78.492.216.232.324.552.324.96 0 .552-.232.992-.696 1.32-.456.32-1.092.48-1.908.48zm4.179-6.372h.852V47h-.852v-6.312zm.432-1.38a.603.603 0 01-.444-.18.59.59 0 01-.18-.432c0-.16.06-.3.18-.42s.268-.18.444-.18.324.06.444.18c.12.112.18.248.18.408 0 .176-.06.324-.18.444a.603.603 0 01-.444.18zm4.999 1.332c.824 0 1.456.208 1.896.624.44.408.66 1.016.66 1.824V47h-.816v-.984a1.947 1.947 0 01-.852.768c-.368.184-.808.276-1.32.276-.704 0-1.264-.168-1.68-.504-.416-.336-.624-.78-.624-1.332 0-.536.192-.968.576-1.296.392-.328 1.012-.492 1.86-.492h2.004v-.384c0-.544-.152-.956-.456-1.236-.304-.288-.748-.432-1.332-.432-.4 0-.784.068-1.152.204a2.822 2.822 0 00-.948.54l-.384-.636c.32-.272.704-.48 1.152-.624.448-.152.92-.228 1.416-.228zm-.3 5.748c.48 0 .892-.108 1.236-.324.344-.224.6-.544.768-.96v-1.032h-1.98c-1.08 0-1.62.376-1.62 1.128 0 .368.14.66.42.876.28.208.672.312 1.176.312zm10.519-5.748c.823 0 1.456.208 1.896.624.44.408.66 1.016.66 1.824V47h-.816v-.984a1.947 1.947 0 01-.852.768c-.369.184-.809.276-1.32.276-.704 0-1.265-.168-1.68-.504-.416-.336-.625-.78-.625-1.332 0-.536.192-.968.576-1.296.392-.328 1.012-.492 1.86-.492h2.005v-.384c0-.544-.153-.956-.457-1.236-.303-.288-.748-.432-1.332-.432-.4 0-.784.068-1.152.204a2.822 2.822 0 00-.948.54l-.384-.636c.32-.272.704-.48 1.152-.624.448-.152.92-.228 1.416-.228zm-.3 5.748c.48 0 .891-.108 1.235-.324.345-.224.6-.544.769-.96v-1.032h-1.98c-1.08 0-1.62.376-1.62 1.128 0 .368.14.66.42.876.28.208.672.312 1.175.312zm13.998-5.7V47h-.816v-1.152a2.379 2.379 0 01-.924.9c-.392.208-.84.312-1.344.312-.824 0-1.476-.228-1.956-.684-.472-.464-.708-1.14-.708-2.028v-3.66h.852v3.576c0 .664.164 1.168.492 1.512.328.344.796.516 1.404.516.664 0 1.188-.2 1.572-.6.384-.408.576-.972.576-1.692v-3.312h.852zm5.602-.048c.792 0 1.42.232 1.884.696.472.456.708 1.124.708 2.004V47h-.852v-3.576c0-.656-.164-1.156-.492-1.5-.328-.344-.796-.516-1.404-.516-.68 0-1.22.204-1.62.612-.392.4-.588.956-.588 1.668V47h-.852v-6.312h.816v1.164c.232-.384.552-.68.96-.888.416-.216.896-.324 1.44-.324zm10.662 6.42a3.436 3.436 0 01-1.68-.408 2.976 2.976 0 01-1.152-1.14 3.333 3.333 0 01-.42-1.668c0-.616.14-1.168.42-1.656.28-.488.664-.868 1.152-1.14a3.436 3.436 0 011.68-.408c.544 0 1.028.108 1.452.324.432.208.772.516 1.02.924l-.636.432a1.945 1.945 0 00-.792-.696c-.32-.16-.668-.24-1.044-.24-.456 0-.868.104-1.236.312-.36.2-.644.488-.852.864-.2.376-.3.804-.3 1.284 0 .488.1.92.3 1.296.208.368.492.656.852.864.368.2.78.3 1.236.3.376 0 .724-.076 1.044-.228.32-.152.584-.384.792-.696l.636.432c-.248.408-.588.72-1.02.936a3.304 3.304 0 01-1.452.312zm4.052-8.964h.852V47h-.852v-8.904zm3.223 2.592h.852V47h-.852v-6.312zm.432-1.38a.603.603 0 01-.444-.18.59.59 0 01-.18-.432c0-.16.06-.3.18-.42s.268-.18.444-.18.324.06.444.18c.12.112.18.248.18.408 0 .176-.06.324-.18.444a.603.603 0 01-.444.18zm5.406 7.752a3.436 3.436 0 01-1.68-.408 2.976 2.976 0 01-1.152-1.14 3.333 3.333 0 01-.42-1.668c0-.616.14-1.168.42-1.656.28-.488.664-.868 1.152-1.14a3.436 3.436 0 011.68-.408c.544 0 1.028.108 1.452.324.432.208.772.516 1.02.924l-.636.432a1.945 1.945 0 00-.792-.696c-.32-.16-.668-.24-1.044-.24-.456 0-.868.104-1.236.312-.36.2-.644.488-.852.864-.2.376-.3.804-.3 1.284 0 .488.1.92.3 1.296.208.368.492.656.852.864.368.2.78.3 1.236.3.376 0 .724-.076 1.044-.228.32-.152.584-.384.792-.696l.636.432c-.248.408-.588.72-1.02.936a3.304 3.304 0 01-1.452.312zm6.393-3.228L79.23 45.2V47h-.852v-8.904h.852v6.036L83 40.688h1.056l-2.7 2.58L84.307 47h-1.044l-2.544-3.168zm13.767-5.736V47h-.816v-1.248a2.587 2.587 0 01-1.02.972 2.939 2.939 0 01-1.416.336 3.204 3.204 0 01-1.608-.408 2.916 2.916 0 01-1.128-1.14c-.272-.488-.408-1.044-.408-1.668 0-.624.136-1.18.408-1.668a2.834 2.834 0 011.128-1.128 3.204 3.204 0 011.608-.408c.512 0 .972.108 1.38.324a2.57 2.57 0 011.02.924v-3.792h.852zm-3.18 8.208c.44 0 .836-.1 1.188-.3.36-.208.64-.5.84-.876.208-.376.312-.804.312-1.284s-.104-.908-.312-1.284c-.2-.376-.48-.664-.84-.864a2.29 2.29 0 00-1.188-.312c-.448 0-.852.104-1.212.312-.352.2-.632.488-.84.864-.2.376-.3.804-.3 1.284s.1.908.3 1.284c.208.376.488.668.84.876.36.2.764.3 1.212.3zm11.049-2.196h-5.28c.048.656.3 1.188.756 1.596.456.4 1.032.6 1.728.6.392 0 .752-.068 1.08-.204.328-.144.612-.352.852-.624l.48.552c-.28.336-.632.592-1.056.768a3.507 3.507 0 01-1.38.264c-.648 0-1.224-.136-1.728-.408a3.038 3.038 0 01-1.164-1.152 3.267 3.267 0 01-.42-1.656c0-.616.132-1.168.396-1.656.272-.488.64-.868 1.104-1.14.472-.272 1-.408 1.584-.408a3.05 3.05 0 011.572.408c.464.272.828.652 1.092 1.14.264.48.396 1.032.396 1.656l-.012.264zm-3.048-2.736c-.608 0-1.12.196-1.536.588-.408.384-.64.888-.696 1.512h4.476c-.056-.624-.292-1.128-.708-1.512-.408-.392-.92-.588-1.536-.588zm13.695-3.276V47h-.816v-1.248a2.587 2.587 0 01-1.02.972 2.939 2.939 0 01-1.416.336 3.204 3.204 0 01-1.608-.408 2.916 2.916 0 01-1.128-1.14c-.272-.488-.408-1.044-.408-1.668 0-.624.136-1.18.408-1.668a2.834 2.834 0 011.128-1.128 3.204 3.204 0 011.608-.408c.512 0 .972.108 1.38.324a2.57 2.57 0 011.02.924v-3.792h.852zm-3.18 8.208c.44 0 .836-.1 1.188-.3.36-.208.64-.5.84-.876.208-.376.312-.804.312-1.284s-.104-.908-.312-1.284c-.2-.376-.48-.664-.84-.864a2.29 2.29 0 00-1.188-.312c-.448 0-.852.104-1.212.312-.352.2-.632.488-.84.864-.2.376-.3.804-.3 1.284s.1.908.3 1.284c.208.376.488.668.84.876.36.2.764.3 1.212.3zm5.552-5.616h.852V47h-.852v-6.312zm.432-1.38a.603.603 0 01-.444-.18.59.59 0 01-.18-.432c0-.16.06-.3.18-.42s.268-.18.444-.18.324.06.444.18c.12.112.18.248.18.408 0 .176-.06.324-.18.444a.603.603 0 01-.444.18zm4.483 7.752a5.03 5.03 0 01-1.476-.216c-.464-.152-.828-.34-1.092-.564l.384-.672c.264.208.596.38.996.516.4.128.816.192 1.248.192.576 0 1-.088 1.272-.264a.87.87 0 00.42-.768c0-.232-.076-.412-.228-.54a1.41 1.41 0 00-.576-.3 7.263 7.263 0 00-.924-.204 11.681 11.681 0 01-1.236-.288 1.908 1.908 0 01-.804-.516c-.216-.24-.324-.572-.324-.996 0-.528.22-.96.66-1.296.44-.336 1.052-.504 1.836-.504.408 0 .816.056 1.224.168.408.104.744.244 1.008.42l-.372.684c-.52-.36-1.14-.54-1.86-.54-.544 0-.956.096-1.236.288-.272.192-.408.444-.408.756 0 .24.076.432.228.576.16.144.356.252.588.324.232.064.552.132.96.204.504.096.908.192 1.212.288.304.096.564.26.78.492.216.232.324.552.324.96 0 .552-.232.992-.696 1.32-.456.32-1.092.48-1.908.48zm7.503-.444c-.16.144-.36.256-.6.336a2.456 2.456 0 01-.732.108c-.592 0-1.048-.16-1.368-.48-.32-.32-.48-.772-.48-1.356v-3.816h-1.128v-.72h1.128v-1.38h.852v1.38h1.92v.72h-1.92v3.768c0 .376.092.664.276.864.192.192.464.288.816.288.176 0 .344-.028.504-.084.168-.056.312-.136.432-.24l.3.612zm3.759-5.976c.824 0 1.456.208 1.896.624.44.408.66 1.016.66 1.824V47h-.816v-.984a1.947 1.947 0 01-.852.768c-.368.184-.808.276-1.32.276-.704 0-1.264-.168-1.68-.504-.416-.336-.624-.78-.624-1.332 0-.536.192-.968.576-1.296.392-.328 1.012-.492 1.86-.492h2.004v-.384c0-.544-.152-.956-.456-1.236-.304-.288-.748-.432-1.332-.432-.4 0-.784.068-1.152.204a2.822 2.822 0 00-.948.54l-.384-.636c.32-.272.704-.48 1.152-.624.448-.152.92-.228 1.416-.228zm-.3 5.748c.48 0 .892-.108 1.236-.324.344-.224.6-.544.768-.96v-1.032h-1.98c-1.08 0-1.62.376-1.62 1.128 0 .368.14.66.42.876.28.208.672.312 1.176.312zm8.386-5.748c.792 0 1.42.232 1.884.696.472.456.708 1.124.708 2.004V47h-.852v-3.576c0-.656-.164-1.156-.492-1.5-.328-.344-.796-.516-1.404-.516-.68 0-1.22.204-1.62.612-.392.4-.588.956-.588 1.668V47h-.852v-6.312h.816v1.164c.232-.384.552-.68.96-.888.416-.216.896-.324 1.44-.324zm7.545 6.42a3.436 3.436 0 01-1.68-.408 2.976 2.976 0 01-1.152-1.14 3.333 3.333 0 01-.42-1.668c0-.616.14-1.168.42-1.656.28-.488.664-.868 1.152-1.14a3.436 3.436 0 011.68-.408c.544 0 1.028.108 1.452.324.432.208.772.516 1.02.924l-.636.432a1.945 1.945 0 00-.792-.696c-.32-.16-.668-.24-1.044-.24-.456 0-.868.104-1.236.312-.36.2-.644.488-.852.864-.2.376-.3.804-.3 1.284 0 .488.1.92.3 1.296.208.368.492.656.852.864.368.2.78.3 1.236.3.376 0 .724-.076 1.044-.228.32-.152.584-.384.792-.696l.636.432c-.248.408-.588.72-1.02.936a3.304 3.304 0 01-1.452.312zm4.146-6.372h.852V47h-.852v-6.312zm.432-1.38a.603.603 0 01-.444-.18.59.59 0 01-.18-.432c0-.16.06-.3.18-.42s.268-.18.444-.18.324.06.444.18c.12.112.18.248.18.408 0 .176-.06.324-.18.444a.603.603 0 01-.444.18zm4.998 1.332c.824 0 1.456.208 1.896.624.44.408.66 1.016.66 1.824V47h-.816v-.984a1.947 1.947 0 01-.852.768c-.368.184-.808.276-1.32.276-.704 0-1.264-.168-1.68-.504-.416-.336-.624-.78-.624-1.332 0-.536.192-.968.576-1.296.392-.328 1.012-.492 1.86-.492h2.004v-.384c0-.544-.152-.956-.456-1.236-.304-.288-.748-.432-1.332-.432-.4 0-.784.068-1.152.204a2.822 2.822 0 00-.948.54l-.384-.636c.32-.272.704-.48 1.152-.624.448-.152.92-.228 1.416-.228zm-.3 5.748c.48 0 .892-.108 1.236-.324.344-.224.6-.544.768-.96v-1.032h-1.98c-1.08 0-1.62.376-1.62 1.128 0 .368.14.66.42.876.28.208.672.312 1.176.312z"></path>
                        </svg>
                    </a>
                </Link>
            </div>
            <div className="ml-auto text-gray-500 cursor-pointer md:mr-40">
                <Link
                    href={{
                        pathname: '/cart',
                    }}
                >
                    <a className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">
                        <div slot="icon" className="relative">
                            <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">{ state.cart.length }</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart w-6 h-6 mt-2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                    </a>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
