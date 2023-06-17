const Pricing = () => {
  return (
    <>
      <div class="container mx-auto mb-10 mt-4 grid divide-gray-200 rounded-lg border bg-white px-6 py-10 md:grid-cols-2 lg:-mx-10 lg:grid-cols-4 lg:divide-x xl:mx-0">
        <div class="free-pricing-card xxl:p-7 border-b border-gray-200 p-6 md:border-r lg:border-r-0 lg:border-b-0">
          <span class="text-lg font-medium">Free</span>
          <div class="pricing-item mt-5">
            <span class="free-price-item text-4xl font-semibold">$0</span>
          </div>
          <div class="sm:min-h-[50px]">
            <span class="flex flex-wrap text-sm font-normal tracking-wide text-black text-opacity-70">
              <span class="subscribers">Free for up to</span>
              <span class="mx-1.5 flex flex-wrap items-center font-medium tracking-wide text-black">
                <svg
                  class="mr-1 h-2.5 w-2.5 fill-current opacity-75"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15,12 C17.7614237,12 20,14.2385763 20,17 L20,20 L0,20 L0,17 C0,14.2385763 2.23857625,12 5,12 L15,12 Z M10,0 C12.7614237,0 15,2.23857625 15,5 L15,6 C15,8.76142375 12.7614237,11 10,11 C7.23857625,11 5,8.76142375 5,6 L5,5 C5,2.23857625 7.23857625,0 10,0 Z"></path>
                </svg>

                <span>1,000</span>
              </span>
              subscribers
            </span>
          </div>
          <div class="my-6">
            <a href="/signup" class="type-primary size-small w-full">
              Sign up free
            </a>
          </div>
          <div>
            <span class="block border-t-2 border-gray-200 border-opacity-70 pb-3.5"></span>
            <ul class="space-y-3.5 text-sm leading-tight">
              <li class="text-gray-500">
                <span class="font-semibold text-black">12,000</span> monthly
                emails
              </li>

              <li class="text-gray-500">
                <span class="font-semibold text-black">1</span> user
              </li>

              <li class="text-gray-500">
                <a
                  href="/contact-us"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  <span class="font-semibold text-black">Monday - Friday</span>{" "}
                  Email support
                </a>
              </li>

              <li>
                <span class="block border-t-2 border-gray-200 border-opacity-70 pb-2"></span>
              </li>

              <li class="pb-1">
                <span class="text-sm font-semibold">Key features</span>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/drag-and-drop-editor"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Drag &amp; drop editor
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/automation"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Email automation builder
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/website-builder"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Websites
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/landing-pages"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  10 landing pages
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/signup-forms"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Signup forms &amp; pop-ups
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="xxl:p-7 border-b border-gray-200 p-6 lg:border-b-0">
          <div class="pricing-item-header" id="limit">
            <div class="pricing-item-title text-lg font-medium">
              Growing Business
            </div>
            <div
              class="pricing-item-price discount mt-5 font-bold"
              data-price-output="growing"
            >
              <span class="pricing-item-price-currency"></span>
              <span class="pricing-item-price-amount">$108</span>
              <span class="pricing-item-discount-amount">$9</span>
              <span class="pricing-item-price-after text-md text-gray-text font-normal">
                / month
              </span>
              <span
                class="pricing-item-discount-type absolute top-0 right-0 self-center leading-none"
                //   style="display: none"
              >
                Save 15%
              </span>
              <div class="sm:min-h-[50px]">
                <span class="flex flex-wrap text-sm font-normal tracking-wide text-black text-opacity-70">
                  <span class="pricing-item-annual-amount font-medium text-black">
                    $108 billed yearly&nbsp;
                  </span>
                  <span class="subscribers">For up to</span>
                  <span class="mx-1.5 flex flex-wrap items-center font-medium tracking-wide text-black">
                    <svg
                      class="mr-1 h-2.5 w-2.5 fill-current opacity-75"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M15,12 C17.7614237,12 20,14.2385763 20,17 L20,20 L0,20 L0,17 C0,14.2385763 2.23857625,12 5,12 L15,12 Z M10,0 C12.7614237,0 15,2.23857625 15,5 L15,6 C15,8.76142375 12.7614237,11 10,11 C7.23857625,11 5,8.76142375 5,6 L5,5 C5,2.23857625 7.23857625,0 10,0 Z"></path>
                    </svg>

                    <span class="subscriber-number">1,000</span>
                  </span>
                  subscribers
                </span>
              </div>
            </div>
          </div>

          <div class="my-6">
            <a
              href="/signup"
              class="type-primary size-small w-full text-center"
            >
              Start 30-day trial
            </a>
          </div>
          <div>
            <span class="block border-t-2 border-gray-200 border-opacity-70 pb-3.5"></span>
            <ul class="space-y-3.5 text-sm leading-tight">
              <li class="text-gray-500">
                <span class="font-semibold text-black">Unlimited</span> monthly
                emails
              </li>

              <li class="text-gray-500">
                <span class="font-semibold text-black">3</span> users
              </li>

              <li class="text-gray-500">
                <a
                  href="/contact-us"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  <span class="font-semibold text-black">24/7</span> Email
                  support
                </a>
              </li>

              <li>
                <span class="block border-t-2 border-gray-200 border-opacity-70 pb-2"></span>
              </li>

              <li class="pb-1">
                <span class="text-sm font-semibold">All in Free, plus</span>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/sell-digital-products"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Sell digital products
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/templates"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Unlimited templates
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/blog/dynamic-email-content-and-how-to-set-it-up"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Dynamic emails
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/auto-resend"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Auto resend campaign
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/website-builder"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Unlimited websites &amp; blogs
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/unsubscribe-builder"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Unsubscribe page builder
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="xxl:p-7 border-b border-gray-200 p-6 md:border-b-0 md:border-r lg:border-r-0">
          <div class="pricing-item-header" id="limit">
            <div class="pricing-item-title text-lg font-medium">Advanced</div>
            <div
              class="pricing-item-price discount mt-5 font-bold"
              data-price-output="advanced"
            >
              <span class="pricing-item-price-currency"></span>
              <span class="pricing-item-price-amount">$228</span>
              <span class="pricing-item-discount-amount">$19</span>
              <span class="pricing-item-price-after text-md text-gray-text font-normal">
                / month
              </span>
              <span
                class="pricing-item-discount-type absolute top-0 right-0 self-center leading-none"
                //   style="display: none"
              >
                Save 15%
              </span>
              <div class="sm:min-h-[50px]">
                <span class="flex flex-wrap text-sm font-normal tracking-wide text-black text-opacity-70">
                  <span class="pricing-item-annual-amount font-medium text-black">
                    $228 billed yearly&nbsp;
                  </span>
                  <span class="subscribers">For up to</span>
                  <span class="mx-1.5 flex flex-wrap items-center font-medium tracking-wide text-black">
                    <svg
                      class="mr-1 h-2.5 w-2.5 fill-current opacity-75"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M15,12 C17.7614237,12 20,14.2385763 20,17 L20,20 L0,20 L0,17 C0,14.2385763 2.23857625,12 5,12 L15,12 Z M10,0 C12.7614237,0 15,2.23857625 15,5 L15,6 C15,8.76142375 12.7614237,11 10,11 C7.23857625,11 5,8.76142375 5,6 L5,5 C5,2.23857625 7.23857625,0 10,0 Z"></path>
                    </svg>

                    <span class="subscriber-number">1,000</span>
                  </span>
                  subscribers
                </span>
              </div>
            </div>
          </div>

          <div class="my-6">
            <a
              href="/signup"
              class="type-primary size-small w-full text-center"
            >
              Start 30-day trial
            </a>
          </div>
          <div>
            <span class="block border-t-2 border-gray-200 border-opacity-70 pb-3.5"></span>
            <ul class="space-y-3.5 text-sm leading-tight">
              <li class="text-gray-500">
                <span class="email-limit-number font-semibold text-black">
                  Unlimited
                </span>{" "}
                monthly emails
              </li>

              <li class="text-gray-500">
                <span class="font-semibold text-black">Unlimited</span> users
              </li>

              <li class="text-gray-500">
                <span class="font-semibold text-black">24/7</span> Live chat
                &amp; email support
              </li>

              <li>
                <span class="block border-t-2 border-gray-200 border-opacity-70 pb-2"></span>
              </li>

              <li class="pb-1">
                <span class="text-sm font-semibold">
                  All in Growing Business, plus
                </span>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/facebook-audiences"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Facebook integration
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/custom-html"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Custom HTML editor
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/popups"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Promotion pop-ups
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/automation#multi-trigger"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Multiple triggers in automations
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/preference-center"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Preference center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="xxl:p-7 p-6">
          <span class="text-lg font-medium">Enterprise</span>
          <div class="mt-5 flex flex-col">
            <div class="flex h-[54px] text-2xl font-semibold">
              <span class="my-auto">Custom pricing</span>
            </div>
            <div class="sm:min-h-[50px]">
              <span class="block text-sm font-normal tracking-wide text-black text-opacity-70">
                Businesses with over{" "}
                <span class="font-medium text-black">100K</span> subscribers.
              </span>
            </div>
          </div>

          <div class="my-6">
            <a
              href="/enterprise-marketing"
              class="type-black-outline size-small w-full"
            >
              Contact us
            </a>
          </div>
          <div>
            <span class="block border-t-2 border-gray-200 border-opacity-70 pb-3.5"></span>
            <ul class="space-y-3.5 text-sm leading-tight">
              <li class="text-gray-500">
                <span class="email-limit-number font-semibold text-black">
                  Unlimited
                </span>{" "}
                monthly emails
              </li>

              <li class="text-gray-500">
                <span class="font-semibold text-black">Unlimited</span> users
              </li>

              <li class="text-gray-500">
                <span class="font-semibold text-black">24/7</span> Live chat
                &amp; email support
              </li>

              <li>
                <span class="block border-t-2 border-gray-200 border-opacity-70 pb-2"></span>
              </li>

              <li class="pb-1">
                <span class="text-sm font-semibold">All in Advanced, plus</span>
              </li>

              <li class="text-gray-500">Dedicated success manager</li>

              <li class="text-gray-500">
                <a
                  href="/features/dedicated-ip"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Dedicated IP &amp; deliverability consultation
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/custom-landing-page-design"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Custom landing page design
                </a>
              </li>

              <li class="text-gray-500">
                <a
                  href="/features/custom-email-template-design"
                  class="border-b border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black"
                >
                  Custom newsletter design
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
