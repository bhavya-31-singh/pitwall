# Pitwall 🏁
A minimal F1-style weekly study tracker. Pick your driver, time your stints, race your friends.

## Download
Grab the `.dmg` (Mac) or `.exe` (Windows) from **Releases**.
- Mac (unsigned): right-click the app → Open the first time.
- Windows: "More info" → "Run anyway" if SmartScreen complains.

## Run / build yourself
    npm install
    npm start          # run
    npm run dist       # build installer

## Publish a release (free)
Push the repo to GitHub, then:

    git tag v0.1.0 && git push --tags

The Action builds the Mac and Windows installers and attaches them to a Release.

## Paddock groups (free sync, optional)
Groups sync through a free Supabase project. Create one, run this in its SQL editor:

    create table laps(code text, member text, week text, name text, driver int,
      shell text, stripe text, secs int, primary key(code,member,week));
    alter table laps enable row level security;
    create policy "open" on laps for all using (true) with check (true);

Then in Pitwall → Garage paste the project URL and anon key. Friends use the same
URL/key and join with the same paddock code. Without sync, everything works solo.
