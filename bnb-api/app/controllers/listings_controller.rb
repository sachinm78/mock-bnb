class ListingsController < ApplicationController

    before_action :set_listing, only: [:show, :update, :destroy]
    
    def index
        render json: Listing.all
    end

    def show
        redner json: @listing
    end

    def create
        listing = Listing.new(listing_params)
        if listing.save
            render json: @listing
        end
    end

    private

        def set_listing
            @listing = Listing.find_by(id: params[:id])
        end

        def listing_params
            params.require(:listing).permit(:name, :address, :price)
        end
end
