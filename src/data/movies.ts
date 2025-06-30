// Import all images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';
import heroImg1 from '../assets/ChatGPT Image 17 giu 2025, 12_26_12.png';
import heroImg2 from '../assets/ChatGPT Image 17 giu 2025, 13_38_06.png';
import heroImg3 from '../assets/ChatGPT Image 17 giu 2025, 13_43_45.png';
import dashboardImg from '../assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png';
import mobileImg from '../assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png';
import emailImg from '../assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png';
import hackImg from '../assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png';
import revenueImg from '../assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png';
import avatarImg from '../assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png';
import funnelImg from '../assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png';
import workspaceImg from '../assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png';
import canvasImg1 from '../assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png';
import panelImg from '../assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png';
import modalImg from '../assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png';
import flowImg1 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png';
import flowImg2 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png';
import blockImg1 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png';
import blockImg2 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png';
import splitImg from '../assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png';
import automationImg from '../assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png';

import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Revolution',
  description: 'Discover the future of artificial intelligence and how it\'s transforming our world. From machine learning to neural networks, explore the cutting-edge technology that\'s reshaping industries.',
  genre: ['Technology', 'Documentary', 'Future'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: heroImg1,
  backdrop: heroImg1,
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'Digital Transformation',
    description: 'A comprehensive look at how businesses are adapting to the digital age.',
    genre: ['Business', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: img1,
    backdrop: img1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Future Interfaces',
    description: 'Exploring the next generation of user interfaces and human-computer interaction.',
    genre: ['Technology', 'Design'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: img2,
    backdrop: img2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'Smart Cities',
    description: 'How technology is creating more efficient and sustainable urban environments.',
    genre: ['Documentary', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: img3,
    backdrop: img3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1034
  },
  {
    id: 'movie-4',
    title: 'Quantum Computing',
    description: 'Understanding the revolutionary potential of quantum computing technology.',
    genre: ['Science', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 55m',
    thumbnail: img4,
    backdrop: img4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 623
  },
  {
    id: 'movie-5',
    title: 'Blockchain Revolution',
    description: 'The impact of blockchain technology on finance and beyond.',
    genre: ['Technology', 'Finance'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: img5,
    backdrop: img5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 445
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'Dashboard Analytics',
        description: 'Advanced analytics dashboard showcasing real-time data visualization and trending metrics.',
        genre: ['Analytics', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: dashboardImg,
        backdrop: dashboardImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 1456
      },
      {
        id: 'trending-2',
        title: 'Mobile Innovation',
        description: 'The latest in mobile technology and app development trends.',
        genre: ['Mobile', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: mobileImg,
        backdrop: mobileImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 987
      },
      {
        id: 'trending-3',
        title: 'Email Automation',
        description: 'Futuristic email management and automation systems.',
        genre: ['Automation', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20m',
        thumbnail: emailImg,
        backdrop: emailImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 734
      },
      {
        id: 'trending-4',
        title: 'Hack It',
        description: 'Cybersecurity and ethical hacking in the modern digital landscape.',
        genre: ['Security', 'Technology'],
        year: 2024,
        rating: 'PG-13',
        duration: '2h 10m',
        thumbnail: hackImg,
        backdrop: hackImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 1123
      },
      {
        id: 'trending-5',
        title: 'Revenue Analytics',
        description: 'Advanced revenue tracking and analytics dashboard systems.',
        genre: ['Analytics', 'Finance'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: revenueImg,
        backdrop: revenueImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 856
      },
      {
        id: 'trending-6',
        title: 'AI Avatars',
        description: 'The future of AI-generated avatars and virtual training.',
        genre: ['AI', 'Training'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: avatarImg,
        backdrop: avatarImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 692
      }
    ]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: [
      {
        id: 'new-1',
        title: 'Funnel Builder',
        description: 'Revolutionary drag-and-drop funnel building interface.',
        genre: ['Marketing', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '1h 15m',
        thumbnail: funnelImg,
        backdrop: funnelImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 543
      },
      {
        id: 'new-2',
        title: 'Digital Workspace',
        description: 'The future of collaborative digital workspaces.',
        genre: ['Collaboration', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: workspaceImg,
        backdrop: workspaceImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 789
      },
      {
        id: 'new-3',
        title: 'UI Canvas',
        description: 'Advanced user interface design and prototyping tools.',
        genre: ['Design', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: canvasImg1,
        backdrop: canvasImg1,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 456
      },
      {
        id: 'new-4',
        title: 'Dynamic Panel',
        description: 'Interactive dashboard panels with real-time data.',
        genre: ['Dashboard', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: panelImg,
        backdrop: panelImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 678
      },
      {
        id: 'new-5',
        title: 'Import Modal',
        description: 'Streamlined data import and management interfaces.',
        genre: ['Data', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20m',
        thumbnail: modalImg,
        backdrop: modalImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 321
      }
    ]
  },
  {
    id: 'popular',
    title: 'Popular This Week',
    movies: [
      {
        id: 'popular-1',
        title: 'Flow Blocks',
        description: 'Visual programming with intuitive flow-based interfaces.',
        genre: ['Programming', 'Visual'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: flowImg1,
        backdrop: flowImg1,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 912
      },
      {
        id: 'popular-2',
        title: 'Flow Builder',
        description: 'Advanced workflow automation and process building.',
        genre: ['Automation', 'Workflow'],
        year: 2024,
        rating: 'PG',
        duration: '1h 55m',
        thumbnail: flowImg2,
        backdrop: flowImg2,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 1087
      },
      {
        id: 'popular-3',
        title: 'Block Interface',
        description: 'Modular interface design with reusable components.',
        genre: ['Design', 'Components'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: blockImg1,
        backdrop: blockImg1,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 765
      },
      {
        id: 'popular-4',
        title: 'Smart Blocks',
        description: 'Intelligent building blocks for modern applications.',
        genre: ['AI', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: blockImg2,
        backdrop: blockImg2,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 634
      },
      {
        id: 'popular-5',
        title: 'Video Personalization',
        description: 'AI-powered video personalization and automation.',
        genre: ['AI', 'Video'],
        year: 2024,
        rating: 'PG',
        duration: '2h 5m',
        thumbnail: splitImg,
        backdrop: splitImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 1234
      }
    ]
  },
  {
    id: 'tech-docs',
    title: 'Tech Documentaries',
    movies: [
      {
        id: 'tech-1',
        title: 'Automation Dashboard',
        description: 'The future of business automation and intelligent dashboards.',
        genre: ['Automation', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: automationImg,
        backdrop: automationImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: 876
      },
      ...movies.slice(0, 4)
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  }
];

export const getMostLikedMovies = () => {
  const allMovies: Movie[] = [];
  
  // Collect all movies from content rows
  contentRows.forEach(row => {
    if (row.id !== 'most-liked') {
      allMovies.push(...row.movies);
    }
  });
  
  // Add movies from the main movies array
  allMovies.push(...movies);
  
  // Remove duplicates and sort by likes
  const uniqueMovies = allMovies.filter((movie, index, self) => 
    index === self.findIndex(m => m.id === movie.id)
  );
  
  return uniqueMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 8);
};