import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

export interface Filters {
  search: string;
  priceRange: [number, number];
  yearRange: [number, number];
  fuelTypes: string[];
  transmissions: string[];
  types: string[];
  sortBy: string;
}

const defaultFilters: Filters = {
  search: "",
  priceRange: [0, 400000],
  yearRange: [2020, 2024],
  fuelTypes: [],
  transmissions: [],
  types: [],
  sortBy: "price-asc",
};

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  resultCount: number;
}

const fuelOptions = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissionOptions = ["Automatic", "Manual"];
const typeOptions = ["Sedan", "SUV", "Hatchback", "Sports", "Truck"];

export function FilterSidebar({ filters, onChange, resultCount }: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const update = (partial: Partial<Filters>) => onChange({ ...filters, ...partial });

  const toggleArrayItem = (arr: string[], item: string) =>
    arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

  return (
    <aside className={`bg-card rounded-xl card-shadow overflow-hidden transition-all ${isOpen ? "w-72" : "w-14"}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {isOpen && (
          <h2 className="font-display font-semibold text-card-foreground flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </h2>
        )}
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {isOpen && (
        <div className="p-4 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Search */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cars..."
                value={filters.search}
                onChange={(e) => update({ search: e.target.value })}
                className="pl-9"
              />
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Price Range</Label>
            <Slider
              min={0}
              max={400000}
              step={5000}
              value={filters.priceRange}
              onValueChange={(v) => update({ priceRange: v as [number, number] })}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>${filters.priceRange[0].toLocaleString()}</span>
              <span>${filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Sort */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Sort By</Label>
            <Select value={filters.sortBy} onValueChange={(v) => update({ sortBy: v })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="year-desc">Newest First</SelectItem>
                <SelectItem value="rating-desc">Best Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Fuel Type */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Fuel Type</Label>
            <div className="space-y-2">
              {fuelOptions.map((fuel) => (
                <label key={fuel} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={filters.fuelTypes.includes(fuel)}
                    onCheckedChange={() => update({ fuelTypes: toggleArrayItem(filters.fuelTypes, fuel) })}
                  />
                  <span className="text-sm text-card-foreground">{fuel}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Transmission</Label>
            <div className="space-y-2">
              {transmissionOptions.map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={filters.transmissions.includes(t)}
                    onCheckedChange={() => update({ transmissions: toggleArrayItem(filters.transmissions, t) })}
                  />
                  <span className="text-sm text-card-foreground">{t}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Vehicle Type</Label>
            <div className="flex flex-wrap gap-2">
              {typeOptions.map((type) => (
                <Button
                  key={type}
                  variant={filters.types.includes(type) ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => update({ types: toggleArrayItem(filters.types, type) })}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Results + Reset */}
          <div className="pt-4 border-t border-border space-y-2">
            <p className="text-sm text-muted-foreground">{resultCount} vehicles found</p>
            <Button variant="outline" className="w-full gap-2" onClick={() => onChange(defaultFilters)}>
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Filters
            </Button>
          </div>
        </div>
      )}
    </aside>
  );
}

export { defaultFilters };
