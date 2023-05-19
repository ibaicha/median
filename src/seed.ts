import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';


// Instantiate Prisma Client
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  // ... your Prisma Client goes here
 
  await deleteExploitation();
  await deletePermission();
  await deleteOp();
  await deleteLocalite();
  await deleteRoleUserProfile();
  

  await addRoleUserProfile();
  await addLocalite();

    
}

async function deleteExploitation() {
  console.log(' -----------DELETE EXPLOITATION -----------')
  await prisma.exploitation.deleteMany({})
  console.log(' exploitation deleted')
}

async function deletePermission() {
  console.log(' -----------DELETE PERMISSION -----------')

  await prisma.userZone.deleteMany({})
  console.log(' userZone deleted')

  await prisma.sousZone.deleteMany({})
  console.log(' sousZone deleted')

  await prisma.userLocalite.deleteMany({})
  console.log(' UserLocalite deleted')

  await prisma.userVillage.deleteMany({})
  console.log(' userVillage deleted')

  await prisma.userPointCollecte.deleteMany({})
  console.log(' userPointCollecte deleted')

}

async function deleteOp() {

  console.log(' -----------DELETE OP -----------')
  await prisma.producteur.deleteMany({})
  console.log(' producteur deleted')

  await prisma.op.deleteMany({})
  console.log(' op deleted')

  await prisma.pointCollecte.deleteMany({})
  console.log(' point collecte deleted')

  await prisma.typeOp.deleteMany({})
  console.log(' type op deleted')
}


async function deleteLocalite() {

  console.log(' -----------DELETE LOCALITES -----------')

  await prisma.village.deleteMany({})
  console.log(' village deleted')

  await prisma.localite.deleteMany({})
  console.log(' localite deleted')

  await prisma.sousZone.deleteMany({})
  console.log(' sous zone deleted')

  await prisma.zone.deleteMany({})
  console.log(' zone deleted')

  await prisma.pays.deleteMany({})
  console.log(' pays deleted')
  
}

async function deleteRoleUserProfile() {
  console.log(' -----------DELETE USER -----------')
  await prisma.profile.deleteMany({})
  console.log(' profile deleted')

  await prisma.user.deleteMany({})
  console.log(' user deleted')
  
  await prisma.role.deleteMany({})
  console.log(' role deleted')
  
}

