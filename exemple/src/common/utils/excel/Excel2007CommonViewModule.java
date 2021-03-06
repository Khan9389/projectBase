package common.utils.excel;

import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.servlet.view.document.AbstractXlsxView;

import common.utils.common.CmmnUtil;
import common.utils.common.ExcelDownConfig;
import common.utils.common.PentasMap;
import common.utils.string.StringUtil;

public class Excel2007CommonViewModule extends AbstractXlsxView {
	
	@Override
	protected void buildExcelDocument(Map<String, Object> model, Workbook workbook, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		ExcelDownConfig config = (ExcelDownConfig) model.get("config");
		List<PentasMap> dataList = (List<PentasMap>) model.get("dataList");
		
		String fileName = StringUtil.join(config.getString("fileName"), "_" , CmmnUtil.getTodayString(), CmmnUtil.getCurTime().substring(0,4));
		fileName = URLEncoder.encode(fileName, "UTF-8");
		
		ExcelDataProcess ExcelDataProcess = new ExcelDataProcess();
		ExcelDataProcess.process(config, dataList, workbook);

		response.setCharacterEncoding("UTF-8");
		response.setHeader("Content-Disposition", StringUtil.join("attachment;filename=", fileName, ".xlsx"));
	}

}
