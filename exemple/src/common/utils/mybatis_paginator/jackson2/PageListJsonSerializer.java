package common.utils.mybatis_paginator.jackson2;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializerProvider;
import common.utils.mybatis_paginator.domain.PageList;
import common.utils.mybatis_paginator.domain.Paginator;

@SuppressWarnings("rawtypes")
public class PageListJsonSerializer extends JsonSerializer<PageList> {
    ObjectMapper mapper;

    public PageListJsonSerializer(){
        mapper = new ObjectMapper();
    }

    public PageListJsonSerializer(ObjectMapper mapper){
        this.mapper = mapper;
    }
    @SuppressWarnings("unchecked")
	@Override
    public void serialize(PageList value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
        Map<String,Object> map = new HashMap<String, Object>();
        Paginator paginator = value.getPaginator();
        map.put("totalCount", paginator.getTotalCount());
        map.put("totalPages", paginator.getTotalPages());
        map.put("page", paginator.getPage());
        map.put("limit", paginator.getLimit());
        map.put("items" , new ArrayList(value));

        map.put("startRow", paginator.getStartRow());
        map.put("endRow", paginator.getEndRow());

        map.put("offset", paginator.getOffset());

        map.put("pageSlider", paginator.getPageSlider());
        map.put("preBlockPageNo", paginator.getPreBlockPageNo());
        map.put("nextBlockPageNo", paginator.getNextBlockPageNo());

        map.put("prePage", paginator.getPrePage());
        map.put("nextPage", paginator.getNextPage());

        map.put("firstPage", paginator.isFirstPage());
        map.put("hasNextPage", paginator.isHasNextPage());
        map.put("hasPrePage", paginator.isHasPrePage());
        map.put("lastPage", paginator.isLastPage());

        mapper.writeValue(jgen, map);
    }
}