async function addRoleUserProfile() {
  const hash  = await bcrypt.hash("123456", 10);
  console.log(' ----------- ADD ROLES -----------')
    // CREATION DES ROLES
    // ADD ROLE ADMIN
    console.log(' add role: Admin')
    const role_admin = await prisma.role.create({
      data: {
        "name": "Admin"
      },
    });
    console.log(' -----> add user: user_iba_gmx_fr')
    const user_iba_gmx_fr = await prisma.user.create({
      
      data: {
        "username": "iba",
        "email": "iba@gmx.fr",
        "password": hash,
        "roleId": role_admin.id
      },
    });
    console.log(' -----> add profile: user_iba_gmx_fr')
    const profile_iba_gmx_fr = await prisma.profile.create({
      data: {
        "firstName": "Ibrahima",
        "lastName": "CAMARA",
        "adress": "Sud, Saint-Louis",
        "userId": user_iba_gmx_fr.id
      },
    });

    // ADD ROLE AGENCE
    console.log(' add role: Agence')
    const role_agence = await prisma.role.create({
      data: {
        "name": "Agence"
      },
    });
    console.log(' -----> add user: user_jules_gmx_fr')
    const user_jules_gmx_fr = await prisma.user.create({
      data: {
        "username": "jules",
        "email": "jules@gmx.fr",
        "password": hash,
        "roleId": role_agence.id
      },
    });
    console.log(' -----> add profile: user_iba_gmx_fr')
    const profile_jules_gmx_fr = await prisma.profile.create({
      data: {
        "firstName": "Souleymane",
        "lastName": "DIAGNE",
        "adress": "Sud, Saint-Louis",
        "userId": user_jules_gmx_fr.id
      },
    });
    

    
    // ADD ROLE ZONE
    console.log(' add role: Zone')
    const role_zone = await prisma.role.create({
      data: {
        "name": "Zone"
      },
    });

    console.log(' -----> add user: user_aby_gmx_fr')
    const user_aby_gmx_fr = await prisma.user.create({
      data: {
        "username": "aby",
        "email": "aby@gmx.fr",
        "password": hash,
        "roleId": role_zone.id
      },
    });
    console.log(' -----> add profile: user_aby_gmx_fr')
    const profile_aby_gmx_fr = await prisma.profile.create({
      data: {
        "firstName": "Aby",
        "lastName": "CAMARA",
        "adress": "Sud, Saint-Louis",
        "userId": user_aby_gmx_fr.id
      },
    });
    


    // ADD ROLE SOUS ZONE
    console.log(' add role: Sous Zone')
    const role_sous_zone = await prisma.role.create({
      data: {
        "name": "Sous Zone"
      },
    });
    console.log(' -----> add user: user_babacar_gmx_fr')
    const user_babacar_gmx_fr = await prisma.user.create({
      data: {
        "username": "babacar",
        "email": "babacar@gmx.fr",
        "password": hash,
        "roleId": role_sous_zone.id
      },
    });

    console.log(' -----> add profile: user_babacar_gmx_fr')
    const profile_babacar_gmx_fr = await prisma.profile.create({
      data: {
        "firstName": "Babacar",
        "lastName": "CAMARA",
        "adress": "Sud, Saint-Louis",
        "userId": user_babacar_gmx_fr.id
      },
    });


    // ADD ROLE LOCALITE
    console.log(' -----> add role: Localite')
    const role_localite = await prisma.role.create({
      data: {
        "name": "Localite"
      },
    });
    console.log(' -----> add user: user_aicha_gmx_fr')
    const user_aicha_gmx_fr = await prisma.user.create({
      data: {
        "username": "aicha",
        "email": "aicha@gmx.fr",
        "password": hash,
        "roleId": role_localite.id
      },
    });
    console.log(' -----> add profile: user_aicha_gmx_fr')
    const profile_aicha_gmx_fr = await prisma.profile.create({
      data: {
        "firstName": "Aichatou",
        "lastName": "CAMARA",
        "adress": "Sud, Saint-Louis",
        "userId": user_aicha_gmx_fr.id
      },
    });

    // ADD ROLE POINT COLLECTE
        console.log(' -----> add role: Point Collecte')
        const role_point_collecte = await prisma.role.create({
          data: {
            "name": "Point Collecte"
          },
      });

      console.log(' -----> add user: user_mouhamed_gmx_fr')
      const user_mouhamed_gmx_fr = await prisma.user.create({
        data: {
          "username": "mouhamed",
          "email": "mouh@gmx.fr",
          "password": hash,
          "roleId": role_point_collecte.id
        },
      });
      console.log(' -----> add profile: user_mouhamed_gmx_fr')
      const profile_mouhamed_gmx_fr = await prisma.profile.create({
        data: {
          "firstName": "Mouhamed",
          "lastName": "CAMARA",
          "adress": "Sud, Saint-Louis",
          "userId": user_mouhamed_gmx_fr.id
        },
      });


 // ADD ROLE OP
 console.log(' -----> add role: Point Collecte')
 const role_op= await prisma.role.create({
   data: {
     "name": "Op"
   },
});


    console.log(' -----> add user: user_jeyli_gmx_fr')
    const user_jeyli_gmx_fr = await prisma.user.create({
      data: {
        "username": "jeyli",
        "email": "jeyli@gmx.fr",
        "password": hash,
        "roleId": role_op.id
      },
    });

    console.log(' -----> add profile: user_jeylany_gmx_fr')
    const profile_jeylany_gmx_fr = await prisma.profile.create({
      data: {
        "firstName": "Jeylany",
        "lastName": "CAMARA",
        "adress": "Sud, Saint-Louis",
        "userId": user_jeyli_gmx_fr.id
      },
    });
}

