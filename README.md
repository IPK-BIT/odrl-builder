# ODRL Builder

## BioHackathon Germany 2024 Abstract

The primary goal of this project is to develop a web application for creating data usage agreements (DUA) in a way that allows automated evaluation of access permissions. Specifically, we want to adhere to the Open Digital Rights Language (ODRL) standard [1] and model permissions and prohibitions for the use of digital objects. ODRL is a policy expression language developed and adopted by the W3C. It provides a flexible and interoperable data model and vocabulary to enable fine-grained statements about the use of digital content and services. Recently, the Data Governance Act (DGA) was published as an implementation of the EU Data Act and defined roles for data intermediaries such as data trustees with certain prohibitions and obligations. The high expectations placed on the data trustee require that they have technical measures in place to facilitate the negotiation and enforcement of data use agreements. The “Ethical, Legal & Social Aspects” section of the NFDI (ELSA), has also issued a statement to the DGA [2], demonstrating the importance of this issue.

Usually, DUAs are negotiated individually between parties and are not stored in a machine-readable format, which prevents automated modeling and verification of access rights for digital objects. Our web application will allow to create a DUA step by step via a configurable graphical user interface using ODRL data model in the background. This enables legal laymen to create data use agreements without much effort. The use of ODRL allows to programmatically query the data use agreements and to answer access requests automatically. To this end, the resulting DUAs can be persisted and queried through an API e.g. according to the GAIA-X specifications of Eclipse Dataspace Components (EDC) [3, 4] to exchange data compliant to rules and policies. Additionally, we want to address the integration of ODRLs in FDOs, such as ARC-RO-Crate of the DataPlant consortia and discuss extensions of the RO-Crate profiles. At last, for legal review and formal signing, negotiated DUAs can be rendered as PDFs.

In summary, we will simplify the process of creating DUAs by adhering to international standards and will contribute to efforts to harmonize technical solutions, as the EOSC describes ODRL as a core metadata schema for legal interoperability [5]. DUAs can serve as a platform to gain the trust of data owners with protected, sensitive data and thus enable access to such resources. The project is in line with ELIXIR-DE/de.NBI's objective to improve the accessibility of resources and to ensure efficient, interoperable and secure resource sharing. It also aligns with the goals of the NFDI by handling sensitive data and enabling data protection. Especially when dealing with data from the health sector, but also handling agronomic data like land survey data or data from breeding programs.The project is a joint activity of the Leibniz IPK in Gatersleben (ELIXIR-DE/de.NBI Service Center GCBN), and the Justus-Liebig-University Giessen (ELIXIR-DE/de.NBI Service Center BiGi) and contributes to NFDI4Biodiversity, FAIRAgro, NFDI4Microbiota, DataPlant and FAIR-DS as well as to European initiatives such as EOSC and Gaia-X.

## Installation

```
npm install
```

## Start development server

```
npm run dev
```

## Build deployable bundle

```
npm run build
```

## References

- [1] https://www.w3.org/TR/odrl-model/
- [2] https://www.nfdi.de/wp-content/uploads/2023/05/ELSA-Stellungnahme-DGG.pdf
- [3] https://app.swaggerhub.com/apis/eclipse-edc-bot/management-api/0.7.0
- [4] https://eclipse-edc.github.io/docs/#/README
- [5] https://zenodo.org/doi/10.5281/zenodo.11104268
