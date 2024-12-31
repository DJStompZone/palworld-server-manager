"use client"
import React, { useState } from "react";
import { Vortex } from "../components/ui/vortex";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { DarkModeToggle } from "@/components/ui/lightswitch";

import CommandCard from "@/components/ui/command-card";

<DarkModeToggle />

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MenuContent = ({ menu }: { menu: string }) => {
  const playerData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: "Active Players",
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50) + 10),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const latencyData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: "Server Latency (ms)",
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100) + 50),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
      },
    ],
  };

  switch (menu) {
    case "shutdown":
      return (
        <div>
          <label className="flex items-center space-x-2">
            <span>Seconds:</span>
            <input type="number" className="border rounded-md p-1" />
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <span>Message:</span>
            <input type="text" className="border rounded-md p-1" />
          </label>
        </div>
      );
    case "doexit":
      return (
        <div>
          <p>Force stops the server.</p>
        </div>
      );
    case "broadcast":
      return (
        <div>
          <label className="flex items-center space-x-2">
            <span>Message:</span>
            <input type="text" className="border rounded-md p-1" />
          </label>
        </div>
      );
    case "kickplayer":
      return (
        <div>
          <label className="flex items-center space-x-2">
            <span>SteamID:</span>
            <input type="text" className="border rounded-md p-1" />
          </label>
        </div>
      );
    case "banplayer":
      return (
        <div>
          <label className="flex items-center space-x-2">
            <span>SteamID:</span>
            <input type="text" className="border rounded-md p-1" />
          </label>
        </div>
      );
    case "teleporttoplayer":
      return (
        <div>
          <label className="flex items-center space-x-2">
            <span>SteamID:</span>
            <input type="text" className="border rounded-md p-1" />
          </label>
        </div>
      );
    case "teleporttome":
      return (
        <div>
          <label className="flex items-center space-x-2">
            <span>SteamID:</span>
            <input type="text" className="border rounded-md p-1" />
          </label>
        </div>
      );
    case "showplayers":
      return (
        <div>
          <p>Provide information about all currently connected players.</p>
        </div>
      );
    case "info":
      return (
        <div>
          <p>Provide server information.</p>
        </div>
      );
    case "save":
      return (
        <div>
          <p>Save the current world data.</p>
        </div>
      );
      case "home":
        default:
          return (
            <div className="flex flex-col space-y-8 h-full">
              {/* Active Players Graph */}
              <div className="flex-grow flex flex-col">
                <h2 className="text-lg font-semibold mb-4">Active Players (24h)</h2>
                <div className="h-48"> {/* Set a fixed height for the chart */}
                  <Line
                    data={playerData}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
        
              {/* Server Latency Graph */}
              <div className="flex-grow flex flex-col">
                <h2 className="text-lg font-semibold mb-4">Server Latency (24h)</h2>
                <div className="h-48"> {/* Set a fixed height for the chart */}
                  <Line
                    data={latencyData}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          );
        
  }
};

const Card = ({ menu, onClose }: { menu: string; onClose: () => void }) => {
  return (
    <CommandCard
      title={menu.charAt(0).toUpperCase() + menu.slice(1)}
      onClose={onClose}
      onExecute={() => console.log(`${menu} command executed`)}
      hideExecute={menu === "home"}
      hideClose={menu === "home"}
    >
      <MenuContent menu={menu} />
    </CommandCard>
  );
};

export default function DemoPage() {
  const [activeMenu, setActiveMenu] = useState<string | null>("home");

  const links = [
    { title: "Home", icon: <IconHome />, key: "home", href: "#", onClick: () => setActiveMenu("home") },
    { title: "Shutdown", icon: <IconTerminal2 />, key: "shutdown", href: "#", onClick: () => setActiveMenu("shutdown") },
    { title: "DoExit", icon: <IconTerminal2 />, key: "doexit", href: "#", onClick: () => setActiveMenu("doexit") },
    { title: "Broadcast", icon: <IconTerminal2 />, key: "broadcast", href: "#", onClick: () => setActiveMenu("broadcast") },
    { title: "KickPlayer", icon: <IconTerminal2 />, key: "kickplayer", href: "#", onClick: () => setActiveMenu("kickplayer") },
    { title: "BanPlayer", icon: <IconTerminal2 />, key: "banplayer", href: "#", onClick: () => setActiveMenu("banplayer") },
    { title: "TeleportToPlayer", icon: <IconTerminal2 />, key: "teleporttoplayer", href: "#", onClick: () => setActiveMenu("teleporttoplayer") },
    { title: "TeleportToMe", icon: <IconTerminal2 />, key: "teleporttome", href: "#", onClick: () => setActiveMenu("teleporttome") },
    { title: "ShowPlayers", icon: <IconTerminal2 />, key: "showplayers", href: "#", onClick: () => setActiveMenu("showplayers") },
    { title: "Info", icon: <IconTerminal2 />, key: "info", href: "#", onClick: () => setActiveMenu("info") },
    { title: "Save", icon: <IconTerminal2 />, key: "save", href: "#", onClick: () => setActiveMenu("save") },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
      {/* Vortex Background */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="absolute inset-0 w-full h-full"
      />

      {/* Floating Dock */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>

      {/* Render Active Menu */}
      {activeMenu && <Card menu={activeMenu} onClose={() => setActiveMenu("home")} />}
    </div>
  );
}