async function addLocalite(){
  console.log(' ----------- ADD PAYS -----------')
  console.log(' add pays: SENEGAL')
  const pays_senegal = await prisma.pays.create({
    data: {
      "name": "Sénégal",
      "sigle":"SEN"
    },
  });
  console.log(' -----> add zone: VFS')
    const zone_vfs = await prisma.zone.create({
      
      data: {
        "name": "VFS",
        "paysId": pays_senegal.id
      },
    });

    console.log(' ---------> add sous zone: SAINT LOUIS')
    const sous_zone_saint_louis = await prisma.sousZone.create({
      
      data: {
        "name": "SAINT LOUIS",
        "zoneId": zone_vfs.id
      },
    });

    console.log(' ---------> add localite: SAINT LOUIS')
    const localite_saint_louis = await prisma.localite.create({
      
      data: {
        "name": "SAINT LOUIS",
        "sousZoneId": sous_zone_saint_louis.id
      },
    });
    console.log(' ---------> add Point Collecte: SAINT LOUIS')
    const point_collecte_pc1_saint_louis = await prisma.pointCollecte.create({
      
      data: {
        "name": "PC1 SAINT LOUIS",
        "localiteId": localite_saint_louis.id
      },
    });

    console.log(' ----------- ADD TYPE OP -----------')
    console.log(' add op: GIE')
    const type_op_gie = await prisma.typeOp.create({
      data: {
        "name": "GIE",
      },
    });
    console.log(' add op: SV')
    const type_op_sv = await prisma.typeOp.create({
      data: {
        "name": "SV",
      },
    });

    let i = 0;
      while (i < 2) {
        console.log(' ---------> add Op: Op gie - ' + i + ' ' + point_collecte_pc1_saint_louis.name)
        await prisma.op.create({
          
          data: {
            "name": "op - gie " + i + ' ' + point_collecte_pc1_saint_louis.name,
            "typeOpId": type_op_gie.id,
            "pointCollecteId": point_collecte_pc1_saint_louis.id
          },
        });
        i++;
      }
      let k = 0;
      while (k< 2) {
        console.log(' ---------> add Op: Op - sv ' + k + ' ' + point_collecte_pc1_saint_louis.name)
        await prisma.op.create({
          
          data: {
            "name": "op - sv " + k + ' ' + point_collecte_pc1_saint_louis.name,
            "typeOpId": type_op_sv.id,
            "pointCollecteId": point_collecte_pc1_saint_louis.id
          },
        });
        k++;
      }


      console.log(' ---------> add Point Collecte: SAINT LOUIS')
      const point_collecte_pc2_saint_louis = await prisma.pointCollecte.create({
        
        data: {
          "name": "PC2 SAINT LOUIS",
          "localiteId": localite_saint_louis.id
        },
      });
      let l = 0;
      while (l < 2) {
        console.log(' ---------> add Op: Op gie - ' + l + ' ' + point_collecte_pc2_saint_louis.name)
        await prisma.op.create({
          
          data: {
            "name": "op - gie " + l + ' ' + point_collecte_pc2_saint_louis.name,
            "typeOpId": type_op_gie.id,
            "pointCollecteId": point_collecte_pc2_saint_louis.id
          },
        });
        l++;
      }
      let m = 0;
      while (m< 2) {
        console.log(' ---------> add Op: Op - sv ' + m)
        await prisma.op.create({
          
          data: {
            "name": "op - sv " + m + ' ' + point_collecte_pc2_saint_louis.name,
            "typeOpId": type_op_sv.id,
            "pointCollecteId": point_collecte_pc2_saint_louis.id
          },
        });
        m++;
      }


    
    console.log(' ---------> add localite: TILENE')
    const localite_tilene = await prisma.localite.create({
      
      data: {
        "name": "TILENE",
        "sousZoneId": sous_zone_saint_louis.id
      },
    });
    console.log(' ---------> add Point Collecte: PC1 TILENE')
    const point_collecte_pc1_tilene= await prisma.pointCollecte.create({
      
      data: {
        "name": "PC1 TILENE",
        "localiteId": localite_saint_louis.id
      },
    });
    console.log(' ---------> add Point Collecte: PC2 TILENE')
    const point_collecte_pc2_tilene = await prisma.pointCollecte.create({
      
      data: {
        "name": "PC2 TILENE",
        "localiteId": localite_saint_louis.id
      },
    });

    console.log(' ---------> add localite: PONT GENDARME')
    const localite_pont_gendarme = await prisma.localite.create({
      
      data: {
        "name": "PONT GENDARME",
        "sousZoneId": sous_zone_saint_louis.id
      },
    });

    console.log(' ---------> add localite: DEBI TIGUETTE')
    const localite_debi_tiguette = await prisma.localite.create({
      
      data: {
        "name": "DEBI TIGUETTE",
        "sousZoneId": sous_zone_saint_louis.id
      },
    });


    console.log(' ---------> add sous zone: ROSS BETHIO')
    const sous_zone_ross_bethio = await prisma.sousZone.create({
      
      data: {
        "name": "ROSS BETHIO",
        "zoneId": zone_vfs.id
      },
    });
    console.log(' ---------> add sous zone: RICHARD TOLL')
    const sous_zone_richard_toll = await prisma.sousZone.create({
      
      data: {
        "name": "RICHARD TOLL",
        "zoneId": zone_vfs.id
      },
    });

    console.log(' ---------> add sous zone: PODOR')
    const sous_zone_podor = await prisma.sousZone.create({
      
      data: {
        "name": "PODOR",
        "zoneId": zone_vfs.id
      },
    });

    console.log(' ---------> add sous zone: MATAM')
    const sous_zone_matam = await prisma.sousZone.create({
      
      data: {
        "name": "MATAM",
        "zoneId": zone_vfs.id
      },
    });



    console.log(' -----> add zone: CENTRE')
    const zone_centre = await prisma.zone.create({
      
      data: {
        "name": "CENTRE",
        "paysId": pays_senegal.id
      },
    });

    console.log(' -----> add zone: NIAYES')
    const zone_niayes = await prisma.zone.create({
      
      data: {
        "name": "NIAYES",
        "paysId": pays_senegal.id
      },
    });

    console.log(' -----> add zone: ARACHIDIER')
    const zone_arachidier = await prisma.zone.create({
      
      data: {
        "name": "ARACHIDIER",
        "paysId": pays_senegal.id
      },
    });

    console.log(' -----> add zone: SAHELIEN')
    const zone_sahelien = await prisma.zone.create({
      
      data: {
        "name": "SAHELIEN",
        "paysId": pays_senegal.id
      },
    });

    console.log(' -----> add zone: SYLVO-PASTORALE')
    const zone_sylvopastorale = await prisma.zone.create({
      
      data: {
        "name": "SYLVO-PASTORALE",
        "paysId": pays_senegal.id
      },
    });

  console.log(' add pays: COTE D\'IVOIRE')
  const pays_cote_ivoire = await prisma.pays.create({
    data: {
      "name": "COTE D'IVOIRE",
      "sigle":"CIV"
    },
  });
  console.log(' add pays: MALI')
  const pays_mali = await prisma.pays.create({
    data: {
      "name": "MALI",
      "sigle":"MAL"
    },
  });
  console.log(' add pays: MAURITANIE')
  const pays_mauritanie = await prisma.pays.create({
    data: {
      "name": "Mauritanie",
      "sigle":"MAU"
    },
  });
}

main()
  .catch((e: Error) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // Disconnect Prisma Client
    await prisma.$disconnect()
  })
