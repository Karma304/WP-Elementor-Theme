<?php
/**
 * Plugin Name: SaaS Animations for Elementor
 * Plugin URI: https://github.com/Karma304/WP-Elementor-Theme
 * Description: Modern conversion-optimized animations for B2B SaaS landing pages built with Elementor
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://your-website.com
 * License: MIT
 * Text Domain: saas-animations
 * Requires at least: 5.0
 * Requires PHP: 7.4
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('SAAS_ANIMATIONS_VERSION', '1.0.0');
define('SAAS_ANIMATIONS_PATH', plugin_dir_path(__FILE__));
define('SAAS_ANIMATIONS_URL', plugin_dir_url(__FILE__));

/**
 * Main SaaS Animations Plugin Class
 */
class SaaS_Animations_Plugin {
    
    /**
     * Instance of this class
     */
    private static $instance = null;
    
    /**
     * Get instance of this class
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Constructor
     */
    private function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_action('elementor/editor/after_enqueue_scripts', array($this, 'enqueue_editor_assets'));
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
        add_filter('plugin_action_links_' . plugin_basename(__FILE__), array($this, 'add_settings_link'));
    }
    
    /**
     * Enqueue frontend assets
     */
    public function enqueue_assets() {
        // Check if Elementor is active
        if (!did_action('elementor/loaded')) {
            return;
        }
        
        // Get plugin options
        $options = get_option('saas_animations_options');
        
        // Enqueue CSS
        if (!isset($options['disable_css']) || !$options['disable_css']) {
            wp_enqueue_style(
                'saas-animations',
                SAAS_ANIMATIONS_URL . 'css/animations.css',
                array(),
                SAAS_ANIMATIONS_VERSION
            );
        }
        
        // Enqueue JavaScript
        if (!isset($options['disable_js']) || !$options['disable_js']) {
            wp_enqueue_script(
                'saas-animations',
                SAAS_ANIMATIONS_URL . 'js/animations.js',
                array(),
                SAAS_ANIMATIONS_VERSION,
                true
            );
            
            wp_enqueue_script(
                'saas-elementor-integration',
                SAAS_ANIMATIONS_URL . 'js/elementor-integration.js',
                array('jquery', 'saas-animations'),
                SAAS_ANIMATIONS_VERSION,
                true
            );
        }
        
        // Optionally load Lottie with SRI
        if (isset($options['enable_lottie']) && $options['enable_lottie']) {
            wp_enqueue_script(
                'lottie',
                'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js',
                array(),
                '5.12.2',
                true
            );
            // Add integrity attribute via script_loader_tag filter
            add_filter('script_loader_tag', function($tag, $handle) {
                if ($handle === 'lottie') {
                    $tag = str_replace(' src', ' integrity="sha512-bp7OpR/CZ/l0FDknjmAaAXkfJc+V6RKmlKn4p3N7zzKqE2lc7xqEA6dv0qoIQ9F5qH9zZ2hqLqkkqR5gK+1L2A==" crossorigin="anonymous" referrerpolicy="no-referrer" src', $tag);
                }
                return $tag;
            }, 10, 2);
        }
        
        // Optionally load GSAP with SRI
        if (isset($options['enable_gsap']) && $options['enable_gsap']) {
            wp_enqueue_script(
                'gsap',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
                array(),
                '3.12.2',
                true
            );
            
            wp_enqueue_script(
                'gsap-scroll-trigger',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
                array('gsap'),
                '3.12.2',
                true
            );
            
            // Add integrity attributes via script_loader_tag filter
            add_filter('script_loader_tag', function($tag, $handle) {
                if ($handle === 'gsap') {
                    $tag = str_replace(' src', ' integrity="sha512-S9PIz7GwbGFhq0TqWp9VvqS8c8xgQqDnVnLG3u3sCLK6p5M3q0Fp5aO1xk/RkQs/xTm5LlJmF8Z4qkM5l4NFRA==" crossorigin="anonymous" referrerpolicy="no-referrer" src', $tag);
                } elseif ($handle === 'gsap-scroll-trigger') {
                    $tag = str_replace(' src', ' integrity="sha512-UhHqxh3+GhILT0EjQhSgfJMkQEoQpCNJ3jUSlPT4N1c7F5W2Q9eXr1kF0YX3bfCcJvKnuQE5S6M6sF9C8VPxaA==" crossorigin="anonymous" referrerpolicy="no-referrer" src', $tag);
                }
                return $tag;
            }, 10, 2);
        }
        
        // Pass options to JavaScript
        wp_localize_script('saas-animations', 'saasAnimationsOptions', array(
            'reducedMotion' => isset($options['force_reduced_motion']) && $options['force_reduced_motion'],
            'disableParticles' => isset($options['disable_particles']) && $options['disable_particles'],
            'disableParallax' => isset($options['disable_parallax']) && $options['disable_parallax'],
            'disableSticky' => isset($options['disable_sticky_cta']) && $options['disable_sticky_cta'],
            'counterDuration' => isset($options['counter_duration']) ? intval($options['counter_duration']) : 2000,
            'sliderDuration' => isset($options['slider_duration']) ? intval($options['slider_duration']) : 5000,
        ));
    }
    
    /**
     * Enqueue editor assets
     */
    public function enqueue_editor_assets() {
        // Add custom CSS for Elementor editor
        wp_enqueue_style(
            'saas-animations-editor',
            SAAS_ANIMATIONS_URL . 'css/animations.css',
            array(),
            SAAS_ANIMATIONS_VERSION
        );
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_options_page(
            'SaaS Animations Settings',
            'SaaS Animations',
            'manage_options',
            'saas-animations',
            array($this, 'settings_page')
        );
    }
    
    /**
     * Register plugin settings
     */
    public function register_settings() {
        register_setting('saas_animations_options', 'saas_animations_options');
    }
    
    /**
     * Add settings link to plugin page
     */
    public function add_settings_link($links) {
        $settings_link = '<a href="options-general.php?page=saas-animations">Settings</a>';
        array_unshift($links, $settings_link);
        return $links;
    }
    
    /**
     * Settings page HTML
     */
    public function settings_page() {
        if (!current_user_can('manage_options')) {
            return;
        }
        
        // Save settings
        if (isset($_POST['saas_animations_submit'])) {
            check_admin_referer('saas_animations_settings');
            
            $options = array(
                'disable_css' => isset($_POST['disable_css']),
                'disable_js' => isset($_POST['disable_js']),
                'enable_lottie' => isset($_POST['enable_lottie']),
                'enable_gsap' => isset($_POST['enable_gsap']),
                'force_reduced_motion' => isset($_POST['force_reduced_motion']),
                'disable_particles' => isset($_POST['disable_particles']),
                'disable_parallax' => isset($_POST['disable_parallax']),
                'disable_sticky_cta' => isset($_POST['disable_sticky_cta']),
                'counter_duration' => intval($_POST['counter_duration']),
                'slider_duration' => intval($_POST['slider_duration']),
            );
            
            update_option('saas_animations_options', $options);
            echo '<div class="notice notice-success"><p>Settings saved successfully!</p></div>';
        }
        
        $options = get_option('saas_animations_options', array());
        ?>
        <div class="wrap">
            <h1>🎬 SaaS Animations Settings</h1>
            <p>Configure animation settings for your B2B SaaS landing page.</p>
            
            <form method="post" action="">
                <?php wp_nonce_field('saas_animations_settings'); ?>
                
                <h2>General Settings</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">Disable CSS</th>
                        <td>
                            <input type="checkbox" name="disable_css" value="1" <?php checked(isset($options['disable_css']) && $options['disable_css']); ?>>
                            <p class="description">Disable animation CSS (use if you have conflicts)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Disable JavaScript</th>
                        <td>
                            <input type="checkbox" name="disable_js" value="1" <?php checked(isset($options['disable_js']) && $options['disable_js']); ?>>
                            <p class="description">Disable animation JavaScript</p>
                        </td>
                    </tr>
                </table>
                
                <h2>Animation Libraries</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">Enable Lottie</th>
                        <td>
                            <input type="checkbox" name="enable_lottie" value="1" <?php checked(isset($options['enable_lottie']) && $options['enable_lottie']); ?>>
                            <p class="description">Load Lottie library for vector animations</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Enable GSAP</th>
                        <td>
                            <input type="checkbox" name="enable_gsap" value="1" <?php checked(isset($options['enable_gsap']) && $options['enable_gsap']); ?>>
                            <p class="description">Load GSAP library for advanced timeline animations</p>
                        </td>
                    </tr>
                </table>
                
                <h2>Animation Features</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">Force Reduced Motion</th>
                        <td>
                            <input type="checkbox" name="force_reduced_motion" value="1" <?php checked(isset($options['force_reduced_motion']) && $options['force_reduced_motion']); ?>>
                            <p class="description">Disable all animations (for accessibility testing)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Disable Particle Effects</th>
                        <td>
                            <input type="checkbox" name="disable_particles" value="1" <?php checked(isset($options['disable_particles']) && $options['disable_particles']); ?>>
                            <p class="description">Disable decorative particle backgrounds</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Disable Parallax</th>
                        <td>
                            <input type="checkbox" name="disable_parallax" value="1" <?php checked(isset($options['disable_parallax']) && $options['disable_parallax']); ?>>
                            <p class="description">Disable parallax scrolling effects</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Disable Sticky CTA Bar</th>
                        <td>
                            <input type="checkbox" name="disable_sticky_cta" value="1" <?php checked(isset($options['disable_sticky_cta']) && $options['disable_sticky_cta']); ?>>
                            <p class="description">Disable the sticky call-to-action bar</p>
                        </td>
                    </tr>
                </table>
                
                <h2>Animation Timing</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">Counter Duration (ms)</th>
                        <td>
                            <input type="number" name="counter_duration" value="<?php echo isset($options['counter_duration']) ? $options['counter_duration'] : 2000; ?>" min="500" max="5000" step="100">
                            <p class="description">Duration for counter animations (default: 2000ms)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Slider Duration (ms)</th>
                        <td>
                            <input type="number" name="slider_duration" value="<?php echo isset($options['slider_duration']) ? $options['slider_duration'] : 5000; ?>" min="1000" max="10000" step="500">
                            <p class="description">Duration for auto-play sliders (default: 5000ms)</p>
                        </td>
                    </tr>
                </table>
                
                <p class="submit">
                    <input type="submit" name="saas_animations_submit" class="button button-primary" value="Save Settings">
                </p>
            </form>
            
            <hr>
            
            <h2>📚 Documentation</h2>
            <p>
                <a href="https://github.com/Karma304/WP-Elementor-Theme/blob/main/docs/ANIMATIONS-GUIDE.md" target="_blank" class="button">
                    View Full Documentation
                </a>
            </p>
            
            <h2>✨ Features</h2>
            <ul style="list-style: disc; padding-left: 20px;">
                <li>Hero section fade-in animations</li>
                <li>Pain points grid with stagger effect</li>
                <li>Feature carousel with touch support</li>
                <li>ROI counter animations</li>
                <li>Testimonial slider with fade transitions</li>
                <li>Integration gallery with hover effects</li>
                <li>FAQ accordion with smooth animations</li>
                <li>Sticky CTA bar with pulse effect</li>
                <li>Full accessibility support</li>
            </ul>
            
            <h2>🎯 System Status</h2>
            <table class="widefat">
                <tr>
                    <td><strong>Elementor</strong></td>
                    <td><?php echo did_action('elementor/loaded') ? '✅ Active' : '❌ Not Active'; ?></td>
                </tr>
                <tr>
                    <td><strong>jQuery</strong></td>
                    <td>✅ Required (WordPress Core)</td>
                </tr>
                <tr>
                    <td><strong>Plugin Version</strong></td>
                    <td><?php echo SAAS_ANIMATIONS_VERSION; ?></td>
                </tr>
            </table>
        </div>
        <?php
    }
}

/**
 * Initialize plugin
 */
function saas_animations_init() {
    SaaS_Animations_Plugin::get_instance();
}
add_action('plugins_loaded', 'saas_animations_init');

/**
 * Activation hook
 */
function saas_animations_activate() {
    // Set default options
    $default_options = array(
        'disable_css' => false,
        'disable_js' => false,
        'enable_lottie' => false,
        'enable_gsap' => false,
        'force_reduced_motion' => false,
        'disable_particles' => false,
        'disable_parallax' => false,
        'disable_sticky_cta' => false,
        'counter_duration' => 2000,
        'slider_duration' => 5000,
    );
    
    add_option('saas_animations_options', $default_options);
}
register_activation_hook(__FILE__, 'saas_animations_activate');

/**
 * Deactivation hook
 */
function saas_animations_deactivate() {
    // Clean up if needed
}
register_deactivation_hook(__FILE__, 'saas_animations_deactivate');
