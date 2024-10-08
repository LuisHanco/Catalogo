let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});



// Array de productos
const products = [
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461856629_122093885402564075_6079180204165511480_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeErpS-Mju6RiGL49mJAKSbyxyL8GCOYMAjHIvwYI5gwCHC3OnZDWIxiKKNbIdt_rxZYTl1ifUbW4h6ry-gw45kD&_nc_ohc=2uLjXlvxSgMQ7kNvgGNK5Xp&_nc_ht=scontent.faqp3-1.fna&_nc_gid=A7slH8hY1pgJFGZpEv15ER_&oh=00_AYBppfdJnwcA_7-LssGzSkCn78aK8NNUi_Dl1wgX2QkRhA&oe=670292FB"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461716034_122093885270564075_8315657735509082325_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFXloZnad0PK1i07UZsOQet_vob9OwDSw_--hv07ANLDwjX38HsEDNCFN2L4CNcA2HRNiem8Up_qiAL3v0ZCGn4&_nc_ohc=xumGk-4wHIYQ7kNvgFvremA&_nc_ht=scontent.faqp3-1.fna&oh=00_AYD1D2YE9r7J4w2qcaZdOwH24ajTj1wRZXlQeoRHZfPNmg&oe=670282F6"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461664387_122093885240564075_2743074430978149424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHDf4On8uBuFGpe6_q60LC5CCnmr15k_JgIKeavXmT8mPU4mNw0V2MocW1wPZ81eKvTsmgKIyOz6V4-HzDpR4Yz&_nc_ohc=n5uBC7WxYlsQ7kNvgG2_m20&_nc_ht=scontent.faqp3-1.fna&_nc_gid=ApjMp1EFX0NLw2OL51hHftq&oh=00_AYCINykfxkjSzcS9dH1bOgXGOWZJR33Tzx7mXuSerpYSoA&oe=67026E7D"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461734926_122093885204564075_2656208757221576578_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG_bXzikgp5u1xG76kJiTlgND4P3_NNd_g0Pg_f8013-Pk4fPGJQqdESmC3fVmGGDCw-Vy-wuLuPRiyE5c3jmYn&_nc_ohc=06mJjp3HxmkQ7kNvgHzlDH7&_nc_ht=scontent.faqp3-1.fna&_nc_gid=AHygpC0N9mrro_u0wMs92ER&oh=00_AYBuwPWwFdVI3AGjuEHb824JRSMKvtCPaXJ-fhZ8iJYEkg&oe=6702619A"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461582750_122093884778564075_7400086416927048161_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFfRNn0Lk0-4IV0uz_URr4q3AFlzFV6Lx3cAWXMVXovHbwy8qbMMiRO0DQrqS6sgxKjgSfBzyjtYD9EIUq0nuPV&_nc_ohc=Tj15NmXxogwQ7kNvgHI_2wm&_nc_ht=scontent.faqp3-1.fna&_nc_gid=A5qdWdm1XJ4XvdCdw_2rMD7&oh=00_AYDn_9YOkcZIaP8k9Bf1DamGvBfM84NvmYS-qokWI4xOCg&oe=67027E03"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461766954_122093884724564075_920408901025250711_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEYGcYlZQERGm_JDkUvYoa0oEt32aM5m1igS3fZozmbWMkBk7OVANB35OuYsTXRD5qmbiY0Iy0dobnnuzVKgjnA&_nc_ohc=3VY74dEqWlgQ7kNvgHV8EfW&_nc_ht=scontent.faqp3-1.fna&_nc_gid=AI6NibIReoqw4zkAfq_CtOz&oh=00_AYB5b_MVRzHCzpTF1XHrR_SyeDdsWZOnrXytXUeiB6hlIA&oe=67027AD0"
  },

  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461852309_122093884742564075_6411103369197522325_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHjicWkiFXUWowAFXd-9762-HmMdjIR12L4eYx2MhHXYgey3TYcLSzHKIDQ4pJlsKBD94aVDasulqMLmxurjzEj&_nc_ohc=Iet-EMZSApEQ7kNvgGWkGvd&_nc_ht=scontent.faqp3-1.fna&oh=00_AYAPwLT3agHqej6M0OZSKUiao8yJlqqy5zvh9Xr8beuKLA&oe=67026CD1"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461832012_122093815388564075_6799212290185867810_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGkpC6ys_JPw0OwSxRB5PRxeACXhRZ50Bd4AJeFFnnQF26NtNwjqQFarjHOm-YS18J2o-cN1p7s7IHIsMS0t7tp&_nc_ohc=W2-oosuGJV0Q7kNvgEbbD7x&_nc_ht=scontent.faqp3-1.fna&_nc_gid=AYiIT-gmTe2bch_tDOK3SAH&oh=00_AYCOOZqQjQrcP0ureVNMjyQNBIu5kztZynlJMfHI2IzBMg&oe=67026F10"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461868504_122093815358564075_5025126381362537014_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE3subfCurjiCw0wqz29ibwRHzK6RxrYjxEfMrpHGtiPL4PHXs0a54ytjdohRLEmM20fSe_n-iI2_Qls-oufcTb&_nc_ohc=9hlf1YIt2yQQ7kNvgH2JuRq&_nc_ht=scontent.faqp3-1.fna&_nc_gid=ACvSg7Re5Bj4JRoE3l5_zg3&oh=00_AYATxGAfCB4iPdCDx2N10qiZkrrzU7wUsVsUI28URsHfCg&oe=670267D5"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461767557_122093815340564075_1927511256005527382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH4k5vjE6hplsDM4Bw1lJRm7oX07sK9fljuhfTuwr1-WO03sX4wXYd4_6nqVTOcIoAiPuvV3db6Oefy696l0h_t&_nc_ohc=yxwmxMkN8ogQ7kNvgEtEcM2&_nc_ht=scontent.faqp3-1.fna&_nc_gid=AhjX6PZ4Th4ew-l2FpKZCWK&oh=00_AYCVvg1Txswc9zyjmpe5HoJGM_t71P9tY6nzelzr7QAFog&oe=67026162"
  },
  {
      title: "Super Coleccion",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461691935_122093815256564075_7975931693563282271_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEGm9Y3FZl8uTabRyxeRC8KhkWd2vcZqOOGRZ3a9xmo44f2klblawfvNtuhP5vn8amAXDQZUw4Kr8eR3d4KJtf1&_nc_ohc=EAEqi16QP9AQ7kNvgHXfG15&_nc_ht=scontent.faqp3-1.fna&_nc_gid=AKhwxd8gFABtNXMhjITZDdt&oh=00_AYAULcSio2BALS2XrVGOHB9TQrDMHESKB1_YADAD37J2Bg&oe=67027D82"
  },
  {
      title: "Edicion Especial",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461777429_122093815118564075_1438710100129673750_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7VkNRMSiMoeRhy278Ju25TsfwY36QyopOx_BjfpDKisVyPna_Cc17ea4Xv83YKfL5ncJAXDzeWRzUYlIOVkrt&_nc_ohc=Qvu-cE5amUcQ7kNvgGeEi_O&_nc_ht=scontent.faqp3-1.fna&_nc_gid=AjOpy7gxSWL-jymX5j_OrHJ&oh=00_AYD57QUfA2JucLDLiKNUdGJpCeu8-i0bjXk7mnZoxDzRVw&oe=6702705F"
  },

  {
      title: "Edicion Especial",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461746483_122093815094564075_9205667307446164110_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGQJorcT7l5lMbbAdRoYSLu2c5VAWJiP6vZzlUBYmI_q7DpxgFciPtfHsGRzlLSRZ3HOkg__2PxyHlZu8gJ7tO4&_nc_ohc=9nRkFgRF9SkQ7kNvgGAxRkD&_nc_ht=scontent.faqp3-1.fna&_nc_gid=A-7Bl0iBwVQPwcSUJI-nV3D&oh=00_AYAWHl6bJyL-_1vlD-c2OdfeTIRA_nop6NyFhFPmuL4k5Q&oe=670289CC"
  },

  {
      title: "Edicion Especial",
      price: "S/. 15.00",
      img: "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/461598492_122093815064564075_2262815782166593674_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEpFL5MDwVA5iS6-ji26GGyEgGfgI3mbQcSAZ-AjeZtBz9rcvo_Td3qomJkeKXW2qCyoNjwiShF3To3Fjf6Av18&_nc_ohc=r8jr484O6ooQ7kNvgGgR1eh&_nc_ht=scontent.faqp3-1.fna&_nc_gid=AxX1E5cAVR44B8XdY-IeAtu&oh=00_AYCHV0kOrkFYSWqnc-EQVg6Fq9H-csdqt3PNkt8bOoriWw&oe=6702661F"
  },

 
  // Agrega más productos aquí
];

// Función para generar productos
function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
          <img src="${product.img}" alt="${product.title}">
          <div class="product-info">
              <h4 class="product-title">${product.title}</h4>
              <p class="product-price">${product.price}</p>
               <a class="product-btn" href="https://wa.me/+51953902124?text=¡Hola!    %20🎉✨ Quiero%20hacer%20un pedido de %20${encodeURIComponent(product.title)}%20-%20  ¿Cuáles son los pasos a seguir? 🎉✨ Precio:%20${encodeURIComponent(product.price)}.%20Aquí%20está%20el%20 ✅✅✅ Producto:%20${encodeURIComponent(product.img)}" target="_blank">Pedir Ahora</a>
          
          </div>
      `;
      productList.appendChild(productDiv);
  });
}

// Llamar a la función para mostrar productos
displayProducts();



















