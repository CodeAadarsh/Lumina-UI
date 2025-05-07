import React, { useState, forwardRef, memo } from 'react';
import { Header } from './Header';
import { Navbar } from './UltimateNavbar';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

/**
 * NavigationSystem Component
 * 
 * A comprehensive navigation system that combines Header and Navbar components
 * with support for different layouts and configurations.
 */
const NavigationSystem = memo(forwardRef(({
  children,
  className,
  theme: themeProp,
  layout = 'top',
  sidebarCollapsible = false,
  sidebarDefaultOpen = true,
  sidebarWidth = 'md',
  headerProps = {},
  navbarProps = {},
  headerNavItems,
  sidebarNavItems,
  logo,
  onLogoClick,
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme || 'enterprise';
  
  // State for collapsible sidebar
  const [sidebarOpen, setSidebarOpen] = useState(sidebarDefaultOpen);
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };
  
  // Sidebar width in pixels
  const sidebarWidthMap = {
    sm: 200,
    md: 240,
    lg: 280,
    xl: 320,
  };
  
  const sidebarWidthPx = sidebarWidthMap[sidebarWidth] || sidebarWidthMap.md;
  
  // Check if layout includes a sidebar
  const hasSidebar = layout === 'sidebar' || layout === 'top-and-sidebar';
  
  // Render different layouts
  const renderLayout = () => {
    // Top navigation only
    if (layout === 'top') {
      return (
        <div className="flex flex-col min-h-screen">
          <Header
            theme={activeTheme}
            logo={logo}
            onLogoClick={onLogoClick}
            position="sticky"
            {...headerProps}
          >
            {headerNavItems}
          </Header>
          <main className="flex-1">
            {children}
          </main>
        </div>
      );
    }
    
    // Sidebar navigation only
    if (layout === 'sidebar') {
      return (
        <div className="flex min-h-screen">
          <aside 
            className={cn(
              "transition-all duration-300",
              sidebarOpen ? `w-[${sidebarWidthPx}px]` : "w-[60px]",
              "border-r border-border"
            )}
            style={{
              width: sidebarOpen ? sidebarWidthPx : 60,
            }}
          >
            <div className="p-4 flex items-center">
              {logo && (
                <div 
                  className="cursor-pointer" 
                  onClick={onLogoClick}
                >
                  {sidebarOpen ? logo : (
                    typeof logo === 'string' ? (
                      <img src={logo} alt="Logo" className="h-8 w-8" />
                    ) : (
                      <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-white font-bold">
                        L
                      </div>
                    )
                  )}
                </div>
              )}
              
              {sidebarCollapsible && (
                <button
                  type="button"
                  className={cn(
                    "ml-auto p-1 rounded-md text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary",
                    !sidebarOpen && "mx-auto"
                  )}
                  onClick={toggleSidebar}
                >
                  {sidebarOpen ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              )}
            </div>
            
            <Navbar
              theme={activeTheme}
              orientation="vertical"
              padding={sidebarOpen ? 'sm' : 'none'}
              className="h-[calc(100vh-64px)]"
              {...navbarProps}
            >
              {/* Clone sidebar items and modify for collapsed state if needed */}
              {React.Children.map(sidebarNavItems, (child) => {
                if (!child) return null;
                
                // If sidebar is collapsed, show only icons
                if (!sidebarOpen) {
                  return React.cloneElement(child, {
                    className: cn(child.props.className, "px-0 py-2 justify-center"),
                    children: null,
                  });
                }
                
                return child;
              })}
            </Navbar>
          </aside>
          
          <main className="flex-1">
            {children}
          </main>
        </div>
      );
    }
    
    // Top and sidebar navigation
    if (layout === 'top-and-sidebar') {
      return (
        <div className="flex flex-col min-h-screen">
          <Header
            theme={activeTheme}
            logo={logo}
            onLogoClick={onLogoClick}
            position="sticky"
            {...headerProps}
          >
            {headerNavItems}
          </Header>
          
          <div className="flex flex-1">
            <aside 
              className={cn(
                "transition-all duration-300",
                sidebarOpen ? `w-[${sidebarWidthPx}px]` : "w-[60px]",
                "border-r border-border"
              )}
              style={{
                width: sidebarOpen ? sidebarWidthPx : 60,
              }}
            >
              {sidebarCollapsible && (
                <div className="p-2 flex justify-end">
                  <button
                    type="button"
                    className="p-1 rounded-md text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary"
                    onClick={toggleSidebar}
                  >
                    {sidebarOpen ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
              
              <Navbar
                theme={activeTheme}
                orientation="vertical"
                padding={sidebarOpen ? 'sm' : 'none'}
                className="h-[calc(100vh-64px)]"
                {...navbarProps}
              >
                {/* Clone sidebar items and modify for collapsed state if needed */}
                {React.Children.map(sidebarNavItems, (child) => {
                  if (!child) return null;
                  
                  // If sidebar is collapsed, show only icons
                  if (!sidebarOpen) {
                    return React.cloneElement(child, {
                      className: cn(child.props.className, "px-0 py-2 justify-center"),
                      children: null,
                    });
                  }
                  
                  return child;
                })}
              </Navbar>
            </aside>
            
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      );
    }
    
    // Default fallback
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen bg-background-primary",
        className
      )}
      {...props}
    >
      {renderLayout()}
    </div>
  );
}));

NavigationSystem.displayName = 'NavigationSystem';

export { NavigationSystem };