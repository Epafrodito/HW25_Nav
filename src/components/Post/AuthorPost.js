import { Post } from "./Post";

export function AuthorPost() {
  return (
    <div className="publication">
      <Post
        author={{
          name: "Boba Fett",
          nickname: "@bob_fet",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX5yaVOKYEGUr5Dxvvyr2PN-Ya7Fb-U4XWh8QAe0wtw70OSRFhp3hkevwt6g57_FqMSc&usqp=CAU",
        }}
        date="08 Juli"
        content="Kamino..."
        image="https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542&width=960"
        like="26"
        comment="12"
        share="4"
      />
      <Post
        author={{
          name: "Darth Vader",
          nickname: "@darth_vad",
          photo:
            "https://i.pinimg.com/736x/15/38/9c/15389c852e428bccd8179f6723a710ea.jpg",
        }}
        date="10 Juli"
        content="Death Star..."
        image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1638cee4-ddb8-4ba0-ade4-31c48258d370/dbelwot-365af841-79fd-4464-a3f4-a5ddc57b59c1.png/v1/fill/w_1024,h_576,q_80,strp/death_star_wallpaper_by_brajucaproductions_dbelwot-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMTYzOGNlZTQtZGRiOC00YmEwLWFkZTQtMzFjNDgyNThkMzcwXC9kYmVsd290LTM2NWFmODQxLTc5ZmQtNDQ2NC1hM2Y0LWE1ZGRjNTdiNTljMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GbtcpM3AJX7GYF8WOYcUju2A-3Rj90H8BRiM4A9CTtI"
        like="999"
        comment="128"
        share="246"
      />
    </div>
  );
}
