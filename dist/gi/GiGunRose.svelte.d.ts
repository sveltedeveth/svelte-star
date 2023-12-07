import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiGunRoseProps = typeof __propDef.props;
export type GiGunRoseEvents = typeof __propDef.events;
export type GiGunRoseSlots = typeof __propDef.slots;
export default class GiGunRose extends SvelteComponentTyped<GiGunRoseProps, GiGunRoseEvents, GiGunRoseSlots> {
}
export {};
