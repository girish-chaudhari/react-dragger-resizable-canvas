import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CanvasWindow } from "../";
// import CanvasWindow from '@gdev0007/react-dragger-resizable';

function App() {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  const LOREM_CONETNT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies `

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>open Dragger</button>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <input type="text" />
        <CanvasWindow
        // isResizable={false}
          isOpen={open}
          onClose={setOpen}
          title={LOREM_CONETNT}
          isPortalDisabled={false}
          defaultSize={{ width: 800, height: 400 }}
          children={<div>Canvas Window Content

            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat delectus totam laborum atque expedita consequatur officiis nostrum eveniet id libero iusto quaerat sequi voluptates illum, ipsum eligendi doloremque quo quasi.

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi nihil minima reiciendis qui nulla eligendi necessitatibus sit consectetur recusandae, doloribus culpa repellat quibusdam similique omnis eaque ipsa enim, impedit atque, consequatur ducimus velit? Excepturi praesentium rem, fugiat dignissimos sapiente atque blanditiis ut sit nemo similique voluptatem optio cum laboriosam nulla voluptate, molestiae recusandae dolorem earum! Minima tempora harum accusantium velit, provident facilis voluptas asperiores quo maxime praesentium veniam esse dolor architecto aspernatur placeat ut cupiditate illo est tenetur, reiciendis blanditiis, officia eveniet quidem necessitatibus! Eos deserunt nobis assumenda consequatur necessitatibus, itaque nostrum, quos culpa, amet cum eum. Deleniti incidunt amet laudantium qui voluptate placeat adipisci autem accusamus facilis aliquid quae in pariatur id ratione nam unde, ut officia quidem quas sint nemo nulla voluptatem saepe! Fugit fuga enim, repellat quos voluptate laboriosam provident eaque pariatur, suscipit amet, et fugiat! Harum eaque sint, voluptatibus recusandae voluptatum quia sunt adipisci doloribus aut repellendus aliquid dolor eius velit tempora doloremque omnis? Provident veritatis vero a nemo nihil amet debitis eum odit voluptatum magni perspiciatis, dolorum accusamus fugiat aliquid architecto libero ut reiciendis cum soluta quisquam totam excepturi. Quia consequuntur corrupti mollitia esse, exercitationem veniam quis atque temporibus ab? Quaerat dolorum, numquam quo officia cumque facilis ipsam fugit consequuntur unde eligendi reiciendis nobis repellendus ipsum voluptatibus perspiciatis error veniam quasi eveniet fugiat doloremque facere neque voluptate corrupti magni! Perspiciatis cupiditate libero amet odit doloremque nobis dolores mollitia sequi facere veritatis accusamus omnis officiis ipsam hic reprehenderit, quis culpa perferendis repellendus quia placeat assumenda! Laudantium inventore ullam, illum pariatur magnam quod ab officia modi quia rerum minima molestiae ex neque harum voluptate, accusantium doloribus sequi laborum ducimus? Fugit quos officia voluptas iusto excepturi harum adipisci itaque enim impedit laudantium ut voluptatum eveniet exercitationem quasi mollitia, nisi facilis animi temporibus. Aperiam porro in aliquam similique et nihil corporis, molestias vero hic voluptate tempora optio animi at asperiores praesentium possimus sint rem veniam beatae quis enim. Odit, iste. Similique quas eveniet unde numquam sapiente neque iste. Assumenda quidem exercitationem vel iure hic voluptas deleniti nam natus asperiores ea dolor est tempora, officiis harum et corrupti neque laudantium sunt? Amet ipsam rerum obcaecati odio totam sapiente perferendis officia ut molestias earum nemo, temporibus praesentium tenetur distinctio! Quaerat, libero unde molestiae aspernatur necessitatibus excepturi numquam assumenda nostrum. Similique accusamus est dicta voluptatum eveniet amet culpa magni tempore dolore, neque temporibus velit, doloremque incidunt vitae molestiae odio quas obcaecati sint blanditiis saepe at placeat magnam reiciendis. Laboriosam alias corrupti ratione ea nostrum, pariatur iure, sapiente nulla quibusdam perferendis nesciunt quas? Nisi suscipit odit, tenetur esse optio inventore nemo reiciendis eius quia accusantium quod aspernatur sunt reprehenderit quidem incidunt exercitationem eligendi dolorum animi amet consectetur commodi in magni totam? Alias perspiciatis maxime facilis iste vel! Suscipit doloremque eius quaerat mollitia eveniet iusto amet recusandae dolores odio itaque? Possimus, sint architecto enim perspiciatis nesciunt tempora recusandae dolores explicabo nobis? Incidunt nostrum harum ad iusto voluptatum. Aspernatur dolorem saepe culpa corporis beatae, tenetur exercitationem architecto illum dolores reiciendis porro nam nobis molestias laboriosam molestiae maiores. Nobis ullam quam commodi dicta debitis, omnis dolores fuga officia ratione dolor impedit culpa non a nam nisi ex consequuntur iusto consequatur. Consequuntur consectetur quis eos, quaerat rem magni tempore est quisquam autem. Impedit eos facere possimus itaque aliquam minima illum, magni enim nulla quasi vitae? Iusto dolor voluptatibus unde nemo sit praesentium quibusdam ducimus est exercitationem! Adipisci ducimus aperiam iste consequuntur enim aspernatur nam rem magni. Iusto odio voluptates explicabo a repellendus. Aut, quos blanditiis. Debitis nesciunt cupiditate inventore dolores aperiam quas saepe sapiente dolor. Voluptas necessitatibus velit ipsam incidunt minima ex aut delectus sunt! Modi, ipsa expedita quisquam dolorem natus dignissimos quia eaque distinctio amet aut placeat? Molestiae repellat voluptatibus magni incidunt dignissimos maiores. Nostrum non est consequatur, dolor odit unde, alias repudiandae culpa a architecto, numquam aliquam cum quibusdam veritatis? Optio quis repudiandae fuga unde, doloremque non amet aut quidem accusamus earum, sit fugit quia iste libero? Esse excepturi corrupti ad necessitatibus, quas, laborum eius voluptates quidem enim ipsum asperiores corporis at vero atque perferendis animi id hic, nisi dignissimos blanditiis quod vitae reiciendis ipsa. Sint pariatur quia eum. Ad quis modi voluptate architecto odio, inventore amet vel maiores suscipit debitis repellendus blanditiis distinctio ipsam delectus autem sint natus magni odit quo ratione. Non repudiandae debitis consequatur fugiat dolor sit aut itaque rem asperiores similique dolore doloribus ea vel eligendi iure praesentium minima iusto veritatis, mollitia doloremque minus. Error voluptates eius facilis nihil accusamus, animi, beatae quis deserunt iusto quos voluptate quae voluptatibus fugit tenetur ad, magnam dolorum distinctio quidem consequatur cumque debitis ipsam voluptatum. Ex iusto ipsa officia sequi? Cum, soluta reiciendis vitae maxime, cumque quasi unde incidunt saepe tempora officiis atque porro quisquam sequi reprehenderit, voluptate voluptatum accusamus aspernatur itaque aperiam tempore praesentium. Corporis dicta sed debitis laboriosam ipsa aperiam. Sapiente aperiam, distinctio temporibus quibusdam officiis eos non officia voluptatibus reprehenderit, consequatur fuga iusto ab ipsa obcaecati perspiciatis illum explicabo voluptatum? Repellendus esse id itaque officia illum provident optio mollitia maxime, fugit iure, a magni, sequi autem saepe possimus tempora! Corporis ipsum, autem ex officia dolor vero eligendi voluptates fuga culpa accusamus, dicta assumenda enim veritatis est earum in pariatur expedita corrupti eveniet? Autem architecto reprehenderit iusto. Pariatur, totam corporis. Eaque nam hic sunt recusandae quasi quaerat cupiditate quidem, odit laboriosam in eveniet fugiat quia, corporis illum error necessitatibus reprehenderit facilis reiciendis voluptatum saepe aliquam, libero deleniti sit? Accusamus repudiandae aliquam ex, doloribus quibusdam ullam beatae illo earum temporibus maxime in non sit eligendi perspiciatis facilis neque exercitationem reiciendis molestias cum rem ducimus quod laudantium. Accusantium animi in aut culpa ut voluptatem atque eveniet ad, fugiat quos qui optio aliquid pariatur at distinctio maxime, saepe eos corporis tempora natus tempore voluptates? Quis deserunt reiciendis architecto id neque placeat, minima voluptate eveniet exercitationem laboriosam tempore ullam saepe quae maiores enim ipsam nulla odio nemo nobis ab corrupti harum. Maxime, quod deleniti enim veniam totam suscipit reprehenderit consectetur quo rem eligendi accusantium magnam nostrum sit nemo? Commodi error doloribus quasi suscipit harum recusandae enim.
            </div>
          </div>}
          footer={<div>Canvas Window Footer</div>}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
