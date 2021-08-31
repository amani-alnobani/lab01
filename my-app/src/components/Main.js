import React from 'react';
import HornedBeasts from './HornedBeast';
// import data from './assest/data.JSON';


class Main extends React.Component {

    render() {
        return (
            <main>
                {/* In each instance we need to pass different information */}
                {/* Props is what is used by react to pass info from one component to another */}
                <HornedBeasts
                    title="UniWhal"
                    // title={data[0].title}
                    imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
                    description="A unicorn and a narwhal nuzzling their horns"
                    keyword="narwhal"
                    horns={1}
                />
                {/* new HornedBeats(title, description, imageUrl) */}
                <HornedBeasts

                    title='Rhino Family'
                    imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
                    description="Mother (or father) rhino with two babies"
                    keyword="rhino"
                    horns={2}
                />

                <HornedBeasts

                    title='Unicorn Head'
                    imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
                    description="Someone wearing a creepy unicorn head mask"
                    keyword="unicorn"
                    horns={1}
                />
                <HornedBeasts

                    title='Unicorn Head'
                    imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
                    description="Someone wearing a creepy unicorn head mask"
                    keyword="unicorn"
                    horns={1}
                />
                <HornedBeasts

                    title='UniLego'
                    imageUrl="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80"
                    description="Lego figurine dressed in a unicorn outfit"
                    keyword="unilego"
                    horns={1}
                />
                <HornedBeasts

                    title='Basically a unicorn'
                    imageUrl="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg"
                    description="A narwhal is basically a unicorn after all, right?"
                    keyword="narwhal"
                    horns={1}
                />
                <HornedBeasts

                    title='#truth'
                    imageUrl="https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg"
                    description="The truth behind narwhals"
                    keyword="narwhal"
                    horns={1}
                />
                <HornedBeasts

                    title='Baby Rhino'
                    imageUrl="https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg"
                    description="This is actually a figurine but it looks kinda real"
                    keyword="rhino"
                    horns={2}
                />
                <HornedBeasts

                    title='Cera'
                    imageUrl="https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003"
                    description="Three horns but still, horns. And who doesn't like The Land Before Time?"
                    keyword="triceratops"
                    horns={3}
                />
                <HornedBeasts

                    title='Narwhal costume'
                    imageUrl="https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg"
                    description="A woman wearing a blue narwhal costume"
                    keyword="narwhal"
                    horns={1}
                />
                <HornedBeasts

                    title='Rhino costume'
                    imageUrl="https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg"
                    description="Mascots have to get their costumes somewhere"
                    keyword="rhino"
                    horns={2}
                />
                <HornedBeasts

                    title='Believe'
                    imageUrl="https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg"
                    description="Someone wearing a creepy unicorn head mask"
                    keyword="unicorn"
                    horns={1}
                />
                <HornedBeasts

                    title='Markhor'
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg"
                    description="These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?"
                    keyword="markhor"
                    horns={2}
                />
                <HornedBeasts

                    title='Baby markhor'
                    imageUrl="http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi"
                    description="Even the babies are adorable"
                    keyword="markhor"
                    horns={2}
                />
                <HornedBeasts

                    title='Mouflon'
                    imageUrl="https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    description="Those horns though"
                    keyword="mouflon"
                    horns={2}
                />
                <HornedBeasts

                    title='Addax'
                    imageUrl="https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                    description="This guy is basically extinct but survives well in captivity, so they're frequently found in zoos"
                    keyword="addax"
                    horns={2}
                />
                <HornedBeasts

                    title='Baby mouflon'
                    imageUrl="https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg"
                    description="The cuteness that is a baby mouflon asleep"
                    keyword="mouflon"
                    horns={2}
                />
                <HornedBeasts

                    title="Happy Jackson's Chameleon"
                    imageUrl="https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    description="These are really common in Hawaii"
                    keyword="chameleon"
                    horns={2}
                />
                <HornedBeasts

                    title="Serious Jackson's Chameleon"
                    imageUrl="https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg"
                    description="This one is very serious."
                    keyword="chameleon"
                    horns={3}
                />
                <HornedBeasts

                    title='Horned Lizard'
                    imageUrl="https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false"
                    description="Fave food: ants"
                    keyword="lizard"
                    horns={100}
                />
                <HornedBeasts

                    title='Smaug'
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg"
                    description="Fan illustration of Smaug from 'The Hobbit'"
                    keyword="dragon"
                    horns={100}
                />
            </main>
        );
    }
}
export default Main;