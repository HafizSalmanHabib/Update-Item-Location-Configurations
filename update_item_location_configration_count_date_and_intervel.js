/**
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
 */

define(['N/search', 'N/record', 'N/log'],

    function (search, record, log) {

        function getInputData() {
            // Fetch records or data to be processed
            var itemLocConfigSearch = search.create({
                type: search.Type.ITEM_LOCATION_CONFIGURATION,
                filters: [
                     ['item', 'anyof', "9343", "9344", "74820", "25613", "49081", "9584", "9295", "9296", "9298", "9299", "9300", "9305", "9310", "9313", "9319", "9321", "9322", "9335", "24704", "9346", "76007", "76008", "9349", "9350", "9351", "9352", "9353", "9354", "9355", "9408", "9356", "9410", "9415", "72866", "9585", "9586", "9587", "9588", "9589", "9590", "9591", "9592", "9593", "9594", "9595", "9596", "9597", "9598", "9599", "9600", "9601", "9602", "9603", "9604", "9605", "9606", "9607", "9608", "9609", "9610", "9611", "49252", "49253", "69422", "72870", "22304", "22305", "22306", "76006", "75660", "75661", "75662", "75663", "25507", "9981", "9982", "9983", "9984", "24905", "24906", "24907", "24904", "9612", "9613", "9614", "9615", "9616", "9617", "9618", "9619", "9620", "9621", "9622", "9623", "9624", "9625", "9626", "9627", "9628", "9629", "9630", "9631", "9632", "76065", "9633", "9634", "9635", "9636", "9637", "9638", "9639", "9640", "9641", "9642", "9643", "77219", "9644", "9645", "9646", "9647", "9648", "9649", "9650", "9651", "9652", "9653", "9654", "9655", "9656", "9657", "9658", "9659", "9660", "9661", "9662", "9663", "9664", "9463", "9442", "9418", "9483", "9505", "9479", "9420", "9411", "9412", "9407", "9488", "9465", "9475", "9486", "9368", "9477", "9427", "9367", "9383", "9438", "9384", "9485", "9496", "9453", "35628", "9517", "9456", "9457", "9433", "9376", "9458", "22604", "9473", "9510", "9482", "9471", "77224", "9468", "9490", "9461", "9441", "9467", "9419", "9421", "9491", "9423", "9502", "9508", "9489", "65800", "9425", "9413", "9426", "9444", "9494", "9406", "9481", "9472", "9429", "9450", "9449", "9430", "9372", "9499", "9409", "9451", "9452", "9454", "9455", "9437", "9501", "9440", "9497", "9503", "9460", "9459", "9528", "9435", "9434", "9480", "9498", "9414", "9436", "9369", "9466", "9462", "9509", "9445", "9514", "9432", "9377", "9387", "9515", "9422", "9511", "9526", "9464", "9516", "9375", "9439", "9513", "74841", "9469", "9470", "9474", "9476", "9478", "9484", "9487", "9492", "9493","35525", "9357", "9358", "9359", "9360", "9361", "9362", "9363", "9424", "9364", "9365", "9366", "9428", "9370", "9371", "9431", "9373", "9374", "9378", "9379", "9380", "9381", "9382", "9385", "9386", "22404", "22405", "22406", "35522", "10081", "35523", "35524", "10082", "73290", "10083", "10084", "75647", "77219", "69411", "69413", "69412", "9443", "9447", "9448", "77224", "9495", "9500", "9504", "9506", "9507", "9512", "9673", "9675", "9676", "9677", "9678", "9679", "9680", "9681", "9682", "9683", "9684", "9388", "9389", "9390", "9391", "22605", "22606", "9392", "72867", "72868", "9395", "72858", "9348", "49050", "73280", "73281", "73282", "73283", "9396", "9397", "9398", "9400", "9685", "9686", "9687", "9688", "9689", "9690", "9691", "9692", "9693", "9694", "9695", "9696", "9697", "9698", "9699", "9700", "9701", "62857", "62858", "62859", "9518", "9519", "22607", "22608", "22609", "22610", "22611", "22612", "22613", "22614", "22615", "22904", "9665", "9666", "9667", "9668", "9669", "9670", "9671", "9672", "9674", "9702", "75993", "9703", "9704", "9718", "9720", "9727", "9728", "9858", "9859", "9860", "9861", "9863", "9866", "9867", "9869", "9871", "9880", "9881", "9882", "9883", "9884", "9885", "9886", "9889", "9890", "9894", "9895", "9900", "9901", "9902", "9905", "9906", "9907", "9910", "9911", "9913", "9401", "62879", "9402", "9705", "9706", "9707", "9708", "9709", "9710", "9711", "9712", "9713", "9714", "9715", "9716", "9717", "9719", "9721", "9722", "9723", "9724", "9725", "9726", "9729", "9583", "9730", "9582", "9731", "9581", "9732", "9733", "9734", "9404", "35632", "35633", "49251", "73591", "9735", "9736", "9737", "9738", "9739", "9740", "9741", "9742", "9743", "9744", "9745", "9746", "9747", "9748", "9749", "9750", "9751", "9752", "9753", "9754", "9755", "9756", "9757", "9758", "9759", "9760", "9761", "9762", "9763", "9764", "9765", "9766", "9767", "9768", "9769", "9770", "9771", "9772", "9773", "9774", "9775", "9776", "9777", "9778", "9779", "9780", "9781", "9782", "9783", "9784", "9785", "9786", "9787", "9788", "9789", "9790", "9791", "9792", "9793", "9794", "9795", "9796", "9797", "9798", "9799", "9800", "9801", "9802", "9803", "9804", "9805", "9806", "9807", "9808", "9809","9810", "9811", "9812", "9813", "9814", "9815", "9816", "9817", "9818", "74605", "73176", "22204", "73177", "22205", "73178", "22206", "73179", "22207", "73180", "22208", "73181", "22209", "73182", "22210", "73183", "22211", "73184", "22212", "73185", "22213", "49129", "49130", "49131", "49132", "49133", "49134", "9817", "9819", "9820", "9821", "76001", "75994", "76000", "75995", "75999", "75996", "75998", "75997", "9822", "9823", "9824", "9825", "9826", "9827", "9828", "9829", "9830", "9831", "9832", "9833", "9834", "9835", "9836", "9837", "9838", "9839", "9840", "9841", "9842", "9843", "9844", "9845", "9520", "9521", "9522", "9523", "9524", "9525", "9527", "9846", "9847", "9848", "9849", "9850", "9851", "9852", "9853", "9854", "9855", "9856", "9857", "72859", "62889", "72860", "72861", "62891", "72862", "62890", "62892", "62888", "9862", "9864", "9865", "9868", "9870", "9872", "9873", "9874", "9875", "9876", "9877", "9878", "9879", "9887", "9888", "9891", "9892", "9893", "9896", "9897", "9898", "9899", "22617", "9903", "9904", "9908", "9909", "9912", "9914", "9915", "9916", "9917", "9918", "9919", "25105","73289","77219","77224"]                  
                ],
                columns: ['nextinvtcountdate', 'invtcountinterval']
            });
            var totalRecords = itemLocConfigSearch.runPaged().count;
            log.debug("totalRecords",totalRecords)
            return itemLocConfigSearch;
        }

        function map(context) {
            // Processing individual records retrieved in getInputData
            var searchResult = JSON.parse(context.value);
            var recId = searchResult.id;

            var itemLocConfigRec = record.load({
                type: record.Type.ITEM_LOCATION_CONFIGURATION,
                id: recId
            });

            itemLocConfigRec.setValue({
                fieldId: 'nextinvtcountdate',
                value: new Date('12/06/2023') // Update the date accordingly
            });
            itemLocConfigRec.setValue({
                fieldId: 'invtcountinterval',
                value: 90 // Update the interval accordingly
            });

            var savedRecId = itemLocConfigRec.save();

            // Logging the record ID after saving
            log.debug({
                title: 'Item Location Configuration Updated',
                details: 'Record ID: ' + savedRecId
            });
        }

        function reduce(context) {
            // Nothing needed for reduce phase in this case
        }

        function summarize(summary) {
            // Log or perform any final actions after processing is complete
            log.debug({
                title: 'Map/Reduce Summary',
                details: 'Processed ' + summary.inputSummary.recordsProcessed + ' records.'
            });
        }

        return {
            getInputData: getInputData,
            map: map,
            reduce: reduce,
            summarize: summarize
        };

    });
