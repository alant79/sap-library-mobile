
export const SET_DATA = 'SET_DATA';

export const fetchData = () => {

    const transformFunctions = (src) => {
        const functionsList = []
        src.functions && src.functions.map(elF => {
            functionsList.push({
                id: elF.functionid,
                name: elF.functionname,
                advdesc: elF.functiondesc,
                parent: elF.functionparent,
            })
        })
        return functionsList
    }

    const transformTransacions = (src) => {
        const transactionsList = []
        src.transacions && src.transactions.map(elF => {
            transactionsList.push({
                id: elF.transactionid,
                functionId: elF.functionid,               
                name: elF.transactionname,
                advdesc: elF.transactionadvdesc,
                desc: elF.transactiondesc,
            })
        })
        return transactionsList
    }  
    
    const transformRefs = (src) => {
        const refsList = []
        src.refs && src.refs.map(elF => {
            refsList.push({
                id: elF.refsid,
                functionId: elF.functionid,               
                name: elF.refsname,
                desc: elF.refsdesc,
            })
        })
        return refsList
    } 
    
    const transformBadies = (src) => {
        const badiesList = []
        src.badies && src.badies.map(elF => {
            badiesList.push({
                id: elF.badiid,
                functionId: elF.functionid,               
                name: elF.badiname,
                desc: elF.badidesc,
                advdesc: elF.badiadvdesc,               
            })
        })
        return badiesList
    }   

    const transformBapies = (src) => {
        const bapiesList = []
        src.bapies && src.bapies.map(elF => {
            bapiesList.push({
                id: elF.bapiid,
                functionId: elF.functionid,               
                name: elF.bapiname,
                desc: elF.bapidesc,
                advdesc: elF.bapiadvdesc,  
            })
        })
        return bapiesList
    }   

    const transformClasses = (src) => {
        const classesList = []
        src.classes && src.classes.map(elF => {
            classesList.push({
                id: elF.classid,
                functionId: elF.functionid,               
                name: elF.classname,
                desc: elF.classdesc,
                advdesc: elF.classadvdesc,  
            })
        })
        return classesList
    } 
    
    const transformFms = (src) => {
        const fmsList = []
        src.fms && src.fms.map(elF => {
            fmsList.push({
                id: elF.fmid,
                functionId: elF.functionid,               
                name: elF.fmname,
                desc: elF.fmdesc,
                advdesc: elF.fmadvdesc,  
            })
        })
        return fmsList
    }  
    
    const transformExprs = (src) => {
        const exprsList = []
        src.exprs && src.exprs.map(elF => {
            exprsList.push({
                id: elF.exprid,
                functionId: elF.functionid,               
                name: elF.exprname,
                desc: elF.exprdesc,
                advdesc: elF.expradvdesc,  
            })
        })
        return exprsList
    }  
      
    const transformFiles = (src) => {
        const filesList = []
        src.files && src.files.map(elF => {
            filesList.push({
                id: elF.filesid,
                functionId: elF.functionid,               
                name: elF.filesname,
                desc: elF.filesdesc,
            })
        })
        return filesList
    } 
    
    const transformCustdep = (src) => {
        const custdepList = []
        src.custdep && src.custdep.map(elF => {
            custdepList.push({
                id: elF.objectid,
                customerId: elF.customerid,               
                name: elF.customername,
            })
        })
        return custdepList
    }    


    return async dispatch => {
        const response = await fetch(
            'http://sap-library.herokuapp.com'
        );
        const restData = await response.json();
        const resData = []
        restData.map(el=> {
            const newEl = {
                user: el.user,
                functions: transformFunctions(el), 
                transactions: transformTransacions(el),                              
                refs: transformRefs(el), 
                badies: transformBadies(el), 
                bapies: transformBapies(el), 
                classes: transformClasses(el),    
                exprs: transformExprs(el), 
                fms: transformFms(el),   
                custdep: transformCustdep(el),     
                files: transformFiles(el),                                                                        
            }
            resData.push(newEl)
        })
    
    dispatch({ type: SET_DATA, resData });
        }
};
