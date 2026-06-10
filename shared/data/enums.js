/* ============================================================
 * LMS RCP-NC — Listes de valeurs centralisées (dette D2)
 * ------------------------------------------------------------
 * SOURCE UNIQUE des énumérations et libellés du LMS.
 * Aucun module ne doit redéfinir ces valeurs en dur.
 * Tout module charge ce fichier AVANT son propre <script> :
 *   <script src="../../shared/data/enums.js"></script>
 * et consomme window.RCPNC_ENUMS.
 *
 * Voir docs/schema-dossier-parcours_v1.md pour le contrat de
 * fichier qui utilise ces valeurs.
 * Créé le 2026-05-21.
 * ============================================================ */
(function (root) {
  'use strict';

  var ENUMS = {

    /* --- Contrat de fichier (cf. schema-dossier-parcours_v1.md) --- */
    FORMAT: 'rcpnc-dossier-parcours',
    VERSION: 1,

    /* --- Émetteurs possibles d'un dossier (_meta.exportedFrom) --- */
    EXPORTED_FROM: ['M1', 'SAS_candidat', 'SAS_conseiller', 'M2', 'M3'],

    /* --- Phases du dossier (_meta.phase) --- */
    PHASES: {
      en_attente_entretien: 'En attente d’entretien',
      'parcours_validé': 'Parcours validé',
      'à_réassigner': 'À réassigner',
      dossier_vae: 'Dossier VAE en cours',
      afest_en_cours: 'AFEST en cours'
    },

    /* --- Routing post-entretien (validation.routing) — 6 valeurs --- */
    ROUTING: ['VAE_directe', 'VAE_accompagnee', 'hybride_AFEST_FC',
              'VAE_plus_FC', 'escalade_architecte', 'reorientation_hors_LMS'],
    ROUTING_LABELS: {
      VAE_directe: 'VAE directe',
      VAE_accompagnee: 'VAE accompagnée',
      hybride_AFEST_FC: 'Parcours hybride (AFEST + formation courte)',
      VAE_plus_FC: 'VAE + formation courte',
      escalade_architecte: 'Escalade vers l’architecte',
      reorientation_hors_LMS: 'Réorientation hors LMS'
    },

    /* --- Voies d'orientation M1 (diagnostic.orientation) --- */
    VOIES_M1: ['spot', 'hybride', 'complement', 'vae', 'conseil'],
    VOIES_M1_LABELS: {
      vae: 'VAE — Validation des Acquis de l’Expérience',
      complement: 'Complément formation courte + VAE',
      hybride: 'Hybride — AFEST + formation courte + VAE',
      spot: 'Certificat de Compétences Essentielles (CCE)',
      conseil: 'Rencontre conseiller RIIFE'
    },

    /* --- États d'une situation AFEST (M3 — afest.situations[].etat) --- */
    ETATS_SITUATION: ['afaire', 'encours', 'faite', 'validee', 'classee'],
    ETATS_SITUATION_LABELS: {
      afaire: 'À faire', encours: 'En cours', faite: 'Faite',
      validee: 'Validée', classee: 'Classée'
    },

    /* --- Types de conseiller (validation.conseiller.type) --- */
    TYPES_CONSEILLER: {
      PRC: 'PRC (agréé DTEFP)',
      'OF': 'Organisme de formation'
    },

    /* --- Modalités d'entretien (validation.entretien.modalite) --- */
    MODALITES_ENTRETIEN: {
      visio: 'Visioconférence',
      telephone: 'Téléphone',
      presentiel: 'Présentiel'
    },

    /* --- Statut du candidat (candidat_dispos.statut) --- */
    STATUTS_CANDIDAT: {
      demandeur_emploi: 'Demandeur d’emploi',
      salarie: 'Salarié',
      non_salarie: 'Non salarié / indépendant'
    },

    /* --- Niveaux de pré-remplissage du Livret 1 --- */
    NIVEAUX_PREREMPLISSAGE: {
      complet: 'Complet',
      partiel: 'Partiel',
      non_prerempli: 'À remplir'
    }
  };

  root.RCPNC_ENUMS = ENUMS;
  if (typeof module !== 'undefined' && module.exports) { module.exports = ENUMS; }

})(typeof window !== 'undefined' ? window : this);
