import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, Car } from "lucide-react";
import { UserPanel } from "@/components/UserPanel";
import { Car as CarType } from "@/data/cars";

interface HeaderProps {
  favorites: CarType[];
  onRemoveFavorite: (carId: string) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function Header({ favorites, onRemoveFavorite, searchValue, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Car className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight">DRIVEHUB</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search make, model, or keyword..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 bg-muted/50 border-0"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <UserPanel favorites={favorites} onRemoveFavorite={onRemoveFavorite} />
        </div>
      </div>
    </header>
  );
}
