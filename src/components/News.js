import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articals = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Insects find their way onto Italian plates despite resistance",
      description:
        "Pulverising crickets to make flour for food is seen by some as a threat to the Mediterranean diet.",
      url: "https://www.bbc.co.uk/news/world-europe-66022857",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg",
      publishedAt: "2023-07-08T04:42:53Z",
      content:
        "Media caption, The BBC's Sofia Bettiza visits a cricket farm near Turin, Italy\r\nIn a small room near the Alps in northern Italy, containers filled with millions of crickets are stacked on top of each… [+6967 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Brashna Kasi",
      title:
        "America doesn't really care about cricket. Can Major League Cricket change that?",
      description:
        "The new league makes its debut near Dallas on Thursday when the Texas Super Kings play the LA Knight Riders. The league's backers hope to cultivate a new generation of U.S. cricketers.",
      url: "https://www.npr.org/2023/07/13/1187445629/major-league-cricket-debut-texas-history-sport",
      urlToImage:
        "https://media.npr.org/assets/img/2023/07/13/ap23193166972710_wide-83ac6baf7108a8a2d6ef64e40e3084c753b83936-s1400-c100.jpg",
      publishedAt: "2023-07-13T16:38:41Z",
      content:
        "The Kolkata Knight Riders' Andre Russell plays a shot during Indian Premier League cricket match in Kolkata on April 29. Russell is a player on Major League Cricket's Los Angeles Knight Riders.\r\nBika… [+3576 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Nissanka century earns Sri Lanka Cricket World Cup berth - Reuters",
      description:
        "Nissanka century earns Sri Lanka Cricket World Cup berth  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L25pc3NhbmthLWNlbnR1cnktZWFybnMtc3JpLWxhbmthLWNyaWNrZXQtd29ybGQtY3VwLWJlcnRoLTIwMjMtMDctMDIv0gEA?oc=5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-07-02T13:09:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Cricket dismissal row draws in Australian and UK Prime Ministers - Reuters.com",
      description:
        "Cricket dismissal row draws in Australian and UK Prime Ministers  Reuters.com",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2NyaWNrZXQtZGlzbWlzc2FsLXJvdy1kcmF3cy1hdXN0cmFsaWFuLXVrLXByaW1lLW1pbmlzdGVycy0yMDIzLTA3LTA0L9IBAA?oc=5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-07-04T08:43:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Mihir Bose",
      title:
        "If you want to make cricket truly diverse, don't fixate on bat and ball – focus on what happens in the tea break | Mihir Bose",
      description:
        "There is a social element to the game that could be an opportunity, but right now heightens the sense of othering and exclusionWhat do they know of cricket who only cricket know, asked the great CLR James. He talked of cricket as a prism through which we migh…",
      url: "https://www.theguardian.com/commentisfree/2023/jun/30/cricket-bat-ball-game-exclusion",
      urlToImage:
        "https://i.guim.co.uk/img/media/7719a4297270a63f75a8abce3b4cca2a5b5686d4/309_520_3691_2214/master/3691.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom,left&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=4b94f2aa1a93905fb2087944648c2b67",
      publishedAt: "2023-06-30T05:00:34Z",
      content:
        "What do they know of cricket who only cricket know, asked the great CLR James. He talked of cricket as a prism through which we might view society, and that remains as true now as in 1963, when Beyon… [+6213 chars]",
    },
  ];

  constructor(){
    super();
    console.log("This is constructour");

    this.state = {
      articals:this.articals,
      loadding:false
    }
  }
  render(props) {
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4">
              <NewsItem
                title="best shorts"
                description="this is best short which is heat by the great batsman..."
                imgurl="https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg"
                newsurl="TODO"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="best shorts"
                description="this is best short which is heat by the great batsman..."
                imgurl="https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="best shorts"
                description="this is best short which is heat by the great batsman..."
                imgurl="https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
