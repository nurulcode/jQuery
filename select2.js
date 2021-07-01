# jQuery
tips select2

$('#select2').select2({
    placeholder: 'Loading...',
    ajax: {
        url: "",
        delay: 450,
        data: ""
        processResults: function ({data}) {
            return {
                results: $.map(data, function (item) {

                    return {
                        text: `${item.stok} - ( ${item.uraian} ) `,
                        jml: item.jml,
                        id: item.id,
                    }
                })
            };
        },
        cache: true
    }
});

// Get options select
const select2 = $('#select2');
select2.on("select2:select", function (event) {
    let data = event.params.data
    $('#jml').val(data.jml);
});
