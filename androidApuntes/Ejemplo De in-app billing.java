public class PurchaseActivity  
 extends SherlockFragmentActivity
 implements IabHelper.OnIabSetupFinishedListener, IabHelper.OnIabPurchaseFinishedListener{
 
     private IabHelper billingHelper;
     private Button boton;
 
 
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_purchase);
        boton = (Button)findViewById(R.id.boton);
        boton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startBuyProcess();
            }
        });
 
    }
 
    private void startBuyProcess(){
        String clave = "NUESTRA-CLAVE-DE-DESARROLLADOR";
 
        billingHelper = new IabHelper(this, clave);
        billingHelper.startSetup(this);
    }
 
 
    //metodo del listener implementado anteriormente
     @Override
    public void onIabSetupFinished(IabResult result) {
        //revisamos si la comunicacion fue exitosa.
        if (result.isSuccess()) {
 
            try{
                //revisamos si el usuario tiene su item
                if(billingHelper.queryInventory(true, null).hasPurchase(Premium.SKU)){
                    Toast.makeText(this, "Ya tienes este elemento!", Toast.LENGTH_SHORT).show();
                } else {
                    compraElemento();
                }
 
            } catch(IabException e){
                e.printStackTrace();
            }
 
        } else {
 
            errorAlIniciar();
        }
 
    }
 
 
    protected void errorAlIniciar() {
        Toast.makeText(PurchaseActivity.this, "Error al intentar iniciar la compra", Toast.LENGTH_SHORT).show();
    }
 
 
    protected void compraElemento() {
        purchaseItem(Premium.SKU);
    }
 
 
    protected void purchaseItem(String sku) {
        billingHelper.launchPurchaseFlow(this, sku, 123, this);
    }
 
    //metodo que se ejecuta cuando la compra aya sido exitosa
    @Override
    public void onIabPurchaseFinished(IabResult result, Purchase info) {
        if (result.isFailure()) {
            compraFallida();
        } else if (Premium.SKU.equals(info.getSku())) {
            compraCorrecta(result, info);
        }
 
    }
 
    /*
     * COSAS QUE QUERAMOS HACER CUANDO SE HAYA
     * ADQUIRIDO EL PRODUCTO CON EXITO
     */
    protected void compraCorrecta(IabResult result, Purchase info){
        // Consumimos los elementos a fin de poder probar varias compras
        billingHelper.consumeAsync(info, null);
 
    }
 
    /*
     * COSAS QUE QUERAMOS HACER CUANDO EL PRODUCTO
     * NO HAYA SIDO ADQUIRIDO
     */
 
    protected void compraFallida(){
 
    }
 
 
    //LIMPIAMOS
    @Override
    protected void onDestroy() {
        disposeBillingHelper();
        super.onDestroy();
    }
 
    private void disposeBillingHelper() {
        if (billingHelper != null) {
            billingHelper.dispose();
        }
        billingHelper = null;
    }
 
 
 }