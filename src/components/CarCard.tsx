import { Car } from "@/data/cars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Settings2, Star, Heart, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
  onToggleFavorite: (carId: string) => void;
  onToggleCompare: (carId: string) => void;
  isFavorite: boolean;
  isComparing: boolean;
}

export function CarCard({ car, onViewDetails, onToggleFavorite, onToggleCompare, isFavorite, isComparing }: CarCardProps) {
  return (
    <div className="group relative rounded-xl bg-card overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {car.available ? (
            <Badge className="bg-success text-success-foreground border-0 text-xs">Available</Badge>
          ) : (
            <Badge variant="secondary" className="text-xs">Unavailable</Badge>
          )}
          {car.price > 100000 && (
            <Badge className="bg-primary text-primary-foreground border-0 text-xs">Premium</Badge>
          )}
        </div>
        {/* Favorite */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(car.id); }}
          className={cn(
            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all",
            isFavorite
              ? "bg-destructive/90 text-destructive-foreground"
              : "bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-destructive"
          )}
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-display font-semibold text-card-foreground">{car.name}</h3>
          <p className="text-sm text-muted-foreground">
            {car.engine} · {car.horsepower}hp · {car.year}
          </p>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Gauge className="h-3.5 w-3.5" />
            {car.mileage}k mi
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="h-3.5 w-3.5" />
            {car.fuel}
          </span>
          <span className="flex items-center gap-1">
            <Settings2 className="h-3.5 w-3.5" />
            {car.transmission}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          <span className="text-sm font-medium text-card-foreground">{car.rating}</span>
          <span className="text-xs text-muted-foreground">({car.reviews})</span>
        </div>

        {/* Price + Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-lg font-bold font-display text-card-foreground">
            ${car.price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            <Button
              variant={isComparing ? "default" : "outline"}
              size="sm"
              onClick={() => onToggleCompare(car.id)}
              className="text-xs"
            >
              {isComparing ? "Comparing" : "Compare"}
            </Button>
            <Button size="sm" onClick={() => onViewDetails(car)} className="text-xs gap-1">
              Details <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
