---
title: Section
description:
status: online
thumbnail:
categories: []
order:
content_blocks:
  - _bookshop_name: richtext
    content: |-
      # Section

      Each component inherits common properties defined by section.

      Standard pages are constructed as a stack of sections. 

      ## Properties
      * Content
      * Height
      * Align
      * Indent
      * Foreground Colour
      * Background Colour
      * Background Image
      * Background Video
      * Background Alignment
      * Background Opacity
      * Background Fixed
      * Background Fit
      * Additional Style Classes
  - _bookshop_name: richtext
    content: |-
      # Background Colour
    height: 50
    color: "#ffffff"
    background_color: "#222233"
    align: bottom
  - _bookshop_name: richtext
    content: |-
      # Background Image
    height: 50
    background_image: public/images/millstream-paper-planes.png
    background_align: left
    align: bottom
  - _bookshop_name: richtext
    content: |-
      # Fixed Background Image
    height: 50
    background_image: public/images/millstream-paper-planes.png
    background_align: left
    background_fixed: true
    align: bottom
  - _bookshop_name: richtext
    content: |-
      # Background Video
    height: 50
    color: "#ffffff"
    background_video: https://player.vimeo.com/video/56854878
    align: bottom
  - _bookshop_name: richtext
    content: |-
      # Animation
      Sections also support a number of animations that trigger when the section is scrolled into view.
  - _bookshop_name: layout/columns
    layout: [4]
    collapse: true
    fullwidth: true
    content_blocks:
      - _bookshop_name: richtext
        content: |-
          # Fade
        # background_color: "#eeeeee"
        animation: fade
      - _bookshop_name: richtext
        content: |-
          # Blur
        background_color: "#eeeeee"
        animation: blur
      - _bookshop_name: richtext
        content: |-
          # Grow
        # background_color: "#eeeeee"
        animation: grow
      - _bookshop_name: richtext
        content: |-
          # Flare
        background_color: "#eeeeee"
        animation: flare
      - _bookshop_name: richtext
        content: |-
          # Slide Up
        background_color: "#eeeeee"
        animation: slide-up
      - _bookshop_name: richtext
        content: |-
          # Slide Right
        # background_color: "#eeeeee"
        animation: slide-right
      - _bookshop_name: richtext
        content: |-
          # Slide Down
        background_color: "#eeeeee"
        animation: slide-down
      - _bookshop_name: richtext
        content: |-
          # Slide Left
        # background_color: "#eeeeee"
        animation: slide-left
  - _bookshop_name: richtext
    content: |-
      # Expando

      Expando sections collapse their content.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus non felis hendrerit hendrerit. Suspendisse lectus lectus, venenatis vitae convallis molestie, rhoncus ac leo. Nunc metus nulla, mollis fermentum ex a, sagittis hendrerit purus. Mauris placerat aliquam tempor. Suspendisse potenti. Vivamus imperdiet lacus id malesuada vehicula. Suspendisse ornare ut lectus ut condimentum. Sed quis bibendum sem. Duis venenatis venenatis lorem non vestibulum. Nullam maximus nibh fringilla, luctus erat et, interdum lorem. Nunc non mi id metus sodales porttitor.

      Mauris dignissim urna ut dolor vehicula, id posuere ante egestas. In hac habitasse platea dictumst. Sed facilisis erat vitae metus finibus, tincidunt porttitor justo tristique. Quisque quam ante, eleifend et tristique eleifend, tempus sit amet diam. Ut at imperdiet metus. Nullam finibus at mi a dapibus. Aenean vel vulputate arcu. Nunc ac massa dapibus, tincidunt justo quis, tristique sapien. Aliquam viverra pulvinar varius.

      Aliquam a odio eget ante hendrerit suscipit eget in orci. Curabitur sed felis neque. Curabitur varius odio eget felis interdum, id dictum ex dictum. Nunc at auctor sapien, vitae faucibus erat. Ut tincidunt elementum mauris, vel auctor risus pharetra ac. Aliquam sem nunc, consequat imperdiet diam at, faucibus ultrices elit. Vestibulum tincidunt massa a tincidunt ullamcorper.

      Phasellus euismod nisl vel ex convallis, at cursus tortor vulputate. Integer sit amet condimentum erat, ac fermentum justo. Vivamus semper arcu vel nisl placerat, a semper ante dapibus. Fusce auctor, augue vel sollicitudin porttitor, dolor eros vulputate dolor, vel tempus magna nibh sit amet enim. Mauris tortor mauris, accumsan ut est sit amet, luctus ullamcorper ante. Maecenas condimentum, sem vitae facilisis ultrices, enim felis tincidunt est, ac luctus purus dui non lorem. Sed nibh odio, scelerisque et quam eget, luctus ultrices neque. Sed ac tincidunt neque. Maecenas pharetra placerat leo hendrerit hendrerit. Sed porttitor turpis quis eros luctus, sed auctor est efficitur.

      Maecenas pretium facilisis condimentum. Nulla pharetra dui sed sodales vestibulum. Nulla dignissim maximus sapien, eu dignissim lorem semper non. Nunc gravida nulla felis. Fusce luctus vehicula tortor, sit amet suscipit nulla accumsan et. Sed non metus venenatis, viverra felis eu, faucibus dui. Nulla cursus mi in eros volutpat, et aliquam erat finibus.
    classes:
      - expando
publishDate:
expiryDate:
show_global_header: true
show_global_footer: true
---
