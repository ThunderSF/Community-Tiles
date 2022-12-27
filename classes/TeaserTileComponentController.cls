/**
 * @description       : 
 * @author            : SFDX
 * @group             : 
 * @last modified on  : 10-12-2021
 * @last modified by  : SFDX
**/
public without sharing class TeaserTileComponentController {
    @AuraEnabled
    public static List<Carousel_Tile__c> getCarouselTile( String carouselName ){
        try {
            return new List<Carousel_Tile__c>([ SELECT Id, Name, Carousel__r.Name, Tile_Font_Color__c, Tile_Image__c, Tile_Order__c,Description__c,
                                                         Url__c, Tile_Image_Height__c, Tile_Content_Height__c, Tile_Width__c  
                                                FROM Carousel_Tile__c
                                                WHERE Carousel__r.Name =: carouselName
                                                ORDER BY Tile_Order__c ASC ]);
            
        } catch (Exception e) {throw new AuraHandledException(e.getMessage());
        }
    }
    
}