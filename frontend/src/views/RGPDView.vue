<template>
  <div class="container-fluid">
    <div class="content">
      <h1>RGPD (Règlement Général sur la Protection des Données)</h1>
      <em>
        <strong>Que deviennent vos données personnelles ?</strong>
      </em>
      <br />
      <em>
        Pas d'inquiétude, vos informations sont confidentielles et uniquement
        destinées à favoriser votre recrutement. Sachez que la protection de vos
        données est une priorité pour nous. Si vous souhaitez avoir plus de
        précision sur la gestion du RGPD chez LMS LMS, n'hésitez pas à consulter
        notre Politique de protection des données personnelles ci-dessous : elle
        précise les modalités de collecte, traitement et conservation de vos
        informations.
      </em>
      <br />
      <em>
        Vous y trouverez également le rappel de vos droits concernant vos
        données personnelles et les moyens de nous contacter pour toute demande
        d'information complémentaire.
      </em>
      <hr />
      <em>
        <strong>Politique de protection des données personnelles</strong>
      </em>
      <em>
        LMS LMS s’engage à respecter la confidentialité de vos données
        personnelles, en conformité avec le Règlement Général sur la Protection
        des Données du 25 mai 2018, qui définit les principes à respecter lors
        de la collecte, du traitement et de la conservation des données.
      </em>
      <br />
      <em>
        Lesinformations que vous nous transmettez et/ou que nous collectons sont
        confidentielles et uniquement destinées à une utilisation relative au
        recrutement.
      </em>
      <div class="questions">
        <div class="question">
          <button
            class="btn btn-question"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#text1"
            aria-expanded="false"
            aria-controls="text1"
            @click.prevent="button1 = !button1"
          >
            Qui est responsable du traitement de vos données personnelles ?
            <font-awesome-icon :icon="!button1 ? 'add' : 'minus'" class="fab" />
          </button>
          <div class="collapse" id="text1">
            <div class="card card-body">
              <p>
                Toutes les données personnelles traitées par LMS, dans le cadre
                de la présente Politique de protection des données personnelles
                sont contrôlées par la responsable du traitement de vos données
                personnelles, Stéphanie BONNE, dirigeante de LMS, immatriculée
                au Registre du Commerce et des Sociétés de Metz sous le numéro
                888 919 875, dont le siège social est sis au 101 rue des
                Brotteaux 57110 METZ.
              </p>
            </div>
          </div>
        </div>
        <button
          class="btn btn-question"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#text2"
          aria-expanded="false"
          aria-controls="text2"
          @click.prevent="button2 = !button2"
        >
          Quand sont collectées les données personnelles de nos candidats
          nécessaires au recrutement ?
          <font-awesome-icon :icon="!button2 ? 'add' : 'minus'" class="fab" />
        </button>
        <div class="collapse" id="text2">
          <div class="card card-body">
            <p>
              Quelles que soient les données personnelles recueillies, notre
              seul objectif est de mettre en lien nos clients et nos candidats
              suite à leur évaluation et ainsi finaliser le recrutement.
              Collecter certaines de vos données personnelles, nous permet de
              mieux cibler les postes que vous recherchez et de vous faire des
              propositions en adéquation avec vos attentes.
            </p>
            <u
              >Ainsi, nous collectons des données personnelles à différents
              moments de votre vie en tant que candidat :</u
            >
            <ul>
              <li>
                Lors de l’identification : sur les réseaux sociaux, les
                CVthèques ou lors de votre/vos candidatures,
              </li>
              <li>Pendant le processus de recrutement,</li>
              <li>Lors de la mise à jour de votre parcours professionnel.</li>
            </ul>
            <p>
              Ces données sont récoltées via les informations indiquées par les
              candidats sur leurs profils personnels sur les réseaux sociaux
              professionnels, puis lors d’échanges téléphoniques et/ou écrits,
              et d’entretiens physiques ou visio avec LMS.
            </p>
          </div>
        </div>
        <div class="question">
          <button
            class="btn btn-question"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#text3"
            aria-expanded="false"
            aria-controls="text3"
            @click.prevent="button3 = !button3"
          >
            Quelles sont les données personnelles de nos candidats que nous
            collectons ?
            <font-awesome-icon :icon="!button3 ? 'add' : 'minus'" class="fab" />
          </button>
          <div class="collapse" id="text3">
            <div class="card card-body">
              <u
                ><strong
                  >Lors de la phase d’identification des candidats pour nos
                  clients :</strong
                ></u
              >
              <p>
                Nous récupérons via les réseaux sociaux, les CVthèques ou vos
                candidatures suite à annonce, uniquement les informations
                suivantes (présentes sur vos Cv ou profils):
              </p>
              <ul>
                <li>Nom et prénom,</li>
                <li>Numéro de téléphone portable,</li>
                <li>Adresse email,</li>
                <li>Adresse postale,</li>
                <li>Intitulé du poste actuellement ou dernièrement occupé,</li>
                <li>Rémunération actuelle</li>
              </ul>

              <p>
                Toutes ces informations constituent un résumé du CV, et sont
                stockées dans notre base de données propriétaire.
              </p>
              <br />
              <br />
              <p>
                A ce stade d’identification, et par soucis de confidentialité et
                de réactivité, nous pouvons transmettre votre candidature
                anonyme à nos clients / prospects en cachant les données
                suivantes :
              </p>
              <ul>
                <li>Votre nom de famille,</li>
                <li>Vos coordonnées téléphoniques et/ou électroniques,</li>
                <li>Votre adresse postale</li>
              </ul>

              <u><strong> Pendant le process de recrutement :</strong></u>
              <p>
                En plus des informations citées plus haut, et suite aux
                entretiens d’évaluation (entretien physique ou à distance), nous
                constituons votre dossier de candidature dans le but de
                favoriser votre recrutement avec les données suivantes :
              </p>
              <ul>
                <li>
                  Une évaluation technique et comportementale par la pratique
                  d’entretiens structurés,
                </li>
                <li>
                  Un compte rendu des entretiens : résumé de votre parcours
                  professionnel, de vos savoirs, savoir-faire et savoir-être,
                  vos motivations, projets, conditions (mobilité, prétentions
                  salariales, déplacements…),
                </li>
                <li>
                  La synthèse des prises de références professionnelles suite
                  aux contacts que vous nous avez transmis par email, attestant
                  ainsi de votre accord à la réalisation de celles-ci,
                </li>
                <li>
                  Les lettres de recommandation de vos anciens employeurs que
                  vous pourrez nous fournir,
                </li>
              </ul>
              <u><strong>Lors de la mise à jour de votre parcours :</strong></u>
              <ul>
                <li>
                  Les nouvelles données apportant un changement aux informations
                  listées ci-dessus (ex : changement de coordonnées, départ ou
                  prise de poste, formation, acquisition de nouvelles
                  compétences…)
                </li>
              </ul>
              <p>
                Toutes ces informations sont conservées dans votre dossier
                candidat dans notre base de données propriétaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      button1: false,
      button2: false,
      button3: false,
    };
  },
  methods: {
    changeIcon() {
      return false;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 3em;
  margin-bottom: 1em;
}
em {
  color: var(--mns-text-color);
}
em > strong {
  color: var(--mns-primary-color);
}
.question {
  margin: 15px 0;
}
.btn-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--mns-primary-color);
  font-weight: 700;
}
</style>