/**
 * Auto-generated action file for "AWS Elemental MediaConvert" API.
 *
 * Generated at: 2019-05-07T14:35:58.012Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / amazonaws-com-mediaconvert-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'CreatePreset'
 * Endpoint Path: '/2017-08-29/presets'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "Action",
    "Version",
    "X-Amz-Content-Sha256",
    "X-Amz-Date",
    "X-Amz-Algorithm",
    "X-Amz-Credential",
    "X-Amz-Security-Token",
    "X-Amz-Signature",
    "X-Amz-SignedHeaders"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "Action": "Action",
    "Version": "Version",
    "X_Amz_Content_Sha256": "X-Amz-Content-Sha256",
    "X_Amz_Date": "X-Amz-Date",
    "X_Amz_Algorithm": "X-Amz-Algorithm",
    "X_Amz_Credential": "X-Amz-Credential",
    "X_Amz_Security_Token": "X-Amz-Security-Token",
    "X_Amz_Signature": "X-Amz-Signature",
    "X_Amz_SignedHeaders": "X-Amz-SignedHeaders",
    "Category": "Category",
    "Description": "Description",
    "Name": "Name",
    "AudioDescriptions": "AudioDescriptions",
    "CaptionDescriptions": "CaptionDescriptions",
    "Container": "Container",
    "MoovPlacement": "MoovPlacement",
    "F4vSettings": "F4vSettings",
    "AudioBufferModel": "AudioBufferModel",
    "AudioFramesPerPes": "AudioFramesPerPes",
    "AudioPids": "AudioPids",
    "Bitrate": "Bitrate",
    "BufferModel": "BufferModel",
    "NetworkId": "NetworkId",
    "NetworkName": "NetworkName",
    "NitInterval": "NitInterval",
    "DvbNitSettings": "DvbNitSettings",
    "OutputSdt": "OutputSdt",
    "SdtInterval": "SdtInterval",
    "ServiceName": "ServiceName",
    "ServiceProviderName": "ServiceProviderName",
    "DvbSdtSettings": "DvbSdtSettings",
    "DvbSubPids": "DvbSubPids",
    "TdtInterval": "TdtInterval",
    "DvbTdtSettings": "DvbTdtSettings",
    "DvbTeletextPid": "DvbTeletextPid",
    "EbpAudioInterval": "EbpAudioInterval",
    "EbpPlacement": "EbpPlacement",
    "EsRateInPes": "EsRateInPes",
    "ForceTsVideoEbpOrder": "ForceTsVideoEbpOrder",
    "FragmentTime": "FragmentTime",
    "MaxPcrInterval": "MaxPcrInterval",
    "MinEbpInterval": "MinEbpInterval",
    "NielsenId3": "NielsenId3",
    "NullPacketBitrate": "NullPacketBitrate",
    "PatInterval": "PatInterval",
    "PcrControl": "PcrControl",
    "PcrPid": "PcrPid",
    "PmtInterval": "PmtInterval",
    "PmtPid": "PmtPid",
    "PrivateMetadataPid": "PrivateMetadataPid",
    "ProgramNumber": "ProgramNumber",
    "RateMode": "RateMode",
    "Scte35EsamPid": "Scte35EsamPid",
    "Scte35Esam": "Scte35Esam",
    "Scte35Pid": "Scte35Pid",
    "Scte35Source": "Scte35Source",
    "SegmentationMarkers": "SegmentationMarkers",
    "SegmentationStyle": "SegmentationStyle",
    "SegmentationTime": "SegmentationTime",
    "TimedMetadataPid": "TimedMetadataPid",
    "TransportStreamId": "TransportStreamId",
    "VideoPid": "VideoPid",
    "M2tsSettings": "M2tsSettings",
    "TimedMetadata": "TimedMetadata",
    "M3u8Settings": "M3u8Settings",
    "ClapAtom": "ClapAtom",
    "CslgAtom": "CslgAtom",
    "Mpeg2FourCCControl": "Mpeg2FourCCControl",
    "PaddingControl": "PaddingControl",
    "Reference": "Reference",
    "MovSettings": "MovSettings",
    "FreeSpaceBox": "FreeSpaceBox",
    "Mp4MajorBrand": "Mp4MajorBrand",
    "Mp4Settings": "Mp4Settings",
    "ContainerSettings": "ContainerSettings",
    "AfdSignaling": "AfdSignaling",
    "AntiAlias": "AntiAlias",
    "Codec": "Codec",
    "FramerateDenominator": "FramerateDenominator",
    "FramerateNumerator": "FramerateNumerator",
    "MaxCaptures": "MaxCaptures",
    "Quality": "Quality",
    "FrameCaptureSettings": "FrameCaptureSettings",
    "AdaptiveQuantization": "AdaptiveQuantization",
    "CodecLevel": "CodecLevel",
    "CodecProfile": "CodecProfile",
    "DynamicSubGop": "DynamicSubGop",
    "EntropyEncoding": "EntropyEncoding",
    "FieldEncoding": "FieldEncoding",
    "FlickerAdaptiveQuantization": "FlickerAdaptiveQuantization",
    "FramerateControl": "FramerateControl",
    "FramerateConversionAlgorithm": "FramerateConversionAlgorithm",
    "GopBReference": "GopBReference",
    "GopClosedCadence": "GopClosedCadence",
    "GopSize": "GopSize",
    "GopSizeUnits": "GopSizeUnits",
    "HrdBufferInitialFillPercentage": "HrdBufferInitialFillPercentage",
    "HrdBufferSize": "HrdBufferSize",
    "InterlaceMode": "InterlaceMode",
    "MaxBitrate": "MaxBitrate",
    "MinIInterval": "MinIInterval",
    "NumberBFramesBetweenReferenceFrames": "NumberBFramesBetweenReferenceFrames",
    "NumberReferenceFrames": "NumberReferenceFrames",
    "ParControl": "ParControl",
    "ParDenominator": "ParDenominator",
    "ParNumerator": "ParNumerator",
    "QualityTuningLevel": "QualityTuningLevel",
    "MaxAverageBitrate": "MaxAverageBitrate",
    "QvbrQualityLevel": "QvbrQualityLevel",
    "QvbrSettings": "QvbrSettings",
    "RateControlMode": "RateControlMode",
    "RepeatPps": "RepeatPps",
    "SceneChangeDetect": "SceneChangeDetect",
    "Slices": "Slices",
    "SlowPal": "SlowPal",
    "Softness": "Softness",
    "SpatialAdaptiveQuantization": "SpatialAdaptiveQuantization",
    "Syntax": "Syntax",
    "Telecine": "Telecine",
    "TemporalAdaptiveQuantization": "TemporalAdaptiveQuantization",
    "UnregisteredSeiTimecode": "UnregisteredSeiTimecode",
    "H264Settings": "H264Settings",
    "AlternateTransferFunctionSei": "AlternateTransferFunctionSei",
    "SampleAdaptiveOffsetFilterMode": "SampleAdaptiveOffsetFilterMode",
    "TemporalIds": "TemporalIds",
    "Tiles": "Tiles",
    "WriteMp4PackagingType": "WriteMp4PackagingType",
    "H265Settings": "H265Settings",
    "IntraDcPrecision": "IntraDcPrecision",
    "Mpeg2Settings": "Mpeg2Settings",
    "ProresSettings": "ProresSettings",
    "CodecSettings": "CodecSettings",
    "ColorMetadata": "ColorMetadata",
    "Height": "Height",
    "Width": "Width",
    "X": "X",
    "Y": "Y",
    "Crop": "Crop",
    "DropFrameTimecode": "DropFrameTimecode",
    "FixedAfd": "FixedAfd",
    "Position": "Position",
    "RespondToAfd": "RespondToAfd",
    "ScalingBehavior": "ScalingBehavior",
    "Sharpness": "Sharpness",
    "TimecodeInsertion": "TimecodeInsertion",
    "Brightness": "Brightness",
    "ColorSpaceConversion": "ColorSpaceConversion",
    "Contrast": "Contrast",
    "BluePrimaryX": "BluePrimaryX",
    "BluePrimaryY": "BluePrimaryY",
    "GreenPrimaryX": "GreenPrimaryX",
    "GreenPrimaryY": "GreenPrimaryY",
    "MaxContentLightLevel": "MaxContentLightLevel",
    "MaxFrameAverageLightLevel": "MaxFrameAverageLightLevel",
    "MaxLuminance": "MaxLuminance",
    "MinLuminance": "MinLuminance",
    "RedPrimaryX": "RedPrimaryX",
    "RedPrimaryY": "RedPrimaryY",
    "WhitePointX": "WhitePointX",
    "WhitePointY": "WhitePointY",
    "Hdr10Metadata": "Hdr10Metadata",
    "Hue": "Hue",
    "Saturation": "Saturation",
    "ColorCorrector": "ColorCorrector",
    "Algorithm": "Algorithm",
    "Control": "Control",
    "Mode": "Mode",
    "Deinterlacer": "Deinterlacer",
    "InsertableImages": "InsertableImages",
    "ImageInserter": "ImageInserter",
    "Filter": "Filter",
    "Strength": "Strength",
    "FilterSettings": "FilterSettings",
    "PostFilterSharpenStrength": "PostFilterSharpenStrength",
    "Speed": "Speed",
    "SpatialFilterSettings": "SpatialFilterSettings",
    "NoiseReducer": "NoiseReducer",
    "FontSize": "FontSize",
    "Prefix": "Prefix",
    "TimecodeBurnin": "TimecodeBurnin",
    "VideoPreprocessors": "VideoPreprocessors",
    "VideoDescription": "VideoDescription",
    "Settings": "Settings",
    "Tags": "Tags",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['hmac'] = cfg['hmac'];

    let callParams = {
        spec: spec,
        operationId: 'CreatePreset',
        pathName: '/2017-08-29/presets',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}