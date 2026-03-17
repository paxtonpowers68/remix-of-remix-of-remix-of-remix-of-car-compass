import { Car } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Fuel, Gauge, Settings2, Users, Zap, Calendar, X } from "lucide-react";
import { useState } from "react";

interface CarDetailSheetProps {
  car: Car | null;
  open: boolean;
  onClose: () => void;
}

export function CarDetailSheet({ car, open, onClose }: CarDetailSheetProps) {
  const [selectedDate, setSelectedDate] = useState("");

  if (!car) return null;

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="w-[420px] sm:w-[480px] overflow-y-auto p-0">
        {/* Hero Image */}
        <div className="relative">
          <img src={car.image} alt={car.name} className="w-full aspect-video object-cover" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-3 flex gap-2">
            {car.available ? (
              <Badge className="bg-success text-success-foreground border-0">Available</Badge>
            ) : (
              <Badge variant="secondary">Unavailable</Badge>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <SheetHeader className="space-y-1 p-0">
            <SheetTitle className="font-display text-xl">{car.name} – {car.year}</SheetTitle>
            <SheetDescription className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {car.location}
            </SheetDescription>
          </SheetHeader>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-4 w-4 ${s <= Math.floor(car.rating) ? "fill-warning text-warning" : "text-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{car.rating}</span>
            <span className="text-xs text-muted-foreground">({car.reviews} reviews)</span>
          </div>

          <p className="text-sm text-muted-foreground">{car.description}</p>

          <Separator />

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Zap, label: "Engine", value: car.engine },
              { icon: Gauge, label: "Horsepower", value: `${car.horsepower}hp` },
              { icon: Fuel, label: "Fuel", value: car.fuel },
              { icon: Settings2, label: "Trans.", value: car.transmission },
              { icon: Users, label: "Seats", value: car.seats.toString() },
              { icon: Gauge, label: "Mileage", value: `${car.mileage}k mi` },
            ].map((spec) => (
              <div key={spec.label} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <spec.icon className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{spec.label}</p>
                  <p className="text-sm font-medium text-card-foreground">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-card-foreground">Features</h4>
            <div className="flex flex-wrap gap-2">
              {car.features.map((f) => (
                <Badge key={f} variant="secondary" className="text-xs">
                  {f}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Booking */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Book This Vehicle
            </h4>
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger>
                <SelectValue placeholder="Select rental period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1day">1 Day</SelectItem>
                <SelectItem value="3days">3 Days</SelectItem>
                <SelectItem value="1week">1 Week</SelectItem>
                <SelectItem value="2weeks">2 Weeks</SelectItem>
                <SelectItem value="1month">1 Month</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Price</span>
              <span className="text-lg font-bold font-display text-card-foreground">${car.price.toLocaleString()}</span>
            </div>

            <Button className="w-full" size="lg" disabled={!car.available}>
              {car.available ? "Book Now" : "Not Available"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
