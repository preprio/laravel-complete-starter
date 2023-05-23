<span class="{{ $classes }} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"
>
    <img v-if="iconUrl" src="{{ $iconUrl }}" class="w-3 h-3 mr-1" />

    <svg
            v-if="icon"
            aria-hidden="true"
            class="w-3 h-3 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
    >
      <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
      ></path>
    </svg>
    {{ $label }}
  </span>