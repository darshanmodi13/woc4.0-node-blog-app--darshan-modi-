import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogPage = () => {
  let params = useParams();
  return (
    <>
      <div className="mt-4 ml-2">
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>
            <b>Lorem Ipsum</b>
          </h2>
          <img
            src={`https://picsum.photos/id/${params.post_id}/650/450`}
            alt="blog"
            className="mt-4"
          />
        </div>
        <div className={`mt-4 ml-2`}>
          <h5>
            <b>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </b>
          </h5>
        </div>
        <div className={`mt-2 ml-2`} style={{ fontSize: "0.8rem" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            lectus quis velit egestas auctor. Mauris at blandit metus, eget
            mollis nulla. Cras condimentum mi magna, in sollicitudin tellus
            commodo nec. Pellentesque placerat ac arcu a egestas. Integer
            finibus orci sit amet nibh cursus, aliquam sodales ex tempus. Morbi
            tempus porta mi ut ornare. Curabitur ex urna, tristique varius
            ultrices nec, blandit ut enim. Integer mollis euismod porta.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec ligula ligula, sollicitudin id sagittis
            a, facilisis non enim. Sed vehicula tellus at augue aliquet
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut sollicitudin maximus lacus, a pellentesque ex cursus at. Donec
            non arcu nec nunc finibus bibendum non vitae tellus. Ut ultrices
            odio vitae justo volutpat, sit amet rhoncus enim eleifend. Etiam
            faucibus lacus efficitur, volutpat diam sed, ullamcorper augue. In
            elementum mollis turpis, ac sagittis ipsum tempus quis. Duis iaculis
            consequat nulla a convallis. Aenean accumsan massa vitae eleifend
            aliquet. Duis ut sem posuere tortor pulvinar vestibulum et euismod
            tortor. Ut varius libero eu vehicula eleifend. Praesent eleifend,
            enim nec ultricies interdum, orci dui mattis neque, vel fringilla
            nunc massa at felis. Vestibulum tempor ultrices ex a tempor. Aliquam
            interdum vitae augue a finibus. Aliquam efficitur nec velit et
            porttitor. Integer finibus, turpis sit amet faucibus pretium, sem
            ipsum vulputate nulla, eu ornare nunc orci ornare tellus. Curabitur
            pharetra sagittis egestas. Duis sollicitudin vulputate cursus.
            Integer congue, lacus sed rutrum vestibulum, tellus tortor ultricies
            tortor, eu commodo nulla erat eget leo. Suspendisse placerat nibh
            eget quam eleifend ornare. In sed purus placerat, aliquet urna et,
            hendrerit turpis. Aenean eu tellus vel arcu pretium aliquet.
            Pellentesque tincidunt diam et pharetra gravida. Curabitur quis
            metus blandit, placerat sapien ut, porttitor massa. Suspendisse
            mattis ante id enim blandit, in luctus sem tempus. Vivamus at
            rhoncus est, et iaculis enim. Duis dignissim nec augue a
            scelerisque. Pellentesque at ex a lorem venenatis euismod. Etiam
            vehicula est ipsum, interdum pulvinar urna lacinia vel. Quisque at
            aliquet justo. Maecenas sit amet neque augue. Integer scelerisque
            massa id fringilla hendrerit. Suspendisse et convallis lacus.
            Pellentesque quis ullamcorper erat, vitae sagittis sapien. Phasellus
            eget mi massa. Vestibulum scelerisque nunc vitae turpis ullamcorper
            venenatis ac et libero. Aenean mollis sapien ut semper aliquam.
            Curabitur nisl ante, imperdiet ut faucibus sed, lobortis a quam.
            Maecenas lacinia vel libero vitae posuere. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Pellentesque viverra
            placerat viverra. Vestibulum at malesuada metus. Nam tincidunt
            porttitor nisi at luctus. Curabitur sed arcu sagittis, porttitor
            urna ut, tincidunt massa. Vivamus a ipsum ac elit imperdiet euismod.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Cras gravida turpis
            eget magna malesuada vestibulum. Morbi in sapien est. Phasellus
            ullamcorper suscipit vulputate. Duis orci sapien, finibus at augue
            ac, consequat mattis tellus. In tristique efficitur venenatis. Sed
            vel orci in libero blandit imperdiet. Pellentesque tellus metus,
            cursus eu laoreet dignissim, lacinia a tellus. Quisque diam enim,
            consectetur vel consequat sit amet, malesuada eu erat. Ut eu sem
            vitae enim feugiat consectetur. Maecenas non magna in erat sodales
            maximus. Nullam volutpat magna at erat auctor, at pellentesque urna
            sodales. Quisque in massa viverra, aliquet nisi tincidunt, feugiat
            leo. Praesent fermentum pharetra blandit. Vivamus felis nisl,
            dignissim at arcu a, commodo condimentum ante. Sed ultricies sit
            amet leo interdum ornare. Nulla quis iaculis enim, sed bibendum
            enim. In nulla quam, accumsan id tempor luctus, congue sit amet
            lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Integer ac aliquet libero. Integer rutrum, felis ut posuere auctor,
            urna odio viverra turpis, quis bibendum turpis velit et mauris. Nam
            tempor vestibulum tortor, in laoreet nisi placerat id. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; In cursus egestas justo, non bibendum dui lacinia
            sed. Duis congue nisi quis cursus hendrerit. Ut maximus volutpat
            sem, auctor maximus lacus consectetur ac. Sed dapibus magna sed
            felis scelerisque, eu feugiat sapien faucibus. Sed porta elementum
            interdum. Ut sit amet ex euismod, maximus purus vel, euismod purus.
            Praesent accumsan diam nunc, a malesuada lectus accumsan a. Sed
            ultricies lectus eu nunc egestas, sit amet condimentum ex maximus.
            Nullam erat libero, sollicitudin et enim a, rhoncus mattis eros.
            Fusce eu ullamcorper eros, id finibus nisl. Curabitur malesuada
            metus libero, in ornare massa egestas id. Aliquam aliquet est in
            sodales suscipit. Suspendisse ullamcorper pretium efficitur.
            Phasellus non mi tempor, molestie enim eu, ultrices nisl. Integer id
            risus porta, consectetur sem ut, efficitur nibh. Aenean fringilla
            ante quis pellentesque mollis. Sed elementum congue purus vel
            lobortis. Nunc molestie faucibus vestibulum. Fusce lobortis mi in
            dictum vestibulum. Proin volutpat lectus vitae ligula fermentum
            sodales. Quisque in urna vestibulum, vulputate arcu vitae,
            sollicitudin velit. Nulla facilisi. Praesent a pretium magna, in
            interdum lectus. Phasellus facilisis tortor id euismod lobortis.
            Quisque nulla eros, fermentum scelerisque dictum sit amet, varius ut
            nibh. Nunc vitae justo sit amet magna convallis cursus quis nec
            magna. Vivamus in lobortis odio. Phasellus facilisis sit amet lectus
            non porttitor. Mauris dui elit, cursus eu diam a, consectetur
            malesuada tortor. Quisque sit amet sem eget sem venenatis vehicula.
            Phasellus sit amet fringilla arcu. Curabitur sit amet velit et est
            condimentum pretium hendrerit sit amet lorem. Nulla at nulla
            dapibus, egestas libero sit amet, scelerisque orci. Nam egestas
            libero justo, id consectetur ante vulputate non. Nam in arcu rutrum,
            lobortis tortor sit amet, ultricies dolor. Donec mollis, neque quis
            tincidunt maximus, eros erat auctor libero, eu euismod velit sapien
            non neque. Phasellus sed massa in sem varius cursus et ac lorem.
            Etiam mollis volutpat orci id pulvinar. Ut sit amet accumsan nibh.
            Donec consectetur tortor eu ultricies gravida. Sed sollicitudin
            massa vitae lacus malesuada, id maximus orci scelerisque. Nulla
            vehicula vel erat id volutpat. Aenean sed odio at quam facilisis
            pharetra. Proin luctus in felis sed porttitor. Nulla blandit nunc
            sodales, pretium turpis id, facilisis nunc. Mauris a quam egestas,
            porta odio tincidunt, scelerisque ligula. Morbi consequat posuere
            hendrerit. Morbi eu metus lectus. Nunc iaculis odio at tellus
            convallis varius. Vivamus ut nunc sollicitudin, rutrum sapien eu,
            lacinia ligula. Phasellus vitae mauris sed leo venenatis fringilla
            sed in leo. Cras posuere, augue at suscipit blandit, diam libero
            egestas ante, et mattis erat leo at ante. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed imperdiet lorem tortor, id porta lectus dapibus id.
            Etiam id ex quis nulla convallis suscipit. Nulla ut magna sed dolor
            ornare varius vitae ac sem. Nunc aliquet accumsan orci id ultricies.
            Phasellus a nulla porttitor, fermentum felis ac, maximus nisi. Nulla
            vestibulum congue facilisis. In hac habitasse platea dictumst.
            Mauris eleifend iaculis sem, a posuere purus blandit et. Nam
            ullamcorper lacinia ipsum at condimentum. Donec aliquam tempor
            auctor. Maecenas a quam tortor. Donec ante urna, laoreet ac varius
            eget, elementum non sapien. Suspendisse finibus fringilla nulla eget
            facilisis. Quisque vulputate magna in urna pharetra fermentum. Etiam
            lacinia lectus sed suscipit lacinia. Nulla ac arcu neque. Vestibulum
            euismod augue faucibus, aliquam odio ac, rutrum purus. Cras
            consectetur eros purus, ut rutrum lectus vulputate eget. Curabitur
            nec dui egestas, fermentum leo venenatis, tempus leo. Vivamus
            venenatis commodo massa, quis placerat sem condimentum eget. Aliquam
            faucibus a ligula at blandit. Etiam at orci lorem. Donec nec
            pharetra nisl, in facilisis augue. Morbi et bibendum urna. Donec
            egestas dui mattis porttitor varius. Praesent vel vehicula tellus.
            Nunc fermentum at dui a volutpat. Proin nec metus ut felis convallis
            tempor. Sed egestas lobortis quam a consequat. Fusce nunc nunc,
            dictum vel imperdiet id, ultricies ut lorem. Vestibulum nec est a
            enim rhoncus commodo. Donec sed tincidunt velit, in sollicitudin
            lectus. Nam nisi turpis, pellentesque vel scelerisque posuere,
            interdum eget justo. Nulla scelerisque feugiat massa, in faucibus
            neque suscipit a. Fusce quis tempor erat, eu accumsan sem. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Etiam tristique nunc et tellus feugiat feugiat.
            Fusce consequat venenatis erat iaculis ullamcorper. Integer ac nisi
            at risus finibus consectetur sed in nulla. Aenean eu augue ut magna
            dictum gravida vitae in quam. Praesent molestie nunc massa, accumsan
            gravida quam lacinia a. Cras maximus diam quis dui laoreet, nec
            iaculis tortor tristique. Nullam ac est scelerisque, commodo mauris
            sed, elementum erat. Nullam auctor ipsum sit amet faucibus
            tincidunt. Vivamus ultricies volutpat fermentum. Pellentesque
            sollicitudin ante in lacus placerat, porta accumsan lacus
            ullamcorper. Praesent sit amet sollicitudin urna, a ultrices tortor.
            Nulla facilisi. Aliquam viverra massa sit amet sem consequat, sed
            interdum diam tristique. Vestibulum rhoncus tincidunt mi aliquet
            rutrum. Donec sollicitudin nulla et mi dignissim mattis. In luctus
            maximus augue, ullamcorper venenatis neque volutpat vel. In
            ullamcorper a ante sit amet sagittis. Morbi posuere vehicula dui.
            Etiam fringilla, augue sed rutrum tincidunt, nisl libero varius
            ligula, quis mattis augue mi nec magna. Donec facilisis egestas
            nisl, id maximus nunc tempus at. Proin sem odio, pretium id quam
            sed, rutrum aliquam massa. Aliquam erat volutpat. Cras vehicula in
            diam et lobortis. Sed sed consequat nisl.
          </p>
        </div>
        <div>
          <p className="ml-2">
            <span style={{ float: "left" }}>12/1/2022</span>
            <span style={{ float: "right" }}>
              Blog By <span style={{ cursor: "pointer" }}>@john_dev</span>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
