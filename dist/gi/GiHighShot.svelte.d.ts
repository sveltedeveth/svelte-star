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
export type GiHighShotProps = typeof __propDef.props;
export type GiHighShotEvents = typeof __propDef.events;
export type GiHighShotSlots = typeof __propDef.slots;
export default class GiHighShot extends SvelteComponentTyped<GiHighShotProps, GiHighShotEvents, GiHighShotSlots> {
}
export {};
