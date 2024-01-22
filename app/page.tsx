"use client";
import styles from "./page.module.css";
import { Dialog, DialogContent, DialogTrigger } from "@/Dialog/Dialog";
import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

// This is a normal Radix Dialog
const RadixDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>Content</DialogContent>
    </Dialog>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* No problem here */}
      <div className={styles.left}>
        <RadixDialog />
      </div>

      {/* The dialog doesn't close when click outside */}
      <div className={styles.right}>
        <Tldraw>
          <div className={styles.customUi}>
            <RadixDialog />
          </div>
        </Tldraw>
      </div>
    </main>
  );
}
