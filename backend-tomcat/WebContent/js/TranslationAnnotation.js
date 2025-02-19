/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Represents the TranslationAnnotation task HTML page.
 * @class
 */
class TranslationAnnotation {
    /**
     * Constructs the HTML page.
     * @param {string} word     [Represents the word of the task]
     * @param {string} description [Represents the description of the task]
     * @return {HTMLElement}
     */
    static page(word, description) {
        return it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("row lightBrown navb valign-wrapper").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("col s6").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlImg.newBuilder().setClass("imgS").setSrc(TranslationAnnotation.LOGO))).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("col s6 right-align").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlAnchor.newBuilder().setClass("waves-effect btn-flat brownie").setHref(TranslationAnnotation.HOME_URL).setContent("HOME")).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlAnchor.newBuilder().setClass("waves-effect btn-flat brownie").setHref(TranslationAnnotation.LOGOUT_URL).setContent("logout")))).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("container").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("valign-wrapper h80").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("row").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("center-align").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("fontW marginTop").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlP.newBuilder().setContent("Inserisci la traduzione della parola qui sotto, aiutandoti con la definizione proposta:"))).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("col s12").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("card blue-card marginTB").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("card-content center-align white-text").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlSpan.newBuilder().setClass("card-title").setContent(word.toUpperCase())).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlP.newBuilder().setClass("fontP").setContent(description)))).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlForm.newBuilder().setClass("col s12 marginT").setMethod("POST").setAction(TranslationAnnotation.TASK_URL).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("row").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("input-field col s12").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlTextArea.newBuilder().setName("translation").setId("textarea1").setClass("materialize-textarea").setRequired(true)).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlLabel.newBuilder().setFor("textarea1").setContent("Traduzione"))).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("col s12 marginT").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlButton.newBuilder().setClass("btn waves-effect waves-light greenie").setType("submit").setContent("AVANTI"))).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlDiv.newBuilder().setClass("col s12").append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlAnchor.newBuilder().setClass("waves-effect waves-light btn white brownie skipPAD").setContent("SALTA").setHref(TranslationAnnotation.NEXT_TASK)))).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlInput.newBuilder().setName("word").setHidden(true).setValue(word)).append$it_uniroma1_fabbricasemanticajsweet_dom_BasicBuilder(it.uniroma1.fabbricasemanticajsweet.dom.HtmlInput.newBuilder().setName("description").setHidden(true).setValue(description)))))))).build();
    }
    static main(args) {
        $.get(TranslationAnnotation.LOGIN_CHECK, (result, a, ctx) => {
            let isLoggedIn = result.toString();
            if (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(isLoggedIn, "false")) {
                window.location.replace(TranslationAnnotation.LOGIN_URL);
            }
            return null;
        });
        $.getJSON(TranslationAnnotation.REST_URL, "task=TRANSLATION_ANNOTATION", (result, a, ctx) => {
            let json = result;
            let word = (json["word"]);
            let description = (json["description"]);
            let page = TranslationAnnotation.page(word, description);
            $("body").append(page);
            return null;
        });
    }
}
/**
 * Represents the url of the Home page.
 */
TranslationAnnotation.HOME_URL = "home.html";
/**
 * Represents the url of the LogoutServlet.
 */
TranslationAnnotation.LOGOUT_URL = "logout.jsp";
/**
 * Represents the path of the logo.
 */
TranslationAnnotation.LOGO = "images/FS.svg";
/**
 * Represents the url of the NewExampleServiceServlet.
 */
TranslationAnnotation.REST_URL = "nextExample.jsp";
/**
 * Represents the url of the TranslationAnnotationServlet.
 */
TranslationAnnotation.TASK_URL = "translationAnnotation.jsp";
/**
 * Represents the url of the AuthenticationServiceServlet.
 */
TranslationAnnotation.LOGIN_CHECK = "isLoggedIn.jsp";
/**
 * Represents the url of the NextTaskServlet.
 */
TranslationAnnotation.NEXT_TASK = "nextTask.jsp";
/**
 * Represents the url of the Login page.
 */
TranslationAnnotation.LOGIN_URL = "login.html";
TranslationAnnotation["__class"] = "TranslationAnnotation";
TranslationAnnotation.main(null);
