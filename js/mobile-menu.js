/**
 * Mobile Menu JavaScript
 * Controls the mobile menu functionality for iRob Technologies website
 */

$(document).ready(function() {
    // Mobile menu toggle
    $('#customMobileToggle').on('click', function() {
        $(this).toggleClass('active');
        $('#mobileMenuContainer').toggleClass('active').css('display', 'block');
        $('#mobileMenuOverlay').fadeToggle(300);
    });
    
    // Close menu when clicking on overlay
    $('#mobileMenuOverlay').on('click', function() {
        $('#customMobileToggle').removeClass('active');
        $('#mobileMenuContainer').removeClass('active');
        $(this).fadeOut(300);
        setTimeout(function() {
            if (!$('#mobileMenuContainer').hasClass('active')) {
                $('#mobileMenuContainer').css('display', 'none');
            }
        }, 300);
    });
    
    // Close menu when clicking on close button
    $('#mobileMenuClose').on('click', function() {
        $('#customMobileToggle').removeClass('active');
        $('#mobileMenuContainer').removeClass('active');
        $('#mobileMenuOverlay').fadeOut(300);
        setTimeout(function() {
            if (!$('#mobileMenuContainer').hasClass('active')) {
                $('#mobileMenuContainer').css('display', 'none');
            }
        }, 300);
    });
    
    // Close menu when clicking on a menu item
    $('#mobileMenuContainer ul li a').on('click', function() {
        $('#customMobileToggle').removeClass('active');
        $('#mobileMenuContainer').removeClass('active');
        $('#mobileMenuOverlay').fadeOut(300);
        setTimeout(function() {
            if (!$('#mobileMenuContainer').hasClass('active')) {
                $('#mobileMenuContainer').css('display', 'none');
            }
        }, 300);
    });
    
    // Handle window resize
    $(window).on('resize', function() {
        if ($(window).width() > 1023) {
            $('#customMobileToggle').removeClass('active');
            $('#mobileMenuContainer').removeClass('active').css('display', 'none');
            $('#mobileMenuOverlay').fadeOut(300);
        }
    });
});