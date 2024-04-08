var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_exemple_tracetracks_1 = new ol.format.GeoJSON();
var features_exemple_tracetracks_1 = format_exemple_tracetracks_1.readFeatures(json_exemple_tracetracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_exemple_tracetracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_exemple_tracetracks_1.addFeatures(features_exemple_tracetracks_1);
var lyr_exemple_tracetracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_exemple_tracetracks_1, 
                style: style_exemple_tracetracks_1,
                interactive: true,
                title: '<img src="styles/legend/exemple_tracetracks_1.png" /> exemple_trace, tracks'
            });
var format_pointsoiseaux_2 = new ol.format.GeoJSON();
var features_pointsoiseaux_2 = format_pointsoiseaux_2.readFeatures(json_pointsoiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointsoiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointsoiseaux_2.addFeatures(features_pointsoiseaux_2);
var lyr_pointsoiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointsoiseaux_2, 
                style: style_pointsoiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/pointsoiseaux_2.png" /> points oiseaux'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_exemple_tracetracks_1.setVisible(true);lyr_pointsoiseaux_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_exemple_tracetracks_1,lyr_pointsoiseaux_2];
lyr_exemple_tracetracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_pointsoiseaux_2.set('fieldAliases', {'nom': 'nom', 'nombre': 'nombre', 'contact': 'contact', 'certitude': 'certitude', });
lyr_exemple_tracetracks_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_pointsoiseaux_2.set('fieldImages', {'nom': 'TextEdit', 'nombre': 'Range', 'contact': 'TextEdit', 'certitude': 'Range', });
lyr_exemple_tracetracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_pointsoiseaux_2.set('fieldLabels', {'nom': 'inline label', 'nombre': 'inline label', 'contact': 'inline label', 'certitude': 'inline label', });
lyr_pointsoiseaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});