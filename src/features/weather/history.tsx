import { resWeatherSearchI } from "@/common/interface/service/weather/response.interface";
import { BaseCard } from "@/components/atoms"
import colors from "@/styles/colors";
import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const HistoryWeather = ({data} :{data : resWeatherSearchI[]}) => {

    const columns : GridColDef[] = [
        {field : 'id', headerName : 'ID', width : 30, sortable : false},
        {field : 'city', headerName : 'City', width : 100, },
        {field : 'region', headerName : 'Region', width : 150, },
        {field : 'country', headerName : 'Country', width : 100, },
        {field : 'lon', headerName : 'Longitude', width : 100, },
        {field : 'lat', headerName : 'Latitude', width : 100, },
        {field : 'condition', headerName : 'Description', width : 150, },
        {field : 'humidity', headerName : 'Humidity', width : 100, },
        {field : 'cloud', headerName : 'Cloud', width : 100, },
        {field : 'precip_mm', headerName : 'Rain', width : 100},
        {field : 'temp_c', headerName : 'Temp (C)', width : 100, },
        {field : 'temp_f', headerName : 'Temp (F)', width : 100, },
        {field : 'temp_feel_c', headerName : 'Feels Like (C)', width : 125, },
        {field : 'temp_feel_f', headerName : 'Feels Like (F)', width : 125, },
        {field : 'heat_index_c', headerName : 'Heat Index(C)', width : 125, },
        {field : 'heat_index_f', headerName : 'Heat Index(F)', width : 125, },
        {field : 'uv', headerName : 'UV', width : 75, },
    ];

    let rows : resWeatherSearchI[] = [];
    if (data){
        rows = data.map((item, index) => ({
            ...item,
            id : (index + 1).toString()
        }));
    }

    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <Box sx={{
            height: 400,
            width: '100%',
            '& .MuiDataGrid-root': {
                backgroundColor: colors.tertiary,
                color: colors.white,
                borderRadius: 2,
            },
            '& .MuiDataGrid-columnHeaders': {
                backgroundColor: colors.secondary,
                color: colors.text,
            },
            '& .MuiDataGrid-row:hover': {
                backgroundColor: colors.primary,
            }
        }}>
            <BaseCard>
                History
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination : {paginationModel}}}
                    pageSizeOptions={[10, 25, 50]}
                    checkboxSelection={false}
                />
            </BaseCard>
        </Box>
    )
}

export default HistoryWeather;