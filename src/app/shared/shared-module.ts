import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';
import { LanguageSelector } from './components/language-selector/language-selector';
import { CurrencySelector } from './components/currency-selector/currency-selector';
import { RatingStars } from './components/rating-stars/rating-stars';
import { MapView } from './components/map-view/map-view';
import { ImageGallery } from './components/image-gallery/image-gallery';
import { DatePicker } from './components/date-picker/date-picker';
import { SearchBar } from './components/search-bar/search-bar';
import { FilterPanel } from './components/filter-panel/filter-panel';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog';
import { CulturalStoryCard } from './components/cultural-story-card/cultural-story-card';
import { TranslatePipe } from './pipes/translate-pipe';
import { CurrencyFormatPipe } from './pipes/currency-format-pipe';
import { DateLocalePipe } from './pipes/date-locale-pipe';
import { TruncatePipe } from './pipes/truncate-pipe';



@NgModule({
  declarations: [
    Header,
    Footer,
    LoadingSpinner,
    LanguageSelector,
    CurrencySelector,
    RatingStars,
    MapView,
    ImageGallery,
    DatePicker,
    SearchBar,
    FilterPanel,
    ConfirmationDialog,
    CulturalStoryCard,
    TranslatePipe,
    CurrencyFormatPipe,
    DateLocalePipe,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
