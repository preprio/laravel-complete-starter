<?php

namespace App\View\Components;

use Closure;
use DateTime;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class CountDown extends Component
{
    public $startdate;
    public $days = 0;
    public $hours = 0;
    public $minutes = 0;
    public $seconds = 0;

    /**
     * Create a new component instance.
     */
    public function __construct(string $startdate)
    {
        $this->startdate = $startdate;
        $countDownDate = new DateTime($startdate);
        $now = new DateTime();

        $interval = $countDownDate->diff($now);

        $this->days = data_get($interval, 'd');
        $this->hours = data_get($interval, 'h');
        $this->minutes = data_get($interval, 'i');
        $this->seconds = data_get($interval, 's');
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.count-down');
    }
}
