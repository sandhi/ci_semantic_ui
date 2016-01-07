<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

  public function __construct() {
    parent::__construct();
    $this->load->helper(array('url'));
  }

  public function css() {
    return $this->load->view('assets/css','',TRUE);
  }

  public function js() {
    return $this->load->view('assets/js','',TRUE);
  }

  public function index() {
    $data['css'] = $this->css();
    $data['js'] = $this->js();

    $this->load->view('home',$data);
  }

}
