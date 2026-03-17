import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Heart, Clock, Settings, Star } from "lucide-react";
import { Car } from "@/data/cars";

interface UserPanelProps {
  favorites: Car[];
  onRemoveFavorite: (carId: string) => void;
}

export function UserPanel({ favorites, onRemoveFavorite }: UserPanelProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-5 w-5" />
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[380px] sm:w-[420px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-display">My Account</SheetTitle>
          <SheetDescription>Manage your favorites and preferences</SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="favorites" className="mt-6">
          <TabsList className="w-full">
            <TabsTrigger value="favorites" className="flex-1 gap-1">
              <Heart className="h-3.5 w-3.5" /> Favorites
            </TabsTrigger>
            <TabsTrigger value="history" className="flex-1 gap-1">
              <Clock className="h-3.5 w-3.5" /> History
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 gap-1">
              <Settings className="h-3.5 w-3.5" /> Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="mt-4 space-y-3">
            {favorites.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">No favorites yet. Click the heart icon on any car to save it!</p>
            ) : (
              favorites.map((car) => (
                <div key={car.id} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <img src={car.image} alt={car.name} className="w-20 h-14 object-cover rounded-md" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-card-foreground truncate">{car.name}</p>
                    <p className="text-xs text-muted-foreground">{car.year} · ${car.price.toLocaleString()}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-warning text-warning" />
                      <span className="text-xs text-muted-foreground">{car.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveFavorite(car.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors self-start"
                  >
                    <Heart className="h-4 w-4 fill-current text-destructive" />
                  </button>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            <div className="text-center py-8 space-y-2">
              <Clock className="h-8 w-8 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No rental history yet</p>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-4 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  J
                </div>
                <div>
                  <p className="font-medium text-sm text-card-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">Edit Profile</Button>
              <Button variant="outline" className="w-full">Notification Preferences</Button>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
